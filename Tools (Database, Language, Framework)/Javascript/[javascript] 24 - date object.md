### Date 객체

------

> Date 객체는 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초)을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다. 
>
> Date 생성자 함수로 생성한 Date 객체는 내부적으로 숫자값을 갖는다. 이 숫자값은 `1970년 1월 1일 00:00(UTC)`을 기점으로 현재 시간까지의 밀리초를 나타낸다.
>
> 현재의 날짜와 시간은 자바스크립트 코드가 동작한 시스템의 시계에 의해 결정된다. 시스템 시계의 설정에 따라 서로 다른 값을 가질 수 있다.





#### Date Constructor

------

> Date 객체는 생성자 함수이다. Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다. 생성된 인스턴스는 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다. 만약 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우, Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다. Date 생성자 함수로 객체를 생성하는 방법은 4가지가 있다.



* ##### new Date()

> 인수를 전달하지 않으면 현재 날짜와 시간을 갖는 인스턴스를 반환한다.
>
> 예시는 다음과 같다.

```javascript
const date = new Date();
console.log(date);	
// Mon Dec 09 2019 22:21:32 GMT+0900 (한국 표준시)
```



* ##### new Date(milliseconds)

> 인수로 숫자 타입의 밀리초를 전달하면 `1970년 1월 1일 00:00(UTC)`을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 갖는 인스턴스를 반환한다.
>
> 예시는 다음과 같다.

```javascript
let date = new Date(0);
console.log(date);
// Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

date = new Date(86400000);
console.log(date);
// Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
```



* ##### new Date(dateString)

> 인수로 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 인수로 전달한 문자열은 `Date.parse` 메소드에 의해 해석 가능한 형식이어야 한다.

```javascript
let date = new Date('May 16, 2019 17:22:10');
console.log(date);
// Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)

date = new Date('2019/05/16/17:22:10');
// Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)
```



* ##### new Date(year, month[, day, hour, minute, second, millisecond])

> 인수로 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 갖는 인스턴스를 반환한다. 이때 년, 월은 반드시 지정하여야 한다. 지정하지 않은 옵션 정보는 0 또는 1로 초기화된다.
>
> 각 인수에 대한 설명은 다음과 같다.

| 인수        | 내용                                             |
| ----------- | ------------------------------------------------ |
| year        | 1900년 이후의 년                                 |
| month       | 월을 나타내는 0~11까지의 정수(0부터 시작, 0=1월) |
| day         | 일을 나타내는 1~31까지의 정수                    |
| hour        | 시를 나타내는 0~23까지의 정수                    |
| minute      | 분을 나타내는 0~59까지의 정수                    |
| second      | 초를 나타내는 0~59까지의 정수                    |
| millisecond | 밀리초를 나타내는 0~999까지의 정수               |

> 만약 년, 월을 지정하지 않은 경우 1970년 1월 1일 00:00(UTC)를 갖는 인스턴스를 반환한다.
>
> 이에 대한 예시는 다음과 같다.

```javascript
// 월을 나타내는 4는 5월을 의미한다.
let date = new Date(2019, 4);
console.log(date); 
// Wed May 01 2019 00:00:00 GMT+0900 (한국 표준시)

date = new Date(2019, 4, 16, 17, 24, 30, 0);
console.log(date);
// Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)

date = new Date('2019/5/16/17:24:30:10');
console.log(date);
// Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)
```



* ##### Date 생성자 함수를 new 연산자없이 호출

> Date 생성자 함수를 new 연산자없이 호출하면 인스턴스를 반환하지 않고 결과값을 문자열로 반환한다.

```javascript
let date = Date();
console.log(typeof date, date);
// string Thu May 16 2019 17:33:03 GMT+0900 (한국 표준시)
```





#### Date 메소드

------

##### Date.now

> 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

```javascript
const now = Date.now();
console.log(now);			// 1576070561836
```



##### Date.parse

> 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.

```javascript
// UTC
let d = Date.parse('Jan 2, 1970 00:00:00 UTC'); 
console.log(d); // 86400000

// KST
d = Date.parse('Jan 2, 1970 09:00:00'); 
console.log(d); // 86400000

// KST
d = Date.parse('1970/01/02/09:00:00'); 
console.log(d); // 86400000
```



##### Date.UTC

> 1970년 1월 1일 00:00:00(UTC)를 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
>
> 단, Date.UTC 메소드는 `new Date(year, month[, day, hour, minute, second, millisecond])`와 같은 형식의 인수를 사용해야 한다. Date.UTC 메소드의 인수는 local time(KST)이 아닌 UTC로 인식된다.

```javascript
let d = Date.UTC(1970, 0, 2);
console.log(d); // 86400000
```

```javascript
let d = Date.UTC('1970/1/2');
console.log(d); // NaN
```





#### Date.prototype 메소드

------

##### Date.prototype.getFullYear

> 년도를 나타내는 4자리 숫자를 반환한다.

```javascript
const today = new Date();
const year = today.getFullYear();

console.log(today);
// Thu May 16 2019 17:39:30 GMT+0900 (한국 표준시)
console.log(year);	// 2019
```



##### Date.prototype.setFullYear

> 년도를 나타내는 4자리 숫자를 설정한다. 년도 이외 월, 일도 설정할 수 있다. 사용 형식은 다음과 같다.

```javascript
dateObj.setFullYear(year[, month[, day]])
```

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();

/* 년도 지정 */
today.setFullYear(2000);
let year = today.getFullYear();
console.log(today); 
// Tue May 16 2000 17:42:40 GMT+0900 (한국 표준시)
console.log(year);  // 2000

/* 년도, 월, 일 지정 */
today.setFullYear(1900, 0, 1);
year = today.getFullYear();
console.log(today); 
// Mon Jan 01 1900 17:42:40 GMT+0827 (한국 표준시)
console.log(year);  // 1900
```



##### Date.prototype.getMonth

> 월을 나타내는 0~11의 정수를 반환한다. 1월은 0, 12월은 11이다.

```javascript
const today = new Date();
const month = today.getMonth();

console.log(today); 
// Thu May 16 2019 17:44:03 GMT+0900 (한국 표준시)
console.log(month); // 4
```



##### Date.prototype.setMonth

> 월을 나타내는 0~11의 정수를 설정한다. 1월은 0, 12월은 11이다. 월 이외 일도 설정할 수 있다. 사용 형식은 다음과 같다.

```javascript
dateObj.setMonth(month[, day])
```

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();

/* 월을 지정 */
today.setMonth(0); // 1월
let month = today.getMonth();
console.log(today); 
// Wed Jan 16 2019 17:45:20 GMT+0900 (한국 표준시)
console.log(month); // 0

/* 월, 일을 지정 */
today.setMonth(11, 1); // 12월 1일
month = today.getMonth();
console.log(today); 
// Sun Dec 01 2019 17:45:20 GMT+0900 (한국 표준시)
console.log(month); // 11
```



##### Date.prototype.getDate

> 날짜(1~31)를 나타내는 정수를 반환한다.

```javascript
const today = new Date();
const date = today.getDate();

console.log(today); 
// Thu May 16 2019 17:46:42 GMT+0900 (한국 표준시)
console.log(date);  // 16
```



##### Date.prototype.setDate

> 날짜(1~31)를 나타내는 정수를 설정한다.

```javascript
const today = new Date();

/* 날짜 지정 */
today.setDate(1);
const date = today.getDate();
console.log(today); 
// Wed May 01 2019 17:47:01 GMT+0900 (한국 표준시)
console.log(date);  // 1
```



##### Date.prototype.getDay

> 요일(0~6)를 나타내는 정수를 반환한다. 반환값은 아래와 같다.

|  요일  | 반환값 |
| :----: | :----: |
| 일요일 |   0    |
| 월요일 |   1    |
| 화요일 |   2    |
| 수요일 |   3    |
| 목요일 |   4    |
| 금요일 |   5    |
| 토요일 |   6    |

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();
const day = today.getDay();

console.log(today); 
// Thu May 16 2019 17:47:31 GMT+0900 (한국 표준시)
console.log(day);   // 4
```



##### Date.prototype.getHours

> 시간(0~23)를 나타내는 정수를 반환한다.

```javascript
const today = new Date();
const hours = today.getHours();

console.log(today); 
// Thu May 16 2019 17:48:03 GMT+0900 (한국 표준시)
console.log(hours); // 17
```



##### Date.prototype.setHours

> 시간(0~23)를 나타내는 정수를 설정한다. 시간 이외 분, 초, 밀리초도 설정할수 있다.

```javascript
const today = new Date();

/* 시간 지정 */
today.setHours(7);
let hours = today.getHours();
console.log(today); 
// Thu May 16 2019 07:49:06 GMT+0900 (한국 표준시)
console.log(hours); // 7

/* 시간, 분, 초, 밀리초 지정 */
today.setHours(0, 0, 0, 0); // 00:00:00:00
hours = today.getHours();
console.log(today); 
// Thu May 16 2019 00:00:00 GMT+0900 (한국 표준시)
console.log(hours); // 0
```



##### Date.prototype.getMinutes

> 분(0~59)를 나타내는 정수를 반환한다.

```javascript
const today = new Date();
const minutes = today.getMinutes();

console.log(today);   
// Thu May 16 2019 17:50:29 GMT+0900 (한국 표준시)
console.log(minutes); // 50
```



##### Date.prototype.setMinutes

> 분(0~59)를 나나태는 정수를 설정한다. 분 이외에 초, 밀리초도 설정할 수 있다. 사용 형식은 다음과 같다.

```javascript
dateObj.setMinutes(minute[, second[, ms]])
```

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();

/* 분 지정 */
today.setMinutes(50);
let minutes = today.getMinutes();
console.log(today);   
// Thu May 16 2019 17:50:30 GMT+0900 (한국 표준시)
console.log(minutes); // 50

/* 분, 초, 밀리초 지정 */
today.setMinutes(5, 10, 999);
minutes = today.getMinutes();
console.log(today);   
// Thu May 16 2019 17:05:10 GMT+0900 (한국 표준시)
console.log(minutes); // 5
```



##### Date.prototype.getSeconds

> 초(0~59)를 나타내는 정수를 반환한다.

```javascript
const today = new Date();
const seconds = today.getSeconds();

console.log(today);   
// Thu May 16 2019 17:53:17 GMT+0900 (한국 표준시)
console.log(seconds); // 17
```



##### Date.prototype.setSeconds

> 초(0~59)를 나타내는 정수를 설정한다. 초 이외에 밀리초도 설정할 수 있다. 사용 형식은 다음과 같다.

```javascript
dateObj.setSeconds(second[, ms])
```

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();

/* 초 지정 */
today.setSeconds(30);
let seconds = today.getSeconds();
console.log(today);   
// Thu May 16 2019 17:54:30 GMT+0900 (한국 표준시)
console.log(seconds); // 30

/* 초, 밀리초 지정 */
today.setSeconds(10, 0); // HH:MM:10:000
seconds = today.getSeconds();
console.log(today);   
// Thu May 16 2019 17:54:10 GMT+0900 (한국 표준시)
console.log(seconds); // 10
```



##### Date.prototype.getMilliseconds

> 밀리초(0~999)를 나타내는 정수를 반환한다.

```javascript
const today = new Date();
const ms = today.getMilliseconds();

console.log(today); 
// Thu May 16 2019 17:55:02 GMT+0900 (한국 표준시)
console.log(ms);    // 905
```



##### Date.prototype.setMilliseconds

> 밀리초(0~999)를 나타내는 정수를 설정한다.

```javascript
const today = new Date();

/* 밀리초 지정 */
today.setMilliseconds(123);
const ms = today.getMilliseconds();
console.log(today); 
// Thu May 16 2019 17:55:45 GMT+0900 (한국 표준시)
console.log(ms);    // 123
```



##### Date.prototype.getTime

> 1970년 1월 1일 00:00:00(UTC)를 기점으로 객체의 시간까지 경과된 밀리초를 반환한다.

```javascript
const today = new Date();
const time = today.getTime();

console.log(today); 
// Thu May 16 2019 17:56:08 GMT+0900 (한국 표준시)
console.log(time);  // 1557996968335
```



##### Date.prototype.setTime

> 1970년 1월 1일 00:00:00(UTC)를 기점으로 밀리초 만큼 경과된 시점을 객체의 시간으로 설정한다. 사용 형식은 다음과 같다.

```javascript
dateObj.setTime(time)
```

> 사용 예시는 다음과 같다.

```javascript
const today = new Date();
today.setTime(86400000); // 86400000 === 1day

const time = today.getTime();
console.log(today); 
// Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
console.log(time);  // 86400000
```



##### Date.prototype.getTimezoneOffset

> UTC와 지정 로케일(Locale) 시간과의 차이를 분단위로 반환한다. KST는 UTC에 9시간을 더한 시간이므로, UTC = KST - 9이다.

```javascript
const today = new Date();
const x = today.getTimezoneOffset() / 60;	// -9

console.log(today); 
// Thu May 16 2019 17:58:13 GMT+0900 (한국 표준시)
console.log(x);     // -9
```



##### Date.prototype.toDateString

> 사람이 읽는 형식의 문자열로 날짜를 반환한다. toString()과의 차이를 나타낸 예시는 다음과 같다.

```javascript
const d = new Date('2019/5/16/18:30');

console.log(d.toString());     
// Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
console.log(d.toDateString()); 
// Thu May 16 2019
```



##### Date.prototype.toTimeString

> 사람이 읽을 수 있는 형식의 문자열로 시간을 반환한다. toString()과의 차이를 나타낸 예시는 다음과 같다.

```javascript
const d = new Date('2019/5/16/18:30');

console.log(d.toString());     
// Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
console.log(d.toTimeString()); 
// 18:30:00 GMT+0900 (한국 표준시)
```



##### ※ 활용:  현재 날짜와 시간을 초 단위로 반복 출력

```javascript
(function printNow() {
  const today = new Date();

  const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // 0시 또는 12시 => 12시

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  // 현재 시점 출력
  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
  console.log(now);
  
  // 무한 반복
  setTimeout(printNow, 1000);
}());
```

