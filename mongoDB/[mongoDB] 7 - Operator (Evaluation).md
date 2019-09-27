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

> ]

