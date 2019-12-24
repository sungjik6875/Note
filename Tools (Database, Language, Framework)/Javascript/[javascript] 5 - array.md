### Array

------

> 배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열도 객체에 속하며 배열을 다루기 위한 다양한 메소드를 갖는다.

```js
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```





#### 유사 배열 객체 (array-like object)

------

> 유사 배열 객체란 length 프로퍼티를 갖는 객체로 문자열, arguments, HTMLCollection, NodeList 등은 유사 배열에 속한다. 유사 배열 객체는 length 프로퍼티가 있으므로 순회 가능하며 call, apply 함수를 사용하여 배열의 메소드를 사용할 수도 있다.
>
> 어떤 객체가 유사 배열 객체에 해당하는지 체크하기 위해서는 해당 객체가 length 프로퍼티를 갖는지, length 프로퍼티의 값이 정상적인 값인지를 체크한다. 
>
> 어떤 객체가 유사 배열에 해당하는 지 체크하는 함수의 예는 다음과 같다.

```javascript
const isArrayLike = function(collection) {
    // 배열 인덱스 : 32bit 정수(2의 32제곱 - 1)
    // 유사 배열 인덱스 : 자바스크립트로 표현 가능한 양의 정수 (2의 53제곱 - 1)
    const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    // 빈문자열도 유사배열에 속한다.
    const length = collection == null ? undefined : collection.length;
    return typeof (length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX);
}

// 반환값은 boolean으로 이 값을 통해 인자로 사용된 객체가 유사 배열 객체에 속하는 지의 여부를 알 수 있다.
```





#### 배열의 생성

------

##### 배열 리터럴

> 0개 이상의 값을 쉼표로 구분하여 대괄호([])로 묶는다. 첫 번째 값은 인덱스 0으로 읽을 수 있다. 존재하지 않는 요소에 접근하면 `undefined`를 반환한다.
>
> 예시는 다음과 같다.

```javascript
var emptyArr = [];

console.log(emptyArr[1]); // undefined
console.log(emptyArr.length); // 0

var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(arr[1]);      // 'one'
console.log(arr.length);  // 10
```



> ##### 배열 리터럴과 객체 리터럴과의 차이
>
> 배열 리터럴은 객체 리터럴과 다르게 프로퍼티명이 없고 각 요소의 값만이 존재한다. 객체의 경우 프로퍼티 값에 접근하기 위해 프로퍼티를 표기할 때 대괄호 표기법 또는 마침표 표기법을 사용한다. 그러나 배열의 경우에는 인덱스를 대괄호 표기법만으로 사용하여 표기한다.



> ##### 배열과 객체의 차이 : 프로토타입 객체
>
> 또한 배열의 경우 객체에 속함에도 불구하고 배열 객체의 프로토타입 객체는 `Array.prototype`이다. 객체의 프로토타입 객체와 다르다.

```javascript
console.log(typeof arr);  // object
console.log(arr.__proto__ === Array.prototype);		// true
```

> 이를 이미지로 나타내면 다음과 같다.

![example_1](./image/js_5_1.png)



##### 자바스크립트 배열의 특징

> 대부분의 프로그래밍 언어에서는 배열의 요소들은 모두 동일한 데이터타입을 가져야 한다. 그러나 자바스크립트의 배열에서는 각 요소들이 서로 다른 데이터타입을 가져도 상관없다.

```javascript
var misc = [
  'string',
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  ['nested array'],
  { object: true },
  function () {}
];
```

```javascript
console.log(misc[0]);		// string
console.log(misc[3]);		// null
console.log(misc[7]);		// ["nested array"]
```



##### Array() 생성자 함수

> 배열은 일반적으로 배열 리터럴 방식으로 생성하지만 배열 리터럴 방식도 결국 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화시킨 것이다. Array() 생성자 함수는 `Array.prototype.constructor` 프로퍼티로 접근할 수 있다. 
>
> 만일 매개변수가 1개이면서 숫자인 경우에는 매개변수로 전달된 숫자를 length 값으로 갖는 빈 배열을 생성한다. 그 외의 경우에는 매개변수로 전달된 값들을 요소로 갖는 배열을 생성한다.
>
> 예시는 다음과 같다.

```javascript
var arr = new Array(2);
console.log(arr); // (2) [empty × 2]

var arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
```





#### 배열 요소의 추가와 삭제

------

##### 배열 요소의 추가

> 객체가 동적으로 프로퍼티를 추가할 수 있는 것처럼 배열도 동적으로 요소를 추가하는 것이 가능하다. 이때 배열의 길이 또는 순서에 맞추어 값을 할당할 필요는 없다. 인덱스를 사용하여 필요한 위치에 값을 할당할 수 있다. 동적으로 할당되므로 인덱스의 값이 배열의 길이를 초과하여도 상관없다.
>
> 예시는 다음과 같다.

```javascript
var arr = [];
console.log(arr[0]); // undefined

arr[1] = 1;
arr[3] = 3;

console.log(arr); // (4) [empty, 1, empty, 3]
console.log(arr.lenth); // 4
```



##### 배열 요소의 삭제

> 배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 `delete` 연산자를 사용할 수 있다. 이때 배열의 길이에는 변함이 없다. 해당 요소를 완전히 삭제하여 배열의 length에도 반영되게 하기 위해서는 `Array.prototype.splice()` 메소드를 사용한다.
>
> 예시는 다음과 같다.

```javascript
var numbersArr = ['zero', 'one', 'two', 'three'];

// 요소의 값만 삭제된다
delete numbersArr[2]; 
console.log(numbersArr);	// (4) ["zero", "one", empty, "three"]

// 요소 값만이 아니라 요소를 완전히 삭제한다
// splice(시작 인덱스, 삭제할 요소의 수)
numbersArr.splice(2, 1); 
console.log(numbersArr); 	// (3) ["zero", "one", "three"]
```





#### 배열의 순회

------

> 객체의 프로퍼티를 순회할 때에는 **for...in** 문을 사용한다. 배열 역시 객체이므로 for...in 문을 사용할 수 있다. 그러나 배열은 객체이므로 프로퍼티를 가질 수 있다. for..in 문은 불필요한 프로퍼티까지 순회하고, 각 요소의 순서를 보장하지 않으므로 배열의 순회에는 적합하지 않다.
>
> 대신 배열을 순회할 때에는 **forEach, for 문, for...of 문** 등이 적합하다.

```javascript
var arr = [0, 1, 2, 3];
arr.foo = 10;	// 불필요한 프로퍼티
```

```javascript
/*  forEach  */
arr.forEach(elem => console.log(elem));
// 0 1 2 3
```

```javascript
/*  for  */	
for (var i =0; i< arr.length; i++) {
    console.log(arr[i]); 
}
// 0 1 2 3
```

```javascript
/*  for...of  */
for (var item of arr) { console.log(item); }
// 0 1 2 3
```

```javascript
/*  for...in : 불필요한 프로퍼티도 순회한다.  */
for (var key in arr) { console.log(arr[key]); }
// 0 1 2 3 10
```





#### 배열 프로퍼티

------

##### Array.length

> length **프로퍼티**는 요소의 개수(배열의 길이)를 나타낸다. 배열 인덱스는 32bit 양의 정수로 처리된다. 따라서 length 프로퍼티의 값은 양의 정수이며 `2^32-1` 미만이다.

```
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);	// 5
```

> 주의할 것은 배열 요소의 개수와 length 프로퍼티의 값이 반드시 일치하지는 않는 것이다. 다음과 같은 배열이 예시에 해당한다.

```javascript
var arr = [];
arr[5] = 1;

console.log(arr);						// [empty × 5, 1]
console.log(arr.length);		// 6
```

> 예시처럼 배열 요소의 개수와 length 프로퍼티의 값이 일치하지 않는 배열을 **희소 배열(sparce array)**이라 한다. 희소 배열은 배열의 요소가 연속적이지 않은 배열을 의미한다. 희소 배열이 아닌 일반 배열은 배열의 요소 개수와 length 프로퍼티의 값이 언제나 일치하지만 희소 배열은 배열의 요소 개수보다 length 프로퍼티의 값이 언제나 크다. 이러한 이유로 희소배열은 일반 배열보다 느리며 메모리를 낭비한다.
>
> 현재 length 프로퍼티 값보다 더 큰 인덱스로 요소를 추가하면 자동으로 length 프로퍼티의 값이 늘어난다. 이 때 length 프로퍼티의 값은 요소의 인덱스 중 가장 큰 값에 1을 더한 값이다.

```javascript
var arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);
// [1, 2, 3]
```

> length 프로퍼티의 값은 명시적으로 변경 가능하다. 만약 length 프로퍼티의 값을 현재보다 작게 변경하면 변경된 length 프로퍼티의 값보다 크거나 같은 인덱스에 해당하는 요소는 모두 삭제된다.





#### 배열 메소드

------

> this에 해당하는 원본 배열을 변경하는 메소드와 변경하지 않는 메소드가 있다.



##### Array.isArray()

> 객체가 배열이면 true, 아니면 false를 반환한다.

```javascript
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());
```

```javascript
// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
```



##### Array.from()

> 이터러블 객체를 배열로 변환하여 반환한다. 사용 형식은 다음과 같다.

```javascript
Array.from(arrayLike[, mapFn[, thisArg]])
```

> 사용 예시는 다음과 같다.

```javascript
console.log(Array.from('hello')); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from([1, 2, 3], x => x + x)); // [ 2, 4, 6 ]
```

```javascript
(function() {
	console.log(Array.from(arguments));		// [1, 2, 3]
  console.log([... arguments]);					// [1, 2, 3]
}(1, 2, 3));
```



##### Array.of()

> 주어진 인수로 새로운 배열을 생성하여 반환한다. 사용 형식은 다음과 같다.

```javascript
Array.of(elem1, elem2, ...)
```

> 사용 예시는 다음과 같다.



