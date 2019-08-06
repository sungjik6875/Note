#### Arrow Function

------

> ES6에서는 function이라는 키워드 대신 =>를 활용하여 보다 간략한 방법으로 함수를 선언할 수 있다. 그러나 모든 경우에 대해서 화살표 함수를 사용할 수 있는 것은 아니다. 화살표 함수의 기본 문법은 아래와 같다.



##### 선언

> 기본적인 형식은 `() => { ... }`와 같다. 예시는 다음과 같다.

```js
// 기존의 함수 선언법
function(x) { return x }

// arrow function
(x) => { return x }
```

> 매개변수가 하나일 경우에 한정하여 소괄호를 생략할 수 있다. 또한 함수의 몸체가 한 줄의 구문이라면 중괄호도 생략이 가능하다. 해당 구문이 return 문이라면 return도 생략이 가능하다.

```js
(x) => { return x }

// 소괄호 생략
x => { return x }

// 중괄호 생략, return 생략
x => x
```



##### 호출

> 화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 호출하려면 선언 시에 함수 표현식을 사용해야 한다.

```js
const pow = x => x * x;
console.log(pow(10));  // 100
```

> 다음 예시와 같이 콜백함수로도 표현할 수 있다.

```js
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]


// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```





#### this

------

> function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다. 



##### 일반 함수의 this

> 일반 함수에서 this는 함수 호출 방식에 따라 바인딩할 객체가 동적으로 결정된다. 이 말은 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니라, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정됨을 의미한다.
>
> 생성자 함수와 객체의 메소드를 제외한 모든 함수(내부 함수, 콜백 함수 등) 내부의 this는 최상위 전역 객체를 가리킨다.
>
> 예시는 다음과 같다.

```js
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // (A)
  return arr.map(function (x) {
    return this.prefix + ' ' + x; // (B)
  });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

> A 지점에서의 this는 생성자 함수 Prefixer가 생성한 객체, 생성자 함수의 인스턴스인 pre이다. 그러나 B 지점에서 사용한 this는 최상위 전역 객체를 가리킨다. 
>
> 콜백 함수 내부의 this가 메소드를 호출한 객체를 가리키게 하려면 아래의 3가지 방법이 있다.

```js
// Solution 1: that = this

Prefixer.prototype.prefixArray = function (arr) {
  var that = this;  // this: Prefixer 생성자 함수의 인스턴스
  return arr.map(function (x) {
    return that.prefix + ' ' + x;
  });
};
```

```js
// Solution 2: map(func, this)

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;
  }, this); // this: Prefixer 생성자 함수의 인스턴스
};
```

```js
// Solution 3: bind(this)

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;
  }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
};
```



##### 화살표 함수의 this

> 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다. 이를 **Lexical this**라 한다. 화살표 함수는 위 예시 solution 3의 Syntactic Sugar이다.

```js
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
  return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

> 화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

```js
window.x = 1;
const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1
```

> 화살표 함수는 Lexical this를 지원하므로 콜백 함수로 사용하기 편리하다. 그러나 반대로 화살표 함수를 사용해서는 안되는 경우도 존재한다.



##### 화살표 함수를 사용해서는 안되는 경우

> ##### 객체의 메소드 정의
>
> 화살표로 객체의 메소드를 정의할 경우 this가 객체를 가리키지 않고, 객체의 상위 컨텍스트인 전역 객체 window를 가리킨다. 따라서 화살표 함수로 객체의 메소드를 정의하는 것은 바람직하지 않다.

```js
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`) 
};

person.sayHi(); // Hi undefined
```

> ##### prototype
>
> 화살표 함수로 정의된 메소드를 prototype에 할당하는 경우도 위와 동일한 문제가 발생한다. prototype에 메소드를 할당하는 경우에도 일반 함수를 할당한다.

```js
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined
```

> ##### 생성자 함수
>
> 화살표 함수는 생성자 함수로 사용할 수 없다. 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다. 그러나 화살표 함수는 prototype 프로퍼티를 갖고 있지 않다.

```js
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // TypeError: Foo is not a constructor
```

> ##### addEventListener 함수의 콜백 함수
>
> addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨텍스트인 전역 객체 window를 가리킨다.

```js
var button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
```

> 따라서 addEventListener 함수의 콜백 함수 내에서 this를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용해야 한다. 일반 함수로 저으이된 addEventListener 함수의 콜백 함수 내부의 this는 이벤트 리스너에 바인딩된 요소를 가리킨다.

```js
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});
```

