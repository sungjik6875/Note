#### Transform

------

> 트랜스폼은 요소에 이동(translate), 회전(rotate), 확대축소(scale), 비틀기(skew) 효과를 부여하기 위한 함수를 제공한다. 단 애니메이션 효과를 제공하지는 않기 때문에 정의된 프로퍼티가 바로 적용되어 화면에 표시된다. 트랜스폼은 애니메이션 효과를 위해 사용하여야 하는 것은 아니지만 애니메이션 효과를 부여할 필요가 있다면 트랜지션이나 애니메이션과 함께 사용한다.



##### 2D transform

------

> 2D 트랜스폼은 프로퍼티 값으로 변환함수(transform function)를 사용한다. 변환함수는 다음과 같다.

> ##### translate(x, y) / translateX(n) / translateY(n)
>
> 요소의 위치를 x축 방향, y축 방향으로 n만큼 이동시킨다. 크기의 단위를 사용한다.

> ##### scale(x, y) / scaleX(n) / scaleY(n)
>
> 요소의 크기를 x축 방향, y축 방향으로 n배 확대 또는 축소시킨다. 0이나 양수를 사용한다.

> ##### skew(x, y) / skewX(n) / skewY(n)
>
> 요소를 x축 방향, y축 방향으로 n만큼 기울인다. 각도의 단위를 사용한다.

> ##### rotate(n)
>
> 요소를 n만큼 회전시킨다. 각도의 단위를 사용한다.

> ##### transform
>
> 변환함수를 프로퍼티값으로 쉼표없이 나열한다. 나열순서에 따라 차례대로 효과가 적용된다. 지정방법은 다음과 같다.

```
transform: func1 func2 func3 ...;
```



##### transform-origin

> 요소의 기본기준점을 설정할 때 사용된다. 기본기준점은 요소의 정중앙이다(50%, 50%). 이동은 기준점을 변경하여도 일정 거리만큼 이동하므로 의미가 없다. 설정값으로 %, px, top left(0 0), bottom right(100% 100%)을 사용할 수 있다. 
>
> 사용 예시는 다음과 같다.

```scss
.scale1:hover {
	transition: transform 1s linear;
	transform-origin: 0 0;
	transform: scale(.5);
}

.scale3:hover {
    transition: transform 1s linear;
    transform-origin: 100% 100%;
    transform: scale(.5);
}
```



##### 3d transform

------

> 3d 트랜스폼은 프로퍼티 값으로 변환 함수를 사용한다. 사용할 수 있는 변환함수는 다음과 같다.

> ##### translate3d(x, y, z) / translateX(n) / translateY(n) / translateZ(n)
>
> 요소의 위치를 x축, y축, z축 방향으로 n만큼 이동시킨다. 크기의 단위를 사용한다.

> ##### scale3d(x, y, z) / scaleX(n) / scaleY(n) / scaleZ(n)
>
> 요소의 크기를 x축, y축, z축 방향으로 n배 확대 또는 축소시킨다. 0이나 양수를 사용한다.

> ##### rotate3d(x, y, z) / rotateX(n) / rotateY(n) / rotateZ(n)
>
> 요소를 x축, y축, z축 방향으로 n만큼 회전시킨다. 각도의 단위를 사용한다.