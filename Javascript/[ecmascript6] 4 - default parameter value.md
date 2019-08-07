#### Default Parameter Value

------

> ES5에서는 파라미터에 기본값을 설정할 수 없었다. 따라서 적절한 인수가 전달되었는지는 함수 내부에서 확인할 필요가 있다.

```js
/ ES5
function plus(x, y) {
  x = x || 0; // 매개변수 x에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  y = y || 0; // 매개변수 y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.

  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```

> ES6에서는 파라미터에 기본값을 설정하여 함수 내에서 수행하던 파라미터 체크와 초기화를 편리하게 할 수 있다.

```js
// ES6
function plus(x = 0, y = 0) {
  // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```





#### Rest Parameter

------

> Rest 파라미터는 Spread 연산자(...)를 사용하여 파라미터를 정의한 것을 의미한다. Rest 파라미터를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받을 수 있다.
>
> 예시는 다음과 같다.

```js
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
// ... 연산자로 인해 파라미터가 Array 형태로 전달된다.
```

> 일반적인 파라미터와 같이 사용하는 것도 가능하다. 다만 Rest 파라미터는 반드시 마지막 파라미터이어야만 한다. 같이 사용할 경우 인자는 순차적으로 일반 파라미터에 할당 된 후, 남은 인자들이 Rest 파라미터에 할당된다.

```js
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);


function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```

```js
function foo( ...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```



##### arguments와 rest 파라미터

> ES5에서는 인자의 개수를 사전에 알 수 없는 가변 인자 함수의 경우, arguments 객체를 통해 인수를 확인한다. arguments 객체는 함수 호출 시 전달된 인수 들의 정보를 담고 있는 순회가능한(iterable) 유사 배열 객체(array-like object)이다.
>
> arguments 객체의 참조는 함수 내부에서 arguments 식별자를 통해 접근하는 것이 가능하다. 예시는 다음과 같다.

```js
var foo = function () {
  console.log(arguments);
};

foo(1, 2); // { '0': 1, '1': 2 }
```

> arguments 객체는 가변 인자 함수에서 인자를 참조하고자 할 때 자주 사용한다. 그런데 arguments 객체는 유사 배열 객체이므로 배열 메소드를 사용하기 위해서는 Function.prototype.call을 사용하여 배열로 변환해야 하는 번거로움이 있다.
>
> 다음은 가변 인자를 받아 인자들의 총합을 구하는 sum을 구현한 예시이다.

```js
function sum() {
  /*
  가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
  유사 배열 객체인 arguments 객체를 배열로 변환한다.
  */
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

> 위 예시는 가변 인자를 arguments 객체를 통해 참조하여 해당 인자를 원소로 하는 배열 객체를 Array.prototype.slice.call을 활용하여 생성한 다음, 배열 메소드인 reduce 메소드를 통해 인자들의 총합을 구하는 sum 함수를 구현한 예시이다.
>
> 위의 예시는 굉장히 구현하기 번거롭다. 그러나 ES6 부터는 rest 파라미터를 사용하여 가변 인자를 함수 내부에 배열로 전달하는 것이 편리해졌다. 위 예시를 ES6 문법을 사용하면 다음과 같이 리팩토링 할 수 있다.

```js
function sum(...args) {
  console.log(Array.isArray(args)); // true
  return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

> 특히 화살표 함수의 경우 arguments 객체 프로퍼티를 더 이상 갖고 있지 않으므로 가변 인자 함수를 구현하려면 반드시 rest 파라미터를 사용하여 구현해야 한다.

```js
var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty('arguments')); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments')); // false
```





#### Spread Operator

------

