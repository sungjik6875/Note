# Container

### : Call by value / reference, Shallow / Deep copy



#### Call by Value

```
# immutable한 객체는 값이 그대로 복사가 된다.

c = 12
d = c
d = 13
print(c) # 12가 출력
print(d) # 13이 출력
```



#### Call by Reference와 Shallow Copy

```
print(original_list)
# b의 값을 바꾸고 a를 출력해봅시다.

new_list = original_list # 객체의 복제가 아닌 주소값만 복사된다.

new_list = original_list[:] 
# Shallow Copy. 원본과 같은 리스트를 복제하여 그것을 new_list 변수가 가리키게 한다.
```

```
# list, dict 등의 mutable한 객체는 주소값이 복사가 된다.

a = [1,2,3]
b = a # 주소값의 복사. a, b는 같은 객체를 가리킨다.
b[0] = 0
print(a) # [0,2,3] 수정되어있음을 확인할 수 있다.
```

##### Shallow Copy의 한계

```
# shallow copy는 리스트나 딕셔너리 안에 레퍼런스가 있으면 그것을 복제하지 못한다. 결국 안의 레퍼런스의 값은 같은 객체를 가리키기 때문.
# 물론 레퍼런스가 아닌 값을 변경하는 것은 원본에 영향을 주지 않는다.

a = [1, 2, [1, 2]] # b, a의 [1,2]는 레퍼런스로 참조하므로 같은 객체이다.
b = a[:]
b[2][0] = 3
print(a) # 수정되어있음을 확인할 수 있다.
```



#### Deep Copy

```
# 완전히 다른 객체를 생성하여 완전 복제가 된다.
import copy # copy 모듈을 필요로 한다.
a = [1, 2, [1, 2]]
b = copy.deepcopy(a) # 완전 복제
b[2][0] = 3
print(a) # 원본인 a의 정보가 그대로 유지된다.
```