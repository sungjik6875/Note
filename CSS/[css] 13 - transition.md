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



##### transition-property