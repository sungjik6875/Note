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
console.log(increaser());			// 1
console.log(increaser());			// 2

const decreaser = makeCounter(decrease);
console.log(decreaser());			// -1
console.log(decreaser());			// -2
```



##### 함수형 프로그래밍과 고차 함수

> 고차 함수는 외부 상태 변경이나 가변 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있다. 함수형 프로그래밍은 순수 함수와 보조함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다. 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고, 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다.
>
> 함수가 실행되면서 외부 상태 또는 데이터를 변경시키는 현상을 **부수효과(Side Effect)** 라고 하는데, 함수형 프로그래밍은 순수 함수를 활용하여 부수효과를 최대한 억제함으로써 예상하지 못한 오류를 피하고 프로그램의 안정성을 높이는데 목적이 있다.
>
> 고차 함수는 위 예시처럼 사용자가 정의할 수도 있지만 자바스크립트에서는 기본적으로 고차 함수를 다수 지원하고 있다. 특히 Array 객체는 유용한 고차 함수를 제공한다.



##### Array.prototype.sort()

> 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits);		// [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits);		// [ 'Orange', 'Banana', 'Apple' ]
```

> 그러나 숫자를 정렬할 경우에는 개발자가 의도한 대로 동작하지 않으므로 주의해야 한다. 다음의 예시를 보자.

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points);
// [ 1, 10, 100, 2, 25, 40, 5 ]
```

> 예시로 알 수 있듯이, 숫자의 크기를 기준으로 정렬되지 않는 것을 확인할 수 있다. 이렇게 정렬되는 이유는 무엇일까?
>
> sort 메소드의 기본 정렬 순서는 문자열 Unicode 코드 포인트 순서를 기준으로 한다. 배열의 요소가 숫자 타입이어도 일시적으로 문자열로 변환한 후, 정렬된다. 따라서 위와 같이 앞의 자리 숫자를 기준으로 정렬된다. 10, 100이 2보다 앞에 정렬되는 이유는 이 때문이다.



> ##### 비교 함수를 사용한 숫자 정렬
>
> 이런 경우, sort 메소드의 인자로 정렬 순서를 정의하는 비교 함수를 인수로 전달한다. 비교 함수를 생략하면 배열의 각 요소는 일시적으로 문자열로 변환되어 Unicode 코드 포인트 순서에 따라 정렬된다.
>
> 비교 함수를 사용한 예시는 다음과 같다.

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]
```



> ##### 비교 함수를 사용한 객체 정렬
>
> 비교 함수를 사용하여 객체를 정렬하는 것도 가능하다. 예시는 다음과 같다.

```javascript
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// 비교 함수
function compare(key) {
  return function (a, b) {
    // 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
    return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
  };
}
```

```javascript
// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);
/* 
0: {id: 1, content: "HTML"}
1: {id: 2, content: "CSS"}
2: {id: 4, content: "JavaScript"}
*/
```

```javascript
// content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);
/*
0: {id: 2, content: "CSS"}
1: {id: 1, content: "HTML"}
2: {id: 4, content: "JavaScript"}
*/
```



##### Array.prototype.forEach(func)

> 배열을 순회할 때 사용하므로 for 문 대신 사용된다. 배열을 순회하면서 배열의 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한다. 반환값은 undefined이다. 
>
> 콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열인 this를 전달 받을 수 있다. forEach 메소드는 원본 배열을 변경하지 않는다. 그러나 콜백함수에 의해 원본 배열이 변경될 수 있다.
>
> forEach 메소드에서는 for 문과 달리 break 문을 사용할 수 없다. 따라서 배열의 모든 요소를 순회하며 중간에 순회를 중단할 수 없다.
>
> forEach 메소드는 for 문에 비해 성능이 좋지 않다. 그러나 for 문보다 가독성이 좋으므로 사용하는 것을 권장한다.
>
> IE9 이상에서 정상 동작한다.
>
> forEach의 활용 예시는 다음과 같다.

```javascript
const numbers = [1, 2, 3, 4];

// 콜백 함수의 매개변수로 요소, 인덱스, this를 전달 가능하다
numbers.forEach(function(elem, idx, self) {
  self[idx] = Math.pow(elem, 2);
});

console.log(numbers); 	// [1, 4, 9, 16]
```

```javascript
const arr = [1, 2, 3];

arr.forEach(function(elem, idx, self) {
  console.log(idx, elem);
  if (elem > 1) break;		// break 사용 불가, 에러 발생
})

/*
		Uncaught SyntaxError: Illegal break statement
    at Array.forEach (<anonymous>)
    at <anonymous>:1:5
*/
```

> this는 콜백 함수의 세 번째 매개변수로 전달하는 것 외에도, forEach 메소드의 두 번째 인자로 전달할 수 있다.

```javascript
function Square() {
  this.array = [];
}

Square.prototype.multiply = function (arr) {
  arr.forEach(function (item) {
    // this를 인수로 전달하지 않으면 this === window
    this.array.push(item * item);
  }, this);	// this를 두 번째 인수로 전달한다.
};

const square = new Square();
square.multiply([1, 2, 3]);
console.log(square.array); // [ 1, 4, 9 ]
```

> ES6의 Arrow Function을 사용하면 this를 인수로 전달하지 않아도 된다. 다음과 같이 작성하면 위와 동일하게 동작한다.

```javascript
Square.prototype.multiply = function (arr) {
    arr.forEach(item => this.array.push(item * item));
};
```



##### Array.prototype.map(func)

> 배열을 순회하며 각 요소에 대해 콜백 함수를 실행한다. **각 요소에 대한 콜백함수의 반환값을 배열에 담아 반환**한다. 이 때 원본 배열은 변경되지 않는다.
>
> forEach 메소드는 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수이며 map 메소드는 배열을 순회하며 요소 값을 다른 값으로 매핑하기 위한 함수이다.
>
> 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 그리고 map 메소드를 호출한 배열인 this를 전달 받을 수 있다.
>
> IE9 이상에서 정상 동작한다.

```javascript
const nums = [1, 4, 9, 16, 25];

// 배열을 순회하며 각 요소를 콜백함수의 인자로 사용, 반환값을 배열에 담아 반환한다.
const roots = nums.map(function(elem) {
    return Math.sqrt(elem);
})


// map 메소드는 배열 형태로 반환한다.
console.log(roots);		// [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(nums);		// [1, 4, 9, 16, 25]
```

> 위 map 메소드는 다음과 같이 축약하여 표현이 가능하다.

```javascript
const roots = numbers.map(Math.sqrt);
```

> map 메소드에도 두 번째 인자로 this를 전달할 수 있다. 

```javascript
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
    return arr.map(function(elem) {
        return this.prefix + elem;
    }, this);
};

const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);

console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]
```

> 마찬가지로 ES6의 Arrow Function을 사용하면 두 번째 인자인 this를 생략해도 동일하게 동작한다.

```javascript
Prefixer.prototype.prefixArray = function(arr) {
    return arr.map(elem => this.prefix + elem);
};
```



##### Array.prototype.filter(func)

> 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백함수의 실행 결과가 `true`인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 따라서 filter 메소드를 사용하면 if 문을 대체할 수 있다.
>
> filter 메소드는 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고자 할 때 사용한다. 이 때 반환값을 담을 배열을 새로 생성하며, 원본 배열은 변경되지 않는다.
>
> 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, filter 메소드를 호출한 배열인 this를 전달 받을 수 있다.
>
> IE9 이상에서 정상 동작한다.

```javascript
const result = [1, 2, 3, 4, 5].filter(function(elem, idx, self) {
		return elem % 2;		// 홀수 만을 필터링한다. (0은 false, 1은 true)
})

console.log(result);		// [1, 3, 5]
```

 

##### Array.prototype.reduce(func)

> 배열을 순회하며 각 요소에 대해 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환한다.
>
> 콜백함수의 매개변수를 통해 이전 콜백함수의 반환값, 배열 요소의 값, 요소의 인덱스, reduce 메소드를 호출한 배열인 this를 전달 받을 수 있다.
>
> IE9 이상에서 정상 동작한다.

```javascript
const arr = [1, 2, 3, 4, 5];

/*
prevVal: 이전 콜백의 반환값
curVal : 배열 요소의 값
curIdx : 인덱스
self   : 메소드를 호출한 배열, 즉 this
*/

// 배열의 합계를 구하는 메소드
const sum = arr.reduce(function (prevVal, curVal, curIdx, self) {
  return preVal + curVal;	// 이 반환값은 다음 콜백의 preVal로 전달된다.
})

console.log(sum); 	// 15


// 배열의 최대값을 구하는 메소드
const max = arr.reduce(function (preVal, curVal) {
  return preVal > curVal ? preVal : curVal;
})

console.log(max);		// 5
```



> ##### Array.prototype.reduce 메소드의 초기값 설정
>
> Array.prototype.reduce의 두 번째 인수로 초기값을 전달할 수 있다. 이 값은 콜백함수에 최초로 전달된다. 위에서 예시로 들었던 배열의 합계를 구하는 메소드를 다시 예시로 사용해보자.

```javascript
const sum = [1, 2, 3, 4, 5].reduce(function (pre, cur) {
  return pre + cur;
}, 5);	// 초기값을 5로 설정

console.log(sum); // 20
```

> 만약 배열의 각 요소가 객체이고, 객체의 프로퍼티의 값을 합산하고자 하는 경우에는 반드시 초기값을 설정해야 한다. 이에 대한 예시는 다음과 같다.

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

/* 프로퍼티의 값을 합산하는 메소드 */

// 1. 초기값을 설정하지 않으면 NaN이라는 결과가 발생
// pre의 값은 처음 undefined로 초기화된다.
const priceSum = products.reduce(function (pre, cur) {
  return pre.price + cur.price;
});
console.log(priceSum);	// NaN


// 2. pre의 초기값을 설정함으로써 위와 같은 결과로부터 회피 가능
const priceSum = products.reduce(function (pre, cur) {
  return pre + cur.price;
}, 0);
console.log(priceSum);	// 
```

> 만약 reduce를 호출하는 배열이 빈 배열인 경우 에러가 발생한다. 이런 경우에도 초기값을 전달하면 에러를 회피할 수 있다. 예시는 다음과 같다.

```javascript
const sum = [].reduce(function(pre, cur) {
  return pre + cur;
});
// TypeError: Reduce of empty array with no initial value
```

```javascript
const sum = [].reduce(function (pre, cur) {
  console.log(pre, cur);
  return pre + cur;
}, 0);

console.log(sum); // 0
```



##### Array.prototype.some(func)

> 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 `boolean`으로 반환한다. 테스트를 통과하는 요소가 하나 이상 존재한다면 `true`를 반환한다. 그렇지 않다면 `false`를 반환한다.
>
> 마찬가지로 콜백함수의 매개변수를 통해 배열 요소의 값과 요소의 인덱스, 메소드를 호출한 배열인 this를 전달 받을 수 있다. 
>
> IE9 이상에서 정상 동작한다.

```javascript
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는 지 확인한다.
let res = [2, 5, 8, 1, 4].some(function(elem) {
  	return elem > 10;
});
console.log(res); 	// false
```

```javascript
res = [12, 5, 8, 1, 4].some(function(elem) {
  	return elem > 10;
})
console.log(res); 	// true
```

```javascript
res = ['apple', 'banana', 'mango'].some(function(elem) {
  	return elem === 'banana';
})
console.log(res); 	// true
```

> Array.prototype.some() 역시 두 번째 인자로 this를 전달할 수 있다.



##### Array.prototype.every(func)

> 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 `boolean`으로 반환한다. Array.prototype.some()과는 다르게 모든 요소가 통과해야만 `true`를 반환한다. 그렇지 않으면 `false`를 반환한다.
>
> 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열인 this를 전달받을 수 있다.
>
> IE9 이상에서 정상 동작한다.

```javascript
let res = [21, 15, 89, 1, 44].every(function(elem) {
  	return elem > 10;
});
console.log(res);		// false
```

```javascript
res = [21, 15, 89, 100, 44].every(function(elem) {
  	return elem > 10;
});
console.log(res);		// true
```

> Array.prototype.every() 역시 두 번째 인자로 this를 전달할 수 있다.



##### Array.prototype.find(func)

> 배열을 순회하며 각 요소에 대해 콜백함수를 실행하여, 실행 결과로 true를 반환하는 첫 번째 요소를 반환한다. 콜백함수의 실행 결과가 true인 요소가 존재하지 않는다면 undefined를 반환한다.
>
> 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열인 this를 전달 받을 수 있다.
>
> Array.prototype.filter()와 비교하자면 filter는 콜백함수의 실행결과가 true인 배열 요소들을 배열에 담아 반환하는 반면, find는 실행결과가 true인 첫 번째 요소를 반환한다는 점에서 차이가 있다.
>
> ES6에서 새롭게 도입된 메소드로 IE에서는 지원하지 않는다.

```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

let result = users.find(function (elem) {
  return elem.id === 2;
});

console.log(result);
// { id: 2, name: 'Kim' }, 요소를 반환한다.

let result = users.filter(elem => elem.id === 2);

console.log(result);
// [ { id: 2, name: 'Kim' },{ id: 2, name: 'Choi' } ]
// 배열을 반환한다.
```



##### Array.prototype.findIndex(func)

> 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫 번째 요소의 인덱스를 반환한다. 콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 -1을 반환한다.
>
> 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열인 this를 전달 받을 수 있다.
>
> ES6에서 새롭게 도입된 메소드로 IE에서는 지원하지 않는다.

```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// predicate는 함수를 반환한다.
function predicate(key, value) {
  return function(elem) {
    return elem[key] === value;
  };
}

// predicate('id', 2) => function(elem) { return elem['id'] === 2 };
let index = users.findIndex(predicate('id', 2));
console.log(index);		// 1

index = users.findIndex(predicate('name', 'Park'));
console.log(index); 	// 3
```

