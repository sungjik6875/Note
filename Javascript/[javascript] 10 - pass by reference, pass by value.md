#### Pass By Reference

------

> Object type을 객체 타입 또는 참조 타입이라 한다. 참조 타입이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다. 원시 타입은 값이 한번 정해지면 변경할 수 없지만(immutable) 객체는 프로퍼티를 변경, 추가, 삭제가 가능하므로 변경 가능하다고(mutable) 할 수 있다.
>
> 위와 같은 특성으로 인해 객체 타입은 어느 정도로 메모리 공간을 확보해야 하는지 예측할 수 없다. 따라서 런타임에 메모리 공간을 확보하고, 메모리의 힙 영역에 저장된다. 그리고 식별자는 이 영역을 참조할 수 있는 참조 값을 갖고 있다.
>
> 다음의 예시를 보자.

```js
// Pass-by-reference
var foo = {
  val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true
```

> foo 객체를 객체 리터럴 방식으로 생성하였다. 이때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체의 참조값을 저장하고 있다.
>
> 변수 bar에는 변수 foo의 값을 할당하였다. 따라서 변수 bar에도 변수 foo에 저장된 참조값이 저장이 된다. 따라서 foo와 bar는 동일한 객체를 참조하게 된다. 동일한 객체를 참조하므로 객체의 프로퍼티가 변경되면 두 변수 모두 변경된 값을 참조하게 된다. 이런 경우 객체는 복사되지 않으며 참조값만 복사되기 때문에 가능하다.
>
> 또 다른 예시를 보자.

```js
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false
```

> 이번에는 변수 foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였다. 따라서 변수 foo와 변수 bar는 다른 객체를 참조하고 있고, 참조값도 다르다. 





#### Pass By Value

------

> 원시 타입은 값으로 전달된다. 즉, 값이 복사되어 전달된다. 이를 pass-by-value라 한다. 원시 타입은 값이 한번 정해지면 변경할 수 없고(immutable) 이들은 런타임(변수 할당 시점)에 메모리의 스택 영역에 고정된 메모리 영역을 점유하고 저장된다.

```js
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false
```

> 변수 a는 원시 타입인 숫자 타입 값 1을 저장하고 있다. 이 값 1이 복사되어 b에 저장된다. 

