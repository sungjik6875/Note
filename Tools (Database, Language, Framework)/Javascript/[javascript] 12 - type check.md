### 타입 체크 (Type Checking)

------

##### 타입 체크의 필요성

> 자바스크립트는 동적 타이핑 언어이므로 변수에 어떤 값이 할당될지 예측하기 어렵다. 아래의 예시 코드를 보자.

```javascript
function sum(a, b) {
    return a + b;
}
```

> 위 코드를 작성한 개발자의 의도는 아마도 두 개의 number 타입 인수를 전달 받아 그 합계를 반환하려는 것으로 추측된다. 하지만 코드 상으로는 어떤 타입의 인수를 전달하여야 하는지, 어떤 타입의 값을 반환해야 하는지 명확하지 않다. 따라서 위 코드는 다음과 같이 호출되어 사용될 수도 있다.

```javascript
function sum(a, b) {
    return a + b;
}
sum('x', 'y'); // xy가 출력된다.
```

> 위의 예시처럼 함수가 동작하여도 자바스크립트 문법 상으로는 문제가 없다. 비록 위의 예시가 개발자가 의도와 어긋나더라도 말이다. 이러한 상황이 발생하는 이유는 앞서 말했듯이 자바스크립트가 동적 타이핑 언어이기 때문이다. 따라서 이러한 상황을 방지하기 위해 자바스크립트는 타입체크의 수단이 필요하다.



##### typeof

> 타입 연산자인 typeof는 피연산자의 데이터타입을 문자열로 반환한다.

```javascript
// 원시 자료형을 반환하는 예시
typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof undefined;       // undefined

// object를 반환하는 예시 (Array, Object 등)
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object

// 함수는 function으로 반환한다.
typeof function () {};  // function

// JS의 설계적 결함에 따른 예외 케이스
typeof null;            // object
typeof undeclared;      // undefined
```

> typeof 연산자를 활용하여 쉽게 타입 체크를 할 수 있다. 그런데 typeof 만으로는 객체의 상세한 구분을 하는 것이 쉽지 않다. 객체의 상세한 구분을 위해서는 다른 방법을 사용해야 한다.



##### Object.prototype.toString.call

> toString()을 모든 객체를 대상으로 사용하여 해당 객체의 클래스를 가져올 수 있다. 그리고 Function.prototype.call()을 사용하여 객체의 상세한 구분을 확인하는 것이 가능하다.

```javascript
// [object String]
Object.prototype.toString.call('');            
Object.prototype.toString.call(new String());   

// [object Number]
Object.prototype.toString.call(1);              
Object.prototype.toString.call(new Number());
Object.prototype.toString.call(NaN);
Object.prototype.toString.call(Infinity);

// [object Boolean]
Object.prototype.toString.call(true);

// [object Undefined]
Object.prototype.toString.call(undefined);     
Object.prototype.toString.call();               

// [object Null]
Object.prototype.toString.call(null);

// [object Array]
Object.prototype.toString.call([]);

// [object Object]
Object.prototype.toString.call({});

// [object Date]
Object.prototype.toString.call(new Date());  

// [object Math]
Object.prototype.toString.call(Math);

// [object RegExp]
Object.prototype.toString.call(/test/i);

// [object Function]
Object.prototype.toString.call(function () {});

// [object HTMLDocument]
Object.prototype.toString.call(document);
```

> 이러한 방법으로 객체의 종류까지 식별하는 것이 가능하지만 객체의 상속 관계까지 체크하는 것을 불가능하다.



##### instanceof

> instanceof 연산자는 피연산자인 객체가 우항에 명시한 타입의 인스턴스인지의 여부를 알려준다. 이때 타입이란 constructor를 말하며 프로토타입 체인에 존재하는 모든 constructor를 검색하여 일치하는 constructor가 있으면 true를 반환한다.
>
> 예시는 다음과 같다.

```javascript
function Person() {}
function Dog() {}

const person = new Person();
const dog = new Dog();

// true
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(dog instanceof Dog);
console.log(dog instanceof Object);

// false
console.log(dog instanceof Person);
```

