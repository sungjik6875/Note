#### Function

------

> 함수란 어떤 작업을 수행하기 위해 필요한 문의 집합을 정의한 코드 블록이다. 함수는 이름과 매개변수를 갖으며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행할 수 있다.
>
> 함수의 호출 횟수는 제한이 없으므로, 동일한 작업을 반복적으로 수행하고자 할 때에 함수를 정의하고 호출하는 것이 효율적이다.
>
> 함수의 선언과 호출의 예시는 다음과 같다.

```js
// 함수의 정의(함수 선언문)
function square(number) {
  return number * number;
}

// 함수의 호출
square(2); // 4
```

> 이렇듯 함수의 정의와 호출은 코드의 재사용성이라는 측면에서 매우 유용하다. 함수의 일반적인 기능과 목적 또한 코드의 재사용성을 증가시키는 것에 있다. 함수의 기능은 이외에도 객체 생성, 객체의 행위 정의, 정보 은닉, 클로저, 모듈화 등의 기능이 있다.
>
> 자바스크립트의 함수는 일급 객체이다. 다른 객체와 구분될 수 있는 특징은 호출할 수 있다는 점이다. 함수도 객체이므로 다른 값들처럼 사용할 수 있다. 즉, 변수나 객체, 배열 등에 저장할 수 있고 다른 함수에 전달되는 인수로도 사용할 수 있으며 함수의 반환값이 될 수도 있다.



##### ※ 일급 객체의 특징

* 무명의 리터럴로 표현이 가능하다.
* 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
* 함수의 파라미터로 전달할 수 있다.
* 반환값으로 사용할 수 있다.





##### 함수의 정의

> 함수를 정의하는 방식은 3가지가 있다.

* 함수 선언문
* 함수 표현식
* Function



> ##### 함수 선언문
>
> function 키워드와 함수명을 사용하여 정의하는 방식이다. 예시는 다음과 같다.

```js
// 함수 선언문
function square(number) {
  return number * number;
}
```

> 함수 선언문은 함수명, 매개변수 목록, 함수 몸체로 구분된다. 함수명은 해당 함수를 구분할 수 있는 식별자이다. 매개변수 목록은 괄호 안에 콤마로 각각 구분되어 전달된다. 다른 언어와의 차이점은 매개변수의 타입을 기술하지 않다는 것이다. 따라서 함수 몸체 내에서 매개변수의 타입 체크가 필요할 수도 있다. 함수 몸체는 함수가 호출되었을 때 실행되는 문들의 집합이다. 중괄호{}로 문들을 감싸고 return 문으로 결과값을 반환할 수 있다. 



> ##### 함수 표현식
>
> 앞서 함수는 일급 객체임을 설명하였다. 일급 객체이므로 함수를 리터럴 방식으로 정의하고 변수에 할당할 수 있는데 이를 함수 표현식이라 한다.
>
> 예시는 다음과 같다.

```js
// 함수 표현식
var square = function(number) {
  return number * number;
};
```

> 함수 표현식으로 정의할 경우 function 키워드 뒤의 함수명을 생략할 수 있다. 대신 할당된 변수가 식별자의 역할을 한다. 이러한 함수를 익명함수라 한다. 함수 표현식에서는 함수명을 생략하는 것이 일반적이다.
>
> 함수 또한 객체이므로 함수가 할당된 변수에는 함수를 가리키는 참조값을 저장한다. 따라서 다음과 같이 여러 식별자가 동일한 함수를 참조하도록 할 수 있다.

```js
var foo = function(a, b) {
  return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100
```

> 그렇다면 함수 표현식으로 정의한 함수를 함수명과 할당된 변수명을 통해 호출할 수 있을까? 다음의 예시를 보자.

```js
// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
  return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined
```

> 예시를 통해 알 수 있듯, 함수 표현식으로 정의한 함수는 반드시 할당한 변수명을 통해 호출해야 한다. 함수명으로 호출할 경우 에러가 발생한다. 이는 함수 표현식에서 사용한 함수명은 외부코드에서 접근이 불가능하기 때문이다.
>
> 그렇다면 함수 선언문에서 함수명을 통해 함수를 호출할 수 있었던 이유는 무엇일까? 사실 함수 선언문을 통해 정의한 함수는 자바스크립트 엔진에 의해 함수 표현식으로 형태가 변경된다. 

```js
function square(number) {
  return number * number;
};

// 위의 함수 선언문은 아래의 함수 표현식으로 변환된다.

var square = function square(number) {
  return number * number;
};
```

> 즉, 함수 선언문으로 정의한 함수는 함수명으로 호출되는 듯 보이지만 사실은 동일한 이름의 변수를 통해 호출된 것이다. 따라서 함수 선언문도 함수 표현식과 동일하게 함수 리터럴 방식으로 정의된다.



> ##### Function 생성자 함수
>
> 함수 표현식과 함수 선언문을 정의할 때 사용되는 함수 리터럴 방식은 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand-expression이다.
>
> Function 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근할 수 있다.
>
> Function 생성자 함수로 함수를 생성하는 문법은 다음과 같다.

```js
new Function(arg1, arg2, ... argN, functionBody)
```

> 사용 예시는 다음과 같다.

```js
var square = new Function('number', 'return number * number');
console.log(square(10)); // 100
```

> 그러나 Function 생성자 함수로 함수를 생성하는 방식은 일반적으로 사용하지 않는다.





##### 함수 호이스팅

> 세 가지 함수 정의 방식은 모두 Function 생성자 함수를 통해 함수를 생성하는 방식으로 작동하는 것을 확인할 수 있었다. 그렇다면 세 가지 방식은 정의 방식만 다를 뿐 내부의 동작은 동일한 것일까? 사실은 세 가지 함수의 정의 방식은 동작에도 약간의 차이가 있다. 그 차이를 확인할 수 있는 것이 호이스팅이다.
>
> 차이를 확인하기 위해 함수 선언문의 호이스팅 예시를 보자.

```js
var res = square(5); // 25

function square(number) {
  return number * number;
}
```

> 위의 예시에서는 함수 선언문으로 함수가 정의되기 전에 함수 호출이 가능하다. 이를 함수 호이스팅이라 한다. 함수 호이스팅에 의해 함수 선언문으로 정의된 함수는 함수 선언의 위치와 상관 없이 코드 내 어느 위치에서도 함수 호출이 가능하다.
>
> 함수 선언문으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 함수를 초기화하고 이를 VO(Variable Object)에 저장한다. 따라서 함수의 선언, 초기화, 할당이 한번에 이루어진다. 그렇기 대문에 함수 선언의 위치와는 상관 없이 소스내 어는 곳에서든 호출이 가능하다.
>
> 그렇다면 함수 표현식의 경우는 어떨까? 다음의 예시를 보자.

```js
var res = square(5); // TypeError: square is not a function

var square = function(number) {
  return number * number;
}
```

> 함수 선언문과 달리 이번에는 호출이 되지 않고 에러가 발생한다. 함수 표현식에서는 변수 호이스팅이 발생하기 때문이다. 변수 호이스팅은 변수의 선언, 초기화, 할당이 분리되어 진행된다. 먼저 undefined로 초기화가 이루어진 후, 값의 할당은 할당문에서 이루어진다.
>
> 따라서 함수 선언문과 다르게 함수 표현식에서는 스크립트 로딩 시점에 변수 객체(VO)에 함수를 할당하지 않는다. runtime에 해석되고 실행되므로 다르게 동작한다.
>
> 이런 차이로 인해 자바스크립트의 권위자인 더글러스 크락포드는 함수 표현식만 사용할 것을 권고하고 있다. 그는 함수 호이스팅이 함수 호출 전 반드시 함수를 선언하여야 한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있다고 지적한다. 이외에도 함수 선언문으로 함수를 정의하면 사용하기 쉽지만 인터프리터가 많은 코드를 변수 객체에 저장하므로 애플리케이션의 응답속도가 떨어질 수 있다는 문제가 있다.





##### 함수와 일급 객체

> 함수는 일급 객체에 속하므로 다음과 같이 활용할 수 있다.

```js
// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
  return ++num;
};

var decrease = function (num) {
  return --num;
};

var predicates = { increase, decrease };


// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  var num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```





##### 매개변수와 인수

> 매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며 동작한다. 함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.

```js
var foo = function (p1, p2) {
  console.log(p1, p2);
};

foo(1); // 1 undefined
```





##### Call By Value / Call By Reference 와 Pure Function / Impure Function

> 원시 타입인 변수와 객체 타입인 변수가 다르게 동작하였듯이, 원시 타입인 인수와 객체 타입인 인수도 다르게 동작한다. 
>
> 원시 타입 인수는 값에 의한 호출로 동작한다. 함수 호출 시에 원시 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달한다. 따라서 함수 내에서 매개변수를 통해 값이 변경되어도 원본 값은 변경되지 않는다.

```js
// Call By Value

function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0
```

> 그러나 객체 타입의 인수는 참조에 의한 호출로 동작한다. 함수 호출 시에 참조 타입 인수를 함수에 매개변수로 전달할 때에는 매개변수에 참조값이 저장되어 함수로 전달된다. 따라서 함수 내에서 매개변수의 참조값을 이용하여 객체를 변경하는 것이 가능하다.

```js
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
  obj.gender = 'female';
}

var num = 100;
var obj = {
  name: 'Lee',
  gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}
```



순수 함수와 비순수 함수... 부수효과..