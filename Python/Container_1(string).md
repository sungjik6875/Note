# Container

### : String

>  문자열을 표현하며, '또는 "로 묶어서 표현한다. 따라서 식별자와 문자를, 또는 숫자형 데이터와 문자형 데이터를 구분할 수 있다. """를 활용하면 여러 줄에 걸쳐서 문자를 표현하는 것이 가능하다.
>
>  문자열 안에 ', "를 표현할 때에는 이스케이프 문자인 \를 활용한다. 혹은 묶을 때와 다른 문장부호로 묶는다.

```
greeting = 'hi'
name = ' taehyung'
print(greeting, name)  # hi taehyung
greeting + name # 'hi taehyung'
print('철수가 말했다. \'안녕?\'')  # 철수가 말했다. '안녕?'
print('철수가 말했다. "안녕?"') # 철수가 말했다. "안녕?"
print("""
개행 문자 없이 
여러 줄에 걸쳐 있는 문장은
이와 같이 표현이 가능합니다.
""")
```



#### Escape 

| 예약 문자 내용 | 의미        |
| -------------- | ----------- |
| \n             | 줄 바꿈     |
| \t             | 탭          |
| \r             | 캐리지 리턴 |
| \0             | Null        |
| \\'            | '           |
| \\"            | "           |
| \\\\           | \           |

```
# end 속성에 값을 지정할 수 있으며 이스케이프 문자도 가능하다.
# '개행문자 없이	여러줄을 그대로 출력 가능합니다' 가 출력된다.

print("개행문자 없이", end='\t') 
print("여러줄을 그대로 출력 가능합니다")
```

```
# 이스케이프를 활용하여 다음의 문자도 출력이 가능하다.
# "파일은 C:\Windows\Users\내문서\Python에 저장이 되어있습니다."
 나는 생각했다.	 'cd를 써서 git bash로 들어가봐야지'

print('"파일은 C:\\Windows\\Users\\내문서\\Python에 저장이 되어있습니다."\n 나는 생각했다.\t \'cd를 써서 git bash로 들어가봐야지\'') 
```



#### 문자열의 덧셈, 곱셈 연산

> 문자열도 +, *의 연산이 가능하다. +는 문자열을 합치며, *는 횟수만큼 반복하여 출력한다.

```
# 문자열의 덧셈연산
name = "kim"
name + name # kimkim이 출력 

# 문자열의 곱셈연산
print("=" * 50) 
print("my program")
print("=" * 50)
```



#### String Interpolation

> 문자열 안에 변수 값을 담아 출력하고자 할 수 있다. % format과 f-string의 방법이 있다. 변수의 값을 그대로 담을 수도 있지만, 변수의 값 중 일부만 추출하거나 표현을 변경하여 담는 것도 가능하다.

```
# 변수 값 그대로 출력하기
name = "kim"
"hello, kim"

# % format을 활용하여 "hello, kim" 출력
"hello, %s" % name

# f-string을 활용하여 "hello, kim" 출력
f'hello, {name}' 
```

```
# 변수 값 추출, 또는 변경하여 출력하기

# f-string의 활용
import datetime
today = datetime.datetime.now()
print(today)
f'오늘은 {today:%y}년 {today:%m}월 {today:%d}일 {today:%A}'
# '오늘은 19년 01월 02일 Wednesday'가 출력된다.

p = 3.141592
f'원주율은 {p: 0.3} 반지름이 2일때 원의 넓이는 {p*2*2}'
# '원주율은 3.14 반지름이 2일때 원의 넓이는 12.566368'가 출력된다.

# % format의 활용
num = 6
"i eat %d apples" %num # 'i eat 6 apples'
"error is %d%%." %98 # 'error is 98%.' %출력시엔 %%를 입력한다.
"%10s" % "hi" # '        hi'가 출력된다. 앞에 10칸의 공백을 넣는다.
"%-5s jane" % "hi" # 'hi    jane'이 출력된다. jane 앞에 5칸의 공백을 넣는다.
"%0.4f" % 3.141592 # '3.1416'이 출력된다. 소수점 4자리까지 출력한다.
```



#### Slicing

> 문자열은 시퀀스 자료형이므로, 인덱스를 통해 문자열을 자르는 것이 가능하다.

```
# Slicing의 활용

a = "life is too short, you need Python"
a[3]  # 4번째 글자 e출력
a[-1]  # 마지막 글자인 n이 출력된다. 음수 인덱스는 반대쪽부터 읽어나간다.
a[0:4] # 'life' 출력된다. 0번째 문자열부터 3번째 까지의 문자열을 출력
a[5:] # 5번째 문자열부터 출력
a[:6] # 5번째 문자열까지 출력
a[19:-6] # -6번째 문자가 더 뒤에 있으므로 가능

a = "20010331rainy"
date = a [:8]
weather = a[8:]
year = a[:4]
month = a[4:6]
day = a[6:8]
print(year, month, day, weather) # '오늘은 19년 01월 02일 Wednesday'

a = "Python"
print(a[0]+'i'+a[2:]) # Pithon 출력
```



#### 함수

##### 대, 소문자 변환

```
.capitalize() # 가장 앞의 글자만 대문자
.title() # 어포스트로피나 공백 이후의 문자를 대문자
.upper() # 모든 문자를 대문자
.lower() # 모든 문자를 소문자
.swapcase() # 대문자는 소문자로, 소문자는 대문자로 변환
```

##### 문자열 분리, 합침

```
.split() # 구분자 미지정시에는 공백을 기준, 지정시에는 해당 문자를 기준으로 문자열을 분리하여 각각 리스트에 저장 후, 원소는 문자열의 형태로 반환
.join(iterable) # 지정한 문자를 붙여서 리스트의 문자열을 하나로 합침
```

##### 문자열 변환

```
.replace(old, new[, count]) # 문자열을 변환하며, 변환의 횟수도 지정 가능

# 예시
w = 'woooooooow' # o 8개 -> 4개

print(w.replace('oooooooo', 'oooo'))
print(w.replace('oo', 'o'))
print(w.replace('oo', 'o', 4)) # 변환의 횟수 지정
```

##### 문자열 제거

```
.strip() / .lstrip() / .rstrip() # 문자 지정시 문자를 기준으로 잡는다. 미지정시 문자열 기준으로 양측/좌/우측의 공백만을 제거한다. 문자열 내의 공백은 제거하지 않는다.
```

##### 문자열 탐색

```
.find(x) # x의 첫 번째 위치를 반환하며, 없을 시엔 -1을 반환한다. -1은 파이썬에서는 True, 0은 False로 취급한다.
.index(x) # x의 첫번째 위치를 반환하며, 없으면 오류가 뜬다.
```

##### 문자열 판별

> 참/거짓을 반환하는 메소드. 주로 매개인자나 입력값의 확인에 쓰인다.

```
.isaplha(), .isdecimal(), .isdigit(), .isnumeric(), .isspace(), .issuper(), .istitle(), .islower() 
```

