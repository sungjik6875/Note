#### Function

------

> Function은 인자를 받는다는 점에서 Mixin과 유사하다. 그런데 Mixin은 style 마크업을 통째로 리턴하는 반면에 Function은 `@return`을 통해 특정 값을 리턴한다는 차이가 있다.
>
> 예시를 보자.

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
    @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
// 컴파일 결과 width는 240px이다.
```

