# Container

### : List

>  리스트는 순서가 존재하는 시퀀스 자료형이며, 변형이 가능한 mutable 자료형이다. 시퀀스 자료형이므로 인덱스를 통해 값에 접근하며, mutable이므로 자료의 추가, 삭제 등이 가능하다.

```
l = []  # 빈 리스트의 생성

students = ["kim", "lee", "park"]
for k in students:
  print(k)  # kim, lee, park가 출력된다.

students[1] = "choi"
print(students)  # ['kim', 'choi', 'park']
del students[2]
print(students) # ['kim', 'choi']
```



#### 함수

##### .append(x)

> 리스트에 값 x를 추가한다.

```
caffe = ['starbucks', 'tomntoms', 'hollys']

# 값을 추가
caffe.append('w cafe')
print(caffe) 

# append 쓰지 않고 list에 추가하는 법
caffe[len(caffe):] = ['w cafe'] # concatenation과 같은 느낌이다.
print(caffe)
```

##### .extend(iterable) / concatenation

> append가 값을 추가한다면, extend는 iterable한 자료를 원본에 추가한다. concatenation도 같은 효과를 낸다. 그러나 extend()는 원본이 수정되고, concatenation은 원본을 수정하지 않는 차이가 있다.

```
# .extend와 concatenation을 활용하여 추가하기.
caffe.extend(['coffe bean', '빽다방', '커피니', '던킨도넛', '크리스피 크림'])
print(caffe) # 원본이 변형되었다.
print(caffe + ['x cafe', '바나 프레소'])
print(caffe) # 원본이 변형되지 않았다.

# list와 tuple의 연산
a = [1, 2, 3, 4]
b = (5, 6)

a + b # 오류 발생. concatenation은 list만 가능하며 tuple은 불가능하다.
a += b # .extend메소드와 내부 동작이 같으며 tuple도 연산이 가능하다.
```

##### insert(i,x)

> 인덱스 i의 위치에 값 x를 삽입한다. 인덱스 값이 범위를 벗어나면 마지막에 붙는다.

```
a = ["starbucks", "tomntoms", "coffee bean"]
a.insert(0, 'hi')
print(a) # ['hi', 'starbucks', 'tomntoms', 'coffee bean']
```

##### remove(x)

> 값 x를 삭제한다. 만약 값 x가 없으면 오류가 발생한다.

```
numbers = [1, 2, 3, 1, 2]
numbers.remove(1)
print(numbers) # 2, 3, 1, 2 앞에서부터 삭제한다. 하나씩 삭제한다.

numbers.remove(1)
print(numbers) 

numbers.remove(1) # 1이 없으므로 오류 발생
print(numbers)
```

##### .pop(i)

> 미지정시 마지막 항목, 지정시 지정한 위치의 항목을 삭제하고 그 항목을 반환한다.

```
a.pop() # 미지정시 마지막 항목 삭제
print(a)
```

##### .index(x)

> 값 x의 index값을 반환한다.  만약 x가 list에 없으면 오류가 발생한다.

```
a = [1, 2, 3, 4, 5]
print(a.index(1)) # 값 1이 위치한 인덱스 값 0이 출력된다.

a = [1, 2, 3, 4, 5]
print(a.index(6)) # 오류 발생
```

##### .count(x)

> 객체 안에 x가 몇 개 존재하는지 확인할 수 있다. 문자열 String에도 적용가능하다.

```
a = [1, 2, 5, 1, 5, 1]
a.count(1) # 3이 출력

# 활용 : 원하는 값 x을 모두 삭제하기
a = [1, 2, 1, 3, 4]
for i in range(0,a.count(1)):
    a.remove(1)
print(a)
```

##### .sort() / sorted(list)

> 리스트의 원소를 정렬한다. sorted(list)의 경우 정렬된 새로운 list를 리턴하되, 원본을 수정하지 않는다. 반면 .sort()의 경우 원본을 수정하며, 리턴값은 없다는 차이가 있다.

```
import random
lotto = random.sample(range(1,46), 6)

# sorted(list) 
sorted_lotto = sorted(lotto) # 리턴이 되므로 변수에 저장 가능
print(sorted_lotto) # lotto에서 정렬된 리스트가 출력.
print(lotto) # 원본이 그대로임을 확인

# .sort() 
print(lotto.sort()) # None이 출력
print(lotto) # 원본이 수정되었음을 확인
```

##### reverse() / reversed(list)

> 현재 순서의 역순으로 정렬한다. reversed(list)의 경우 원본을 수정하지 않으며, 역순으로 된 list를 리턴한다. 반면 reverse()의 경우 원본을 수정하며 리턴값은 없다.

```
classroom = ['Tom', 'David', 'Justin']

# reversed(list)
# reversed(list)의 자료형은 <class 'list_reverseiterator'>이다.
print(type(reversed(classroom)))

# 따라서 역순으로 한 다음 list로 쓰려면 형변환이 필수. 
print(list(reversed(classroom)))
print(classroom) # 원본이 그대로임을 확인

# .reverse()
print(classroom.reverse()) # None으로 출력
print(classroom) # 원본이 수정되었음을 확인
```

##### .clear()

> 리스트의 모든 원소를 삭제한다. 객체를 삭제하는 것은 아니므로 리스트 자체는 보존된다.

```
numbers = list(range(1, 46))
numbers.clear()
print(numbers) # []이 출력된다.
```



#### Comprehension

> #####  list = [elem for member in iterable if condition]
>
>  if문이 true를 만족하는 경우에 iterable의 member를 원소로 넣거나, 또는 member에 함수를 대입한 결과를 원소로 넣게 하여 간략하게 list를 표현하는 것이 가능하다.

```
even_list = [i for i in range(1, 11) if i%2 == 0]
print(even_list)  # [2, 4, 6, 8, 10]

cubic_list = [i**3 for i in range(1, 11)]
print(cubic_list) # [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

# 곱집합도 표현이 가능하다. for 반복문의 중첩
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']
couple = [(boy, girl) for boy in boys for girl in girls]

# [('justin', 'jane'), ('justin', 'iu'), ('justin', 'mary'), ('david', 'jane'), ('david', 'iu'), ('david', 'mary'), ('kim', 'jane'), ('kim', 'iu'), ('kim', 'mary')]
```

