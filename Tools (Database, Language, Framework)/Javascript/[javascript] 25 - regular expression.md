### 정규 표현식 (Regular Expression)

------

> 정규표현식은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다. 예를 들어 사용자로부터 입력 받는 전화번호가 유효한지 체크할 필요가 있다. 이 때 정규표현식을 사용하면 간단히 처리할 수 있다. 
>
> 예시는 다음과 같다.

```javascript
const tel = '0101234567팔';

// 정규 표현식 리터럴
const myRegExp = /^[0-9]+$/;

// 유효성 체크
console.log(myRegExp.test(tel)) // false
```



##### 정규표현식의 특징

> 반복문과 조건문을 사용한 복잡한 코드도 정규표현식을 이용하면 매우 간단하게 표현할 수 있다. 하지만 정규표현식은 주석이나 공백을 허용하지 않고 여러 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있다.





#### 정규표현식 리터럴

------

> 정규표현식은 리터럴 표기법으로 생성이 가능하다. 리터럴의 표현은 다음과 같다.

![example_1](./image/js_25_1.png)



##### 플래그

> 플래그는 다음과 같은 종류가 있다.

| Flag | Meaning     | Description                             |
| ---- | ----------- | --------------------------------------- |
| i    | Ignore Case | 대소문자를 구별하지 않고 검색한다.      |
| g    | Global      | 문자열 내의 모든 패턴을 검색한다.       |
| m    | Multi Line  | 문자열의 행이 바뀌어도 검색을 계속한다. |

> 플래그는 옵션이므로 선택적으로 사용한다. 예를 들어 g 플래그를 사용하지 않은 경우 문자열 내의 검색 매칭 대상이 1개 이상이더라도 처음 매칭된 대상만 검색하고 종료한다.
>
> 플래그의 유무에 따른 결과의 차이는 다음의 예시로 확인할 수 있다.

```javascript
const targetStr = 'Is this all there is?';

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regexr = /is/;

console.log(targetStr.match(regexr)); 
// [ 'is', index: 5, input: 'Is this all there is?' ]

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
regexr = /is/ig;

console.log(targetStr.match(regexr)); 
// [ 'Is', 'is', 'is' ]
console.log(targetStr.match(regexr).length); // 3
```





#### 패턴

------

##### 패턴의 표현과 메타문자

> 패턴에는 검색하고 싶은 문자열을 지정한다. 이때 문자열의 따옴표는 생략한다. 만약 따옴표를 포함하면 따옴표 또한 검색의 대상이 된다.
>
> 그리고 패턴에서 자주 사용되는 것으로 **메타문자(Metacharacter)**가 있다. 이 메타문자는 특별한 의미를 갖고 있으며 기호로 표현이 가능하다.



##### 패턴의 표현과 검색 방식 지정 : 메타문자와 플래그의 활용

> ##### `.`로 임의의 길이를 갖는 문자 검색하기
>
> `.`는 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든지 상관없다. 위 예제의 경우 `.`를 3개 연속하여 패턴을 생성하였으므로 3자리 문자를 추출한다. 예시는 다음과 같다.

```javascript
const targetStr = 'AA BB Aa Bb';
const regexr = /.../;

// AA 뒤의 공백도 문자로 취급한다.
console.log(targetStr.match(regexr)); 
// [ 'AA ', index: 0, input: 'AA BB Aa Bb' ]
```





> ##### g를 활용하여 매칭되는 패턴 모두 검색하기
>
> 위의 예시에서는 g 플래그를 사용하지 않았으므로 매칭이 되면 검색이 종료되는 것을 알 수 있다. 만약 g 플래그를 사용하였을 경우의 결과는 다음과 같다.

```javascript
const regexr = /.../g;

console.log(targetStr.match(regexr)); 
// [ 'AA ', 'BB ', 'Aa ' ]
```

> 이번에는 3개의 결과가 매칭된 것을 확인할 수 있다.



> ##### 응용 : 모든 문자 선택하기
>
> `.`와 g를 다음과 같이 활용하여 문자열의 모든 문자를 선택할 수 있다.

```javascript
const targetStr = 'AA BB Aa Bb';
const regexr = /./g;

console.log(targetStr.match(regexr));
// [ 'A', 'A', ' ', 'B', 'B', ' ', 'A', 'a', ' ', 'B', 'b' ]
```



> ##### 특정 문자 또는 문자열 추출하기
>
> 패턴에 문자 또는 문자열을 지정하면 매칭되는 패턴을 찾아 추출한다.

```javascript
const targetStr = 'AA BB Aa Bb';
const regexr = /A/;

console.log(targetStr.match(regexr)); 
// ["A", index: 0, input: "AA BB Aa Bb", ...]
```



> ##### i와 g를 활용하여 대소문자 구별 없이 모든 패턴 조사하기
>
> i와 g를 같이 활용하면 대소문자를 구별하지 않으며, 일치하는 문자 또는 문자열을 전부 조사할 수 있다.

```javascript
const targetStr = 'AA BB Aa Bb';
const regexr = /A/ig;

console.log(targetStr.match(regexr)); 
// [ 'A', 'A', 'A', 'a' ]
```



> ##### `+`를 활용하여 반복되는 패턴 표현하기
>
> `+`는 반복되는 문자나 패턴을 표현할 때 사용한다. 예를 들어 A가 한 번 이상 반복되는 문자열을 검색하고자 할 때에는 `A+`와 같이 표현한다.

```javascript
const targetStr = 'AA AAA BB Aa Bb';
const regexr = /A+/g;

console.log(targetStr.match(regexr)); 
// [ 'AA', 'AAA', 'A' ]
```



> ##### `|`를 활용하여 OR의 의미 표현하기
>
> 만약 문자열 A나 B를 찾고자 할 때에는 어떻게 해야 할까? 이런 경우 `|`를 활용하여 OR의 의미를 표현할 수 있다.

```javascript
const targetStr = 'AA BB Aa Bb';
const regexr = /A|B/g;

console.log(targetStr.match(regexr)); 
// [ 'A', 'A', 'B', 'B', 'A', 'B' ]
```



#### 정규표현식 메소드

------

> 정규표현식을 사용하는 자바스크립트 메소드는 다음과 같은 것들이 있다.

* RegExp.prototype.exec()
* RegExp.prototype.test()
* RegExp.prototype.match()
* RegExp.prototype.replace()
* RegExp.prototype.search()
* RegExp.prototype.split()