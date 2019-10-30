# Basic Syntax

### : Function

>  프로그램에서 어떤 기능을 실행할 수 있는 최소의 단위이다. 함수 선언은 def로 시작하며 :으로 선언을 완료하고 정의하는 부분은 `4spaces`코드블록을 만듭니다. 함수는 매개변수(parameter)를 받거나, 받지 않을 수 있으며 처리 후에 결과값을 return을 통해 반환하거나, 하지 않을 수도 있습니다. 만약 반환하지 않을 경우 반환값은 None이 됩니다. 
>
>  함수를 작성하는 이유는 코드의 재사용성 때문이다. 함수를 정의해두면, 그 함수를 다시 사용하고 싶을 때 단지 함수를 호출하기만 하면 된다.

```
# 직사각형의 둘레, 면적 구하기
height = 30
width = 20

length = 2*(height+width)
ha = height*width
print(ha, length) 
# 직접 구한다면 나중에 직사각형의 둘레, 면적을 구할 때마다 위의 코드를 다시 작성해야 함.

# 함수 활용하여 구하기
def rectangle(height, width): # 함수 선언
    extent = height*width   # 함수 정의
    circum = 2*(height+width)
    print(extent, circum)
rectangle(30,100) # 함수를 정의해두면 함수 호출을 통해 언제든지 재사용이 가능.
```



#### Built-in Function

> 프로그램에 자동적으로 내장된 함수를 말한다.

```
dir(__builtins__) # 내장함수 목록 확인하기
```



#### 인자 (Parameter)

> 어떤 함수들은 동작하기 위해서 인자를 필요로 한다. 인자는 함수 내에서 갖고 있지 않아 외부로부터 전달을 받거나 입력을 필요로 하는 값이다. 함수는 기본적으로 각 인자를 위치로 판단한다.



#### 반환 (return)

>  어떤 함수들은 값을 반환하며, 반환되는 값은 어떠한 종류의 객체도 가능하다. 심지어 함수를 반환하는 것도 가능하다. 그러나 한번에 오직 하나의 객체만 반환된다. 파이썬에서는 tuple을 통해 한번에 여러개의 객체를 반환하는 것처럼 동작하게 할 수도 있다. 함수가 return되거나 종료되면, 함수를 호출한 곳으로 돌아간다.

```
# 두 수를 인자로 받아서 더 큰 인자를 출력하기
def max_num(a, b): # 함수 정의
    if a >= b:
        print(a) 
    else:
        print(b)

max_num(5,1) # 함수 호출, 5가 출력된다.
# 함수는 모든 객체를 리턴하는 것이 가능하다. print대신 return으로 처리해도된다.
```

```
# 두 리스트를 인자로 받아서 원소의 합이 더 큰 리스트를 출력하기
def my_list_max(list1, list2):
    if sum(list1) >= sum(list2):
        print(list1)
    else:
        print(list2)

my_list_max([10,3], [5,9])
```



##### 인자의 기본 값 설정 (Default Argument Values) 

>  함수가 호출될 때, 인자의 기본값을 설정해두면 인자를 지정하지 않아도 에러가 발생하지 않고 함수가 정상적으로 호출된다. 또한 값을 지정하지 않은 인자는 기본값을 갖는다.

```
def my_sum(a, b = 5): # 기본값 인자가 뒤에 기술되어야 한다.
    return a + b
print(my_sum(2, 4)) # 6
print(my_sum(2)) # 7
```

##### 키워드 인자 (keyword Arguments)

>  위의 기본값을 설정해둔 인자들을 키워드 인자라고 한다. 키워드 인자는 직접 특정 값을 전달할 수 있다. 유의할 점은 키워드 인자는 위치 인자보다 항상 뒤에 기술되어야 한다는 것이다. 키워드 인자 뒤에는 오직 키워드 인자만이 올 수 있다.

```
# 오류 코드
def greeting(name = "ssafy", age):
    print(f'{name}은 {age}살입니다.')

greeting(15) # 오류 발생
--------------------------------------------------------
# 정상 코드
def greeting(age, name = "ssafy"):
    print(f'{name}은 {age}살입니다.')

greeting(15) # 정상 출력
```

##### 출력 함수 (print)

```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

>  print함수는 objects를 텍스트 스트림 file로 인쇄하는데, sep로 구분되고 end를 뒤에 붙입니다. 있다면, sep, end, file및 flush를 반드시 키워드 인자로 제공해야 합니다. 모든 비키워드 인자는 str()이 하듯이 문자열로 변환된 후 스트림에 쓰이는데,  sep로 구분되고 end를 뒤에 붙입니다.  sep와 end는 모두 문자열이어야 합니다. None일 수도 있지만, 기본값을 사용한다는 뜻입니다. objects가 주어지지 않으면 print는 end만 사용합니다.
>
>   file인자는 write(string)메소드를 가진 객체여야 합니다. 존재하지 않거나 None이면, sys.stdout이 사용됩니다. 인쇄된 인자는 텍스트 문자열로 변환되기 때문에, print는 바이너리 모드 파일 객체와 함께 사용할 수 없습니다. 이를 위해서는, 대신 file.write(...)을 사용합니다.
>
>  출력의 버퍼링 여부는 일반적으로 file에 의해 결정되지만, flush 키워드 인자가 참이면 스트림이 강제로 플러시 됩니다. 

```
print('hi', end='_') # end인자의 값을 임의로 설정한다.
print('hello', end='_')
# hi_hello_ 가 출력된다.
```

##### 가변 인자의 처리

> 위의 print()처럼 정해지지 않은 임의의 숫자의 인자를 받기 위해서 가변인자를 활용한다. 가변인자는 tuple 형태로 처리가되며, *로 표현한다.

```
def sum_mul(choice, *args): 
    if choice == 'sum':
        result = 0
        for i in args:
            result = result + i
    elif choice == 'mul':
        result = 1
        for i in args:
            result = result * i
    return result

sum_mul("mul", 1, 2, 3) 
sum_mul("sum", 1, 2, 3) 
# 1, 2, 3이 *args의 인자로 들어간다.
```

```
# 교수님 코드 - max함수를 직접 구현
def my_max(*args):
    result = 0
    for idx, val in enumerate(args): # args는 tuple이므로 각각 분리하여 저장
        if idx == 0:
            result = val
        else:
            if val > result: # 값 비교 과정
                result = val
    return result
```

##### 정의되지 않은 인자들 처리

> 정의되지 않은 인자들은 dictionary의 형태로 처리가 되며, **형태로 표현한다. 

```
# 교수님 코드 - 딕셔너리의 모습으로 출력 함수 만들기
def my_fake_dict(**kwargs):
    result = []
    for key, value in kwargs.items():
        result.append(f'{key}, {value}')
    print(', '.join(result))
                      
my_fake_dict(한국어='안녕', 영어='hi', 독일어='Guten Tag') 
# 한국어, 안녕, 영어, hi, 독일어, Guten Tag 이 출력된다.
```

##### dictionary를 인자로 넘기기(unpacking arguments list)

> **dict를 통해 함수에 dictionary를 인자로 넘길 수 있다.

```
# username, password, password_confirmation을 받아서 비밀번호 일치 여부 판단하기

def user(username, password, password_confirmation):
    if password == password_confirmation:
        print(f'{username}님, 회원가입이 완료되었습니다.')
    else:
        print('비밀번호가 일치하지 않습니다.')

# dict의 객체 변수 생성.
my_account = {   
    'username': '홍길동',
    'password': '1234',
    'password_confirmation': '1234'
}

user(my_account) # 에러가 발생. 인자의 수가 맞지 않기 때문이다.
user(**my_account) # 정상 작동 **dict의 형식을 지켜서 dict의 각 value가 인자로 전달.
# 홍길동님, 회원가입이 완료되었습니다. 가 출력된다.
```

##### 함수의 인자전달과 일급 객체로써의 함수

> high order function, 일급 객체로서의 함수라고 표현한다.

```
from operator import add, mul

add(5, 10)
result = add(1, 2) # result는 함수를 실행 시킨 것

jiwook = add # jiwook은 덧셈 그 자체
print(jiwook(1231244, 12332))

nayoung = mul # 곱셈 그 자체, 바인딩이라고도 표현한다. 
# 이미 내장된 함수 영역에 새로운 이름을 부여하는 것과 같음
print(nayoung(123134, 123))

# 함수에 새로운 이름표를 붙이는 것은 새 변수에 함수 자체를 할당한다는 의미이다. 
# 함수 자체를 할당하는 것은 파이썬의 독특한 특징이다.
# 함수를 변수에 할당하고, 인자로 받는 것도 가능하므로 함수를 일급 객체라고 한다.

# 함수의 인자 예시 : 대표적인 경우로 map객체가 존재한다.
def dowoo(func, num1, num2): # 함수를 인자로 받는다.
    return func(num1, num2)

print(dowoo(jiwook, 5, 5))
print(dowoo(nayoung, 5, 5))

print(jiwook) # <built-in function add> 내장 함수
print(dowoo) # <function dowoo at 0x00931780> 사용자가 정의한 함수

# 람다는 익명함수라고도 한다.
func = lambda
```



#### 이름공간 및 스코프(Scope)

>  파이썬에서 사용되는 이름들은 이름공간(namespace)에 저장되어 있다. 이름의 충돌을 방지하기 위해 파이썬은 LEGB 규칙을 갖고 있다. 이 규칙에 따라 변수에서 값을 찾을 때 아래와 같은 순서로 변수의 이름을 찾는다.

| Scope          | Function, Variable, Module     |
| -------------- | ------------------------------ |
| Local Scope    | 정의된 함수                    |
| Enclosed Scope | 상위 함수                      |
| Global Scope   | 함수 밖의 변수나 import된 모듈 |
| Built-in Scope | 파이썬 안에 내장된 함수나 속성 |

```
# Local 변수와 Global 변수의 차이 확인
a = 1
def localscope(a):
    print(a)
localscope(3) # 3이 출력. 3이 local 변수이므로.
--------------------------------------------------------
# Global 변수를 Local 구역에서 변경이 가능한가?
a = 1
def localscope(a):
    a=5
    print(a)
localscope(a) # 5가 출력된다. 5는 local
print(a) # 1이 출력된다. 1은 global
--------------------------------------------------------

## 오류 발생. 이유??
a = 1
def localscope(a):
    global a = 5 # 전역변수 a의 값을 변경
    print(a)
localscope(a)
print(a)
# 위와는 다른 결과 출력
```

##### 이름공간의 수명주기

| Scope                | 수명 주기                                                |
| -------------------- | -------------------------------------------------------- |
| Local/Enclosed scope | 함수가 실행된 시점 이후부터 리턴할때 까지                |
| Global scope         | 모듈이 호출된 시점 이후 혹은 이름 선언된 이후부터 끝까지 |
| Built-in scope       | 파이썬이 실행된 이후부터 끝까지                          |



#### 람다 (Lambda) 함수

> 런타임에 생성해서 사용할 수 있는 익명 함수이다. 람다는 일회성으로 사용되는 일시적인 함수이다. 함수가 생성된 곳에서만 필요하며, 간단한 기능을 일반적인 함수와 같이 정의해두고 쓰는 것이 아니고 필요한 곳에서 즉시 사용하고 버릴 수 있습니다. 따라서 이름공간이 더렵혀지지 않는다는 장점이 있다. 단 람다 내부의 로직은 한 줄로만 작성이 가능하여 여러 줄의 로직을 작성해야 한다면 def로 함수를 정의해야 한다.
>
> ##### 형식

```
(lambda 매개변수:리턴값을 포함한 알고리즘)(매개변수)
```

> ##### 사용 예시

```python
a = (lambda foo: foo*2)(10)
print(a)   # 20이 출력된다.

# 매개변수가 없는 경우
b = (lambda : 10)()
print(b)   # 10이 출력된다.
```

```python
def transform(n):
    return lambda x: x+n
f = transform(3) # f가 함수로 쓰인다. f = (lambda x: x+3)
print(f(4))  # (lambda x: x+3)(4)이므로 결과는 7
```

