#### Type Coercion

------

> 자바스크립트에서 타입 변환은 개발자에 의해 의도적으로 변환되기도 하고, 자바스크립트 엔진에 의해 암묵적으로 변환되기도 한다. 전자를 명시적 타입 변환(Expicit Coercion) 또는 타입 캐스팅(Type Casting)이라 한다. 후자의 경우는 암묵적 타입 변환(Implicit Coercion)이라 한다.
>
> 타입 변환의 예시는 다음과 같다. 먼저 명시적 타입변환의 예시이다.

```js
var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
console.log(typeof str); // string
```

> 암묵적 타입 변환의 예시는 다음과 같다.

```js
var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10
```

> 자바스크립트에서 원시 타입의 값은 변경할 수 없다는 특징이 있었다. 따라서 타입 변환도 해당 값을 변경하는 것이 아니라, 타입이 변경된 상태의 값을 새로 생성하는 것이다. 절대로 같은 메모리 공간에 변경된 값을 재할당하는 것이 아님을 알아두자.
>
> 따라서 타입 변환 후에도 같은 식별자를 사용한다면, 타입 변환으로 인해 새로 생성된 값을 새로운 메모리 공간에 할당하고, 식별자가 그 메모리 공간의 주소를 가리키도록 동작한다.
>
> 만약 변경된 값을 어떤 식별자도 가리키지 않는다면 어떻게 될까? 암묵적 타입 변환의 경우 보통은 표현식을 평가하기 위해 일회성으로 사용된다. 사용된 이후에는 참조하는 식별자가 없으므로 가비지 컬렉터에 의해 자동으로 메모리에서 제거된다.



#### Impicit Coercion

------

> 자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 컨텍스트를 고려하여 암묵적 타입 변환을 실행한다.

```js
// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2               // '102'
`1 * 10 = ${ 1 * 10 }` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0 // true
if (1) { }
```

> 이처럼 표현식을 평가할 때 문맥, 즉 컨텍스트에 부합하지 않는 다양한 상황이 발생할 수 있는데 이때 자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 통해 표현식을 평가한다. 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시타입 중 하나로 타입을 자동 변환한다. 



##### 문자열 타입으로 변환

```js
1 + '2' // "12"
```

> `+` 연산자는 피연산자중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다. 이 경우 문자열 타입이 아닌 피연산자는 문자열 타입으로 자동 변환된다.

```js
console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
```

> ES6에서 도입된 템플릿 리터럴의 문자열 인터폴레이션의 경우 표현식의 평가 결과가 문자열 타입으로 변환된다. 위의 예시에서는 숫자 타입의 값이 문자열 타입으로 변환되는 경우이다. 
>
> 각 타입 별로 문자열 타입으로 변환될 때 동작하는 방식은 아래와 같다.

```js
// 숫자 타입
0 + ''              // "0"
-0 + ''             // "0"
1 + ''              // "1"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
-Infinity + ''      // "-Infinity"
```

```js
// 불리언 타입
true + ''           // "true"
false + ''          // "false"
```

```js
// null 타입
null + ''           // "null"
// undefined 타입
undefined + ''      // "undefined"
```

```js
// 심볼 타입
(Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
```

```js
// 객체 타입
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"
```



##### 숫자 타입으로 변환

```js
1 - '1'    // 0
1 * '10'   // 10
1 / 'one'  // NaN
```

> `-, *, /`와 같은 산술 연산자의 피연산자는 컨텍스트 상 숫자 타입이어야 한다. 따라서 산술 연산자의 피연산자가 숫자 타입이 아닌 경우, 해당 값이 숫자 타입으로 타입 변환된다. 만약 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 `NaN`을 반환한다.

```js
'1' > 0   // true
```

> 비교 연산자의 경우도 피연산자의 크기를 비교해야 하므로 컨텍스트 상 피연산자는 숫자타입어야 한다. 따라서 이런 경우에도 숫자 타입으로 타입 변환이 일어나게 된다.
>
> 각 타입 별로 숫자 타입으로 변환될 때 동작하는 방식은 아래와 같다.

```js
// 문자열 타입
+''             // 0
+'0'            // 0
+'1'            // 1
+'string'       // NaN
```

```js
// 불리언 타입
+true           // 1
+false          // 0
```

```js
// null 타입
+null           // 0
// undefined 타입
+undefined      // NaN
```

```js
// 심볼 타입
+Symbol()       // TypeError: Cannot convert a Symbol value to a number
```

```js
// 객체 타입
+{}             // NaN
+[]             // 0
+[10, 20]       // NaN
+(function(){}) // NaN
```



##### 불리언 타입으로 변환

```js
if ('') console.log(x);
```

> 반복문이나 조건문과 같은 제어문에서 조건식은 불리언 값을 반환해야 하는 표현식이다. 따라서 조건식에서는 표현식의 결과가 불리언 값으로 반환되기 위해 타입 변환이 발생한다.
>
> 예시는 다음과 같다.

```js
if ('')    console.log('1');
if (true)  console.log('2');
if (0)     console.log('3');
if ('str') console.log('4');
if (null)  console.log('5');
// 2 4
```

> 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(true로 인식할 값)과 Falsy(false로 인식할 값)으로 구분한다. Falsy에 해당되는 값은 다음과 같다. Falsy에 해당되지 않는 모든 값은 모두 Truthy에 해당된다.

```
false, undefined, null, 0, -0, NaN, ''(빈 문자열)
```

> 빈 배열 `[]`은 Falsy로 간주될 것 같지만 Truthy에 해당되는 케이스이다.





#### Explicit Coercion

------

> 개발자의 의도에 의해 명시적으로 타입을 변경하는 방법도 있다. 래퍼 객체 생성자 함수를 new 없이 호출하는 방법과 자바스크립트에서 제공하는 내장 메소드를 활용하는 방법이 있다. 혹은 암묵적 타입 변환을 활용할 수도 있다.



##### 문자열 타입으로 변환

> 문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 아래와 같다.

> ##### String 생성자 함수를 new 연산자 없이 호출하는 방법

```js
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"
```

> ##### Object.prototype.toString 메소드를 사용하는 방법

```js
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"
```

> ##### 문자열 연결 연산자를 이용하는 방법

```js
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```



##### 숫자 타입으로 변환

> 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 아래와 같다.

> ##### Number 생성자 함수를 new 연산자 없이 호출하는 방법

```js
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53

// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0
```

> ##### parseInt, parseFloat 함수를 사용하는 방법 (문자열만 변환 가능)

```
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53
```

> ##### 단항 연결 연산자를 이용하는 방법

```js
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53

// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0
```

> ##### 산술 연산자를 이용하는 방법

```js
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53

// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```



##### 불리언 타입으로 변환

> 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 아래와 같다.

> ##### Boolean 생성자 함수를 new 연산자 없이 호출하는 방법

```js
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true

// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true

// null 타입 => 불리언 타입
console.log(Boolean(null));      // false

// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false

// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
```

> ##### `!`의 부정 논리 연산자를 두번 사용하는 방법

```js
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true

// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true

// null 타입 => 불리언 타입
console.log(!!null);      // false

// undefined 타입 => 불리언 타입
console.log(!!undefined); // false

// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```





#### Short Circuit Evaluation

------

> 논리 연산자 `&&, ||`는 논리 평가를 결정한 피연산자의 결과를 그대로 반환하는데 이를 단축 평가라 한다. 단축 평가는 아래의 규칙을 따른다.
>
> 예시는 다음과 같다.

```js
console.log('Cat' && 'Dog') // “Dog”
console.log('Cat' || 'Dog') // 'Cat'
```

> 위 예시에서 `Cat`과 `Dog`는 논리 연산자에 의해 불리언 값으로 암묵적 타입 변환이 진행된다. 둘은 모두 Truthy에 해당하므로 불리언 타입 변환 이후 true로 평가된다.
>
> 첫 번째 예시를 보자. 논리곱 연산자인 &&는 모두 true일 경우에만 true를 반환하고, 그 외의 경우에는 false를 반환한다. 첫 번째 피연산자인 Cat이 true이므로 논리곱 연산의 결과는 Dog에 의해 결정되게 한다. 따라서 논리 연산으로 반환되는 값이 Dog가 된다.
>
> 두 번째 예시에서는 논리합 연산이 진행되므로, Cat이 true이므로 Dog의 값과 상관 없이 조건식의 평가가 true로 결정된다. 즉, Cat에 의해 논리 연산이 결정되었으므로 Cat을 반환하게 된다.
>
> 단축 평가의 규칙은 아래와 같다.

| 단축 평가 표현식    | 반환되는 값 |
| ------------------- | ----------- |
| true \|\| anything  | true        |
| false \|\| anything | anything    |
| true && anything    | anything    |
| false && anything   | false       |

> 예시는 다음과 같다.

```js
// 논리합(||) 연산자
'Cat' || 'Dog'  // 'Cat'
false || 'Dog'  // 'Dog'
'Cat' || false  // 'Cat'
```

```js
// 논리곱(&&) 연산자
'Cat' && 'Dog'  // Dog
false && 'Dog'  // false
'Cat' && false  // false
```



##### 단축 평가의 활용

> 단축 평가는 다음과 같은 상황에서 유용하게 활용된다.

> ##### 객체가 null인지 확인하고 프로퍼티를 참조할 때

```js
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null
```

> 만약 객체가 null일 경우 프로퍼티를 참조하려고 하면 에러가 발생한다. 그러나 단축 평가를 사용하면 에러를 회피할 수 있다.

> ##### 함수의 인수를 초기화할때

```
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}
getStringLength();     // 0
getStringLength('hi'); // 2


// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}
getStringLength();     // 0
getStringLength('hi'); // 2
```

> 매개변수의 기본값을 설정할 때에도 위와 같이 단축 평가를 사용할 수 있다. 함수를 호출 시에 인수를 전달하지 않으면 변수는 undefined를 갖는다. 이때 단축 평가를 사용하여 매개변수의 기본값을 설정함으로써 undefined로 인해 발생하는 에러를 방지할 수 있다.