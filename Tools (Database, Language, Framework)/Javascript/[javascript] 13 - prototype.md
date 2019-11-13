### Prototype

------

> Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어와 달리 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다. 따라서 자바스크립트의 동작 원리를 이해하기 위해서는 프로토타입의 개념을 잘 이해하고 있어야 한다.
>
> 클래스 기반 객체지향 프로그래밍 언어에서는 객체 생성 이전에 클래스를 정의하고 이를 통해 객체를 생성한다. 하지만 프로토타입 기반 객체지향 프로그래밍 언어는 클래스 없이도 객체를 생성할 수 있다.
>
> 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이는 마치 객체지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 프로토타입이라 한다.
>
> 이 프로토타입 객체는 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.

```javascript
var student = {
    name: 'Lee',
    score: 90
};

// student에는 hasOwnProperty 메소드가 없으나 다음은 동작한다.
console.log(student.hasOwnProperty('name')); // true
```

> 다음의 구문을 활용하면 프로토타입 객체를 콘솔에서 확인할 수 있다.

```javascript
console.dir(student);
```





#### [[Prototype]]

------

> 자바스크립트의 모든 객체는  [[Prototype]]이라는 인터널 슬롯을 갖는다. 이 [[Prototype]]의 값은 null 또는 객체이며 상속을 구현하는 데 사용된다. [[Prototype]] 객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다.
>
> [[Prototype]]의 값은 프로토타입 객체이며 `__proto__` access property로 접근할 수 있다.  `__proto__` 에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.
>
> student 객체는  `__proto__`  프로퍼티로 자신의 부모 객체인 Object.prototype을 가리키고 있다. 이는 다음의 예시로 확인 가능하다.

```javascript
// true
console.log(student.__proto__ === Object.prototype); 
```

> 객체를 생성할 때 프로토타입은 결정된다. 결정된 프로토타입 객체는 다른 임의의 객체로 변경이 가능하다. 이것은 부모 객체인 프로토타입을 동적으로 변경하는 것이 가능함을 말한다. 이러한 특징을 활용하여 객체의 상속을 구현할 수 있다.



##### [[Prototype]] vs prototype

> 모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯을 갖으며 상속을 위해 사용된다. 함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와는 다르게 prototype 프로퍼티도 소유한다.
>
> 유의할 점은 prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯과는 다르다는 것이다. 둘 모두다 프로토타입 객체를 가리키지만 관점의 차이가 있다.
>
> 예시는 다음과 같다.

```javascript
function Person(name) {
    this.name = name;
}

var foo = new Person('Lee')
```

> Person은 함수 객체이고, foo는 Person의 생성자를 통해 생성된 함수를 가리키는 변수이다. foo와 Person은 모두 [[Prototype]]의 인터널 슬롯을 갖고 있으나, prototype 프로퍼티는 Person만 갖고 있다.

```javascript
console.dir(Person); // prototype 프로퍼티가 존재.
console.dir(foo); // prototype 프로퍼티가 존재하지 않음.
```

> 둘의 차이는 다음과 같다.

> ##### [[Prototype]]
>
> 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다. 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype을 가리킨다.

> ##### prototype
>
> 함수 객체만 가지고 있는 프로퍼티이다. 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입)를 가리킨다. 따라서 다음 구문의 결과는 true이다.

```javascript
console.log(Person.prototype === foo.__proto__);
```

> 다음 구문의 결과도 true이다.

```javascript
console.log(Function.prototype === Person.__proto__);
```



##### constructor

> 프로토타입 객체는 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.
>
> 예를 들어 Person() 생성자 함수에 의해 생성된 객체를 foo라 하자. 이 foo 객체를 생성한 객체는 Person() 생성자 함수이다. 이때 foo 객체 입장에서 자신을 생성한 객체는 Person() 생성자 함수이다. 반면 foo 객체의 프로토타입 객체는 Person.prototype이다. 프로토타입 객체인 Person.prototype의 constructor 프로퍼티 또한 Person() 생성자 함수를 가리킨다.
>
> Person의 입장에선 자신을 생성한 객체는 Function() 생성자 함수이다.
>
> 따라서 다음의 구문은 모두 true를 출력한다.

```javascript
console.log(Person.prototype.constructor === Person);
console.log(foo.constructor === Person);
console.log(Person.constructor === Function);
```





#### Prototype Chain

------

> 자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 `__proto__`가 가리키는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.
>
> 부모 객체에도 없을 경우 부모 객체의 프로토타입 객체를 탐색하는데, 이를 프로토타입 체인이라 한다.
>
> 예시는 다음과 같다.

```javascript
var student = {
    name: 'Lee',
    score: 90
}

// Object.prototype.hasOwnProperty()
// 다음의 구문은 true를 출력한다.
console.log(student.hasOwnProperty('name'))
```

> 위의 예시에서 student 객체는 hasOwnProperty 메소드를 갖고 있지 않다. 보통의 경우라면 에러가 발생하는 것이 정상이다. 그러나 student 객체의 부모객체인 Object.prototype에는 hasOwnProperty 메소드를 갖고 있으므로 `__proto__`를 통해 프로토타입 객체를 탐색하고, 이를 상속하여 사용하는 것이 가능하다.

