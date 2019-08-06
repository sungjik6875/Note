#### Template literal

------

```js
const template = `템플릿 리터럴은 '작은따옴표'과 "큰따옴표"를 혼용할 수 있다.`;

console.log(template);
```

> ES6는 템플릿 리터럴이라고 불리는 새로운 문자열 표기법을 도입하였다. 템플릿 리터럴은 백틱문자를 사용한다.



```js
const first = 'Ung-mo';
const last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');
// "My name is Ung-mo Lee."

// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`);
// "My name is Ung-mo Lee."
```

> 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백을 표현하기 위해서는 백슬래시로 시작하는 이스케이프 시퀀스를 사용하여야 한다. ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 공백은 있는 그대로 적용된다.
>
> 템플릿 리터럴은 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 이를 문자열 인터폴레이션이라고 한다.



```js
console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
```

> 문자열 인터폴레이션은 ${ ... }으로 표현식을 감싼다. 문자열 인터폴레이션 내의 표현식의 값은 문자열로 강제 타입변환된다.