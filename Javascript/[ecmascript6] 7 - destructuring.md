#### Destructuring

------

> 디스트럭처링은 구조화된 배열, 또는 객체를 비구조화하여 개별적인 변수에 할당하는 것이다. 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.



##### Array Destructuring

> ES5에서 배열의 각 요소를 배열로부터 디스트럭처링하여 변수에 할당하기 위한 방법은 아래와 같다. 각 개별 변수에 할당하고자 하는 값에 접근할 때 배열의 인덱스를 통해 접근하는 것을 확인할 수 있다.

```js
// ES5
var arr = [1, 2, 3]

var one   = arr[0];
var two   = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3
```

> 반면 ES6의 배열 디스트럭처링을 활용하면 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다. 이때 추출 및 할당의 기준은 배열의 인덱스이다.

```js
// ES6
const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three); // 1 2 3
```

> 디스트럭처링을 사용할 때 주의점은 반드시 initializer를 할당해야 한다는 점이다. 만약 이를 할당하지 않으면 에러가 발생한다. 위의 예시에서는 arr이 initializer이다. 만약 할당하지 않고 선언만 할 경우의 예시는 다음과 같다.

```js
const [one, two, three]; 
// SyntaxError: Missing initializer in destructuring declaration
```



> 배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수 리스트가 필요하다.

```js
let x, y, z;
[x, y, z] = [1, 2, 3];

// 위의 구문과 동치이다.
let [x, y, z] = [1, 2, 3];
```

> 왼쪽의 변수 리스트와 오른쪽의 배열은 배열의 인덱스를 기준으로 할당된다. 

```js
let x, y, z;

[x, y] = [1, 2];
console.log(x, y); // 1 2

[x, y] = [1];
console.log(x, y); // 1 undefined, 값이 할당되지 않으면 에러가 아닌, undefined로 초기화된다.

[x, y] = [1, 2, 3];
console.log(x, y); // 1 2

[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// 기본값 설정 : 새로 값이 할당되지 않으면 기본값 유지.
[x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

// spread 문법
[x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]
```

> 배열 디스트럭처링은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶은 경우에 유용하다.





##### Object Destructuring

> 배열처럼 객체 역시 디스트럭처링이 가능하다. 객체 디스트럭처링에서는 객체의 각 프로퍼티를 객체로부터 추출하여 변수리스트에 할당한다. 이때 할당 기준은 프로퍼티 키의 이름이다.
>
> 비교를 위해 ES5에서와의 사용을 비교하자면 다음과 같다. ES5에서 객체의 각 프로퍼티를 개별 변수에 할당하기 위해서는 다음과 같은 방법을 사용해야 했다.

```js
// ES5
var obj = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = obj.firstName;
var lastName  = obj.lastName;

console.log(firstName, lastName); // Ungmo Lee
```

> 그러나 ES6의 객체 디스트럭처링을 활용하면 다음과 같이 할당이 가능하다.

```js
// ES6
const obj = { firstName: 'Ungmo', lastName: 'Lee' };
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee
```

> 배열에서와 마찬가지로 객체에서도 디스트럭처링 사용시에는 initializer로 값을 할당해야 한다. 그렇지 않고 선언만 하는 경우에는 에러가 발생한다.
>
> 또한 배열에서처럼 객체도 디스트럭처링을 사용하기 위해 할당 연산자 왼쪽에는 프로퍼티의 값이 변수인 객체가 필요하다.

```js
const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
console.log(p1, p2); // 'a' 'b'
console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }

// 아래는 위의 축약형이다
const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

// default value
const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
```



> 객체 디스트럭처링도 객체에서 프로퍼티 이름으로 필요한 프로퍼티 값만 추출할 수 있다. 사용 예시는 다음과 같다.

```js
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
```



##### 중첩된 구조에서의 디스트럭처링

> 만약 객체의 프로퍼티의 값이 다시 객체이고, 해당 객체의 프로퍼티도 추출할 수 있을까? 답은 가능하다이다. 중첩된 객체 구조에서는 다음과 같이 활용이 가능하다. 

```js
const person = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

const { address: { city } } = person;
console.log(city); // 'Seoul'
```

> 물론 배열에서도 다음과 같이 사용이 가능하다.

```js
const arr = [1, 2, [3, 4, 5]]
const [x, y, [a, , c]] = arr

console.log(c) // 5
```

> 물론 다음과 같은 예시로도 활용이 가능하다.

```js
const obj = { 
    a: 1, 
    b: { 
        b: 2, 
        c: [
            3, 4, { d: 5 }
        ]
    }
}

const { b: { c: [, , { d }]}} = obj
console.log(d) // 5
```

> 만약 디스트럭처링의 과정을 거치지 않고 d를 콘솔에 출력한다면 에러가 뜨는 것을 확인할 수 있다.

```js
const obj = { a: 1, b: { b: 2, c: [3, 4, { d: 5 }]}}
console.log(d)
// Uncaught ReferenceError: d is not defined
```

