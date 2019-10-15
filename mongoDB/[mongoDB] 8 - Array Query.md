#### 배열 연산자

------

> 배열 연산자의 종류와 설명은 다음과 같다.

| Operator   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| $all       | 순서와 상관 없이 배열 안의 요소가 모두 포함되면 선택한다.    |
| $elemMatch | 조건들을 모두 충족하는 배열 속 요소를 가진 Document를 선택한다. |
| $size      | 특정 크기의 배열을 갖고 있는 Document를 선택한다.            |

> 위 연산자들의 활용 예시를 보기 이전에 먼저 배열이 find 쿼리에서 어떻게 인식되는지 확인해보자. 배열은 배열 그 자체로 인식 되기보다는 순서가 유의미한 값의 집합으로 인식된다. 따라서 아래와 같이 find 쿼리를 보낼 경우 다음과 같은 결과들이 출력될 것으로 예상할 수 있다.

```
> db.inventory.find({tags:"school"})

tags: ["school", "bag", "book"]
tags: ["appliance", "school", "headphone"]
```



##### $all

> 배열 안의 모든 요소를 포함하는 경우에만 선택한다. 사용법은 다음과 같다.

```
{ <field>: { $all: [ <value1>, <value2>, ... ] } }
```

> 사용 예시 및 결과는 다음과 같다.

```
> db.articles.find( { tags: { $all: ['school', 'book'] } } )

tags: ["school", "bag", "book"]
```

> $all은 배열의 각 원소를 모두 포함하는지를 판단할 때 사용하기에 유용한데, 그 이유는 다음과 같다. 다음의 쿼리를 보자.

```
> db.inventory.find({status: ["C", "D"]})
```

> 만약 status가 "C", "D"를 모두 포함하는 레코드를 조회하기 위해 위와 같은 쿼리를 날린다고 가정하자. 위의 쿼리를 통해 조회되는 레코드는 다음과 같다.

```
{status: ["C", "D"]}
```

> 반면 아래와 같은 레코드는 조회되지 않는다.

```
{status: ["D", "C"]}
```

> 이는 "C", "D"의 포함 여부 뿐만이 아니라, 그들의 순서 또한 중요하기 때문이다. 만약 순서는 무시하고 포함 여부만을 파악하고 싶다면 $all을 사용하면 된다.

```
> db.inventory.find({status: {$all: ["C", "D"]}})
```



##### $all, $in과 $and, $or

> $all은 $and를 활용하여, $in은 $or를 활용하여 다음과 같이 표현할 수 있다.

> ##### $all > $and

```
{<field> : {$all : [<value1>, <value2>, ... ]}}
=
{$and: [{<field>: <value1>}, {<field>: <value2>}, ... ]}
```

> ##### $in > $or

```
{ <field> : {$in : [<value1>, <value2>, ... ]}}
=
{$or: [{<field>: <value1>}, {<field>: <value2>}, ... ]}
```



##### $elemMatch

> elemMatch는 기본적으로 배열 형태의 값(여러 개의 값)을 갖는 필드만 탐색한다. elemMatch에 작성된 모든 쿼리를 만족하는 요소가 배열 안에 있다면 해당 Document를 가져온다.
>
> 사용법은 다음과 같다.

```
{<field>: {$elemMatch: {<query1>, <query2>, ...}}}
```

> 활용 예시는 다음과 같다.

```
> db.scores.find({results: {$elemMatch: {$gte: 80, $lt: 85}}})

results: [82, 85, 88]
```

> 위의 예시에서는 82가 모든 쿼리를 만족하므로 82의 값을 갖는 Document가 선택되는 것을 확인할 수 있다. elemMatch 연산자를 활용하면 쿼리 안에 쿼리를 넣어서 사용이 가능하다. 
>
> 이해를 돕기 위한 또 다른 예시는 다음과 같다.

```
> db.survey.find({results: {$elemMatch: {product: "xyz", score: {$gte: 8}}}})

results: [{"product": "abc", "score": 7}, {"product": "xyz", "score": 8}]
```

> 위의 예시에서는 두 번째 요소가 모든 쿼리를 만족하므로 해당 Document가 선택되는 것을 확인할 수 있다.



##### $size

> 특정 크기의 배열을 갖고 있는 Document를 선택한다.
>
> 사용법은 다음과 같다. 예시의 k가 배열의 크기를 의미한다.

```
{<field>: {$size: k}}
```

> 활용 예시는 다음과 같다.

```
> db.scores.find({results: {$size: 3}})

results: [1, 2, 3]
```

> 크기가 3인 배열을 값으로 갖는 Document가 선택되는 것을 확인할 수 있다.



##### 배열과 비배열의 차이

> find 쿼리의 대상이 되는 value가 배열인 경우 항상 배열 내 원소의 순서도 의미를 갖는다는 점에 유의해야 한다. 다음의 예시를 보자.

```
{item: {name: "broom", id: 1}}
{item: [{name: "broom", id: 1}]}
```

> 위 예시의 두 쿼리는 다른 의미를 갖는다. 먼저 첫 번째 쿼리의 의미는 다음과 같다.

```
> db.inventory.find({size: {$elemMatch: {name: "broom", id: "1"}}})
```

> 첫 번째 쿼리는 `{name: "broom", id: "1"}`라는 값을 갖고 있는 레코드를 조회한다. 그런데 두 번째 쿼리의 의미는 다음과 같다.

```
> db.inventory.find({"size.0": {name:"broom", id: 1}})
```

> `size.0`에 주목하자. 두 번째 쿼리는 배열의 첫 번째 요소가 `{name:"broom", id: 1}`인 레코드를 조회한다. 즉, 원소의 값 뿐만이 아니라 순서도 일치하는 레코드만 조회한다.

