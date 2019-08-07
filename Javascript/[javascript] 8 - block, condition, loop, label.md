##### 제어문

> 제어문은 주어진 조건에 따라 코드 블록의 실행 여부를 결정하거나, 반복 실행할 때 사용한다. 일반적으로 코드는 위에서 아래 방향으로 순차적으로 실행되지만 제어문은 코드의 실행 순서를 인위적으로 제어할 수 있다.



#### Block

------

> 블록문은 0개 이상의 문들을 중괄호로 묶은 것으로 코드 블록 또는 블록이라 한다. 자바스크립트는 블록문을 하나의 단위로 취급한다. 블록문은 단독으로도 사용이 가능하며 일반적으로는 제어문이나 함수 선언문 등에 사용한다. 문의 끝에는 세미콜론을 붙이는 것이 일반적이지만 블록문의 끝에는 세미콜론을 붙이지 않는다.
>
> 예시는 다음과 같다.

```js
// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 2)); // 3
```





#### Condition

------

> 조건문은 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정한다. 조건식이란 불리언 값으로 평가될 수 있는 표현식이다. 조건식의 역할을 수행하기 위해 3조건식에서 평가된 값은 불리언 값으로 강제 변환된다.
>
> 자바스크립트에서 제공하는 조건문은 if 문과 switch 문이다.



##### if 문

> if 문에서 else if 문과 else 문은 사용할 수도 있고 사용하지 않을 수도 있다. if 문과 else 문은 두 번 이상 사용할 수 없지만 else if 문은 여러 번 사용할 수도 있다.
>
> 예시는 다음과 같다.

```js
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수
```

> 만약 코드 블록 내의 문이 하나 뿐이면 중괄호를 생략할 수 있다.

```js
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수
```



##### switch 문

> switch 문은 switch 문의 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동시킨다. case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 다음에 실행할 문들을 위치시킨다.
>
> switch 문의 표현식과 일치하지 않는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동한다. default 문은 옵션으로, 사용하지 않아도 된다.
>
> if 문에서의 조건식은 반드시 불리언 값으로 평가되지만 switch 문의 표현식은 불리언보다는 문자열, 숫자 값인 경우가 많다. 따라서 switch문은 if 문과는 다르게 조건식의 참, 거짓 보다는 다양한 상황에 따라 실행할 코드 블록을 결정할 때 사용한다.
>
> 예시는 다음과 같다.

```js
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
  case 2:
    monthName = 'February';
  case 3:
    monthName = 'March';
  case 4:
    monthName = 'April';
  case 5:
    monthName = 'May';
  case 6:
    monthName = 'June';
  case 7:
    monthName = 'July';
  case 8:
    monthName = 'August';
  case 9:
    monthName = 'September';
  case 10:
    monthName = 'October';
  case 11:
    monthName = 'November';
  case 12:
    monthName = 'December';
  default:
    monthName = 'Invalid month';
}

console.log(monthName); // Invalid month
```

> 그런데 위의 예시의 실행 결과는 November가 아니고 invalid month이다. 이는 switch 문의 표현식의 평가 결과가 일치하는 case 문으로 실행 순서가 이동하여 문을 실행한 것은 맞지만, 문을 실행한 후 switch 문을 탈출하지 않고 swtich 문이 끝날 때까지 모든 case 문과 default 문을 실행했기 때문이다. 이를 폴 스루(fall through)라 한다.
>
> 이를 해결하기 위해서는 case 문 마다 **break**문을 사용해야 한다. break문은 코드 블록에서 탈출하는 역할을 수행한다. break문이 없으면 case 문의 표현식과 일치하지 않더라도 실행 순서는 다음 case 문으로 연이어 이동한다. 다만 default문의 경우는 실행 후에 switch 문을 빠져나가므로 별도의 break 문을 붙이지 않아도 된다.
>
> case 문은 반드시 단독으로 사용할 필요는 없다. 아래 예시처럼 여러 case 문을 중복하여 사용하는 것도 가능하다.

```js
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 년도가 4로 나누어 떨어지는 해는 윤년(2000, 2004, 2008, 2012, 2016, 2020…)
    // 2. 그 중에서 년도가 100으로 나누어 떨어지는 해는 평년(2000, 2100, 2200...)
    // 3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년(2000, 2400, 2800...)
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29
```

> swtich 문은 case, default, break 등 다양한 키워드를 사용해야 하고 폴 스루가 발생하므로 다소 복잡하다. 가급적 if 문을 쓰되 swtich문을 사용 시에 가독성이 좋은 경우에는 swtich 문을 쓰는 정도로 활용하는 것이 좋다.





#### Loop

------

> 반복문은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다. 매번 반복마다 조건식을 다시 검사하여 참인 경우에는 코드 블럭을 다시 실행하고, 거짓인 경우에는 실행을 종료한다. 
>
> 자바스크립트에서 제공하는 반복문은 for 문, while 문, do...while 문이다. 그리고 ES6에서 새로 도입된 형태의 반복문으로 for...in 문과 for...of 문이 있다.



##### for 문

> for 문은 조건식이 거짓으로 판별될 때 까지 코드 블록을 반복 실행한다. for 문의 반복 조건 설정은 초기화식, 조건식, 증감식으로 구성된다.
>
> 사용 예시는 다음과 같다.

```js
for (var i = 0; i < 2; i++) {
  console.log(i);
}
```

> for 문의 초기화식, 조건식, 증감식은 모두 옵션이다. 어떤 식도 선언하지 않으면 무한 루프가 된다.

```js
for (;;) { } // 무한루프
```



##### while 문

> for 문과 마찬가지로 조건식이 거짓이 될 때까지 코드 블록을 반복 실행한다. 조건식의 결과가 언제나 참이면 무한루프가 된다.

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2
```

```js
// 무한루프
while (true) { }
```

> 무한루프를 제어하기 위한 방법으로 if 문과 break 문을 활용하기도 한다.

```js
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```



##### do...while 문

> do...while 문은 코드 블록을 실행하고 조건식을 평가한다. 따라서 코드 블록은 반드시 한 번 이상 실행된다.

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2
```



##### break 문

> switch 문과 while 문에서 살펴보았듯이 break 문은 레이블 문, 반복문, switch 문의 코드 블록을 탈출한다. 이 외의 경우에서 break 문을 사용하면 SyntaxError가 발생한다.
>
> 중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다.

```js
if (true) {
  break; // Uncaught SyntaxError: Illegal break statement
}
```



##### coninue 문

> continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하지만 break 문처럼 반복문을 빠져나오지는 않는다. 중단된 이후에는 다시 반복문을 실행할지 결정한다.





#### Label

------

> 레이블 문을 실행 순서를 제어하기 위해 사용한다. switch 문의 case 문과 default 문도 레이블 문에 해당된다. 레이블 문을 탈출하기 위해서는 break 문에 레이블 식별자를 지정한다.

```js
// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log('Done!');
```

> break문과 레이블 문을 활용하면 중첩 for문도 쉽게 빠져나올 수 있다.

```js
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 외부 for 문을 탈출한다.
    if (i + j === 3) break outer;
  }
}

console.log('Done!');
```

> 다만 레이블 문은 중첩 for문을 빠져나오는 경우 외에는 잘 사용되지 않는다. 그 이유는 레이블 문을 사용했을 때 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.

