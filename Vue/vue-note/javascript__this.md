> 자바스크립트에서 변수를 선언하면 기본적으로 전역 레벨인 최상단에서 생성이 된다. 이것으로도 유추할 수 있겠지만 이런 상황에서 this는 최상단 객체인 window를 가리킨다.
>
> 그렇다면 함수 내부에 this를 정의하면 어떨까?

```javascript
function sum(a, b) {
    console.log(this);
    return a + b;
}

sum(10, 20);
```

> 실행해보면 알겠지만 이 경우에도 this는 window 객체를 가리킨다.
>
> 그런데 다음의 예시를 보면 조금 혼란스럽다.

```javascript
function Vue(el) {
    console.log(this);
    this.el = el;
}

new Vue('#app');
```

> this로 출력되는 것은 Vue 인스턴스이다. 이번에는 window를 가리키지 않는다.
>
> 이런 경우로 인해 this가 가리키는 대상은 문맥에 따라 바뀌기도 한다. 보통 비동기 처리시 function()으로 선언한 내부에서는 내부에서의 this가 Vue를 가리키지 않는 것을 확인할 수 있다. 따라서 this를 이전에 `var vm = this;`와 같이 바인딩을 시킨 후 vm을 통해 연결하는 방법을 사용해야 한다.
>
> 그러나 arrow function에서는 this가 여전히 Vue를 가리키므로 번거롭게 바인딩하지 않아도 된다.

