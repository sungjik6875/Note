#### text-shadow

------

> 텍스트에 그림자 효과를 부여한다. 값으로는 수평 /수직 오프셋, 블러 효과, 그림자 색상을 순서대로 부여한다. 

```
text-shadow: hor-offset, ver-offset, blur-rad, shadow-color;
```



##### 프로퍼티 값

> ##### Horizontal-offset (px)
>
> 그림자를 텍스트의 오른쪽으로 지정값만큼 이동시킨다.

> ##### Vertical-offset (px)
>
> 그림자를 텍스트의 아래 방향으로 지정값만큼 이동시킨다.

> ##### Blur-radius (px, 양수값, 생략 가능)
>
> 그림자의 흐림 정도를 지정한다. 지정값만큼 그림자가 커지고 흐려진다.

> ##### Shadow-color (color, 생략 가능)
>
> 그림자의 색상을 지정한다.





#### box-shadow

------

> 요소에 그림자 효과를 부여하는 프로퍼티이다. 값으로는 인셋, 수평/수직 오프셋, 블러 효과, 확장효과, 그림자 색상을 순서대로 부여한다.

```
box-shadow: inset, hor-offset, ver-offset, blur-rad, spread, shadow-color;
```



##### 프로퍼티 값

> horizontal-offset, vertical-offset, blur-radius, shadow-color에 대한 설명은 위의 text-shadow와 동일하다. 따라서 inset, spread만 짚어보자.

> ##### Inset (생략 가능)
>
> inset 키워드를 지정하여 사용한다. inset 설정 시 그림자가 요소의 내부에 위치한다. 적용 예시는 다음과 같다.

![example_1](./image/css_11_1.png)

> ##### spread (px, 음수/양수, 생략 가능)
>
> 그림자를 확장시키거나 축소시킨다.

