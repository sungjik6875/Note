### 고차 함수 (Higher Order Function)

------

> 고차 함수는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 다시 말해, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 자바스크립트의 함수는 일급 객체이므로 인자로 전달할 수 있고, 반환할 수 있다.
>
> 고차 함수의 예시는 다음과 같다.

```javascript
function makeCounter(func) {
  let num = 0;
  
  return function () {
    num = func(num);
    return num
  };
}
```

```javascript
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}
```

```javascript
const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());
```

