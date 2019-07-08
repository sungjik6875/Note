#### Mixin

------

> 중복 기술을 방지하기 위해 사용빈도가 높은 마크업을 사전에 정의한 뒤, 필요할 때마다 호출하여 사용하는 방법이다.
>
> `@extend`와 유사하나 프로그래밍 언어의 함수와 같이 인자를 받을 수 있다. 사용법은 매우 간단하다. `@mixin`으로 선언한다음 호출시에 `@include`로 호출한다.
>
> 예시를 보자.

```scss
// 지름이 50px인 원을 정의한다.
@mixin circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

// 위에서 정의한 circle을 호출한다음 배경을 추가로 지정한다.
.box {
    @include circle;
    
    background: #f00;
}
```

> 위 코드의 컴파일 결과는 다음과 같다.

```css
.box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f00;
}
```



> @extend와 유사하지만 다른점은 인자를 사용할 수 있다는 점이다.

```scss
@mixin circle($size) {
    width: $size;
    height: $size;
    border-radius: 50%;
}

.box {
    @include circle(100px);
    
    background: #f00;
}
```

> 컴파일 결과는 아래와 같다.

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f00;
}
```



> 인자의 default 값을 설정할 수도 있다.

```scss
@mixin circle($size: 10px) {
  width: $size;
  height: $size;
  border-radius: 50%;
}

.box {
  // 인자가 없으면 초기값을 사용한다.
  @include circle();
  background: #f00;
}
```

> 컴파일 결과는 아래와 같다.

```css
.box {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f00;
}
```



> mixin을 잘 활용한 예시는 다음과 같다.

```scss
@mixin vendorPrefix($property, $value) {
    @each $prefix in -webkit, -moz-, -ms-, -o-, '' {
        #{$prefix}#{$property}: $value;
    }
}

.border_radius {
    @include vendorPrefix(transition, 0.5s);
}
```

> 컴파일 결과는 다음과 같다.

```css
.border_radius {
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
```



> 또 다른 예시로는 다음이 있다.

```scss
@mixin position($position, $top: null, $right: null, $bottom: null, $left: null) {
    position: $position;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
}

.box {
    @include position(absolute, $top: 10px, $left: 50%);
}
```

> 컴파일 결과는 다음과 같다.

```scss
.box {
    position: absolute;
    top: 10px;
    left: 50%;
}
```

