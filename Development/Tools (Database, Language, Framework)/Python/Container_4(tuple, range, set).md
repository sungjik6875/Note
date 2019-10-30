# Container

### : Tuple, Range, Set



#### Tuple

>  tuple은 immutable하여 수정이 불가능하며 시퀀스 자료형이므로 인덱스를 통해 값에 접근이 가능하다.  보통 ()를 통해 tuple임을 명시하지만 ()는 생략이 가능하다. 여러 변수에 여러 값을 할당할 때에 내부적으로는 변수를 tuple로 처리한다.

```
tuple_ex = (1,2)
print(type(tuple_ex)) # <class 'tuple'>
is_tuple = 1, 2  # 괄호 없어도 생성이 가능하다.
is_tuple # (1, 2)
```



#### Range

>  range도 immutable한 시퀀스 자료형에 속한다. 정수의 수열이며, for문에서 주로 활용된다. 표현 방식에 따라 아래의 3가지 유형이 있다.

```
# 기본형 - range(n) : 0~n-1 까지의 값을 가짐
list(range(10)) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 범위 지정 - range(n, m) : n부터 m-1까지의 값을 가짐
list(range(3, 10)) # [3, 4, 5, 6, 7, 8, 9]

# 범위, 스텝 지정 - range(n, m, s) : n부터 m-1까지 +s만큼 증가한다
list(range(0, 30, 3)) # [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
```



### Set

>  Set은 mutable하여 수정이 가능하고, 순서가 없는 자료형에 속한다. 인덱스를 통한 값의 접근이 불가능하다. set의 가장 큰 특징으로는 중복을 허용하지 않는다는 것이다. set을 활용하여 list의 중복값의 제거가 가능하다. 
>
>  set은 고유한 연산을 갖는데, 합집합, 차집합, 교집합의 기능을 갖는 연산자와 함수를 갖는다.

```
# set의 연산
set_a = {1, 2, 3}
set_b = {3, 6, 9}
set_a - set_b # 차집합
set_a & set_b # 교집합, a.intersection(b)로 표현하기도 한다.
set_a | set_b # 합집합, a.union(b)로 표현하기도 한다.

# set의 특징을 활용한 중복값 제거
l = [1,2,3,1,2,1]
list(set(l)) # [1, 2, 3]
```



#### 함수

##### .add(x)

> x를 set에 추가한다.

```
a = {1, 2, 3, 4}
a.add(5)
print(a) # {1, 2, 3, 4, 5}
```

##### .update(iterable)

> 여러 값을 순차적으로 추가하며, 인자는 반드시 iterable해야 한다. 중복값은 추가되지 않는다.

```
a = {1, 2, 3}
a.update([3,4,5]) 
print(a) # {1, 2, 3, 4, 5}
a.update((5,6,7))
print(a) # {1, 2, 3, 4, 5, 6, 7}
a.update({7,8,9})
print(a) # {1, 2, 3, 4, 5, 6, 7, 8, 9}
```

##### .remove(x) / .discard(x) / .pop()

> 모두 원소를 제거하는 기능을 한다. .remove는 원소가 없을 경우 에러가 발생하지만, .discard는 에러가 발생하지 않는다. remove, discard는 지정한 원소를 제거하지만 pop은 임의의 원소를 제거한다.

```
# .remove(x)
a = {1, 2, 3}
a.remove(4) # 오류 발생
a.remove(3) # 3을 제거
print(a) # {1, 2}

# .discard(x)
a = {1, 2, 3}
a.discard(4) # 오류 발생하지 않는다
a.discard(2) # 2를 제거
print(a) {1, 3}

# .pop()
a = {7, 6, 21, 1}
b = a.pop() # 임의의 원소 제거
print(b)
```



#### Comprehension

> ##### set = [elem for member in iterable if condition]
>
>  if문이 true를 만족하는 경우에 iterable의 member를 원소로 넣거나, 또는 member에 함수를 대입한 결과를 원소로 넣게 하여 간략하게 set을 표현하는 것이 가능하다.

```
cubic_set = {x**3 for x in range(1,8)}
# {64, 1, 8, 343, 216, 27, 125} 순서가 없으므로 임의의 순서로 나열된다.
```

