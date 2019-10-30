# Container

### : Dictionary

>  각 요소가 key와 value의 쌍으로 이루어져 있다. 순서가 없어서 인덱스를 통한 접근을 불가능하다. 대신 key를 통해 값에 접근한다.
>
>  key의 자료형으로는 immutable한 string, int, float, boolean, tuple, range 등이 가능하며, value의 자료형으로는 list, dictionary를 포함한 모든 자료형이 가능하다. value는 값의 중복이 허용되지만 접근에 필요한 key는 값의 중복이 허용되지 않는다.

```
phone_book = {"서울":"02", "경기":"031"} 

# key를 통해 value에 접근이 가능하다.
phone_book["서울"] # '02'
phone_book["경기"] # '031'

# key만, value만, key와 value를 모두 출력하는 것이 가능하다.
phone_book.keys() # 모든 key값 출력
phone_book.values() # 모든 value값 출력
phone_book.items() # # key, value 모두 출력

a={1:"a"}
print(a)  # {1: 'a'}
a[2]= "6" # 단일 값을 수정하거나 추가하는 경우에는 키로 접근하여 할당한다. 
a         # {1: 'a', 2: '6'}
len(a) # 2가 출력된다.
```



#### 함수

##### .pop(key, default)

>  key가 딕셔너리에 있으면 제거하고 그 값을 리턴하며, 없으면 default를 리턴한다. 만약 default를 설정하지 않은 상태에서 딕셔너리에 key가 없을 경우 에러가 발생한다.

```
my_dict = {'apple': '사과', 'banana': '바나나'}

print(my_dict.pop('apple')) # 사과가 출력된다.
print(my_dict.pop('melon', 0)) # 0이 출력된다.
print(my_dict.pop('melon')) # 에러 발생.
```

##### .update(dict)

>  보통 여러 값을 추가하거나, 수정하고자 할 때 사용한다.  키 값이 중복될 경우 덮어쓰기가 되며, 새로운 키 값은 새로 추가된다.

```
my_dict = {'apple': '사과', 'banana': '바나나', 'melon': '멜론'}

my_dict.update({'orange' : '오렌지'})
print(my_dict)
# {'apple': '사과', 'banana': '바나나', 'melon': '멜론', 'orange': '오렌지'}
```

##### .get(key, default)

>  key를 통해 value를 가져온다. default가 기본적으로 None으로 설정되어 있어 key가 없어도 오류가 발생하지 않으며 None이 리턴된다.

```
my_dict = {'apple': '사과', 'banana': '바나나', 'melon': '멜론'}

my_dict.get('banana') # 바나나가 출력된다.
```



#### Comprehension

> ##### dict = {key : value for member in iterable if condition}
>
>  if문이 true를 만족하는 경우에 iterable의 member에 연산자나 함수를 대입한 결과를 key와 value에 넣게하여 간략하게 dict를 표현하는 것이 가능하다.
>
> ##### dict = {key : value for key, value in iterable if condition}
>
>  if문이 true를 만족하는 경우에 iterable의 key, value를 그대로 대입하거나, 연산자나 함수에 대입한 결과를 key, value에 넣게하여 간략하게 dict를 표현하는 것이 가능하다.

```
cubic_dict = {x: x**3 for x in range(1,8)}
print(cubic_dict)
# {1: 1, 2: 8, 3: 27, 4: 64, 5: 125, 6: 216, 7: 343}

dusts = {'서울':72, '경기':82, '대전':29, '중국':200}
new_dict = {key : value for key, value in dusts.items() if value > 80}
print(new_dict)  # {'경기': 82, '중국': 200}
```

