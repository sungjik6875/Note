#### Update

------

> 데이터 수정 시에 사용하는 명령어는 다음과 같다.



##### updateOne

> 하나의 document를 수정할 때 사용한다. 사용 형식은 다음과 같다.

```
> db.collection.updateOne(
	<query>,
	<update>,
	{
		upsert: <boolean>,
		writeConcern: <document>,
		collation: <document>
	}
)
```



> ##### $set을 활용한 특정 Document의 특정 Field 값 갱신
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "canvas"}, {$set: {"size.h": 20}})
```

> $set 쿼리는 값을 새롭게 초기화 하는 경우에 사용한다. 위와 같은 쿼리를 보내는 경우 결과에 대한 예시는 다음과 같다.  

```
전: {item: "canvas", size:{h:28, w:35}}
후: {item: "canvas", size:{h:20, w:35}}
```

> $set을 활용하여 특정 다큐먼트의 특정 필드를 위 예시와 같이 업데이트 할 수 있다.



> ##### $unset을 활용한 특정 Document의 특정 Field 제거
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "mat"}, {$unset: {status: 1}})
```

> $unset 쿼리는 특정 필드를 제거하려는 경우에 사용한다. 1은 true를 의미한다. 따라서 값이 1일 경우, 해당 필드를 제거한다. 위와 같은 쿼리의 결과에 대한 예시는 다음과 같다.

```
전: {item: "mat", qty:85, size: {h:27.9, w:35.5, uom:"cm"}, status: "A"}
후: {item: "mat", qty: 85, size: {h:27.9, w:35.5, uom: "cm"}}
```

> $unset에 의해 `status` 필드가 제거된 것을 확인할 수 있다.



> ##### upsert를 활용한 예시
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "flash"}, {$set: {size: {h: 10, w: 8}, status: "F"}}, {upsert: true})
```

> 만약 위의 쿼리에 해당되는 document가 없다면 다음의 document가 새로 생성된다.

```
전: Null
후: {item: "flash", size: {h: 10, w: 8}, status: "F"}}
```



> ##### $push를 활용한 배열에 값 추가하기
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "journal"}, {$push: {sold_id: 15}})
```

> $push는 특정 필드의 값이 배열의 형태인 경우 해당 배열에 새로운 요소를 추가하고자 할 때 사용한다. 위와 같은 쿼리의 결과에 대한 예시는 다음과 같다.

```
전: {item: "journal", sold_id: [1, 2, 3, 4, 10, 14]}
후: {item: "journal", sold_id: [1, 2, 3, 4, 10, 14, 15]}
```

> $push에 의해 `sold_id`의 배열에 15라는 값이 추가된 것을 확인할 수 있다. 그런데 만약 값을 여러개 추가하고자 할 때에는 어떻게 해야 할까?



> ##### $push, $each를 활용하여 배열에 값 여러 개 추가하기
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "journal"}, {$push: {sold_id: {$each: [20, 25]}}})
```

> 이번에는 `sold_id` 뒤에 $each라는 연산자가 추가된 것을 확인할 수 있다. 위와 같은 쿼리의 결과에 대한 예시는 다음과 같다.

```
전: {item: "journal", sold_id: [1, 2, 3, 4, 10, 14, 15]}
후: {item: "journal", sold_id: [1, 2, 3, 4, 10, 14, 15, 20, 25]}
```

> 20, 25라는 값이 새롭게 추가된 것을 확인할 수 있다.



> ##### $pull을 활용하여 배열의 값 제거하기
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "journal"}, {$pull: {sold_id: 1}})
```

> $pull은 배열에 특정 값을 찾아서 제거하는 역할을 한다. 위의 쿼리의 결과에 대한 예시는 다음과 같다.

```
전: {item: "journal", sold_id: [1, 2, 3, 4, 10]}
후: {item: "journal", sold_id: [2, 3, 4, 10]}
```

> `sold_id`의 배열에서 1이라는 값이 제거된 것을 확인할 수 있다.



> ##### $pull과 $in을 활용하여 배열에 값 여러 개 제거하기
>
> 만약 값을 여러 개 제거하려면 어떻게 해야 할까? $push가 $each와 조합되었다면, $pull은 $in과 조합되어 여러 개의 값을 적용하고자 할 때 사용한다. 활용 예시는 다음과 같다.

```
> db.inventory.updateOne({item: "journal"}, {$pull: {sold_id: {$in: [2, 3, 4]}}})
```

> 위의 쿼리의 결과에 대한 예시는 다음과 같다.

```
전: {item: "journal", sold_id: [2, 3, 4, 10]}
후: {item: "journal", sold_id: [10]}
```



##### updateMany

> 여러 document를 수정할 때 사용한다. 사용 형식은 다음과 같다.

```
> db.collection.updateMany(
	<query>,
	<update>,
	{
		upsert: <boolean>,
		writeConcern: <document>,
		collation: <document>
	}
)
```



> ##### $set을 활용한 여러 document의 특정 Field 값 갱신
>
> 활용 예시는 다음과 같다.

```
> db.inventory.updateMany({"size.h": {$lte: 10}}, {$set: {mini: true}})
```

> updateMany는 쿼리의 조건에 해당되는 모든 document에 적용이 된다. 따라서 위의 쿼리는 `size.h`의 값이 10보다 작거나 같은 모든 쿼리에서 `mini` 필드를 찾아 값을 true로 변경한다. 만약 `mini` 필드가 존재하지 않는 경우에는 어떻게 될까? 그런 경우에는 `mini`필드가 새로 추가되어 true라는 값으로 초기화된다.



##### Parameters (updateOne, updateMany)

> 위의 사용형식에서 보았듯, Update 쿼리에는 여러 파라미터들이 사용된다. 각 파라미터의 종류와 의미는 다음과 같다.

| Parameter    | Required / Optional | Type     |
| ------------ | ------------------- | -------- |
| query        | Required            | document |
| update       | Required            | document |
| upsert       | Optional            | boolean  |
| writeConcern | Optional            | document |
| collation    | Optional            | document |

> ##### query
>
> 업데이트 할 document의 기준을 정한다. 이는 find() 쿼리에서 사용하는 query와 같다.

> ##### update
>
> 업데이트 할 document에 적용할 변동사항이다.

> ##### upsert (default: false)
>
> 만약 true로 설정하면, query에 해당되는 document가 없을 경우 새로운 document를 생성한다. 이 경우 생성되는 document은 update 파라미터를 기준으로 생성된다.

> ##### writeConcern

> ##### collation



##### replaceOne

> 하나의 document를 새로운 document로 교체할 때 사용한다. 사용 형식은 다음과 같다.

```
> db.collection.replaceOne(
	<filter>,
	<replacement>,
	{
		upsert: <boolean>,
		writeConcern: <document>,
		collation: <document>
	}
)
```

> 활용 예시는 다음과 같다.

```
> db.inventory.replaceOne({item: "journal"}, {"item": "journal", sold_id: [1, 2, 3, 4, 10, 14]})
```

> 위와 같은 쿼리를 보내는 경우 결과에 대한 예시는 다음과 같다.

```
전: {item: "journal", qty: 25, size: {h:14, w:21, uom:"cm"}, status: "A"}
후: {item: "journal", sold_id:[1, 2, 3, 4, 10, 14]}
```



##### Parameters (replaceOne)

> replace의 경우 사용되는 파라미터인 filter, replacement의 의미는 위 updateOne, updateMany에서의 query, update와 의미가 같다. 나머지 파라미터의 의미 역시 같다.







#### Delete

------

> Document, Collection, Database를 삭제할 때 사용한다. 명령어는 다음과 같다.



##### deleteOne

> 하나의 document를 삭제하고자 할 때 사용한다. 사용 형식은 다음과 같다.

```
> db.collection.deleteOne(
	<filter>,
	{
		writeConcern: <document>
	}
)
```

> 활용 예시는 다음과 같다.

```
> db.user.deleteOne({username: "SJ"})
```

> 위 쿼리는 `user` 컬렉션에서 `username`이 SJ인 document를 찾아 삭제한다. 만약 삭제에 성공했을 경우 다음과 같은 메시지가 출력된다.

```
{ "acknowledged": true, "deletedCount": 1}
```



##### deleteMany

> 여러 개의 document를 삭제하고자 할 때 사용한다. 사용 형식은 다음과 같다.

```
> db.collection.deleteMany(
	<filter>,
	{
		writeConcern: <document>
	}
)
```

> 활용 예시는 다음과 같다.

```
> db.user.deleteMany({password: 1111})
```

> 위 쿼리는 `user` 컬렉션에서 `password`가 1111인 document를 모두 찾아 삭제한다. 삭제에 성공했을 경우에 대한 예시는 다음과 같다.

```
{ "acknowledged": true, "deletedCount": 3}
```



##### Parameters (deleteOne, deleteMany)

> Delete 쿼리에 사용되는 파라미터의 종류와 의미는 다음과 같다.

| Parameter    | Required / Optional | Type     |
| ------------ | ------------------- | -------- |
| filter       | Required            | document |
| writeConcern | Optional            | document |

> ##### filter
>
> 삭제할 document의 기준을 정한다. 이는 find() 쿼리에서 사용하는 query와 같다.

> ##### writeConcern



##### drop

> Collection을 삭제하고자 할 때 사용한다. 활용 예시는 다음과 같다.

```
> db.user.drop()
```

> 위 쿼리는 `user` 컬렉션을 데이터베이스로부터 삭제하는 결과를 가져온다. 삭제에 성공했을 경우 다음과 같은 메시지가 출력된다.

```
true
```



dropDatabase

> Database를 삭제하고자 할 때 사용한다. 활용 예시는 다음과 같다.

```
> db.dropDatabase()
```

> 위 쿼리는 현재 사용중인 데이터베이스를 MongoDB로부터 삭제한다.  삭제에 성공했을 경우 출력되는 메시지의 예는 다음과 같다.

```
{ "dropped": "test", "ok": 1 }
```

> 위 메시지는 test 데이터베이스가 삭제되었음을 의미한다.

