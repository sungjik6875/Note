#### Array

------

> 배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열도 객체에 속하며 배열을 다루기 위한 다양한 메소드를 갖는다.

```js
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```



##### 유사 배열 객체 (array-like object)

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

