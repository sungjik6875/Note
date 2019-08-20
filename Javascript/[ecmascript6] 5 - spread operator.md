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

> ES5에서 기존 배열에 다른 배열의 개별 요소를 삽입하려면 다음과 같은 방법을 사용해야 한다.

```js
var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

> 전개 연산자를 사용하여 아래와 같이 간편하게 표현하는 것이 가능하다.

```js
const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5];

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr1.splice(3, 0, ...arr2); // == arr1.splice(3, 0, 4, 5);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```



##### Copy / Splice Operator

> ES5에서 기존 배열을 복사하기 위해서는 slice 메소드를 사용한다.

```js
var arr  = [1, 2, 3];
var copy = arr.slice();

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr);  // [ 1, 2, 3 ]
```

> Spread 연산자를 사용하면 보다 간편하게 배열을 복사할 수 있다.

```js
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr];

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr);  // [ 1, 2, 3 ]
```

> 이때 원본 배열의 각 요소를 얕은 복사하여 새로운 복사본을 생성한다. Array의 slice 메소드도 얕은 복사로 진행된다. 얕은 복사인지를 확인하기 위해서는 다음과 같은 방법을 사용할 수 있다.

```
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

// shallow copy
// const _todos = todos.slice();
const _todos = [...todos];
console.log(_todos === todos); // false

// 배열의 요소는 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true
```

> 저낵 연산자의 Object.assign은 원본을 shallow copy한다. Deep copy를 위해서는 lodash의 deepClone을 사용하는 것이 좋다.



##### 유사 배열 객체의 배열 변환

> 전개 연산자를 사용하여 유사 배열 객체(Array-like Object)를 배열로 손쉽게 변환할 수 있다. 혹은 Array의 from 메소드를 사용해도 된다.

```
onst htmlCollection = document.getElementsByTagName('li');

// 유사 배열인 HTMLCollection을 배열로 변환한다.
const newArray = [...htmlCollection]; // Spread 연산자

// ES6의 Array.from 메소드를 사용할 수도 있다.
// const newArray = Array.from(htmlCollection);
```



##### Rest / Spread 프로퍼티

> 객체 리터럴을 분해하고 병합하기 위해 사용한다. 사용 예시는 다음과 같다.

```js
// Spread 프로퍼티 : 객체 리터럴의 분해
const n = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

// Rest 프로퍼티 : 개별 요소를 하나의 객체 리터럴로 병합
const { x, y, ...z } = n;
console.log(x, y, z); // 1 2 { a: 3, b: 4 }
```

> Rest, Spread 프로퍼티를 사용하면 객체를 손쉽게 병합하거나 변경하는 것이 가능하다. 이는 Object.assign을 대체할 수 있다.

```js
// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
```

> Object.assign을 사용한 작업은 다음과 같다.

```js
// 객체의 병합
const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(added); // { x: 1, y: 2, z: 0 }
```

