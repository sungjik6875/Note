### String 래퍼 객체

------

> String 객체는 원시타입인 문자열을 다룰 때 유용한 프로퍼티와 메소드를 제공하는 래퍼 객체이다. 따라서 변수 또는 객체 프로퍼티가 문자열을 값으로 갖고 있다면 String 객체의 별도 생성 없이 String 객체의 프로퍼티와 메소드를 사용할 수 있다.
>
> 원시 타입이 래퍼 객체의 메소드를 사용할 수 있는 이유는 원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 래퍼 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.
>
> 예시는 다음과 같다.

```javascript
const str = 'Hello world!';
console.log(str.toUpperCase()); // 'HELLO WORLD!'
```

> 위에서 원시 타입 문자열을 담고 있는 변수 str이 String.prototype.toUpperCase() 메소드를 호출할 수 있는 것은 변수 str의 값이 일시적으로 래퍼 객체로 변환되었기 때문이다.





#### String Constructor

------

##### 생성자를 활용한 String 호출

> String 객체는 String 생성자 함수를 통해 생성할 수 있다. 이 때 전달된 인자는 모두 문자열로 변환된다.
>
> 사용 형식은 다음과 같다.

```javascript
new String(value);
```

> 사용 예시는 다음과 같다. 문자열은 물론, 숫자나 null, undefined 등도 문자열로 변환되는 것을 확인할 수 있다.

```javascript
let strObj = new String('Lee');
console.log(strObj); 
// String {0: 'L', 1: 'e', 2: 'e', length: 3, [[PrimitiveValue]]: 'Lee'}

strObj = new String(1);
console.log(strObj); 
// String {0: '1', length: 1, [[PrimitiveValue]]: '1'}

strObj = new String(null);
console.log(strObj);
// String {0: "n", 1: "u", 2: "l", 3: "l", length: 4, [[PrimitiveValue]]: 'null'}

strObj = new String(undefined);
console.log(strObj); 
// String {0: 'u', 1: 'n', 2: 'd', 3: 'e', 4: 'f', 5: 'i', 6: 'n', 7: 'e', 8: 'd', length: 9, [[PrimitiveValue]]: 'undefined'}
```



##### 생성자 없이 String 호출

> new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 객체가 아닌 문자열 리터럴을 반환한다. 이때 형 변환이 발생할 수 있다.
>
> 예시는 다음과 같다.

```javascript
var x = String('Lee');
console.log(x); 				// Lee
console.log(typeof x)		// string
```



##### String 객체와 리터럴의 문자열 값 비교

> 같은 문자열 값을 갖고 있는 객체와 리터럴의 값을 비교할 경우에는 `===` 를 사용할 수 없다. 이는 둘의 데이터타입이 다르기 때문이다. 값을 비교해야 할 경우네는 암시적 형변환이 발생하는 `==`  비교를 해야 한다.
>
> 예시는 다음과 같다.

```javascript
const str1 = "Lee";
const str2 = "Lee";
const str3 = new String("Lee");
```

```javascript
console.log(str1 === str2); 	// true
console.log(str1 === str3); 	// false
console.log(str1 == str3);		// true
```

```javascript
console.log(typeof str1);	// string
console.log(typeof str2);	// string
console.log(typeof str3);	// object
```





#### String Property

------

##### String.length

> 문자열의 길이를 반환한다. String 객체는 length 프로퍼티를 소유하고 있으므로 유사배열 객체에 해당한다.

```javascript
const str1 = 'Hello';
console.log(str1.length); // 5

const str2 = '안녕하세요!';
console.log(str2.length); // 6
```





#### String Method

------

> String 객체의 모든 메소드는 항상 새로운 문자열을 반환한다. 이는 문자열이 변경 불가능한(immutable)한 원시 값이기 때문이다.



##### String.prototype.charAt(n)

> 인수로 전달한 인덱스 값을 사용하여 인덱스에 해당하는 위치의 문자를 반환한다. 만약 인덱스의 값이 문자열의 범위를 벗어난 경우 빈 문자열을 반환한다.
>
> 예시는 다음과 같다.

```javascript
const str = 'Hello';

console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o

// 지정한 index가 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
console.log(str.charAt(5)); // ''
```

> 문자열을 순회하고자 할 때에는 다음과 같이 length 프로퍼티를 사용할 수 있다. 

```javascript
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
```

> 또한 문자열은 유사배열 객체이므로 인덱스 접근이 가능하다.

```javascript
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // str['0']
}
```



##### String.prototype.concat(str1[, str2, ...])

> 인수로 전달한 문자열 값들을 연결한 새로운 문자열을 반환한다. 위에서 언급하였듯이 연결에 사용된 문자열 값들은 변경되지 않는다.
>
> 사용 형식은 다음과 같다.

```javascript
str.concat(str1[, str2, ..., strN])
```

> 사용 예시는 다음과 같다.

```javascript
const str1 = "he";
const str2 = "llo";
const str3 = " world";

console.log(str1.concat(str2, str3));
// hello world
```

> 연결에 사용된 원본 문자열들은 변경되지 않는다.

```javascript
console.log(str1);	//	"he"
console.log(str2);	//	"llo"
console.log(str3);	// " world"
```



##### String.prototype.indexOf()

> 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 인덱스를 반환한다. 이때 검색 시작 인덱스를 지정할 수 있다. 만약 검색 시작 위치를 문자열의 인덱스 범위 외의 값으로 지정하거나, 또는 문자열을 찾지 못한 경우에는 -1을 반환한다.
>
> 사용 형식은 다음과 같다.

```javascript
str.indexOf(searchString[, fromIndex]);
```

> searchString은 대상 문자열 str에서 찾고자 하는 문자열의 값이다. fromIndex는 검색을 시작하려는 인덱스 위치이다. 
>
> 사용 예시는 다음과 같다.

```javascript
var str = 'hello world';

console.log(str.indexOf('l'));			// 2
console.log(str.indexOf('w'));			// 6
console.log(str.indexOf('z'));			// -1
console.log(str.indexOf('w', 20));	// -1
```

> indexOf 메소드는 다음과 같이 대상 문자열에 찾고자 하는 문자열이 있는지 없는지에 따라 로직을 분기시키는 경우에 활용할 수 있다.

```javascript
if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}
```

> ES6에서는 위 예시의 로직을 includes 메소드를 활용하면 더욱 간단하게 구현할 수 있다.



##### String.prototype.includes(searchString) (ES6)

> 대상 문자열에 찾고자 하는 문자열이 있는지 없는지를 판단한다. 예시는 다음과 같다.

```javascript
if (str.includes('Hello')) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}
```



##### String.prototype.replace()

> 첫 번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두 번째 인수로 전달한 문자열로 대체한다. 검색된 문자열이 여럿 존재하는 경우 첫 번째로 검색된 문자열만 대체된다. 원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열을 반환한다.
>
> 사용 형식은 다음과 같다.

```javascript
str.replace(serachValue, replacer)
```

> searchValue는 대상 문자열에서 대체되어야 할 값으로 문자열 또는 정규표현식으로 지정한다. replacer는 치환할 값으로 문자열이나 정규표현식, 혹은 함수로 지정된다.
>
> 사용 예시는 다음과 같다.

```javascript
const str = 'Hello world';

// 첫번째로 검색된 문자열만 대체하여 새로운 문자열을 반환한다.
console.log(str.replace('world', 'Lee')); // Hello Lee

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
console.log(str.replace('world', '<strong>$&</strong>')); // Hello <strong>world</strong>

/* 정규표현식
g(Global): 문자열 내의 모든 패턴을 검색한다.
i(Ignore case): 대소문자를 구별하지 않고 검색한다.
*/
console.log(str.replace(/hello/gi, 'Lee')); // Lee Lee

// 두번째 인수로 치환 함수를 전달할 수 있다.
// camelCase => snake_case
const camelCase = 'helloWorld';

// /.[A-Z]/g => 1문자와 대문자의 조합을 문자열 전체에서 검색한다.
console.log(camelCase.replace(/.[A-Z]/g, function (match) {
  // match : oW => match[0] : o, match[1] : W
  return match[0] + '_' + match[1].toLowerCase();
})); // hello_world

// /(.)([A-Z])/g => 1문자와 대문자의 조합
// $1 => (.)
// $2 => ([A-Z])
console.log(camelCase.replace(/(.)([A-Z])/g, '$1_$2').toLowerCase()); // hello_world

// snake_case => camelCase
const snakeCase = 'hello_world';

// /_./g => _와 1문자의 조합을 문자열 전체에서 검색한다.
console.log(snakeCase.replace(/_./g, function (match) {
  // match : _w => match[1] : w
  return match[1].toUpperCase();
})); // helloWorld
```



##### String.prototype.split()

> 첫 번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열 분할의 기준으로 사용한다. 이후 문자열을 기준에 따라 분리한 후, 분리된 각 문자열을 배열로 반환한다. 만약 분할의 기준이 될 인수를 설정하지 않으면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다. 원본 문자열은 변경되지 않는다.
>
> 사용 형식은 다음과 같다.