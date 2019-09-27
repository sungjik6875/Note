#### 몽고DB의 구조

------

> 몽고DB는 Database > Collection > Document 의 구조로 이루어져 있다. 하나의 Database는 하나 이상의 Collection으로, 하나의 Collection은 하나 이상의 Document로 구성되어 있다.



##### Document의 구조

> JSON과 비슷한 BSON 구조로 되어 있다. 따라서 Document의 각 데이터는 field:value의 쌍으로 구성된다. 예시는 다음과 같다.

```
var mydoc = {
	_id: ObjectId("...")
	name: "sue",
	age: 26,
	status: "A",
	groups: ["news", "sports"]
}
```





#### BSON

------

> Binary JSON을 의미한다. JSON에 해당되며 몽고DB에서 데이터를 저장하기 위해 사용하는 형식이다. BSON의 예시는 다음과 같다.

```
{
	_id: ObjectId("..."),
	name: { first: "Alan", last: "Turing" },
	birth: new Date('Jun 23, 1912')
	death: new Date('Jun 07, 1954')
	contribs: ["Turing Machine", "Turing Test", "Turingery"],
	views: NumberLong(1250000)
}
```



#### Datatype

------

> BSON에는 많은 종류의 데이터타입이 존재하나, 대표적인 데이터타입은 다음이 있다. 데이터타입은 값의 성질에 따라, 혹은 값이 갖는 특정한 의미에 따라 다음과 같이 구분된다.

> ##### Null
>
> 데이터가 존재하지 않음을 의미하는 데이터타입이다.

> ##### Boolean
>
> true / false의 두 가지 값을 갖는 데이터타입이다.

> ##### Double / Integer
>
> 각각 실수와 정수형의 데이터타입이다.

> ###### String
>
> "", ''로 묶임으로써 표현되며 문자열을 의미한다.

> ##### Object
>
> field와 value의 쌍으로 구성되는 객체 데이터타입이다. BSON 객체의 데이터타입이다.

> ##### Array
>
> element의 집합으로 구성되는 배열 데이터타입이다.

> ##### Timestamp
>
> 일정한 시간 이후부터 지금까지 경과된 시간을 나타낸다. 예시는 다음과 같다.

```
Timestamp(1412180887, 1)
```

> ##### Date
>
> 날짜를 의미하는 데이터타입이다. 밀리초의 단위까지 표현된다. 예시는 다음과 같다. 

```
ISODate("2017-10-24T05:02:46.395Z")
```

> ##### ObjectId
>
> 몽고DB에서 각 Document의 식별자인 Primary Key의 값으로 사용된다. 예시는 다음과 같다.

```
ObjectID("542c2b97bac0595474108b48")
```

> ObjectId의 값은 유닉스 시간, 기기id, 프로세스id, 카운터의 네 가지를 의미하는 값의 조합으로 구성된다. 이러한 조합 방식으로 인해 Document의 식별자로써 사용이 가능하다.
