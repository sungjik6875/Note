#### Transition

------

> 트랜지션은 CSS 프로퍼티의 값이 변화할 때, 프로퍼티 값의 변화가 일정시간에 걸쳐 일어나도록 하는 것이다. 트랜지션을 설정하지 않을 경우 CSS 프로퍼티의 값은 시간의 지체없이 바로 바뀌게 된다. 트랜지션을 설정하는 이유는 이러한 변화를 부드럽게 하는 등의 목적을 위해 변화가 일어나는 시간을 조정하기 위함이다.
>
> 예시는 다음과 같다.

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background: red;
    }
    div:hover {
        border-radius: 50%;
        background: blue;
    }
</style>
```

> 위의 경우 트랜지션이 설정되지 않았기 때문에 마우스 호버시 바로 바뀌는 것을 확인할 수 있다.

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background: red;
        /* 트랜지션 효과: 모든 프로퍼티의 변화를 2초에 걸쳐 전환한다. */
        transition: all 2s;
    }
    div:hover {
        border-radius: 50%;
        background: blue;
    }
</style>
```

> 그러나 트랜지션을 설정하면 변화가 부드럽게 일어나는 것을 확인할 수 있다.
>
> 그런데 이 트랜지션도 어디에서 기술하느냐에 따라 다른데, 만약 div:hover 셀렉터의 룰셋에 트랜지션을 설정하면 마우스가 호버될때에는 트랜지션이 발생하지만, 마우스가 내려올 때에는 트랜지션이 발동하지 않는다.

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background: red;
    }
    div:hover {
        background: blue;
        border-radius: 50%;
        /* hover on에서만 발동한다. */
        transition: all 2s;
    }
</style>
```



> 트랜지션은 자동으로 발동되지 않는다. :hover와 같은 가상 클래스 선택자나 JS의 액션에 의해 발동한다. 만약 트랜지션과 같은 변화를 자동으로 일어나게 하려면 애니메이션을 사용해야 한다.



##### transition의 property

> transition과 관련된 프로퍼티는 다음과 같다.

> ##### transition-property (기본값: all)
>
> 트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다. 

> ##### transition-duaration (기본값: 0s)
>
> 트랜지션이 일어나는 지속시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다.

> ##### transition-timing-function (기본값: ease)
>
> 트랜지션 효과를 위한 수치 함수를 지정한다.

> ##### transition-delay (기본값: 0s)
>
> 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다.

> ##### transition
>
> 모든 트랜지션 프로퍼티를 한번에 지정한다.



##### transition-property

> transition-property 프로퍼티는 트랜지션의 대상이 되는 CSS 프로퍼티 명을 지정한다. 지정하지 않는 경우 모든 프로퍼티가 트랜지션의 대상이 된다. 복수의 프로퍼티를 지정하는 경우 쉼표로 구분한다.
>
> 예시는 다음과 같다.

```css
div {
      ...
      transition-property: width, background-color;
      transition-duration: 2s, 2s;
    }
div:hover {
    width: 300px;
    background-color: blue;
}
```

> 그러나 주의해야 할 사항이 있다. 모든 CSS 프로퍼티가 트랜지션의 대상이 될 수는 없다. 가령 width, font-size, background-color 등은 대상이 되지만 display 프로퍼티는 대상이 되지 않는다.



##### ※ transition과 성능저하

> 요소의 프로퍼티 값이 변화하면 브라우저는 프로퍼티 값의 변화에 영향을 받는 모든 요소의 기하값(위치와 크기 등)을 계산하여 레이아웃 작업을 수행한다. 이것을 브라우저에게 스트레스를 주어 성능 저하의 요인이 된다.  특히 다수의 자식 요소를 가지고 있는 요소(body 요소 등)가 변겨오디면 모든 자식 요소의 기하값이 재계산될 수도 있다. 따라서 layout에 영향을 주는 트랜지션 효과는 회피하도록 노력해야한다.
>
> 레이아웃에 영향을 주는 프로퍼티는 다음과 같다.

```
width height padding margin border
display position float overflow
top left right bottom
font-size font-family font-weight
text-align vertical-align line-height
clear white-space
```



##### transition-duration

> 트랜지션에 일어나는 지속시간을 초 단위(s), 또는 밀리 초 단위(ms)로 지정한다. 프로퍼티 값을 지정하지 않을 경우 기본값 0s이 적용되어 어떠한 트랜지션 효과도 볼 수 없다.
>
> transition-duration의 프로퍼티 값은 transition-property의 프로퍼티 값과 1:1 대응한다. 이에 대한 예시는 다음과 같다.

```css
div {
  transition-property: width;
  transition-duration: 2s;
}
/* width 프로퍼티가 2초에 걸쳐 변화한다. */

div {
  transition-property: width, opacity;
  transition-duration: 2s, 4s;
}
/* width 프로퍼티는 2ch, opacity 프로퍼티는 4초의 지속시간을 갖는다. */

div {
  transition-property: width, opacity, left, top;
  transition-duration: 2s, 1s;
}
/* width, left는 2초, opacity, top은 1초의 지속시간을 갖는다. */
```

> transition-property와 transition-duration은 transition에서 한 번에 기술이 가능하다.

```css
div {
  transition: width 2s, opacity 4s;
}
```



##### transition-timing-function

> 트랜지션 효과의 변화 흐름, 시간에 따른 변화 속도를 지정한다. 기본값은 ease이며, 프로퍼티의 값으로는 다음의 5개의 키워드가 제공된다.
>
> 각 키워드에 대한 설명은 다음과 같다.

| 프로퍼티값  | 효과                                                   |
| ----------- | ------------------------------------------------------ |
| ease        | 느리게 시작하여 점점 빨라졌다가 느려지면서 종료        |
| linear      | 시작부터 종료까지 같은 속도로 변화한다.                |
| ease-in     | 느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 |
| ease-out    | 일정한 속도의 등속으로 시작하다 점점 느려지면서 종료   |
| ease-in-out | ease와 비슷하게 느리게 시작하여 느려지면서 종료        |

> 사용 예시는 다음과 같다.



##### transition-delay

> 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 지정한다. 지정할 경우 프로퍼티의 값이 변화하여도 즉시 실행되지 않고, 일정 시간 대기한 후 트랜지션이 실행되도록 한다.
>
> transition-timing-function과 transition-delay의 사용 예시는 다음과 같다.

```css
div {
	width: 100px;
    transition: width 2s;
    transition-timing-function: ease-in;
    transition-delay: 1s;
}
div:hover {
    width: 300px;
}
```



##### transition

> 모든 트랜지션 프로퍼티를 한번에 지정할 수 잇는 shorthand이다. 값을 지정하지 않은 프로퍼티에는 기본값이 지정된다. 지정 방법은 다음과 같다.

```
transition: property duration function delay;
```

> duration은 반드시 지정해야 한다. 지정하지 않는 경우 기본값인 0이 세팅되어 어떠한 트랜지션도 실행되지 않는다. transition의 기본값은 아래와 같다.

```css
div {
	transition: all 0 ease 0;
}
```

