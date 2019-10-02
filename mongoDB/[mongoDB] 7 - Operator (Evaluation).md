#### 평가 연산자

------

> 평가 연산자의 종류와 설명은 다음과 같다.

| Operator          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| $mod              | 특정 값으로 나머지 연산을 통해 특정 결과가 나온 Document 선택 |
| $regex ($options) | 특정 정규 표현식에 맞는 Document 선택                        |
| $text             | 문자열 검색의 기능을 수행, 검색 조건에 맞는 Document 선택    |
| $where            | 자바스크립트 문법을 활용하여 Document 선택                   |



##### $regex

> 두 가지 방법이 있다. $options와 같이 사용하거나 일반 정규식처럼 패턴과 옵션을 한번에 기술하여 사용하는 방법이 있다.

```
{field: {$regex: pattern, $options: options}}
{field: /pattern/options}
```

> 옵션의 종류와 설명은 다음과 같다.

| Option | Description                                              |
| ------ | -------------------------------------------------------- |
| i      | 대소문자 무시                                            |
| m      | 정규식에서 anchor(^)를 사용할 때 값에 \n이 있다면 무력화 |
| x      | 정규식 안에 있는 whitespace를 모두 무시                  |
| s      | dot(.)을 사용할 때 \n을 포함하여 매칭                    |

> 사용 예시는 다음과 같다.

```
> db.articles.find({"title": /article0[1-2]/})
```

> 예시의 쿼리는 title 필드의 값이 article01 또는 article02에 해당하는 Document들을 조회하라는 의미로 해석할 수 있다.



##### $text

> 인덱스를 생성한 field의 값에 대해서 검색을 수행한다. 다음과 같이 $search, $language 등을 기술하여 검색 조건을 기술해야 한다.

```
{ 
	$text: {
		$search: <string>,
		$language: <string>,
		$caseSensitive: <boolean>,
		$diacriticSensitive: <boolean>
	}
}
```

> 옵션의 종류와 설명은 다음과 같다.

| Option              | Description                                              |
| ------------------- | -------------------------------------------------------- |
| $search             | 검색할 내용                                              |
| $language           | 선택적. 검색하는 언어                                    |
| $caseSensitive      | 선택적. False가 기본값으로 이 경우 대소문자 무시.        |
| $diacriticSensitive | 선택적. diacritical mark를 구분할지 선택. False가 기본값 |

> 참고로 발음 구별 기호(diacritic mark)는 글자에 붙어서 그 글자가 들어간 낱말의 철자를 바꾸는 데 쓰이는 표지이다. 
>
> Text 연산자는 인덱스를 생성한 필드의 값에 대해서 검색을 수행한다. 만약 인덱스를 설정하면 필드의 값을 가지고 document를 가리키는 포인터 값으로 이루어진 B-Tree를 만드는데, 이처럼 인덱스를 생성한 필드는 더 빠른 쿼리를 수행할 수 있기 때문이다.
>
> 따라서 Text 검색을 활용할 생각이라면 다음의 명령어로 인덱스를 생성해야 한다. 생성 범위가 collection임에 유의하자.

```
> db.collection.createIndex({ name:"text", description:"text" })
```

> 이제 name과 description 필드를 기반으로 각각의 B-Tree가 생성된다. 따라서 이 두 필드에는 Text 검색이 적용된다. 그러나 다른 필드에는 적용되지 않을 것이다. 이해를 돕기 위한 활용 예시를 보자.



> ##### 하나의 단어 검색 

```
> db.articles.find({$text: {$search: "coffee"}})
```

> 만약 subject에 text 인덱스가 적용된 상태라면 subject의 값에 coffee가 포함되는 document 들이 결과로 출력되는 것을 확인할 수 있다.



> ##### 여러 단어 검색

```
> db.articles.find({$text: {$search: "bake coffee cake"}})
```

> 각각의 단어들은 공백으로 구분된다. 따라서 위의 경우 `bake coffee cake`라는 하나의 구절로 처리되는 것이 아니라, `bake`, `coffee`, `cake`의 단어들로 구분된다. 이 단어들 중 하나라도 포함하고 있는 document 들이 결과로 출력되는 것을 확인할 수 있다.



> ##### 구절 검색

```
> db.articles.find({$text: {$search: "\"coffee shop\""}})
```

> 만약 구절을 검색하기 위해선 위와 같이 구절을 `\" "\`로 감싸주면 된다. 