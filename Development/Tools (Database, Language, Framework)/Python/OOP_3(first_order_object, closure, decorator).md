# OOP_2

### : First class object, Closure, Decorator



#### 일급 객체 (First Class Object)

> 파이썬에서의 일급 객체는 다음의 세 가지 특징을 충족하는 객체를 의미한다. 

```
1. 객체를 변수나 데이터에 할당할 수 있어야 한다.
2. 객체의 인자로 넘길 수 있어야 한다.
3. 객체의 리턴값으로 리턴할 수 있어야 한다.
```

##### 일급 객체로써의 함수

> 파이썬에서는 함수 역시 객체에 해당되며, 일급 객체이다. 따라서 함수 역시 위에서 언급한 세 가지 특징을 갖는다.
>
> ##### 함수를 변수에 할당하기

```python
def square(x):
    return x*x

# f1이라는 변수에 함수를 할당하였다.
f1 = square

# f2는 f1처럼 함수 그 자체를 할당 받는다. 
f2 = f1
print(f2) # 결과는 <function square at 0x000002272D643510>이 출력된다.

# f3는 square(4)의 리턴값을 할당받는다.
f3 = f1(4)
print(f3) # 결과는 16이 출력된다.
```

> 괄호를 붙일 경우 함수의 리턴값이 할당되지만, 붙이지 않을경우 함수 자체가 할당된다. 함수 자체를 할당받은 변수 뒤에 괄호를 붙이면 마찬가지로 함수가 실행되는 것을 확인할 수 있다.
>
> ##### 함수를 함수의 인자로 전달하기

```python
def square(x):
    return x ** 2

# func라는 인자는 함수를 인자로 받는다. 
def my_func(func, arg_list):
    result = []
    for i in arg_list:
        result.append(func(i)) 
        # func()는 함수를 호출한 '결과(return)' 값을 얻는다.
        # 여기서 얻어진 return 값들을 빈 result 리스트에 넣는다. 
    return result
	 
num_list = [1, 2, 3]
squares = my_func(square, num_list) 
# square 함수를 인자(argument)로 해서 전달한다! 
 
print(squares) # [1, 4, 9]가 출력된다.
```

> 위의 예시처럼 함수를 함수의 인자로 전달하는 것도 가능하다. 
>
> ##### 함수의 리턴 값으로 함수를 리턴하기

```python
def log(msg):
    # 함수 내부에 함수 정의가 가능하다
    def log_message():
        # 내부에 정의된 함수는 외부 함수의 인자값을 기억한다. (클로져)
        print("Log : ", msg) 
 	
    # 함수 그 자체를 리턴한다.
    return log_message 

# log_hi는 "Hello Everybody"를 기억하는 lol_message의 함수를 할당받는다.
log_hi = log("Hello Everybody")  
print(log_hi)
# <function log.<locals>.log_message at 0x000002B608B436A8> 출력
log_hi() 
# Log :  Hello Everybody 출력
```



#### 클로져 (Closure)

> 내부 함수란 함수 내에 정의된 함수를 말한다. 내부 함수는 루프나 코드의 중복을 피하기 위해 또 다른 함수 내에 어떤 복잡한 작업을 한 번 이상 수행할 때 유용하게 사용한다. 이러한 내부 함수는 클로져처럼 행동하는 것이 가능하다.
>
> 클로져란 일반 함수와 다르게, 어떤 함수에 의해 동적으로 생성되어 자신의  영역 밖에서 호출된 함수의 변수값이나 레퍼런스에 접근하거나, 복사, 저장 등을 가능하게 하는 변수이다.
>
> ##### 클로져의 예시

```python
def say_words(msg):
    def say_sentence():
        return "안녕? 이걸 출력해줘! : {}".format(msg)
    return say_sentence
 
a = say_words("출출하다")
print("a는 무엇일까? : ", a)
print("a의 타입은 무엇일까? : ", type(a))
print("a가 함수라는 걸 알았다. 괄호를 붙여보자. ====> ", a())
```

> 출력 결과는 다음과 같다.

```
a는 무엇일까? :  <function say_words.<locals>.say_sentence at 0x00000263E1E93840>
a의 타입은 무엇일까? :  <class 'function'>
a가 함수라는 걸 알았다. 괄호를 붙여보자. ====>  안녕? 이걸 출력해줘! : 출출하다
```

> 위의 예시에서 a에 할당된 함수인 `say_sentence`는 외부 함수의 인자값인 `msg` 를 기억하고 있음을 알 수 있다.



#### 데코레이터 (Decorator)

> 데코레이터란 하나의 함수를 인자로 취해서 다른 함수를 반환하는 함수이다.
>
> ##### 데코레이터 예시

```python
def decorator_function(original_function):
    def wrapper_function():
        print("{} 함수가 호출되기 전입니다.".format(original_function.__name__))
        return original_function()

    return wrapper_function

def display_1():
    print("display_1 함수가 실행됐습니다.")

def display_2():
    print("display_2 함수가 실행됐습니다.")

# 변수에 함수 자체를 할당
display_1 = decorator_function(display_1)
display_2 = decorator_function(display_2)

display_1()
print("")
display_2()
```

> 일급 객체와 클로져의 특성 덕에 출력 결과는 다음과 같다. 위의 예시에서 `wrapper_function` 처럼 데코레이터 함수를 사용하여 함수에 기능 추가를 할 수 있다.

```
display_1 함수가 호출되기 전입니다.
display_1 함수가 실행됐습니다.

display_2 함수가 호출되기 전입니다.
display_2 함수가 실행됐습니다.
```



##### @ 심볼 활용하기

> @ 심볼을 활용하여 변수에 함수를 할당하는 과정을 생략할 수 있다.

```python
def decorator_function(original_function):
    def wrapper_function():
        print("함수가 호출되기 전입니다.")
        return original_function()
    return wrapper_function

# @ 심볼 활용하기
@decorator_function
def display_1():
    print("display_1 함수가 실행됐습니다.")
 
@decorator_function
def display_2():
    print("display_2 함수가 실행됐습니다.")
 
display_1() # 변수에 함수형 리턴값 할당 없이 바로 함수 호출이 가능하다. 
display_2() # 변수에 함수형 리턴값 할당 없이 바로 함수 호출이 가능하다. 
```

> @ 심볼을 활용하여 다음의 과정을 생략하였다. `display_1`,  `display_2` 함수를 호출시에 자동적으로 데코레이터 함수가 적용되어 호출된다.

```python
display_1 = decorator_function(display_1) 
display_2 = decorator_function(display_2) 
```

> 위 예시의 출력 결과는 다음과 같다.

```
함수가 호출되기 전입니다.
display_1 함수가 실행됐습니다.
함수가 호출되기 전입니다.
display_2 함수가 실행됐습니다.
```

> 그러나 위의 방법으로는 인자를 전달 받는 함수의 데코레이팅을 불가능하다. 다음의 코드를 확인해보자.

```python
def decorator_function(original_function):
    def wrapper_function():
        print("{} 함수가 호출되기 전입니다.".format(original_function.__name__))
        return original_function()
    return wrapper_function
 
@decorator_function
def display_1():
    print("display_1 함수가 실행됐습니다.")
 
@decorator_function
def display_info(name, age): # 위 예제와 다르게 인자가 전달된다. 
    print("display_info( {}, {} ) 함수가 실행됐습니다.").format(name, age)
    
display_1()
print()
display_info('김아무개', 37)    
```

> 출력결과는 다음과 같다. `display_1` 함수는 잘 실행되었으나 `display_info`는 실행되지 않고 TypeError 오류를 발생시켰음을 알 수 있다. 

```
display_1 함수가 호출되기 전입니다.
display_1 함수가 실행됐습니다.

Traceback (most recent call last):
  File "C:/Users/student/PycharmProjects/practice/a.py", line 20, in <module>
    display_info('김아무개', 37)    
TypeError: wrapper_function() takes 0 positional arguments but 2 were given
```

> 이렇게 인자가 존재하는 함수를 데코레이팅하려면 데코레이터 함수 내부에 정의된 함수에 위치인자와 키워드인자를 넣어주어야 한다. 다음의 예시를 보자.

```python
def document_it(func):
    # 위치인자, 키워드 인자 활용
    def new_function(*args, **kwargs):
        print('Running function : ', func.__name__)
        print('Positional arguments : ', args)
        print('Keyword arugments :' , kwargs)
        
        # 내부에서 다시 인자로 받은 함수에 인자를 전달해준다.
        result = func(*args, **kwargs)
        print('Result : ', result)
        
        # 결과를 반환
        return result
    return new_function
 
def add_inits(a, b):
    return a + b
 
def div_inits(a,b):
    return a / b
 
add = document_it(add_inits)
div = document_it(div_inits)
 
print(add(5,3))
print("")
print(div(5,3))
```

> `new_function`에 위치인자와 키워드 인자를 넣어준 것을 확인할 수 있다. 위 예시의 출력 결과는 다음과 같다. 인자가 제대로 전달되어서 원하는 결과대로 출력되었음을 확인할 수 있다.

```
Running function :  add_inits
Positional arguments :  (5, 3)
Keyword arugments : {}
Result :  8
8

Running function :  div_inits
Positional arguments :  (5, 3)
Keyword arugments : {}
Result :  1.6666666666666667
1.6666666666666667
```



##### 데코레이터의 활용

> 데코레이터는 다양한 상황에서 매우 유용하다. 데코레이터가 활용되는 대표적인 예로 로깅이 있다. 규모가 큰 앱에서는 현재 무슨 일이 벌어지고 있는지 구체적으로 측정하고 다양한 활동을 정량화하는 지표가 필요한 경우가 있다. 데코레이터는 이런 경우 중요한 이벤트를 전용 함수에 캡슐화하여 로깅을 용이하게 처리하도록 한다. 그 외에 인자의 유효성 검사, 런타임 검사들에 활용할 수도 있다.



##### 데코레이터 예시

> 데코레이터는 프레임워크나 일반 파이썬 코드에서도 발견된다. flask의 `app.route`나, 일반 파이썬 코드의 `@classmethod`, `@property` 등이 예다.