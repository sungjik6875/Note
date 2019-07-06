# Basic Syntax

### : Condition, Loop



##### ※ 들여쓰기 

>  파이썬은 코드블록을 자바나 C언어의 {}와 다르게 들여쓰기로 판단하므로 들여쓰기 원칙을 지켜야 한다. 보통 PEP-8에서 권장하는 `4spaces`의 규격을 사용한다.



#### 조건문 (Condition)

>  조건에 따른 분기문을 실행하는 명령문이다. 반드시 True / False 을 판단할 수 있는 조건식과 함께 사용되며 조건식이 참인 경우 if문을 수행한다. 조건식이 거짓인 경우 elif, else문을 실행한다. 

```
a = 5
if a>5:
    print("5초과")
else:
    print("5이하")
print(a) # 5이하 5가 출력된다.
```

```
# 입력값을 받고 홀짝 구분하기
num = int(input("점수를 입력하세요 : "))
if num%2 == 1:
    print("홀수")
else:
    print("짝수") 
```

```
# 카드 여부와 현금 잔액에 따른 택시 탑승 여부 결정하기
money = 5000
card = False
if money>=4000 or card:
    print("탈 수 있다") # 출력
else:
    print("탈 수 없다")
```

```
# 연필 1000원, 펜 2000원 일때 10000원 초과시 10%할인. 값을 입력하고 가격 출력

pen = int(input("펜의 수를 입력하시오 : "))
pencil = int(input("연필의 수를 입력하시오 : "))
price = pen*2000 + pencil*1000
if price > 10000:
    print(0.9*price)
else:
    print(price)
```

```
# 나이에 따른 버스 요금 계산 후 잔액 출력

age = int(input("나이를 입력하세요 : "))
card = 9000
cost = 1000 + (age*10)
if age >=7:
    print(card - cost)
else:
    print(card)
```

> elif문을 활용하여 2개 이상의 조건문을 중첩하는 것도 가능하다.

```
# 점수를 입력하고 점수에 따른 등급 계산하기
score = int(input("점수를 입력하세요 : "))
if score>=90:
    print("A")
elif score>=80:
    print("B")
elif score>=70:
    print("C")
elif score>=60:
    print("D")
else:
    print("F") # 점수에 따라 해당되는 결과가 출력된다.
```

```
# 1~100의 숫자 출력. 2의 배수는 Fizz, 11의 배수는 Buzz, 공배수는 FizzBuzz 출력하기

for n in range(1,101):
    if n%22 == 0:
        print(n, "FizzBuzz")
    elif n%2 == 0:
        print(n, "Fizz")
    elif n%11 == 0:
        print(n, "Buzz")
    else:
        print(n)
```

```
# 세 정수를 입력받고 두 번째로 큰 정수를 출력하기
A = int(input("정수 A를 입력하세요 : "))
B = int(input("정수 B를 입력하세요 : "))   
C = int(input("정수 C를 입력하세요 : "))  

a = int(input("정수 A를 입력하세요 : "))
b = int(input("정수 B를 입력하세요 : "))   
c = int(input("정수 C를 입력하세요 : "))  

if (a>b and a<c) or (a<b and a>c):
    print("A :", a)
elif (b>a and b<c) or (b<a and b>c):
    print("B :", b)
else: 
    print("C :", c)
```

```
# 외화와 금액 입력시 환율 계산 하기

input_money = input("통화와 금액을 입력하세요 : ")
num, money = input_money.split() # 괄호 안에 defalut이면 공백으로 구분
k = int(num)
if money == "달러":
    print(k*100, "원 입니다.")
elif money == "엔":
    print(k*1000, "원 입니다.")
elif money == "유로":
    print(k*13, "유로 입니다.")
elif money == "위안":
    print(k*100, "위안 입니다.")
else:
    print("통화를 잘못 입력하였습니다.")

# 교수님의 코드
user_in = input("금액을 입력하세요 : ").split()
amount = user_in[0]
currnecy = user_in[1]

if currnecy = "달러":
    ratio = 1167
elif currnecy = "엔":
    ratio = 1096
elif currnecy = "유로":
    ratio = 1268
elif currnecy = "위안":
    ratio = 171
else:
    print("통화를 잘못 입력")
print(ratio*int(amount), "원 입니다.")
```



#### 조건 표현식

> ##### true_value if <조건식> else false_value 
>
> 조건문과 로직은 같지만, 좀 더 간결하게 표현하는 것이 가능하다.

```
# 3을 판별하는 코드

a = int(input("숫자를 입력하세요 : "))
print("3이 맞음") if a == 3 else print("3이 아님")
```

```
# 양수는 양수로, 음수는 0으로 세팅하는 코드 - 조건문
num = int(input("숫자를 입력하세요 : "))
if num >=0:
    value = num
else:
    value = 0
print(value)

# 양수는 양수로, 음수는 0으로 세팅하는 코드 - 조건 표현식
num = int(input("숫자를 입력하세요 : "))
value = num if num >= 0 else 0
print(value)

# 홀짝 구분하기 - 조건문
num = 2
if num % 2:
    result = '홀수입니다.'
else:
    result = '짝수입니다.'
print(result)

# 홀짝 구분하기 - 조건표현식
num = 2
print("짝수입니다") if (num%2)==0 else print("홀수입니다")
```



#### while문

>  while문은 조건식이 참인 경우 반복적으로 코드를 실행한다. 만약 조건식이 절대적으로 참일 경우 무한히 코드가 반복되므로 특정 횟수를 반복하면 조건식이 거짓이 되도록 설계하거나, break 등을 활용하여 종료조건을 잘 설정해야 한다.

```
# a가 5이상이면 종료되는 코드

a = 0
while a <5:
    a +=1
print("끝")
```

#### for문

>  for문은 정해진 범위 내에서 순차적으로 코드를 실행한다. 반복문에 해당되지만, 반복보다는 순회에 가깝다고 할 수 있다. iterable한 객체에서 각 member를 꺼내와서 실행시키며, 따라서 사용자가 반복문의 횟수를 예측 할 수 있다.

```
# 1~1000의 자연수 중 5의 배수에 해당되는 자연수들의 총합 구하기
sum = 0
for i in range(1,1001):
    if i%5==0:
        sum += i
print(sum) #100500 출력

# 교수님 코드 - List 사용
result =[]
for i in range(1, 1001):
 if i%5 == 0:
  result.append(i)
print(sum(result))
```

##### while / for

> while문과 for문은 각각 장단점이 존재한다. for문은 iterable한 객체의 각 member에 대해 반복문을 실행 시킬 경우에 굉장히 유용하다. 또한 사용자가 반복문의 횟수를 알 수 있다. 그러나 인자에 따라 반복될 횟수가 다른 경우에는 while문을 활용하는 것이 더욱 유용하다.

```
# 50점 이상 점수들의 총합 구하기 for, while문 모두 사용

# for문
scores = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
total = 0
for i in scores:
    if i >=50:
        total += i
print(total)

# while문
while i < len(scores):
      if i >=50:
        total += i
print(total)

# 교수님 코드
result = 0
while scores:
 picker = scores.pop()
 if picker >= 50:
  result += picker
print(result)
```

```
# 1~30까지 홀수인 숫자를 담는 리스트를 작성하기

odd = []
for i in range(1,31):
    if i%2 == 1:
        odd.append(i)
print(odd)
# [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29] 출력된다.
----------------------------------------------------------------------------
# 1~n의 합 구하기

n = int(input("숫자를 입력하세요 : "))
sum = 0
for i in range(1,n+1):
    sum += i
 print(sum)
----------------------------------------------------------------------------
# 구구단 출력하기

for i in range(1,10):
    for j in range(1,10):
        print("%d * %d = %d" % (i, j, i*j))
# 역삼각형부터는 따로 분리하기
```

##### break  

> break은 반복문을 종료하는 기능을 합니다.

```
numbers = [1, 5, 10]

for i in numbers:
    if i == 3:
        print("True")
        break
print("False") # False가 출력된다.
```

##### continue

> continue 이후의 코드를 수행하지 않고 다음 요소를 선택해 반복을 계속 수행합니다.

```
for i in range(6):
    if i % 2 == 0:
        continue
    print(f'{i}는 홀수') # 1, 3, 5가 각각 홀수라고 출력
```

##### else

> 끝까지 반복문을 시행한 이후에 실행됩니다. break에 의해 중간에 종료되지 않은 경우에 실행 됩니다.

```
for i in range(3):
    if i == 3:
        print(f'{i}에서 break')
        break
else:
    print("break 시행안됨") # break이 시행되지 않아 else가 실행된다.
```

