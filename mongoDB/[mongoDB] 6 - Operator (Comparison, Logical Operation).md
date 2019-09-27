#### 비교 연산자

------

> 비교 연산자의 종류와 설명은 다음과 같다. 비교 연산자는 일반 필드와 구분되기 위해 앞에 반드시 $를 붙여서 사용한다.

| Operator | Description                                            |
| -------- | ------------------------------------------------------ |
| $eq      | (equals), 주어진 값과 일치하는 값                      |
| $ne      | (not equal), 주어진 값과 일치하지 않는 값              |
| $gt      | (greater than), 주어진 값보다 큰 값                    |
| $gte     | (greater than or equals), 주어진 값보다 크거나 같은 값 |
| $lt      | (less than), 주어진 값보다 작은 값                     |
| $lte     | (less than or equals), 주어진 값보다 작거나 같은 값    |
| $in      | 주어진 배열 안에 속하는 값                             |
| $nin     | 주어진 배열 안에 속하지 않는 값                        |



> 비교 연산자는 다음과 같이 BSON 구조 안에 기술하여 사용한다. 예시를 보자.

```
> db.articles.find({"likes": {$gt: 10, $lt: 30}})
```

> 예시의 쿼리는 현재 Database의 articles라는 Collection의 Document들 중 likes 필드의 값이 10보다 크고, 30보다 작은 값을 갖는 Document만 조회하라는 의미로 해석할 수 있다.



##### $in

> 활용 예시는 다음과 같다. 기준을 반드시 배열로 정의해야 한다. 

```
> db.inventory.find({qty: {$in: [5, 15]}})
> db.inventory.find({tags: {$in: [/^be/, /^st/]}})
```

> $in 연산자의 대상 필드의 값이 배열인 경우 해당 배열의 모든 요소에 대해 $in을 적용하는 방식으로 동작한다. 예시는 다음과 같다.

```
> db.number.find({num: {$in: [10, 15, 20]}})
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf6"), "num" : 10 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf7"), "num" : 15 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf8"), "num" : 20 }

> db.number.insertOne({num: [20, 30, 40]})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5d8d6aae4fc2d0b4880bbdfb")
}

> db.number.find({num: {$in: [10, 15, 20]}})
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf6"), "num" : 10 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf7"), "num" : 15 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf8"), "num" : 20 }
{ "_id" : ObjectId("5d8d6aae4fc2d0b4880bbdfb"), "num" : [ 20, 30, 40 ] }
```





#### 논리 연산자

------

> 논리 연산자의 종류와 설명은 다음과 같다. 마찬가지로 $를 붙여 사용한다.

| Operator | Description                                          |
| -------- | ---------------------------------------------------- |
| $or      | 주어진 조건 중 하나라도 true일 때 true, 아니면 false |
| $and     | 주어진 모든 조건이 true일 때 true, 아니면 false      |
| $nor     | 주어진 모든 조건이 false일 때 true, 아니면 false     |
| $not     | 주어진 조건이 false면 true, true면 false             |



> 논리 연산자의 사용은 다음과 같이 조건들을 BSON 구조에 기술하되, 하나의 배열 안에 기술함으로써 사용한다.

```
> db.articles.find({$or: [{"title": "article01"}, {"writer": "Alpha"}]})
```

> 예시의 쿼리는 title이 article01이거나, writer가 Alpha인 Document들을 조회하라는 의미로 해석할 수 있다. 밑의 $and의 활용 예시를 보면 알겠지만, 논리 연산에서 배열의 경우 배열 전체를 하나의 값으로 인식하는 것이 아니라,  여러 값을 보유하는 것으로 인식하는 것을 확인할 수 있다.

```
> db.number.find({$or: [{num: 10}, {num: 20}]})
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf6"), "num" : 10 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf8"), "num" : 20 }
{ "_id" : ObjectId("5d8d6aae4fc2d0b4880bbdfb"), "num" : [ 20, 30, 40 ] }

> db.number.find({$and: [{num: 10}, {num: 20}]})

> db.number.find({$and: [{num: 30}, {num: 20}]})
{ "_id" : ObjectId("5d8d6aae4fc2d0b4880bbdfb"), "num" : [ 20, 30, 40 ] }

> db.number.find({$nor: [{num: 30}, {num: 20}]})
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf6"), "num" : 10 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf7"), "num" : 15 }
{ "_id" : ObjectId("5d8d67894fc2d0b4880bbdf9"), "num" : 25 }
```



##### $not

> $not은 다른 연산자와 다르게 하나의 조건을 기술한다. 순서 또한 $not을 적용할 필드를 먼저 기술하고, 부정할 조건의 필드에 기술한다는 차이점이 있다. 이 조건은 BSON 구조의 document 또는 정규표현식으로 기술한다.

```
> db.articles.find({likes: {$not: {$lte: 11}}})
> db.inventory.find({item: {$not: /^p.*/}})
```

> 예시의 첫 번째 쿼리는 likes 필드의 값이 11보다 작거나 같지 않은(11보다 큰) Document들을 조회하라는 의미로 해석된다. 두 번째 쿼리는 item 필드의 값이 기술된 정규표현식에 해당되지 않는 Document들을 조회하라는 의미로 해석된다. 