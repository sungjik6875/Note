### ES6

> ECMAScript 2015와 동일한 용어이다. ES5가 2009년 업데이트 되었는데, ES6는 2015년의 메이저 업데이트가 이루어진 후의 버젼이다. 최신 프론트엔드 프레임워크인 React, Angular, Vue에서 권고하는 언어 형식이다. ES5에 비해 문법이 간결해지면서 익숙해지면 코딩을 훨씬 편하게 할 수 있다.



#### Arrow Function

> 함수를 정의할 때 function이라는 키워드 대신 =>를 사용하여 정의한다. 흔히 사용하는 콜백 함수의 문법을 간결화한다.

```javascript
// ES5의 함수 정의방식
var sum = function(a, b) {
    return a + b;
}

// ES6의 함수 정의방식
var sum = (a, b) => {
    return a + b;
}

// ES5의 함수 정의방식
var arr = ["a", "b", "c"]
arr.forEach(function(value)) {
	console.log(value);
});

// ES6의 함수 정의방식
arr.forEach(value => console.log(value));
```



#### Enhanced Object Literals (향상된 객체 리터럴)

> 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성 가능하다.

```javascript
var dictionary = {
    words: 100,
    // ES5
    lookup: function() {
        console.log("find words");
    }
    // ES6
    lookup() {
        console.log("find words");
    }
};
```

> 객체의 속성명과 값의 이름이 동일할 경우 하나로 축약이 가능하다.

```javascript
var figures = 10;
var dictionary = {
    // figures: figures
    figures
};
```



#### Modules - 자바스크립트 모듈화 방법

> 자바스크립트 모듈 로더 라이브러리(AMD, Common JS) 기능을 JS언어 자체에서 지원한다. 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있다.

```javascript
// libs/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// main.js
import {sum} from 'libs/math.js';
sum(1, 2);
```



##### export default

> 하나의 모듈당 한번만 export하도록 한다. 안에 정의된 부분의 import가 남발되지 않도록 한다.





#### Babel

> 구 버전 브라우저중에서 ES6의 기능을 지원하지 않는 브라우저가 있는데, 이런 브라우저를 위해 transpiling이 필요하다. 바벨은 ES6의 문법을 각 브라우저의 호환 가능한 ES5 버전으로 변환하는 컴파일러이다.
>
> 다음은 vue 웹팩에서 바벨을 로더로 설정한 코드이다.
>
> 참고 : <https://babeljs.io/>

```json
module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
    }]
},
```



### ES5의 특징

#### Hoisting

> 호이스팅이란 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식한다. JS해석기는 코드의 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다. 따라서 `function func()`와 `var`는 코드의 최상단으로 끌어올려진 것처럼 보인다.
>
> 예시는 다음과 같다.

```javascript
var sum = 5;
sum = sum + i;

function sumAllNumbers() {
    // ...
}

var i = 10;
```

> 위의 코드는 순서대로 실행되지 않는다. JS 해석기는 위의 코드의 순서를 재조정한다. 위 코드의 실행 순서는 다음과 같다.

```javascript
// #1 - 함수 선언식과 변수 선언을 호이스팅
var sum;
function sumAllNumbers() {
    // ...
}
var i;

// #2 - 변수 대입 및 할당
sum = 5;
sum = sum + i;
i = 10;
```



#### Function Statement / Expression

> function statement

```javascript
function  sum() {
    return 10 + 20;
}
```

> function expression

```javascript
var sum = function() {
    return 10 + 20;
}
```





