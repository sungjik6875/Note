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



