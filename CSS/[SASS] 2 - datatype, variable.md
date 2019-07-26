#### Datatype

------

> 7가지의 데이터타입이 있다.



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
> 따라서 위 코드를 실행하면 footer에서 호출된 $color로 인해 컴파일 에러가 발생하는 것을 알 수 있다. 만약 $color를 선언할 위치를 옮기지 않고 전역변수로 만드려면 다음과 같이 `!global`을 붙여주면 된다.

```scss
#main {
    $color: #333 !global; 
}
```


