#### Aggregation Framework Pipeline

------

> 집합 파이프라인이란 데이터베이스로부터 원하는 데이터를 가공하여 출력받는 방법이다. 컴퓨터 과학에서 파이프라인은 한 데이터 처리 단계의 출력이 다음 단계의 입력으로 연결되는 형태의 구조를 의미한다.
>
> 참고할 이미지는 다음과 같다.

![example_1](./image/mongodb_10_1.png)



##### aggregate

> 파이프라인을 구성할 때 사용하는 함수이다. 사용 형식은 다음과 같다.

```
> db.collection.aggregate(
	<pipeline>, <options>
)
```

> 위와 같은 형식으로 쿼리를 작성하고, 결과로는 document들이 출력된다. aggregate 함수에 사용되는 파라미터의 종류와 의미는 다음과 같다.

| Parameter | Required / Optional | Type     |
| --------- | ------------------- | -------- |
| pipeline  | Required            | document |
| options   | Optional            | document |
| Documents |                     | cursor   |

> ##### pipeline
>
> 데이터를 모으는 방법이나 선택하는 조건에 대해 기술한다.

> ##### options
>
> 여러 상황에 대한 설정을 기술한다.

> ##### Documents
>
> 데이터베이스 상의 Document cursor를 의미한다.



##### $match

> $match는 기술한 쿼리에 해당하는 문서만 선택한다. 사용 형식은 다음과 같다.

```
{$match: {<query>}}
```

> 파이프라인의 첫 스테이지에 사용하면 $match는 find나 findOne 함수와 같은 역할을 한다.



##### $group

> $group은` _id` 필드에 설정한 값을 기준으로 그룹화를 진행한다. 그리고 임의로 정의한 필드에 그룹화의 대상인 문서들의 값을 참조하고, 이를 토대로 계산한 값을 필드의 값으로 정의할 수 있다.  사용 형식은 다음과 같다.

```
{$group: 
	{
        _id: <expression>, 
        <field1>: {<accumulator1> : <expression1>},
        <field2>: {<accumulator2> : <expression2>},
        ...
	}
}
```

> accumulator는 계산시에 사용하는 연산자로 종류와 의미는 다음과 같다.

| Accumulator | Description                           |
| ----------- | ------------------------------------- |
| $sum        | 합                                    |
| $avg        | 평균                                  |
| $first      | 첫번째                                |
| $last       | 마지막                                |
| $max        | 최대값                                |
| $min        | 최소값                                |
| $push       | 배열화                                |
| $addToSet   | 값의 유일성(unique)이 보장되는 배열화 |

> expression에는 필드, 연산자 등 다양한 형태의 값을 사용할 수 있다. 만약 문서의 필드를 사용하고자 할 때에는 `$field_name`의 형식을 사용한다. 



##### 활용 예시

> ##### $match, $group, $sum을 활용한 예시
>
> 참고할 이미지는 다음과 같다.

![example_2](./image/mongodb_10_2.png)

> 위 이미지에 대한 설명은 다음과 같다. `orders`라는 컬렉션에서 `status` 필드의 값이 A인 문서만을 추출한다. 이 단계에서 사용하는 쿼리는 다음과 같다.

```
{$match: {status: "A"}}
```

> $match는 해당 조건을 충족하는 문서만을 선별할 때 사용한다.
>
> 이제 선별된 문서들을 `cust_id`를 기준으로 그룹화 한 후, 그룹별 `amount` 필드의 합계를 구한다. 이 단계에서 사용하는 쿼리는 다음과 같다.

```
{$group: {_id: "$cust_id", total: {$sum: "$amount"}}}
```

> $group은 문서를 그룹화하는 경우 사용한다. 그룹화한 결과 역시 문서로, 이 문서의 필드를 지정해야 한다. 결과 문서의 필드는 `_id` 필드와 `total` 필드로 정의하였다. `_id` 필드의 값을 `$cust_id`로 정의하였으므로, cust_id를 기준으로 그룹화가 된다. total 필드의 값은 그룹별 amount 필드의 합계로 정의된다. 
>
> 단계 별로 사용한 쿼리는 aggregate 함수의 pipeline에 해당된다. 따라서 전체 쿼리의 예시는 다음과 같다.

```
> db.orders.aggregate([
	{$match: {status: "A"}},
	{$group: {_id: "$cust_id", total: {$sum: "$amount"}}}
])
```

> 위 쿼리의 파이프라인은 match 스테이지와, group 스테이지로 나뉜다. 위의 예시를 통해 알 수 있듯 파이프 라인 전체는 배열로, 스테이지는 배열의 원소로 정의된다. 따라서 파이프라인의 형식은 다음과 같다.

```
[{<stage1>}, {<stage2>}, ... ]
```



> ##### $group, $push를 활용한 예시
>
> 참고할 이미지는 다음과 같다.

![example_4](./image/mongodb_10_4.png)

> 위 이미지에 대한 설명은 다음과 같다. 먼저 `books`라는 컬렉션을 작가 별로 그룹화 한다. 이 때 필요한 쿼리의 예시는 다음과 같다.

```
{$group: {_id: "$author"}}
```

> 이후 작가 별로 작품의 제목을 하나의 배열로 통합한다. 따라서 배열화에 사용하는 연산자인 $push나 $addToSet을 활용해야 한다. 이 때 필요한 쿼리의 예시는 다음과 같다.

```
books: {$push: "$title"}
```

> 따라서 전체 쿼리의 예시는 다음과 같다.

```
db.books.aggregate([
	{$group: {_id: "$author", books: {$push: "$title"}}}
])
```



> ##### 모든 문서를 그룹화하는 예시
>
> 참고할 이미지는 다음과 같다.

![example_3](./image/mongodb_10_3.png)

> 위 이미지에 대한 설명은 다음과 같다. 먼저 `sales`라는 컬렉션의 모든 문서를 그룹화한다. 모든 문서를 그룹화하기 위해 필요한 쿼리는 다음과 같다.

```
{$group: {_id: null}}
```

> `_id` 필드의 값을 null로 설정하면 모든 문서를 그룹화한다.
>
> `totalPrice` 필드는 총 가격을 의미한다. 따라서 아이템 별로 수량과 가격을 체크하여 모든 아이템을 구매하는 데 사용된 가격을 구해야 한다. 이 때 필요한 쿼리의 예시는 다음과 같다.

```
totalPrice: {$sum: {$multiply: ["$price", "$quantity"]}}
```

> 위 쿼리의 의미는 다음과 같다. 아이템 별로 `price` 필드와 `quantity` 필드의 값을 곱연산한다. 각 아이템 별로 곱연산된 값은 $sum 연산자의 대상이 되어 곱연산된 값들의 총합이 계산된다. 이 값은 `totalPrice` 필드의 값으로 정의된다.
>
> `averageQuantity` 필드는 아이템의 평균 수량을 의미한다. 이 때 필요한 쿼리의 예시는 다음과 같다.

```
averageQuantity: {$avg: "$quantity"}
```

> `count` 필드는 모든 아이템의 수를 의미한다. 이 때 필요한 쿼리의 예시는 다음과 같다.

```
count: {$sum: 1}
```

> 값을 1로 지정하면 각 문서를 참조할 때마다 1의 값을 더하므로, 결국 `count` 필드에 저장되는 값은 총 문서의 수, 총 아이템의 수와 같다.
>
> 위 쿼리들을 모두 종합한 전체 쿼리의 예시는 다음과 같다.

```
db.sales.aggregate([
	{$group: {
			_id: null,
			totalPrice: {$sum: {$multiply: ["$price", "quantity"]}},
			averageQuantity: {$avg: "$quantity"},
			count: {$sum: 1}
		}
	}
])
```



