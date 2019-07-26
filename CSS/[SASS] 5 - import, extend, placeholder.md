#### @import

------

> 1개의 CSS 파일에 모든 스타일을 기술하면 가독성에 좋지 않다. 기능에 따라 CSS 파일을 분리하면 코드의 재사용성과 유지 보수 측면에서 매우 유리하다. 따라서 특정한 기준에 따라 파일을 분리하여 개발하는 것이 효과적인 방법이다.
>
> 그리고 해당 파일의 스타일이 필요할 때에는 @import 디렉티브를 사용하여 해당 파일의 스타일을 사용할 수 있다. 활용 예시는 다음과 같다.

```scss
@import "foo.scss";

// 확장자와 파일명 선두의 underscore는 생략이 가능하다.
@import "foo";

// import multiple files
@import "rounded-corners", "text-shadow";

$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}")
```



> 이전에 !default의 유용성을 확인하기 위해 partial이라는 개념을 언급한 적이 있다. CSS의 파일을 여러 개의 파일로 분할하는 것 또는 분할된 파일을 partial이라 하며 partial된 SASS 파일명의 선두에는 underscore(`_`)를 붙인다.
>
> underscore를 붙이는 것은 단순히 컨벤션은 아니다. underscore를 붙일 경우 이 파일은 import된 파일에서 통합적으로 컴파일이 된다. 독립적으로 컴파일이 되지는 않는다.
>
> import는 top-level에서 사용하는 것이 일반적이지만 다음과 같이 CSS rule 내부나 @media rule 내부에 사용할 수도 있다.

```scss
// _example.scss
.example {
    color: red;
}
```

```scss
#main {
    @import "example";
}
```

> 컴파일 결과는 아래와 같다.

```css
#main .example {
    color: red;
}
```





#### @extend

------

> 기존 스타일을 상속하고자 하는 경우에 사용한다. 상속의 목적은 일반적인 프로그래밍 언어에서의 상속의 목적과 유사하다. 기존에 선언된 스타일을 차용하되, 재정의가 필요한 속성에 대해서는 새로 선언하는 것이다.
>
> 예시는 다음과 같다.

```scss
.error {
    border: 1px #f00;
    background-color: blue;
}

.seriousError {
    @extend .error;
    
    border-width: 3px;
    border-color: darkblue;
}
```



> 위 코드의  컴파일 결과는 아래와 같다. .error와 .seriousError가 공통으로 사용하는 프로퍼티를 묶어 합리적인 룰셋을 생성한다.

```css
.error, .seriousError {
    border: 1px #f00;
   	background-color: blue;
}

.seriousError {
    border-width: 3px;
    border-color: darkblue;
}
```



> @extend를 @media 블록과 같이 사용하는 경우 제대로 작동하지 않는다. @media 안에서 외부의 셀렉터를 @extend 할 수 없다.

```scss
.foo {
    color: red;
}

@media print {
    .bar {
        @extend .foo; // 에러 발생
    }
}
```



##### @extend의 부작용

> @extend는 사용시 컴파일 후에 자신의 셀렉터가 어디에 첨부될 지 예상하기 어렵다. 예상하기 어려우므로 예상치 못한 부작용의 우려가 있다. 따라서 가급적 사용을 자제하며, 대신 Mixin의 사용을 권장한다.





#### Placeholder Selectors

------

> Placeholder는 SASS 3.2부터 지원하는 기능으로 재이용이 가능한 rule set을 %키워드로 지정하는 extend전용 셀렉터이다. 오로지 상속만을 위한 셀렉터로써 %로 지정된 자신은 컴파일이 되지 않는 특징이 있다.
>
> 예시를 보자.

```scss
%input-style {
  font-size: 14px;
}

.input-black {
  @extend %input-style;

  color: black;
}

.input-red {
  @extend %input-style;

  color: red;
}
```



> 위 코드의 컴파일 결과는 다음과 같다. input-style은 컴파일 되지 않았음을 확인할 수 있다.

```CSS
.input-black, .input-red {
    font-size: 14px;
}

.input-black {
    color: black;
}

.input-red {
    color: red;
}
```

