### Math 객체

------

> Math 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다. Math 객체는 정적(static) 프로퍼티와 메소드만을 제공한다.
>
> 사용 빈도가 높은 프로퍼티와 메소드만을 설명한다.



#### Math Property

------

##### Math.PI

> PI 값(π)을 반환한다.

```javascript
Math.PI
```





#### Math Method

------

##### Math.abs(x: number): number

> 인수의 절댓값을 반환한다. 절댓값은 반드시 0 또는 양수이어야 한다. 아래의 예시에서 알 수 있듯, 인수의 암묵적 형변환이 발생한다.

```javascript
// 1
Math.abs(-1);
Math.abs('-1');

// 0
Math.abs('');
Math.abs([]);
Math.abs(null);

// NaN
Math.abs(undefined);
Math.abs({});
Math.abs('String');
Math.abs();
```



##### Math.round(x: number): number

> 인수의 소수점 이하를 반올림한 정수를 반환한다.

```javascript
Math.round(1.4);	// 1
Math.round(1.6);	// 2
Math.round(-1.4);	// -1
Math.round(-1.6);	// -2
Math.round(1); 		// 1
Math.round();		// NaN
```



##### Math.ceil(x: number): number

> 인수의 소수점 이하를 올림한 정수를 반환한다.

```javascript
Math.ceil(1.4);		// 2
Math.ceil(1.6);		// 2
Math.ceil(-1.4);	// -1
Math.ceil(-1.6);	// -1
Math.ceil(1); 		// 1
Math.ceil(); 		// NaN
```



##### Math.floor(x: number): number

> 인수의 소수점 이하를 내림한 정수를 반환한다.

```javascript
Math.floor(1.9);  // 1
Math.floor(9.1);  // 9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1);    // 1
Math.floor();     // NaN
```



##### Math.sqrt(x: number): number

> 인수의 제곱근을 반환한다.

```javascript
Math.sqrt(9);  // 3
Math.sqrt(-9); // NaN
Math.sqrt(2);  // 1.414213562373095
Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt();   // NaN
```



##### Math.random(): number

> 임의의 부동 소수점을 반환한다. 반환된 부동 소수점은 0부터 1미만이다. 즉, 0은 포함되지만 1은 포함되지 않는다.

```javascript
Math.random();		// 0 ~ 1 미만의 부동 소수점
```



##### Math.pow(x: number, y: number): number

> 첫번째 인수를 밑(base), 두번째 인수를 지수(exponent)로하여 거듭제곱을 반환한다.

```javascript
Math.pow(2, 8);  // 256
Math.pow(2, -1); // 0.5
Math.pow(2);     // NaN
```



##### Math.max(...values: number[]): number

> 인수 중에서 가장 큰 수를 반환한다.

```javascript
Math.max(1, 2, 3); // 3

// 배열 요소 중 최대값 취득
const arr = [1, 2, 3];
const maxVal = Math.max.apply(null, arr);	// 3

// ES6 Spread operator
Math.max(...arr); // 3
```



##### Math.min(...values: number[]): number

> 인수 중에서 가장 작은 수를 반환한다.

```javascript
Math.min(1, 2, 3); 	// 1

// 배열 요소 중에서 최소값 취득
const arr = [1, 2, 3];
const minVal = Math.min.apply(null, arr); // 1

// ES6 Spread operator
Math.min(...arr); // 1
```

