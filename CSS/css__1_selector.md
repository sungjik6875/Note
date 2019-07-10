#### Attribute Selector

------

> 속성을 기준으로 요소를 선택하는 것을 어트리뷰트 셀렉터라고 한다. 어트리뷰트 셀렉터를 기술하는 패턴은 여러가지가 있다. 그 여러가지 패턴은 아래와 같다.



##### 가장 기본적인 방법

```css
selector[attr] { property : value }
```

> 어트리뷰트 셀렉터의 기본적인 형식은 위와 같다.  []안에 기술된 속성을 갖고 있으며 동시에 셀렉터에 해당되는 모든 요소들을 선택한다.
>
> 예시는 다음과 같다.

```html
<style>
/* a 요소 중에 href 어트리뷰트를 갖는 모든 요소를 선택 */
a[href] { color: red; }
</style>
```



##### 특정 값을 갖는 속성을 선택

```css
selector[attr="value"] { property : value }
```

> 해당 셀렉터 중, 해당 속성을 갖고 있고, 해당 속성이 명시한 값을 갖고 있는 모든 요소를 선택한다. 예시는 다음과 같다.

```html
<style>
/* a 요소 중에 target 어트리뷰트의 값이 "_blank"인 모든 요소 */
a[target="_blank"] { color: red; }
</style>
```



##### 특정 값을 포함하는 속성을 선택

```css
selector[attr~="value"] { property : value }
```

> `~=`를 사용하여 특정 값을 포함하는 속성을 갖는 셀렉터를 선택하도록 할 수 있다. 여기서 이 특정 값이란 공백으로 분리되어야만 독립된 값으로 인정이 된다.
>
> 예시는 다음과 같다.

```html
<head>
  <style>
    /* h1 요소 중에 title 어트리뷰트 값에 "first"를 단어로 포함하는 요소 */
    h1[title~="first"] { color: red; }
  </style>
</head>
<body>
  <h1 title="heading first">Heading first</h1>
  <h1 title="heading-first">Heading-first</h1>
  <h1 title="heading second">Heading second</h1>
  <h1 title="heading third">Heading third</h1>
</body>
```

> first를 포함하고 있는 것은 1, 2번째 h1태그이지만 first가 공백으로 분리된 1번째 태그만이 선택된다.
>
> 그 외의 다른 패턴들은 다음과 같다.

| 패턴 | 의미                                                         |
| ---- | ------------------------------------------------------------ |
| ^=   | 지정된 값으로 시작하는 요소                                  |
| $=   | 지정된 값으로 끝나는 요소                                    |
| *=   | 지정된 값을 포함하는 요소 (공백 무관)                        |
| \|=  | 지정된 값과 일치하거나, 지정된 값 뒤에 하이픈(-)으로 시작하는 요소 |





#### Pseudo-Class Selector

------

> 요소의 특정 상태에 따라서 스타일을 정의하고자 할 때 사용한다. 이러한 특정 상태에 해당하는 가상 클래스를 지정하여 특정 상태에 있는 셀렉터들을 선택하도록 할 수 있다. 가상 클래스는 CSS 표준에 정의된 이름만 사용이 가능하다.
>
> 기술 패턴은 다음과 같다.

```css
selector:pseudo-class {
    property: value;
}
```

> 사용 예시는 다음과 같다.

```html
<head>
  <style>
    /* a 요소가 hover 상태일 때 선택된다. */
    a:hover { color: red; }
    /* input 요소가 focus 상태일 때 선택된다. */
    input:focus { background-color: yellow; }
  </style>
</head>
<body>
  <a href="#">Hover me</a><br><br>
  <input type="text" placeholder="focus me">
</body>
```



> 가상 클래스 셀렉터들의 종류와 의미는 다음과 같다. 먼저 다음의 가상 클래스 셀렉터들은 링크나 사용자의 조작과 관련이 있다.

| pseudo-class | Description                      |
| ------------ | -------------------------------- |
| :link        | 셀렉터가 방문하지 않은 링크일 때 |
| :visited     | 셀렉터가 이미 방문한 링크일 때   |
| :hover       | 셀렉터 위에 마우스가 올라올 때   |
| :active      | 셀렉터가 클릭된 상태일 때        |
| :focus       | 셀렉터에 포커스가 들어와 있을 때 |

> 위 가상 클래스 셀렉터의 예시는 다음과 같다. 링크와 관련이 있는 셀렉터들은 a태그와 같이 쓰인다. `:focus`는 사용자의 입력을 받는 input 태그에서 쓰인다. 
>
> 예시는 다음과 같다.

```html
<style>
    /* a 요소가 방문하지 않은 링크일 때 */
    a:link { color: orange; }

    /* a 요소가 방문한 링크일 때 */
    a:visited { color: green; }

    /* a 요소에 마우스가 올라와 있을 때 */
    a:hover { font-weight: bold; }

    /* a 요소가 클릭된 상태일 때 */
    a:active { color: blue; }

    /* text input 요소와 password input 요소에 포커스가 들어와 있을 때 */
    input[type=text]:focus,
    input[type=password]:focus {
      color: red;
    }
</style>
```



> UI 요소의 상태에 따라 선택하는 셀렉터들도 존재한다. 그 종류와 의미는 다음과 같다.

| pseudo-class | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| :checked     | 셀렉터가 체크된 상태일 때                                    |
| :enabled     | 셀렉터가 사용 가능한 상태일 때                               |
| :disabled    | 셀렉터가 사용 불가능한 상태일 때 (disabled 속성을 지닌 input) |

> 그냥 설명으로는 감이 잘 오지 않는다. 이 셀렉터들은 주로 radio나 checkbox 타입의 input 태그에서 주로 쓰인다.
>
> 다음의 예시를 보자.

```html
<head>
  <style>
    /* input 요소가 사용 가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:enabled + span {
      color: blue;
    }
    /* input 요소가 사용 불가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:disabled + span {
      color: gray;
      text-decoration: line-through;
    }
    /* input 요소가 체크 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:checked + span {
      color: red;
    }
  </style>
</head>
<body>
  <input type="radio" checked="checked" value="male" name="gender"> <span>Male</span><br>
  <input type="radio" value="female" name="gender"> <span>Female</span><br>
  <input type="radio" value="neuter" name="gender" disabled> <span>Neuter</span><hr>

  <input type="checkbox" checked="checked" value="bicycle"> <span>I have a bicycle</span><br>
  <input type="checkbox" value="car"> <span>I have a car</span><br>
  <input type="checkbox" value="motorcycle" disabled> <span>I have a motorcycle</span>
</body>
```

> 위의 예시에서 `checked="checked"`를 갖는 input 태그는 `:checked`의 대상이된다. `disabled` 속성을 갖는 태그는 사용할 수 없어 `:disabled`의 대상이된다. 반대로 사용이 가능한 태그들은 `:enabled`의 대상이 된다.



> 구조와 관련된 가상 클래스 셀렉터들도 존재한다. 그 종류와 의미는 다음과 같다. nth의 셀렉터들에 `(n)`에는 특정 숫자를 정의할 수도 있으나, `(2n)`, `(2n+1)`등의 표현식을 넣어 짝수나 홀수 번째 요소를 선택하도록 응용할 수도 있다.

| pseudo-class       | Description                                    |
| ------------------ | ---------------------------------------------- |
| :first-child       | 셀렉터 중 첫번째 자식인 요소만 선택한다.       |
| :last-child        | 셀렉터 중 마지막 자식인 요소만 선택한다.       |
| :nth-child(n)      | 셀렉터 중 앞에서 n번째 자식인 요소만 선택한다. |
| :nth-last-child(n) | 셀렉터 중 뒤에서 n번째 자식인 요소만 선택한다. |



> 방금 소개한 가상 클래스 셀렉터들과 유사하지만, 형제 태그가 아닌 동일한 종류의 태그만을 순서의 기준으로 삼는 가상 클래스들도 존재한다. 종류와 의미는 다음과 같다.

| pseudo-class         | Description                                        |
| -------------------- | -------------------------------------------------- |
| :first-of-type       | 셀렉터 중 첫번째로 등장하는 요소만 선택한다.       |
| :last-of-type        | 셀렉터 중 마지막으로 등장하는 요소만 선택한다.     |
| :nth-of-type(n)      | 셀렉터 중 앞에서 n번째로 등장하는 요소만 선택한다. |
| :nth-last-of-type(n) | 셀렉터 중 뒤에서 n번째로 등장하는 요소만 선택한다. |



> input 태그나 form 태그의 값의 유효성이 검증되었는가의 여부에 따라 스타일을 지정하는 셀렉터들도 존재한다.

| pseudo-class | Description                                  |
| ------------ | -------------------------------------------- |
| :valid       | 유효성 검증에 성공한 input, form 요소를 선택 |
| :invalid     | 유효성 검증에 실패한 input, form 요소를 선택 |

> 예시는 다음과 같다.

```html
<head>
  <style>
    input[type="text"]:valid {
      background-color: greenyellow;
    }

    input[type="text"]:invalid {
      background-color: red;
    }
  </style>
</head>
<body>
  <label>입력값이 반드시 필요
    <input type="text" required>
  </label>
  <br>
  <label>특수문자를 포함하지 않는 4자리 문자 또는 숫자
    <input type="text" value="ab1!"
      pattern="[a-zA-Z0-9]{4}" required>
  </label>
  <br>
  <label>핸드폰 번호 형식
    <input type="text" value="010-1111-2222"
      pattern="^\d{3}-\d{3,4}-\d{4}$" required>
  </label>
</body>
```



##### 부정 셀렉터

> 부정 셀렉터로 정의한 기준에 해당하지 않는 모든 요소를 선택한다. 대부분의 가상 클래스 셀렉터들이 활용성이 높은 편이 아니라 잘 사용되지는 않지만, 부정 셀렉터는 링크 셀렉터 만큼이나 활용하기 쉽고 빈번하게 사용된다.
>
> 사용 패턴은 다음과 같다.

```css
:not(selector)
```

> 예시는 다음과 같다.

```html
<style>
    /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
    input:not([type=password]) {
      background: yellow;
    }
</style>
```





#### Pseudo-Element Selector

------

> 요소의 특정 부분에만 스타일을 적용하고자 할 때 사용된다. 특정 부분이란 요소 컨텐츠의 첫글자나 첫 줄, 앞 또는 뒤를 의미한다. 가상 클래스 셀렉터와 구분하기 위해 `::`를 사용한다. 가상 클래스 셀렉터와 마찬가지로 CSS 표준에 정의된 이름만 사용한다.

```css
selector::pseudo-element {
  property:value;
}
```

> 가상 요소 셀렉터의 종류와 의미는 다음과 같다.

| pseudo-element | Description                                             |
| -------------- | ------------------------------------------------------- |
| ::first-letter | 콘텐츠의 첫글자를 선택한다.                             |
| ::first-line   | 콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다. |
| ::after        | 콘텐츠의 뒤에 위치하는 공간을 선택한다.                 |
| ::before       | 콘텐츠의 앞에 위치하는 공간을 선택한다.                 |
| ::selection    | 콘텐츠 중 마우스로 드래그한 부분을 선택한다.            |

