#### float

------

> float 프로퍼티는 주로 레이아웃을 구성할 때 블록 레벨 요소를 가로 정렬하기 위해 사용한다. flexbox 레이아웃을 사용하면 더욱 간단하게 정렬을 구현할 수 있지만 flexbox 레이아웃을 지원하지 않는 IE를 고려하면 float 프로퍼티를 사용해야 한다.
>
> float 프로퍼티는 해당 요소를 다음 요소 위에 부유하도록 한다. 여기서 부유한다는 것은 요소가 기본 레이아웃 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽에 이동하는 것이다.
>
> float 프로퍼티를 사용 시에는 position 프로퍼티의 값을 absolute로 지정해서는 안된다.
>
> float의 값과 의미는 다음과 같다.

| 값    | 의미                          |
| ----- | ----------------------------- |
| none  | 기본값, 부유하지 않는다.      |
| right | 요소를 오른쪽으로 이동시킨다. |
| left  | 요소를 왼쪽으로 이동시킨다.   |



##### float 프로퍼티와 정렬

> float 프로퍼티를 사용하지 않는 블록 레벨 요소들은 수직으로 정렬된다. 그러나 float 값으로 right나 left를 부여하면 각각 오른쪽, 왼쪽 순으로 수평 정렬된다. 오른쪽 정렬의 경우 먼저 기술된 요소가 가장 오른쪽에 출력되므로 출력이 역순이 된다.
>
> float 프로퍼티는 좌, 우측의 수평 정렬만 할 수 있다. 수평 방향의 중앙 정렬을 하려면 `margin: 0 auto;` 방식을 사용하면 된다.



##### float 프로퍼티와 width

![example_1](./image/css_8_1.png)

> 블록 레벨 요소의 width의 기본값은 100%이다. 그러나 float 프로퍼티를 선언하면 width가 inline 요소처럼 content에 맞게 조정되고, 부유하는 특성을 갖는다.
>
> 부유 특성을 갖게 되면 다음 요소 위에 부유하게 되는데, 이 말의 의미는 다음 요소 위에 해당 요소가 겹쳐진 상태로 전면에 출력되는 것을 의미한다. 이때 해당 요소의 width는 content에 맞도록 조정되지만, 다음 요소의 width가 줄어들지는 않는다. 이 다음 요소는 float를 선언하지 않았으므로 본래의 width를 유지하기 때문이다. 따라서 다음 요소의 width는 그대로 유지한 채, 다음 요소 위에 해당 요소가 전면에 위치하게 된다. 





#### float 프로퍼티 관련 문제 해결법

------



##### float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제

> 위의 예시 이미지에서 두 요소는 차례로 정렬된 것 처럼 보인다. 그러나 사실은 float 프로퍼티가 선언된 요소가 다음 요소 위에 부유하는 상태이다. 따라서 두 요소 간의 margin은 제대로 표현되지 않는다.
>
> 이는 두 번째 요소에 float를 선언하지 않았기 때문이다. 따라서 두 번째 요소에도 float를 선언하면 해결되지만, 이 경우 두 번째 요소의 너비도 content에 맞추어 조정된다는 다른 문제에 부딪힌다. 아래의 이미지 처럼 표현되지는 않는다.

![example_2](./image/css_8_2.png)

> 위의 이미지처럼 표현하길 원한다면 두번째 프로퍼티에 `overflow: hidden;`을 선언하면 된다. 부모 요소의 영역을 넘치는 부분을 숨김으로써 위와 같이 margin을 표현하도록 할 수 있다.



##### float 프로퍼티가 선언된 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제

![example_3](./image/css_8_3.png)

> float으로 선언된 자식 요소를 포함할 경우, 부모 요소의 높이가 정상적인 값을 갖지 못하는 문제가 발생한다. float 요소는 일반적인 흐름상에 존재하지 않으므로 float 요소의 높이를 알 수 없기 때문이다. 이러한 문제는 부모 요소 이후에 위치하는 요소의 정렬에도 문제를 발생시킨다.
>
> 이 문제를 해결하는 가장 쉬운 방법은 부모 요소에 `overflow: hidden;`을 선언하는 것이다.

![example_4](./image/css_8_4.png)

> 다른 방법으로 부모 요소에 float 프로퍼티를 선언하는 방법이 있다. 그러나 이 경우 부모 요소의 너비가 float된 두 자식 요소의 content 합에 맞추어 조정되므로 권장하는 방법은 아니다.
>
> 부모 요소의 영역이 끝나기 직전에 새로운 빈 요소를 만들어 `clear: both;`를 설정할 수도 있다. 그러나 의미없는 빈 요소를 사용하므로 권장할만한 방법은 아니다.
>
> 권장할 만한 다른 방법으로 ::after를 사용하는 방법이 있다. 부모요소의 ::after에 다음과 같이 선언한다.

```css
::after {
    content: "";
    display: block;
    clear: both;
}
```

> 또 다른 방법으로는 자식 요소에 선언한 float를 취소하고, `display: inline-block;`을 선언하는 것이다. 그러나 이 inline-block 요소가 연속으로 위치할 경우 두 요소 사이에 정의하지 않은 공백 4px가 자동 지정되므로 이를 주의해야 한다. 이를 회피하기 위해서는 부모 요소에 `font-size: 0;`을 선언하여 두 요소 사이에 정의하지 않은 공백을 제거한다.
