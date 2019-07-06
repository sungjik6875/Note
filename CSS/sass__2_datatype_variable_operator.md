#### Datatype

------

> 7가지의 데이터타입이 있다.

##### 

##### Number

> 숫자로 표기된다. 1.2, 13, 10px 등이 있다.



##### String

> 따옴표를 사용하는 경우와 사용하지 않는 경우의 두 가지 문자열을 인식한다.



##### Color

> 색상이다. blue, #04a3f9, rgba( 255, 0, 0, 0.5) 등이 있다.



##### boolean

> true, false의 불리언이 있다.



##### null

> 프로퍼티 값이 null인 변수가 지정되면 해당 룰셋은 출력되지 않는다.



##### list

> margin과 padding 프로퍼티 값 지정이나 font-family 프로퍼티값 지정 시 여러 프로퍼티가 공백이나 콤마로 구분되는데 이런 경우 프로퍼티의 데이터타입은 list이다.



##### map

> JSON과 유사한 방식으로 map-get 함수를 사용하여 원하는 값을 추출할 수 있다.

```scss
// map-get의 활용예시
$foundation-palette: (
	mars: red;
    saturn: brown;
    neptune: blue;
);

.mars {
    color: map-get($foundation-palette, mars);
}
// 이는 .mars { color: red; }와 같게 표현된다.
```





#### Variable

------

> Sass에서는 변수를 사용할 수 있다. 문자열, 숫자, 컬러 등을 사전에 변수에 저장하고 필요할 때 불러 사용할 수 있다. 변수명은 `$`로 시작한다.

```scss
$site_max_width: 960px;
$font_color: #333;

body {
    color: $font_color;
}

#main {
    width: 100%;
    max-width: $site_max_width;
}
```



##### 변수의 Scope

> 변수에는 유효범위가 존재한다.  선언된 변수는 선언된 블록과 그 블록의 하위 블록 내에서만 유효하다. 아래의 예시를 보자.

```scss
$width: 960px; // global variable

header {
  width: $width;
  margin: 0 auto;
}

#main {
  $color: #333; // local variable
  width: $width;
  margin: 20px auto;
  section {
    p {
      color: $color;

      a:link {
        color: $color;
      }
    }
  }
}

footer {
  width: $width;
  margin: 0 auto;
  color: $color;
}
```

> 선언된 변수로 $width와 $color가 있다. $width는 가장 상위 레벨에서 선언되었으므로, 전역변수이며 어디서든 유효하다. 그러나 $color의 경우 #main 내부에서 선언되었으므로, #main과 그 하위 블록 내에서만 유효하다.
>
> 따라서 위 코드를 실행하면 footer에서 호출된 $color로 인해 컴파일 에러가 발생하는 것을 알 수 있다. 만약 $color를 선언할 위치를 옮기지 않고 전역변수로 만드려면 다음과 같이 !global을 붙여주면 된다.

```scss
#main {
    $color: #333 !global; 
}
```





#### Operation

------

> 연산자를 활용하여 프로퍼티 값을 서로 연산하는 것이 가능하다. 



##### 숫자 연산

> 연산자의 종류와 기능은 다음과 같다.

| Operator | Description |
| -------- | ----------- |
| +        | 덧셈        |
| -        | 뺄셈        |
| *        | 곱셈        |
| /        | 나눗셈      |
| %        | 나머지      |
| ==       | 동등        |
| !=       | 부등        |



> 활용 예시는 다음과 같다.

```scss
$width: 100px;

#foo {
    width: $width + 10; // 110px
}

#bar {
    width: $width + 10in; // 1060px
}
```

> 연산 수행시 단위는 왼쪽에 위치한 피연산자를 기준으로 한다. 그러나 단위가 다를 경우 연산 수행에 실패하는 경우도 있다. 



##### 단위의 통일이 필요한 경우

```scss
$width: 100px;

#foo {
    width: $width + 10em; // Incompatible units: 'em' and 'px'.
}
```

> 위의 경우 em과 px의 합연산에 실패하여 에러가 출력된다. SASS는 %, em, rem, vh, vw, vmin, vmax와 같이 상대적인 값을 인식할 수 없다. 상대적인 값의 결과는 브라우저만이 알고 있다. 

```scss
#foo {
    width: 5% + 10%; // 15%
}
```

> 따라서 상대적인 값을 갖는 단위끼리의 연산은 위의 예시처럼 반드시 단위가 동일해야 한다. 혹은, 이제 소개할 calc 함수를 사용하면 된다.



##### calc 함수

> CSS3, IE9 이상에서 지원한다. 단위가 다른 경우에도 연산이 가능하게 한다.

```scss
#foo {
    width: calc(25% - 5px);
}
```



##### / (나누기)

> 나누기로 소개했지만 CSS에서 `/`는 나눗셈의 의미가 아니라 값을 분리하는 의미를 갖는다. SASS에서 `/`를 나누기로 사용하기 위해서는 다음의 조건들이 필요하다.

* 변수에 대해 사용
* 괄호 내에서 사용
* 다른 연산의 일부로서 사용

> 위 조건들을 활용한 예시는 다음과 같다.

```scss
$width: 1000px;

width: $width / 2;			  // 변수에 대해 사용, width: 500px;
height: (500px / 2); 		  // 괄호 내에서 사용, height: 250px;
margin-left: 5px + 8px / 2px; // 다른 연산의 일부로 사용, margin-left: 9px;
```



> 변수끼리의 나눗셈을 하고자 하는 경우에는 `#{}`(interpolation)을 사용하면 된다.

```scss
p {
    $font-size: 12px;
    $line-height: 30px;
    font: #{$font-size}/#{$line-height}; // 12px/30px
}
```





##### 문자열 연산

> `+` 연산자는 문자열을 연결하는 연산을 수행한다. 따옴표가 있는 문자열과 없는 문자열을 연산하는 경우, 좌측의 문자열을 기준으로 따옴표를 처리한다.

```scss
p {
    cursor: e + -resize; // e-resize
}

p:before {
    content: "Foo " + Bar;			// "Foo Bar"
    font-family: sans- + "serif";	// sans-serif
}
```





##### 불리언 연산

> 연산자의 종류와 기능은 다음과 같다.

| Operator | Description |
| -------- | ----------- |
| &&       | and         |
| \|\|     | or          |
| !        | not         |





##### 변수 삽입 (interpolation)

> 인터폴레이션은 변수의 값을 문자열 그대로 삽입한다. 인터폴레이션에 의해 삽입된 문자열은 연산의 대상으로 취급되지 않는다. 본래 변수는 프로퍼티의 값에서만 호출될 수 있었으나, 인터폴레이션을 활용하면 프로퍼티명과 셀렉터에서도 사용이 가능하다.

```scss
$name: foo;
$attr: border;

p.#{$name} {					// p.foo
    #{$attr}-color: blue; 		// border-color: blue;
}

.someclass {
    $font-size: 12px;
    $line-height: 30px;
    font: #{} / #{}; 		
    // 12px / 30px, / 전후로 공백이 있다. 위에서 비슷한 예시와 차이를 확인하자.
}
```





##### Ampersand (&)

> `&`는 부모요소를 참조하는 셀렉터이다. 예시는 다음과 같다.

```scss
a {
    color: #ccc;
    
    &.home {
        color: #fof;
    }
    
    &:hover {
        text-decoration: none;
    }
    
    > span {
        color: blue;
    }
    
    span {
        color: red;
    }
}
```

> 위 파일의 컴파일 결과는 아래와 같다.

```scss
a {
    color: #ccc;
}

a.home {
    color: #fof;
}

a:hover {
    text-decoration: none;
}

a > span {
    color: blue;
}

a span {
    color: red;
}
```



##### !default

> !default flag는 할당되지 않은 변수의 초기값을 설정한다.

```scss
$content: null;
$content: "Non-null content" !default;

#main {
    content: $content; // "Non-null content"
}
```



> 그러나 이미 값이 할당되어 있는 경우에는 초기값을 설정할 수 없다.

```scss
$content: "First content";
$content: "Second content?" !default;
$new_content: "First time reference" !default;

#main {
    content: $content; 		// "First content"
    new-content: #new_content; // "First tiem reference"
}
```

> 이러한 특성은 partial에 매우 유용하다. 유용함을 확인하기 위해 다음의 예시를 보자.
>
> 두 개의 파일 _font.scss와 main.scss를 생성해보자. main.scss는 내부에서 _font.scss를 import한다.



```scss
// _font.scss

$font-size: 16px !default;
$line-height: 1.5 !default;
$font-family: "Helvetica Neue", sans-serif !default;

body {
    font: #{$font-size}/$line-height $font-family;
}
```

```scss
// main.scss
$font-family: "Lucida Grande", sans-serif;

@import "font";
```

> 컴파일 결과는 다음과 같다.

```css
body {
    font: 16px/1.5 "Lucida Grnade", sans-serif;
}
```

> font-family 속성의 경우 main.scss에서 값을 지정하였으므로 default 값이 적용되지 않은 것을 확인할 수 있다. 만약 값을 지정하지 않았다면, default 값으로 적용되었을 것이다.

