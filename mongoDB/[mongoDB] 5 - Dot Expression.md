#### 점 표기법

------

> Document의 내부 구조에 접근하기 위해서는 `.`을 활용하여 접근이 가능하다. 다음의 Document를 보자.

```
{ 
	_id: ObjectId("..."),
	name: {first: "Alan", last: "Turing"},
	contribs: ["Turing Machine", "Turing Test"]
}
```



> 위 처럼 name 필드의 first 필드의 값이 "Alan"인 Document를 찾으려면 어떻게 해야할까? 답은 아래와 같이 점 표기법을 활용하면 된다. 

```
> db.user.find({"name.first": "Alan"})
```

> 반면 아래와 같은 방법으로는 예시에 제시된 Document를 찾아오지 못한다. last 필드를 기술하지 않았으므로 DB에서 다른 것으로 인식하기 때문이다.

```
> db.user.find({name: {first: "Alan"}})
```



> 배열의 각 원소들에 인덱스를 통해 접근할 때에도 다음과 같이 접근해야 한다. 가령 예시의 contribs 필드의 첫 번째 원소에 접근하는 방법은 다음과 같다.

```
> db.user.find({"contribs.0": "Turing Machine"})
```



> `"name.first",  "contirbs.0"`을 잘 보면 앞 뒤로 "가 감싸는 것을 확인할 수 있다. 이렇게 내부의 구조에 접근할때에는 반드시 "로 묶어야 DB가 인지할 수 있다는 점에 유의하자. 만약 묶지 않고 쿼리를 날릴 경우 다음과 같은 에러 메시지가 출력된다.

```
2019-09-27T09:51:24.969+0900 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:22
```

> 예시에서는 제시하지 않았지만, 점 표기법을 중첩 활용하여 더욱 복잡한 구조의 Document의 내부에 접근하는 것도 가능하다.