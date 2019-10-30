#### Object

------

> 자바스크립트는 객체 기반의 스크립트 언어이다. 자바스크립트의 거의 모든 것은 객체로 이루어져 있다. 원시 타입의 값을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체에 속한다.
>
> 객체란 키와 값으로 구성된 프로퍼티의 집합이다. 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. 자바스크립트의 함수는 일급 객체에 속하므로 값으로 취급할 수 있다. 따라서 프로퍼티 값으로 함수를 사용할 수도 있으며, 프로퍼티의 값이 함수인 경우 특별히 메소드라고 부른다.
>
> 객체의 예시는 다음과 같다.

```js
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
```

> 객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된다. 객체는 프로퍼티와 메소드를 모두 포함할 수 있어 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용하다.
>
> 자바스크립트의 객체에서도 객체지향의 상속을 구현하기 위해 프로토타입으로 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.



##### Property

> 프로퍼티는 프로퍼티 키와 프로퍼티의 값으로 구성된다. 프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있다. 프로퍼티 키는 프로퍼티의 값을 식별하기 위한 식별자이다. 프로퍼티 키의 명ㅇ명 규칙과 프로퍼티 값으로 사용할 수 있는 값은 아래와 같다.

```
프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 Symbol값
프로퍼티 값 : 모든 값
```

> 프로퍼티 키에 문자열이나 Symbol 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티의 값을 덮는다. 배열과 달리 객체에서 각 프로퍼티는 순서가 존재하지 않는다.



##### Method

> 프로퍼티의 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다. 즉, 메소드는 객체에 제한되어 있는 함수를 의미한다.



##### ※ 자바스크립트의 클래스

> 자바와 같은 클래스 기반 객체 지향 언언는 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성한다. 하지만 자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념은 본질적으로 존재하지 않으며 별도의 객체 생성 방법이 존재한다.
>
> ES6에서 새롭게 도입된 개념중 클래스가 있다. 그런데 클래스라는 개념이 본질적으로 존재하지 않는다는 것은 무슨 의미일까? 자바스크립트는 프로토타입 기반의 프로그래밍 언어이다. 클래스의 개념이 없이 프로토타입 체인과 클로저 등으로 객체지향 언어의 상속, 캡슐화 등의 개념을 구현한다. 그런데 이 점은 클래스 기반 언어에 익숙한 프로그래머들에게 진입장벽으로 작용하였다. 이런 프로그래머들이 자바스크립트에 쉽게 접근하기 위해 도입된 것이 클래스이다. 그러나 자바스크립트의 클래스는 본질적으로 함수에 속한다. 새로운 객체 지향 모델을 제공하는 것이 아님을 알아두자.



##### 객체 생성 방법

> 자바스크립트에서 객체를 생성하는 방법은 다음과 같다.

> ##### 객체 리터럴
>
> 가장 일반적인 방법으로 중괄호를 사용하여 객체를 생성한다. 중괄호 내에 프로퍼티를 기술한다. 프로퍼티를 기술하지 않을 경우에는 빈 객체가 생성된다.

```js
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```



> ##### Object 생성자 함수
>
> new 연산자와 Object 생성자 함수를 사용하여 빈 객체를 생성할 수 있다. 빈 객체 생성 이후 해당 객체에 프로퍼티나 메소드를 추가하여 객체를 완성하는 방법이다. 그러나 객체 리터럴을 사용하는 방법이 더 간편하므로 잘 사용되는 방법은 아니다. 내부적으로도 객체 리터럴을 사용하는 방법은 생성자 함수로 생성하는 것과 동일하게 동작하므로 이 방법은 거의 사용되지 않는다.

```js
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```



##### ※ Constructor

> 생성자 함수란 new 키워드와 함께 객체를 생성하고 초기화 하는 함수를 말한다. 생성자 함수를 통해 생성된 객체를 인스턴스라 한다. 자바스크립트는 다양한 빌트인 생성자 함수를 제공한다. 일반 함수와 생성자 함수를 구분하기 위해 생성자 함수의 이름은 파스칼 케이스(PascalCase)를 사용하는 것이 일반적이다.



> ##### 생성자 함수
>
> 객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성하는 것을 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다. 동일한 프로퍼티를 갖는 객체를 여러번 생성해야 할 경우에는 생성자 함수를 정의하여 해당 함수를 호출하는 방식으로 생성하는 것이 편리하다.
>
> 예시는 다음과 같다. 우선 동일한 프로퍼티를 갖는 두 객체를 보자.

```js
var person1 = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

var person2 = {
  name: 'Kim',
  gender: 'female',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
```

> 위의 두 객체는 동일한 프로퍼티와 메소드를 갖고 있으므로 생성자 함수를 정의한 다음 생성하는 것이 편리하다. 예시는 아래와 같다.

```js
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```

> 생성자 함수 이름은 일반적으로 대문자로 시작하는데, 이는 개발자가 생성자 함수임을 쉽게 인식하도록 하기 위함이다. 프로퍼티 또는 메소드명 앞에 기술한 this가 가리키는 대상은 생성자 함수가 생성할 인스턴스이다. this로 바인딩된 프로퍼티나 메소드는 public(외부에서 참조 가능)한 특성을 갖는다. 반면 this로 바인딩 되지않은 일반 변수는 private(외부에서 참조 불가)한 특성을 갖는다. 이런 변수는 생성자 함수 내부에서는 자유롭게 접근이 가능하다 외부에서는 접근이 불가하다.
>
> 다음의 예시를 통해 public과 private의 특성을 갖는 프로퍼티의 차이를 확인할 수 있다.

```js
function Person(name, gender) {
  var married = true;         // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function(){ // public
    console.log('Hi! My name is ' + this.name);
  };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender);  // 'male'
console.log(person.married); // undefined
```

> 자바스크립트의 생성자 함수는 이름 그대로 객체를 생성하는 함수이다. 그러나 자바와 같은 클래스 기반의 객체지향 언어의 생성자와는 다르게 그 형식이 정해진 것이 아니라 기존 함수와 동일한 방법으로 생성자 함수를 선언한다. new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
>
> 이는 생성자 함수가 아닌 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다는 것을 의미한다. 따라서 일반적으로 생성자 함수명은 첫 문자를 대문자로 기수랗여 혼란을 방지하려고 한다.
>
> new 연산자와 함께 호출할 경우 this 바인딩이 다르게 동작한다.



##### 객체 프로퍼티 접근

> ##### 프로퍼티 키
>
> 프로퍼티 키는 일반적으로 문자열(빈 문자열 포함)을 지정한다. 프로퍼티 키에 문자열이나 Symbol 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다. 또한 문자열 타입의 값으로 수렴될 수 있는 표현식도 가능하다. 프로퍼티 키는 문자열이므로 따옴표를 상용하나 자바스크립트에서 사용 가능한 유효한 이름인 경우 따옴표를 생략할 수 있다. 반대로 자바스크립트에서 사용가능한 유효한 이름이 아닌 경우, 반드시 따옴표를 사용하여야 한다.
>
> 프로퍼티 값은 모든 값과 표현식이 올수 있으며 프로퍼티 값이 함수인 경우 이를 메소드라 한다.

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10,
  function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person);
```

> 프로퍼티 키의 first-name에는 반드시 따옴표를 사용해야 하지만 first_name에는 생략이 가능하다. 그 이유는 first-name은 자바스크립트에서 사용가능한 유효한 이름이 아니라 `-` 연산자가 있는 표현식이기 때문이다.

```js
var person = {
  first-name: 'Ung-mo', // SyntaxError: Unexpected token -
};
```

> 표현식을 프로퍼티 키로 사용하려면 키로 사용할 표현식을 대괄호로 묶어야 한다. 이때 자바스크립트 엔진은 표현식을 평가하기 위해 식별자 first를 찾을 것이고 이때 ReferenceError가 발생한다.

```js
var person = {
  [first-name]: 'Ung-mo', // ReferenceError: first is not defined
};
```

> 예약어를 프로퍼티 키로 사용하여도 에러가 발생하지는 않는다. 하지만 예상치 못한 에러가 발생할 수 있으므로 예약어를 프로퍼티 키로 사용해서는 안된다. 



> ##### 프로퍼티 값 읽기
>
> 객체의 프로퍼티 값에 접근하는 방법은 마침표`.` 표기법과 대괄호 표기법`[]`이 있다. 만약 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우에는 마침표 표기법과 대괄호 표기법을 모두 사용 가능하다. 만약 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 읽어야 한다. 대괄호 표기법을 사용하는 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.
>
> 객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.



> ##### 프로퍼티 값 갱신
>
> 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'
```



> ##### 프로퍼티 동적 생성
>
> 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가한다.

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person.age = 20;
console.log(person.age); // 20
```



> ##### 프로퍼티 삭제
>
> delete 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다. 이때 피연산자는 프로퍼티의 키여야 한다.

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}
```



> ##### 프로퍼티 순회
>
> for-in 문을사용하면 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
  console.log(index + ': ' + array[index]);
}
```

> for-in 문은 객체의 문자열 키를 순회하기 위한 문법이다. 배열에도 사용이 가능하나 권장하지 않는다. 가장 큰 이유는 for-in 문은 순서를 보장하지 않기 때문이다. 객체의 경우 상관이 없으나 순서가 중요한 배열의 경우에는 순서를 보장하지 않을 경우 의도하지 않은 결과가 나올 수 있다. 또 다른 이유로 for-in문은 배열의 인덱스 요소만을 순회하지 않는다.

```js
// 배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/
```

> 이와 같은 for-in 문의 단점을 극복하기 위해서 ES6에서 for-of문이 추가되었다.

```js
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/
```



##### 객체의 분류

> 객체는 아래와 같이 분류할 수 있다.

![example_1](./image/js_6_1.png)

> 내장 객체(Built-in Object)는 웹페이지 등을 표현하기 위한 공통의 기능을 제공한다. 웹 페이지가 브라우저에 의해 로드되자마자 별다른 행위 없이 바로 사용이 가능하다. 내장 객체는 표준 객체와 Native 객체에 속하는 BOM, DOM으로 구분된다.
>
> 사용자 정의 객체(Host Object)는 사용자가 생성한 객체들이다. constructor 혹은 객체 리터럴을 통해 사용자가 객체를 정의하고 확장시킨 것들이기 때문에 내장 객체가 구성된 이후에 구성된다.