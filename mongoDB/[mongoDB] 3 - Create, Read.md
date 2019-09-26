#### Create

------

> 데이터를 생성 시에 사용하는 명령어는 다음과 같다.



##### insertOne

> 하나의 Document를 Collection에 등록하고자 할 때 사용한다. 예시는 다음과 같다.

```
> db.user.insertOne({username:"jik", password:1111})
```

> 다음과 같은 메시지가 출력되면 성공적으로 등록된 것이다.

```
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d8c3383d93f16c72879c0fe")
}
```

> 만약 writeConcern 옵션을 사용하고 싶다면 다음과 같이 사용한다.

```
> db.collection.insertOne(
	<document>, 
    {
     	writeConcern: <document>
    }
)
```



##### insertMany

> 다수의 데이터를 등록하고자 할 때 사용한다. 사용법은 다음과 같다.

```
> db.collection.insertMany(
	[<document1>, <document2>, ...],
	{
		writeConcern: <document>,
		ordered: <boolean>
	}
)
```

> ordered 옵션은 각 document를 순서대로 입력할지, 상관 없이 입력할지를 나타내며 기본값은 true이다.
>
> 성공적으로 등록 시에는 다음과 같은 화면이 출력된다.

```
{
	"acknowledged" : true,
	"insertedIds" : [<ObjectId1>, <ObjectId2>, ...]
}
```





#### Read

------

> 등록된 데이터를 조회하고자 할 때 사용하는 명령어들이다.



##### find

> Collection에 존재하는 Document를 조회하고자 할 때 사용한다. 예시는 다음과 같다.

```
> db.user.find()
```

> 위의 명령어를 사용하면 해당 Colleciton의 모든 Document를 조회할 수 있다. 화면에 다음과 같이 Document가 출력되는 것을 확인할 수 있다.

```
{ "_id" : ObjectId("5d8c3383d93f16c72879c0fe"), "username" : "jik", "password" : 1111 }
{ "_id" : ObjectId("5d8c3399d93f16c72879c0ff"), "username" : "hello", "password" : 1111 }
```

> find에는 다음과 같은 옵션이 제공된다.

```
> db.user.find(
	<query>,
	<projection>
)
```

> query 옵션은 query operations를 활용하여 원하는 Document를 필터링한다. projection 옵션을 활용하여 return할 필드를 선택할 수 있다.
>
> query 옵션은 다음과 같이 BSON 구조로 기술한다. 해당 조건에 맞는 Document만이 출력된다. 조건을 기술하는 순서는 중요하지 않다.

```
{field1: value1, field2: value2}
```

> 활용 예시는 다음과 같다.

```
> db.user.find({"username":"jik"})
{ "_id" : ObjectId("5d8c3383d93f16c72879c0fe"), "username" : "jik", "password" : 1111 }

> db.user.find({"password":1111})
{ "_id" : ObjectId("5d8c3383d93f16c72879c0fe"), "username" : "jik", "password" : 1111 }
{ "_id" : ObjectId("5d8c3399d93f16c72879c0ff"), "username" : "hello", "password" : 1111 }
```





##### pretty

> find 뒤에 pretty를 추가하면 읽기 쉽게 출력된다.

```
> db.user.find().pretty()
```

> 출력 예시는 다음과 같다.

```
{
    "_id" : ObjectId("5d8c3383d93f16c72879c0fe"),
    "username" : "jik",
    "password" : 1111
}
{
    "_id" : ObjectId("5d8c3399d93f16c72879c0ff"),
    "username" : "hello",
    "password" : 1111
}
```

