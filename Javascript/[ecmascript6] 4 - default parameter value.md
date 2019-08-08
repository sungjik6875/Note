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

> 피연산자를 개별 요소로 분리하는 역할을 한다. 전개 연산자의 피연산자는 반드시 순회가능해야한다.

```js
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  
// [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 연산자의 피연산자가 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator
```



##### Function.prototype.apply / Spread Operator

> 배열을 분해하여 배열의 각 요소를 파라미터에 전달하고 싶은 경우에는 보통 Function.prototype.apply를 사용하는 것이 일반적이다.

```js
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// 배열을 분해하여 배열의 각 요소를 파라미터에 전달하려고 한다.
const arr = [1, 2, 3];

// apply 함수의 2번째 인수(배열)는 분해되어 함수 foo의 파라이터에 전달된다.
foo.apply(null, arr);
// foo.call(null, 1, 2, 3);
```



> ES6에서는 전개 연산자를 사용하여 쉽게 배열의 각 요소를 순차적으로 파라미터에 할당할 수 있다.

```js
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// 배열을 foo 함수의 인자로 전달하려고 한다.
const arr = [1, 2, 3];

/* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
   spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
foo(...arr);
```



##### Rest Parameter / Spread Operator

> 앞에서 살펴본 Rest 파라미터 또한 전개 연산자를 사용하여 파라미터를 정의한 것이지만 다르다. Rest 파라미터는 분리된 요소들을 파라미터로 받은 후, 함수 내부에 배열로 전달한다. 반면 전개 연산자를 활용한 예시는 배열의 각 요소를 별개의 파라미터로 순차적으로 할당한 것이다.

```js
/* Spread 연산자를 사용한 매개변수 정의 (= Rest 파라미터)
   ...rest는 분리된 요소들을 함수 내부에 배열로 전달한다. */
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3 ]
}
foo(1, 2, 3);

/* Spread 연산자를 사용한 인수
  배열 인수는 분리되어 순차적으로 매개변수에 할당 */
function bar(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
bar(...[1, 2, 3]);
```

> 또한 Rest 파라미터는 반드시 마지막 파라미터이어야 하지만 전개 연산자를 사용한 인수는 순서에 구애받지 않는다.

```js
function foo(v, w, x, y, z) {
  console.log(v); // 1
  console.log(w); // 2
  console.log(x); // 3
  console.log(y); // 4
  console.log(z); // 5
}

// spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
foo(1, ...[2, 3], 4, ...[5]);
```



##### Concat / Spread Operator

> ES5에선 기존 배열의 요소를 새로운 배열 요소의 일부로 만들고 싶은 경우, 배열 리터럴만으로는 해결할 수 없었다. 반드시 concat 메소드를 사용해야 했었다.

```js
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
```

> ES6에서는 전개 연산자를 사용하여 배열 리터럴 만으로 기존 배열의 요소를 새로운 배열 요소의 일부로 만들 수 있다.

```js
const arr = [1, 2, 3];
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
```



##### Push / Spread Operator

> ES5에서 기존 배열에 다른 배열의 개별 요소를 각각 push하려면 아래와 같은 방법을 사용해야 했다.

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

> 전개 연산자를 사용하면 아래와 같이 간편하게 표현이 가능하다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```



##### Splice / Spread Operator

> ES5에서 기존 배열에 다른 배열의