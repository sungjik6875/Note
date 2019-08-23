#### Immutability

------

> 변경불가성은 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미한다. 변경불가성은 함수형 프로그래밍으니 핵심 원리이다.
>
> 객체는 참조 형태로 전달하고 전달 받는다. 객체가 참조를 통해 공유되어 있다면 그 상태가 언제든지 변경될 수 있기 때문에 문제가 될 가능성도 커지게 된다. 이는 객체의 참조를 가지고 있는 어떤 장소에서 객체를 변경하면 참조를 공유하고 있는 모든 장소에서 그 영향을 받기 때문인데 이것이 의도한 동작이 아니라면 참조를 가지고 있는 다른 장소에 변경 사실을 통지하고 대처하는 추가 대응이 필요하다.
>
> 의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 레퍼런스를 참조한 다른 객체에서 객체를 변경하기 때문이다. 이 문제의 해결 방법은 비용은 조금 들지만 객체를 불변객체로 만들어 프로퍼티 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다. 또는 옵저버 패턴으로 객체의 변경에 대처할 수도 있다.
>
> 불변 객체를 사용하면 복제나 비교를 위한 조작을 단순화 할 수 있고 성능 개선에도 도움이 된다. 하지만 객체가 변경 가능한 데이터를 많이 가지고 있는 경우 부적절할 수도 있다.



##### ※ 옵저버 패턴

> 객체의 상태 변화를 관찰하는 관찰자들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다. 주로 분산 이벤트 핸들링 시스템을 구현하는데 사용한다. 발행/구독 모델로 알려져 있기도 하다.



##### immutable value / mutable value

> 다음의 타입은 JS의 원시 타입으로 변경 불가능한 값이다.

```
Boolean, null, undefined, Number, String, Symbol(ES6)
```

> 원시 타입 이외의 모든 값은 객체 타입으로 다라서 변경이 가능하다. 객체는 새로운 값을 생성할 필요 없이 직접 변경이 가능하다.
>
> 다음의 예시를 통해 immutable한 값의 특징을 확인할 수 있다.

```js
var str = 'Hello';
str = 'world';
```

> 첫번째 구문이 실행되면 메모리에 문자열 'Hello'가 생성되고 식별자 str은 메모리에 생성된 문자열 'Hello'의 메모리 주소를 가리킨다. 그리고 두번째 구문이 실핼되면 이전에 생성된 문자열 'Hello'를 수정하는 것이 아니라 새로운 문자열 'world'를 메모리에 생성하고 식별자 str은 이것을 가리킨다. 이 떄 문자열 'Hello'와 'world'는 모두 메모리에 존재하고 있다. 다만 식별자 str이 문자열 Hello를 가리키고 있다가 문자열 world를 가리키도록 변경되었을 뿐이다.
>
> 또 다른 예시를 보자.

```js
var statement = 'I am an immutable value'; // string은 immutable value
var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
```

> 2행에서 slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있다. 그 이유는 문자열은 변경 할 수 없는 원시 타입이기 때문이다.
>
> 그러나 객체에 속하는 배열의 메소드는 위와 다른 결과를 갖는다.

```js
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
console.log(v2) // 1
```

> 처리후 결과의 복사본을 반환하는 문자열의 메소드인 slice와 달리 배열의 메소드 push는 직접 대상 배열은 변경한다. 그 이유는 배열은 객체이고 객체는 변경 가능하기 때문이다.
>
> 또 다른 예시를 보자.

```js
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim
```

> user.name은 String의 원시타입을 갖는다. 따라서 myName은 값에 의한 전달을 통해 'Lee'라는 값을 갖는다. 'Lee'라는 값이 메모리에 새로 생성되고 myName은 이것을 참조한다. 따라서 user.name을 변경하여도 myName의 값에는 아무런 영향이 없다.
>
> 그러나 다음의 예시는 다른 결과를 갖는다.

```js
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim
```

> 위의 경우 식별자 user2와 user1은 동일한 객체를 참조한다. 이는 user1의 타입이 객체이고, 따라서 주소값이 참조에 의한 전달을 통해 전달되기 때문이다. 따라서 프로퍼티의 변경 시에 의도하지 않은 결과를 발생시킬 수 있다. 만약 의도하지 않았다면 참조를 가지고 있는 다른 식별자에도 변경 사실을 통지하고 대처하도록 해야 한다.



##### immutable data pattern

> 의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 레퍼런스를 참조한 다른 식별자를 통해 객체를 변경하기 때문이다. 이 문제의 해결 방법은 객체를 불변객체로 만들어 프로퍼티의 변경을 방지하여 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경하는 방법이 있다.
>
> 이를 정리하면 객체의 방어적 복사(defensive copy)와 불변객체화를 통한 객체 변경 방지로 정리할 수 있다. 각각 JS에서 제공하는 객체의 메소드인 Object.assign과 Object.freeze를 통해 구현하는 것이 가능하다.



> ##### Defensive Copy : Object.assign
>
> Object.assign은 타깃 객체로 소스 객체의 프로퍼티를 복사한다. 이 때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타겟 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기 된다. 반환 값으로는 타깃 객체를 반환한다. ES6에서 추가된 메소드로 IE는 지원하지 않는다.
>
> Object.assign의 사용법은 다음과 같다.

```js
// Syntax
Object.assign(target, ...sources)
```

> 예시는 다음과 같다.

```js
// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
```

> Object.assign의 첫 번째 인자를 빈 객체로 하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다. 그러나 다음의 예시를 통해서도 알 수 있듯, 깊은 복사가 되지 않아 객체 내부의 객체(Nested Object)까지 복사가 진행되지는 않는다.

```js
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```



> ##### Immutable Object : Object.freeze
>
> Object.freeze를 사용하여 불변 객체로 만들 수 있다. Object.isFrozen 메소드를 사용하여 해당 객체가 불변객체인지 확인할 수 있다. 다음의 예시를 보자.

```js
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }
console.log(Object.isFrozen(user1)); // true
```

> 그러나 객체 내부의 객체는 변경이 가능하다. 

```js
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

Object.freeze(user);

user.address.city = 'Busan'; // 변경된다!
console.log(user); // { name: 'Lee', address: { city: 'Busan' } }
```

> 내부 객체까지 불변 객체로 만드려면 어떻게 해야 할까? 다음의 예시처럼 재귀 호출을 활용하여 객체의 프로퍼티가 객체 타입인 경우 해당 객체에 대해 Object.freeze를 실행하는 방식으로 해결할 수도 있다.

```js
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);

user.name = 'Kim';           // 무시된다
user.address.city = 'Busan'; // 무시된다

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }
```



> ##### Immutable.js
>
> Object.assign과 Object.freeze를 통해서 불변 객체를 만드는 방법은 번거로울 뿐 더러 성능상의 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋다. 이런 경우 대안으로 Facebook이 제공하는 라이브러리인 Immutable.js를 사용하는 방법이 있다.
>
> Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조를 제공한다. 설치 및 활용 방법은 다음과 같다.
>
> 먼저 npm을 통해 설치한다.

```bash
$ npm install immutable
```

> Immutable.js의 Map 데이터 구조를 사용하고자 할 때, 다음과 같이 모듈을 import하여 사용한다.

```js
const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
```

