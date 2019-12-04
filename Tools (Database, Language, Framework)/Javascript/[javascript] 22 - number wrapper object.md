### Number 래퍼 객체

------

##### 원시 타입 Number의 래퍼 객체 변환

> Number 객체는 원시 타입 number를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 래퍼(wrapper) 객체이다. 변수 또는 객체의 프로퍼티가 숫자를 값으로 가지고 있다면 Number 객체의 별도 생성없이 Number 객체의 프로퍼티와 메소드를 사용할 수 있다. 
>
> 이에 대한 예시는 다음과 같다.

```javascript
var num = 1.5;
console.log(num.toFixed()) 	// 2
```

> 원시 타입 number가 Number.prototype의 메소드를 호출할 수 있는 이유는 원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 래퍼 객체로 일시적으로 변환되어 프로토타입 객체를 공유하기 때문이다.





#### Number Constructor

------

##### Number 객체의 생성

> Number 객체는 Number() 생성자 함수를 통해 생성할 수 있다.

```javascript
new Number(value);
```

> value는 Number의 원시 타입 값을 의미한다. 만약 value가 숫자로 변환될 수 없다면 NaN을 반환한다.
>
> 이에 대한 예시는 다음과 같다.

```javascript
var x = new Number(123);
var y = new Number('123');
var z = new Number('str');
```

```javascript
console.log(x);		// Number {123}
console.log(y);		// Number {123}
console.log(z);		// Number {NaN}
```



> ##### new 없이 Number() 호출 시
>
> 만약, Number() 생성자 함수를 호출할 때 new 연산자를 붙이지 않아 생성자로 사용하지 않으면 Number 객체를 반환하지 않고 원시 타입 Number를 반환한다. 물론 이 때 암묵적 형변환이 일어나기도 한다.
>
> 이에 대한 예시는 다음과 같다.

```javascript
var x = Number('123');
console.log(typeof x, x);	// number 123
```

> 일반적으로 숫자를 사용할 때에는 원시 타입 숫자를 사용한다.





#### Number Property

------

> 정적(static) 프로퍼티로 Number 객체를 생성할 필요없이 **Number.propertyName**의 형태로 사용한다.



##### Number.EPSILON

> Number.EPSILON은 자바스크립트에서 표현할 수 있는 가장 작은 수이다. 이는 임의의 수와 그 수보다 큰 수 중 가장 작은 수와의 차이와 같다. 이 수의 크기를 표현하자면 약 `2.2204460492503130808472633361816E-16` 또는 `2^-52`이다.

> ##### EPSILON의 활용 : 부동소수점 비교
>
> 컴퓨터 언어에서 부동소수점을 기반으로 한 산술 연산 비교는 정확한 값을 기대하기 어렵다. 부동소수점을 표현하는 표준 중 가장 널리 쓰이는 IEEE 754는 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수 밖에 없는 구조적 한계를 갖는다. 
>
> 이에 대한 예시는 다음과 같다.

```javascript
console.log(0.1 + 0.2);		// 0.30000000000000004
console.log(0.1 + 0.2 == 0.3);	// false
```

> 그렇다면 위와 같은 문제를 어떻게 해결해야 할까? 자바스크립트에서는 부동소수점의 비교시 EPSILON 값을 기준으로 두 부동소수점의 값이 같은지 다른지를 확인할 수 있다.
>
> 예시는 다음과 같다.

```javascript
function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
```

```javascript
console.log(isEqual(0.1 + 0.2, 0.3));	// true
```

> 위의 예시의 함수처럼 a와 b의 차이가 EPSILON보다 작다면, 우리는 두 수 a와 b를 같은 수로 인정하여도 무방할 것이다.



##### Number.MAX_VALUE / Number.MIN_VALUE

> ##### Number.MAX_VALUE
>
> 자바스크립트에서 사용 가능한 가장 큰 숫자를 반환한다. MAX_VALUE의 크기를 표현하자면 `1.7976931348623157e+308`이다. MAX_VALUE 보다 큰 숫자는 `Infinity`이다.

```javascript
Number.MAX_VALUE;	// 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE);	// true
```

> ##### Number.MIN_VALUE
>
> 자바스크립트에서 사용 가능한 가장 작은 숫자를 반환한다. MIN_VALUE의 크기를 표현하자면 `5e-324`이다. MIN_VALUE는 0에 가장 가까운 양수 값으로 MIN_VALUE보다 작은 숫자는 0으로 변환된다.

```javascript
Number.MIN_VALUE; // 5e-324
console.log(Number.MIN_VALUE > 0); // true
```



##### Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY

> 각각 양과 음의 무한대를 반환한다.

```javascript
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
```



##### Number.NaN

> 숫자가 아님(Not-a-Number)을 나타내는 숫자값이다. Number.NaN 프로퍼티는 window.NaN 프로퍼티와 같다.

```javascript
Number.NaN	// NaN
```





#### Number Method

------

##### Number.isFinite(testValue: number): boolean

> 매개변수 testValue에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다. 사용 형식은 다음과 같다.

```javascript
Number.isFinite(testValue)
```

> Number.isFinite()는 전역 함수 isFinite()와 차이가 있다. 전역 함수 isFinite()는 인수를 숫자로 변환하여 검사를 수행한다. 즉, testValue의 암묵적 형변환이 발생할 수 있다. 반면, Number.isFinite()는 인수를 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.
>
> 예시는 다음과 같다.

```javascript
// true
Number.isFinite(0)
Number.isFinite(2e64)

// false
Number.isFinite(Infinity)
Number.isFinite(NaN)
Number.isFinite('Hello')
Number.isFinite('2005/12/12')
Number.isFinite(null)
```



##### Number.isInteger(testValue: number): boolean

> 매개변수에 전달된 값이 정수인지 검사하여 그 결과를 Boolean으로 반환한다. 마찬가지로 인수의 암묵적 형변환은 발생하지 않는다. 사용 형식은 다음과 같다.

```javascript
Number.isInteger(testValue)
```

> 사용 예시는 다음과 같다.

```javascript
// true
Number.isInteger(123)
Number.isInteger(-123)
Number.isInteger(5-2)
Number.isInteger(0)

// false
Number.isInteger(0.5)
Number.isInteger('123')
Number.isInteger(false)
Number.isInteger(Infinity)
```



##### Number.isNaN(testValue: number): boolean

> 매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다. 사용 형식은 다음과 같다.

```javascript
Number.isNaN(testValue)
```

> Number.isNaN()은 전역 함수 isNaN()과 차이가 있다. 그 차이는 위에서와 마찬가지로 인수의 암묵적 형변환의 여부이다. 전역 함수 isNaN()는 인수의 숫자로의 암묵적 형변환이 발생한다. 그러나 Number.isNaN()은 암묵적 형변환이 발생하지 않는다. 따라서 숫자가 아닌 인수가 주어지면 반환값은 언제나 false이다.

```javascript
// true
Number.isNaN(NaN)

// false
Number.isNaN(undefined)
Number.isNaN(true)
Number.isNaN(null)
Number.isNaN(37)
Number.isNaN('37');
Number.isNaN(' ');
Number.isNaN(new Date())
```



##### Number.isSafeInteger(testValue: number): boolean

> 매개변수에 전달된 값이 안전한 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 여기서 안전한 정수값이란 ` -(2^53 - 1)`와 `2^53 - 1 `사이의 정수값이다. 마찬가지로 인수의 암묵적 형변환이 발생하지 않는다.
>
> 사용 형식은 다음과 같다.

```javascript
Number.isSafeInteger(testValue)
```

> 사용 예시는 다음과 같다.

```javascript
// true
Number.isSafeInteger(123)
Number.isSafeInteger(-123)
Number.isSafeInteger(5-2)
Number.isSafeInteger(0)
Number.isSafeInteger(1000000000000000)

// false, 안전 범위 외의 정수이므로
Number.isSafeInteger(10000000000000001)
Number.isSafeInteger(Infinity)
Number.isSafeInteger(-Infinity)

// false, 정수가 아니므로
Number.isSafeInteger(0.5)
Number.isSafeInteger('123')
Number.isSafeInteger(false)
```



##### Number.prototype.toExponential(fractionDigits?: number): string

> 대상을 지수 표기법으로 변환하여 **문자열**로 반환한다. 지수 표기법이란 매우 큰 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다.
>
> 사용 형식은 다음과 같다.

```javascript
numObj.toExponential([fractionDigits])
```

> 매개변수 fractionDigits는 0~20 사이의 정수값으로 소숫점 이하의 자릿수를 나타낸다. 옵션이므로 생략 가능하다.
>
> 사용 예시는 다음과 같다.

```javascript
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
```

```javascript
console.log(77.1234.toExponential()); // logs 7.71234e+1
```

> 만약 대상이 정수일 때에는 다음과 같이 공백을 포함시켜야 한다.

```javascript
console.log(77.toExponential());
// SyntaxError: Invalid or unexpected token

console.log(77 .toExponential());     // logs 7.7e+1
```

> 공백을 포함시키지 않았을 때 에러가 발생하는 이유는 무엇일까?



##### ※ 정수 리터럴과 메소드의 사용

> 다음의 예제는 에러를 발생시킨다.

```javascript
77.toString(); 
// SyntaxError: Invalid or unexpected token
```

> 에러가 발생하는 이유는 무엇일까? 위의 예시에서 77이란 숫자 뒤의 `.`은 의미가 모호하다. 소수 구분 기호일 수도 있고 객체 프로퍼티에 접근하기 위한 마침표 표기법일 수도 있다. `.`은 내부적으로 어떻게 해석이 될까?
>
> 자바스크립트 엔진은 숫자 뒤의 `.`을 부동 소수점 숫자의 일부로 해석한다. 그런데 `77.toString()`은 숫자로 해석할 수 없으므로 에러가 발생하는 것이다.
>
> 반면 다음의 예시는 에러를 발생시키지 않는다.

```javascript
1.23.toString (); // '1.23'
```

> 이 예제의 경우 1과 23 사이의 `.`는 부동 소수점으로 해석되며 용도 또한 부동 소수점이다. 23 뒤의 `.`은 앞에 부동 소수점이 존재하므로 이번에는 명백히 마침표 표기법이란 것을 알 수 있다.
>
> 따라서 이번에는 자바스크립트 엔진이 첫 번째 `.`을 부동 소수점, 두 번째 `.`을 마침표 표기법으로 해석한다. 따라서 문법적 에러가 발생할 여지가 없다.
>
> 만약 정수 리터럴과 메소드를 함께 사용하고자 할 경우, 다음과 같은 방법들을 사용할 수 있다.

```javascript
(77).toString();
77 .toString();
```

> 공백을 포함하여 기술이 가능한 이유는 자바스크립트에서 숫자는 정수 부분과 소수 부분 사이에 공백을 포함할 수 없기 때문이다. 따라서 숫자 뒤에 공백, 공백 뒤에 `.`이 오면 `.`를 마침표 표기법으로 해석한다.



##### Number.prototype.toFixed(fractionDigits?: number): string

> 매개변수로 지정된 수의 소수점자리를 반올림하여 문자열로 반환한다. 사용 형식은 다음과 같다.

```javascript
numObj.toFixed([fractionDigits])
```

> 매개변수 fractionDigits는 0~20 사이의 정수값으로 소수점 이하 자릿수를 나타낸다. 기본값은 0이며 옵션이므로 생략이 가능하다.
>
> 사용 예시는 다음과 같다.

```javascript
var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'

// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'

// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'

// 소숫점 이하 3자리수 유효, 나머지 반올림
console.log(numObj.toFixed(3));  // '12345.679'

// 소숫점 이하 6자리수 유효, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'
```



##### Number.prototype.toPrecision(precision?: number): string

> 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다. 지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.
>
> 사용 형식은 다음과 같다.

```javascript
numObj.toPrecision([precision])
```

> 매개변수 precision은 1~21 사이의 정수값으로 전체 자릿수를 나타낸다. 옵션으로 생략이 가능하다.
>
> 사용 예시는 다음과 같다.

```javascript
var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '15345.6789'

// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'

// 전체 2자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));  // '1.5e+4'

// 전체 3자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(3));  // '1.53e+4'

// 전체 6자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(6));  // '15345.7'
```



##### Number.prototype.toString(radix?: number): string

> 숫자를 매개변수로 지정한 진법을 적용한 다음 문자열로 변환하여 반환한다. 사용 형식은 다음과 같다.

```javascript
numObj.toString([radix])
```

> 매개변수 radix는 진법을 의미한다. 기본값은 10이며 옵션이므로 생략이 가능하다.
>
> 사용 예시는 다음과 같다.

```javascript
var count = 10;
console.log(count.toString());   // '10'
```

```javascript
var x = 16;
console.log(x.toString(2));       // '10000'
console.log(x.toString(8));       // '20'
console.log(x.toString(16));      // '10'
```

```javascript
console.log((17.2).toString());  // '17.2'
console.log((254).toString(16));  // 'fe'
console.log((-10).toString(2));   // '-1010'
console.log((-0xff).toString(2)); // '-11111111'
```



##### Number.prototype.valueOf(): number

> Number 객체의 원시 타입 값을 반환한다. 사용 예시는 다음과 같다.

```javascript
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

