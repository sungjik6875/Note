#### Animation

------

> 애니메이션 효과는 HTML 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 변화시킨다. 애니메이션은 애니메이션을 나타내는 CSS 스타일과 애니메이션의  sequence를 나타내는 복수의 키프레임(@keyframes)들로 이루어진다.



##### transition / animation

> transition으로도 어느 정도의 애니메이션 효과를 표현할 수 있으나 animation보다 제한적이다. 일반적으로 트랜지션 효과는 요소 프로퍼티 값이 다른 값으로 변화할 때 주로 사용하며 요소의 로드와 함께 자동으로 발동되지 않는다. 반드시 :hover와 같은 가상 클래스 선택자나 자바스크립트의 이벤트와 같은 부수적 액션에 의해 발동된다.
>
> 즉 transition 프로퍼티는 단순히 요소의 프로퍼티 변화에 주안점이 있다면 animation 프로퍼티는 하나의 시나리오룰 구성하여 시나리오 내에서 세부적인 움직임을 시간 흐름 단위로 제어할 수 있고, 전체 줄거리의 재생과 정지, 반복까지 제어할 수 있다.



##### CSS animation / JS animation

> 일반적으로 CSS 애니메이션을 사용하면 기존의 JS 기반 애니메이션 실행과 비교하여 더 나은 렌더링 성능을 제공한다고 알려져 있다. 그러나 경우에 따라서는 JS를 사용하는 것이 나을 수도 있다. 두 방법 중 어떤 방법을 사용해서 애니메이션을 구현할 지 고르는 기준은 일반적으로 다음과 같다.
>
> 비교적 작은 효과나 CSS만으로도 충분한 효과를 볼 수 있는 것은 CSS를 사용한다. 예를 들어 요소의 width 변경 애니메이션은 JS를 사용하는 것보다 훨씬 간편하며 효과적이다. 반면 세밀한 제어를 위해서는 JS 사용이 바람직하다. 가령 바운스, 중지, 일시 중지, 되감기 또는 감속과 같은 고급 효과는 JS를 사용하여 구현하는 것이 유용하다.
>
> 그러나 가장 중요한 기준은 브라우저에서 애니메이션 효과가 부드럽게 실행되는지의 여부이다. 또한 애니메이션 효과 작성에 소요되는 시간과 수고도 고려해야 한다. 이런 사항들을 고려하여 어떤 방법을 선택할지 결정하여야 한다.



##### Animation의 property

> 애니메이션의 프로퍼티의 종류와 의미는 다음과 같다.

> ##### animation-name 
>
> `@keyframes` 애니메이션 이름을 지정한다.

> ##### animation-duration (기본값: 0s)
>
> 한 싸이클의 애니메이션에 소요되는 시간을 지정한다.

> ##### animation-timing-function (기본값: ease)
>
> 애니메이션 효과를 위한 타이밍 함수를 지정한다.

> ##### animation-delay (기본값: 0s)
>
> 요소가 로드된 시점과 애니메이션이 실제로 시작하는 사이의 대기 시간을 지정한다.

> ##### animation-iteration-count (기본값: 1)
>
> 애니메이션 재생 횟수를 지정한다.

> ##### animation-direction (기본값: normal)
>
> 애니메이션이 종료된 이후 반복될 때 진행하는 방향을 지정한다.

> ##### animation-fill-mode
>
> 애니메이션 미실행 시(종료 또는 대기) 요소의 스타일을 지정한다.

> ##### animation-play-state (기본값: running)
>
> 애니메이션 재생 상태(재생 또는 중지)를 지정한다.

> ##### animation
>
> 모든 애니메이션 프로퍼티를 한번에 지정한다.



##### @keyframes

> CSS에서 애니메이션과 트랜지션 작동 방식의 주된 차이로 애니메이션은 @keyframes를 사용한다는 점이 있다. @keyframes를 사용하면 애니메이션의 흐름 중 여러 시점에서 CSS 프로퍼티 값을 지정할 수 있다.
>
> @keyframse에서 시점을 지정하는 방법으로는 from과 to를 사용하여 지정하는 방법과 %를 사용하여 지정하는 방법이 있다.
>
> 다음의 예시를 보자.

```css
div {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: move;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

/* @keyframes rule */
@keyframes move {
    /* keyframe */
    from {
        left: 0;
    }
    /* keyframe */
    to {
        left: 300px;
    }
}
```

> 위의 예시의 애니메이션 효과를 살펴보자. position이 absolute이고 from의 left는 0, to의 left는 300px이므로 이 애니메이션은 요소를 오른쪽으로 300px만큼 이동시키는 애니메이션이다. 이 애니메이션은 5초 동안 실행되나, 무한 반복된다.
>
> from과 to의 키워드 대신 %를 사용하여 지정할 수도 있다. %단위로 키프레임을 삽입하여 더욱 세밀한 제어가 가능하다.

```css
@keyframes move {
  0%   { left: 0; }
  50%  { left: 100px; }
  100% { left: 300px; }
}
```



##### animation-name

> animation을 기술하는 @keyframe을 지정함으로써 해당 요소에 애니메이션을 적용하고자 할 때 사용한다. 다음의 예시에서처럼 하나 이상의 애니메이션 이름을 지정할 수 있다.

```css
div {
    ...
    animation-name: move, fadeOut, changeColor;
    animation-duration: 5s;
}
@keyframes move {
    from { left: 0; }
    to   { left: 300px; }
}
@keyframes fadeOut {
    from { opacity: 1; }
    to   { opacity: 0; }
}
@keyframes changeColor {
    from { background-color: red; }
    to   { background-color: blue; }
}
```



##### animation-duration

> 한 싸이클의 애니메이션에 소요되는 시간을 초 단위나 밀리 초 단위로 지정한다. duration의 값은 트랜지션에서 처럼 반드시 지정해야 한다. 지정하지 않는 경우 기본값인 0s가 세팅되어 애니메이션이 실행조차 되지 않기 때문이다.



##### animation-timing-function

> 애니메이션 효과를 위한 수치 함수를 지정한다. 키워드 및 효과는 트랜지션에서의 효과와 동일하다.



##### animation-delay

> 요소가 로드된 시점과 애니메이션이 실제로 시작하는 사이에 대기하는 시간을 초 단위 또는 밀리 초 단위로 지정한다.



##### animation-iteration-count

> 애니메이션 주기의 재생 횟수를 지정한다. 기본값은 1이며 infinite 키워드를 사용하여 무한 반복 재생하도록 할 수도 있다.



##### animation-direction

> 애니메이션이 두 번 이상 반복되어 실행 될 경우 진행되는 방향을 지정한다. 프로퍼티의 키워드 값과 설명은 다음과 같다.

| 프로퍼티값        | 설명                                                |
| ----------------- | --------------------------------------------------- |
| normal            | 기본값으로 from(0%)에서 to(100%) 방향으로 진행한다. |
| reverse           | to에서 from 방향으로 진행한다.                      |
| alternate         | 홀수번째는 normal로, 짝수번째는 reverse로 진행한다. |
| alternate-reverse | 홀수번째는 reverse로, 짝수번째는 normal로 진행한다. |



##### animation-fill-mode

> 애니메이션 미실행 시(대기 또는 종료) 요소의 스타일을 지정한다. 4개의 예약된 키워드를 값으로 사용하며 각 값에 대한 설명은 다음과 같다.

> ##### none
>
> 대기 : 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
>
> 종료 : 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티 값을 되돌리고 종료한다.

> ##### forwards
>
> 대기 : 시작 프레임에 설정한 스타일을 적용하지 않고 대기한다.
>
> 종료 : 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.

> ##### backwards
>
> 대기 : 시작 프레임에 설정한 스타일을 적용하고 대기한다.
>
> 종료 : 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티 값을 되돌리고 종료한다.

> ##### both
>
> 대기 : 시작 프레임에 설정한 스타일을 적용하고 대기한다.
>
> 종료 : 종료 프레임에 설정한 스타일을 적용하고 종료한다.



##### animation-play-state

> 애니메이션 재생 상태(재생 또는 중지)를 지정한다. 기본값은 running이며, paused 키워드로 중지를  시킬 수 있다.



##### animation

> 모든 애니메이션 프로퍼티를 한번에 지정한다. 값을 지정하지 않은 프로퍼티에는 기본값이 지정된다. 지정 방법은 다음과 같다.

```
animation: name duration timing-function delay iteration-count direction fill-mode  play-state;
```

> animation-duration은 반드시 지정해야 한다. 지정하지 않은 경우 기본값 0s가 셋팅되어 어떠한 애니메이션도 실행되지 않는다. 기본값은 아래와 같다.

```
none 0 ease 0 1 normal none running
```

