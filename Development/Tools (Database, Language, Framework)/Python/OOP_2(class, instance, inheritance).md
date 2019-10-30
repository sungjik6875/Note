# OOP_2

### : Class, Instance, Inheritance

>    클래스란 연관된 함수와 변수를 하나의 그룹으로 묶어놓은 단위를 말한다. 클래스를 통해 실제 객체를 생성한 것을 인스턴스라고 한다. 클래스는 인스턴스를 생성하기 위한 하나의 틀로 동작한다. 클래스는 객체지향 프로그래밍의 핵심으로 클래스의 개념은 인간 친화적으로 설계된 개념이라 인간이 인지하기가 쉽고, 컴퓨터의 입장에서도 동일한 멤버를 참조해서 사용이 가능하므로 메모리가 절약되는 효과가 있다.

```
# 클래스의 선언과 인스턴스의 생성
class Person:                   # 클래스 선언
    number_of_people = 0        # 클래스 변수 선언
    
    def __init__(self, input_name): 
        self.name2 = input_name # 각각의 객체가 가지는 정보를 넣는다.
        Person.number_of_people += 1 
        # 인스턴스 메소드에서는 클래스 변수로 접근할 때에는 클래스명.클래스변수로 접근
    
    def greeting(self):         # 인스턴스 메소드 선언
        pass


# 인스턴스 생성
print(Person.number_of_people) # 클래스 변수 출력
iu = Person('iu') 
suzi = Person('suzi')
rm = Person('rm')
print(Person.number_of_people)

print(iu.name2) # 인스턴스 변수인 name2가 출력
print(suzi.name2)
print(rm.name2)
```

##### 클래스의 예시 : 네이버 카페와 멤버 등급

>   네이버 카페의 경우 자료를 열람하기 위해 등급업을 필요로 한다. 네이버는 카페의 유저들을 등급으로 나눈다.  등급에는 일반 유저, 매니저, 마스터 등등 이 있다.

```
Class User
# 모든 유저의 기본 사항 ID, PW, Name, Email, Phone 등의 멤버가 존재.  
# Read의 메소드만 존재

Class Special_User(User)
# User의 멤버를 그대로 갖고 있으며, Write의 메소드도 존재한다.

Class Administrator(Special_User)
# User, Special User의 멤버를 갖고 있으며 자신만의 메소드도 존재한다.

Class Super_Administrator(Administrator)
# 가장 많은 메소드와 멤버를 보유하고 있다.
```



##### isinstance(object, class)

>  어떤 객체가 어떤 클래스의 소속인지 판별하는 메소드이다. 소속이면 True, 아닐 경우 False를 출력한다.

```
print(isinstance(iu, Person)) # True
print(isinstance(iu, int)) # False
print(isinstance(iu, str)) # False
print(isinstance(iu, object)) # True
```

##### self

>   인스턴스 객체 자기자신을 가리킨다. C++, java에서 this 키워드와 동일하다. 특별한 상황을 제외하고는 인스턴스 메소드에서는 self가 첫 번째 인자로 설정된다. 인스턴스 메소드에서는 인스턴스 객체가 인스턴스 메소드의 첫 번째 인자로 전달되도록 되어있다.

```
# 두 메소드는 같은 의미이다.
iu.greeting() # 정상 작동된다. iu가 인자로 전달이 된다.
Person.greeting(iu) # iu가 self의 인자로 전달이 된다. self에는 이름 변수가 들어간다.
Person.greeting() # self의 인자가 전달되지 않았기 때문에 에러가 난다.
```



#### 클래스, 인스턴스의 이름공간

>   클래스를 정의하면 클래스 객체가 생성되고 해당되는 이름공간이 생성된다. 인스턴스 생성시 인스턴스 객체가 생성되고 해당되는 이름공간이 생성된다. 인스턴스의 어트리뷰트는 인스턴스 객체 이름 공간에 저장한다. 즉, 인스턴스에서 특정한 어트리뷰트에 접근시에는 인스턴스 > 클래스 순으로 탐색한다. 그러나 클래스 밖에서 선언된 변수(Global scope) 까지는 접근하지 않는다. 

```
name = '?'

class Person:
    name = '홍길동' 
    # 주석으로 처리시엔 에러가 난다. 왜냐하면 Global scope까지는 참조하지 않기 때문이다.
    
    def greeting(self):
        print(f'{self.name}') # 클래스 내부에서도 self를 통해 접근해야 한다.

iu = Person()
print(iu.name) 
print(iu.greeting())
```



#### 생성자 / 소멸자

>  생성자는 인스턴스 객체가 생성될 때 호출되는 함수이며, 소멸자는 객체가 소멸되는 과정에서 호출된다.

```
class Person:
    def __init__(self): # 생성자. 생성자는 인스턴스 메소드이므로 무조건 self가 붙는다.
        print("응애")
        
    def __del__(self): # 소멸자. 소멸자도 같은 이유로 self가 붙는다.
        print("꾸엑")
```

```
p1 = Person() # 응애
p1 = Person() # 응애 꾸엑
# 새로운 객체에 바인딩되므로 새로운 객체의 생성과 동시에 
# 기존 객체와의 연결이 끊어지고, 자동으로 소멸된다.
# 이런 경우 끊어진 객체의 데이터는 가비지 컬렉터가 자동으로 처리한다.

# 소멸자를 통해 직접 인스턴스를 제거하는 것도 가능하다.
del p1 # 꾸엑
```

> 생성자도 메소드이므로 self외에도 추가적인 인자를 받을 수 있다.

```
# 생성자에서 이름을 추가적으로 받아서 출력해봅시다.
class Person:
    def __init__(self, name):
        print(f'응애응애, {name}')

# 홍길동이라는 이름을 가진 hong 을 만들어봅시다.
hong = Person("홍길동")
# '응애응애, 홍길동' 이 출력된다.
```

```
# 생성자는 아래와 같은 방법으로 인자를 받아서 활용하는 것이 가능하다.
def __init__(self, parameter1, parameter2):
    print('생성될 때 자동으로 호출되는 메서드입니다.')
    print(parameter1)

def __init__(self, *args):
    print('생성될 때 자동으로 호출되는 메서드입니다.')

def __init__(self, **kwagrs):
    print('생성될 때 자동으로 호출되는 메서드입니다.')
```

> 생성자의 특성 덕에 생성자는 값을 초기화하는 과정에서 자주 활용된다.



#### 클래스 변수 / 인스턴스 변수

>    클래스 변수는 클래스와 메소드 사이의 공간에 선언하며, 모든 인스턴스가 같은 값을 공유한다는 특성이 있다. 이는 클래스 변수는 클래스 공간에 저장되므로 클래스는 물론 모든 인스턴스에서 참조하는 것이 가능하기 때문이다. 그러나 인스턴스  변수는 인스턴스별로 다른 값을 갖는 변수로 인스턴스에서 다른 인스턴스로, 혹은 클래스에서 인스턴스로 참조하는 것이 불가능하다.

```
class Person:
    population = 0 # 클래스 변수
    
    def __init__(self, name):
        self.name = name # 인자를 전달 받아 인스턴스 변수 초기화
        Person.population += 1 # 클래스 변수 초기화
        
sj = Person("sj") 
print(sj.name) # sj가 출력된다.
jh = Person("jh")
print(jh.name) # jh가 출력된다.

print(Person.population) # 2
print(jh.population) # 2, 클래스 변수는 인스턴스에서도 접근이 가능하다.
```



#### 정적 메소드 / 클래스 메소드

>   인스턴스 메소드는 인스턴스가 인자로 필요하므로 인스턴스를 통해서 접근이 가능하지만 정적 메소드와 클래스 메소드는 클래스를 통해서도 접근이 가능하다. 정적 메소드는 객체가 인자로 전달되지 않아도 호출이 가능하나, 클래스 메소드는 클래스를 반드시 인자로 넘겨주어야 한다.

```
class Person:
    population = 0
    
    def __init__(self, name):
        self.name = name
        Person.population += 1
        
    def greeting(self):
        print(f'{self.name}입니다. 안녕하세요')
        
    @staticmethod 
    def info():
        print("사람입니다.")
        
    @classmethod
    def count(cls):
        print(f'현재 인구수는 {Person.population}명 입니다.') 
        # cls.population으로 기술해도 됨.
              
me = Person("SJ")
me.greeting() # SJ입니다. 안녕하세요
Person.greeting(me) # SJ입니다. 안녕하세요
Person.info() # 사람입니다.
Person.count() # 현재 인구수는 1명 입니다.
```

```
# Class Dog를 생성.
# 클래스 변수 num_of_dogs 통해 개가 생성될 때마다 증가.
# 개들은 각자의 이름과 나이를 인스턴스 변수로 갖고 있다.
# 그리고 bark() 메서드를 통해 짖을 수 있다. 
# bark()는 인스턴스 변수에 접근하여 자신의 이름과 나이를 함께 짖도록 동작한다.

class Dog:
    nums_of_dogs = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Dog.nums_of_dogs += 1
    
    def bark(self):
        print(f"wal wal I'm {self.name} and {self.age} years old")
        
    @staticmethod
    def info():
        print("강아지 입니다.")
        
# 각각 이름과 나이가 다른 인스턴스를 3개 만들어봅시다.
siba = Dog('siba', 3)
jindo = Dog('jindo', 2)
sheperd = Dog('sheperd', 1)

print(Dog.nums_of_dogs)  # 3
siba.bark() # wal wal I'm siba and 3 years old
jindo.bark() # wal wal I'm jindo and 2 years old
sheperd.bark() # wal wal I'm sheperd and 1 years old
Dog.info() # 강아지 입니다.
```

>  정적 메소드는 인자가 필요없어 계산기와 같은 간단한 메소드를 구현하는데 많이 사용된다.

```
# 굳이 인스턴스를 생성할 필요도 없고, 내부의 변수에 저장하거나 접근할 필요도 없다면 
# 스태틱 메소드로 구현하기 좋다. 계산기는 좋은 예시이다.
class Calculator:
    @staticmethod
    def add(a, b):
        return a + b
    def sub(a, b):
        return a- b
    def mul(a, b):
        return a * b
    def div(a, b):
        return a / b
        
Calculator.mul(3, 4) # 12가 출력된다.
```

##### Stack 구현하기 : 클래스와 List 활용

```
class Stack:
    def __init__(self): # 스택 생성
        self.items = []
        
    def empty(self): # 스택이 비었다면 True, 아니면 False. 데이터 여부 판별
        return self.items
    
    def top(self): # 스택의 가장 마지막 데이터를 반환. 비었다면 None을 반환.
        if self.items: 
            return self.items[-1]
    
    def pop(self): # 마지막 데이터를 반환함과 동시에 해당 데이터 삭제. 비었다면 None.
        if self.items:
            elem = self.items.pop()
            return elem
    
    def push(self, elem): # 스택의 가장 마지막 데이터 뒤에 값을 추가한다. 리턴값 없음
        self.items.append(elem)
        
    def __repr__(self): # 출력되는 형식 조정
        return '스택 : ' + ','.join(self.items)
```

##### 연산자 오버로딩

> 파이썬에서 기본적으로 정의된 연산자를 재정의하여 다르게 동작하도록 활용할 수 있다.

```
+  __add__, -  __sub__, *  __mul__, <  __lt__, <= __le__, == __eq__, != __ne__,
>= __ge__, >  __gt__
```

```
class Person:
    population = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Person.population += 1
        
    def greeting(self):
        print(f'{self.name}입니다. 만나서 반가워요')
        
    # 원래 존재하는 메소드 >의 의미인 __gt__를 오버라이딩 하여 사용한 것.
    # __repr__의 경우도 오버라이딩하여 사용하였으므로 결과가 다르게 출력되었다.
    def __gt__(self, other):
        if self.age > other.age:
            return '왼쪽이 나이 더 많아'
        else:
            return '오른쪽이 나이 더 많아'
    
    # =의 의미를 갖는 __eq__도 오버라이딩 하여 사용. 다른객체를 other로 사용
    def __eq__(self, other):
        if self.name == other.name:
            return "이름이 같네요."
        else:
            return "이름이 다르네요."
         
p1 = Person('아저씨', 40)
p2 = Person('아저씨', 49)
p3 = Person('아주머니', 38)

# 다음의 명령어는 위에서 재정의한 메소드의 결과로 출력.
p1 > p2  
p1 == p2
p2 == p3       
```

##### ※ 싱글톤 패턴(Singleton Pattern)

>    애플리케이션 실행시 클래스가 최초 한번만 메모리를 할당하여 그 메모리에 인스턴스를 만들어 사용하는 디자인 패턴을 말한다. 생성자가 여러번 호출되어도 여러 개의 인스터스가 생성되지 않고, 처음을 제외하면 이후에 호출된 생성자들은 처음에 생성된 인스턴스만을 반환한다. 
>
>    싱글톤 패턴은 인스턴스를 하나만 생성하기 때문에 메모리 낭비를 방지할 수 있다. 또한 싱글톤으로 만들어진 클래스의 인스턴스는 전역 인스턴스이므로 다른 클래스의 인스턴스들의 접근이 수월하다. 다만 인스턴스가 절대적으로 하나만 필요한 것이 보증된 경우에 사용하며, 두 번째 사용부터는 객체 로딩 시간이 현저하게 줄어 앱의 성능이 좋아진다.



#### 상속

>   상속은 클래스의 속성을 물려받는 새로운 클래스를 정의하여 사용하는 것을 말한다. 자식 클래스의 객체는 부모 클래스에 존재하는 메소드나 어트리뷰트에 접근하여 사용하는 것이 가능하다. 따라서 코드의 재사용성을 증가시킨다.

```
class Person: # 부모 클래스 생성
    def __init__(self, name):
        self.name = name
        
    def greeting(self):
        print(f'{self.name} 입니다.')
        
class Student(Person): # 자식 클래스 생성
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

# 상속 관계 확인하기
issubclass(Person, Student) # False 출력
issubclass(Student, Person) # True 출력
```

##### super()

>   자식 클래스는 부모 클래스에 없는 멤버를 추가로 구현하는 것이 가능하다. 만약 부모클래스의  내용을 사용하고자 한다면 super()를 사용할 수 있다. super()는 부모클래스의 생성자를 호출한다.

```
# 자식 클래스에서 새로운 멤버 구현하기
class Person(Animal):
    def __init__(self, name, age, number, email):
        self.name = name
        self.age = age
        self.number = number
        self.email = email 
        
    def greeting(self):
        print(f'안녕, 난 {self.name}')
        
class Student(Person):
    def __init__(self, name, age, number, email, student_id):
        super().__init__(name, age, number, email) 
        # super()는 부모 객체를 가리킨다.
        self.student_id = student_id
        
p1 = Person('홍길동', 200, '0101231234', 'hong@gildong')
s1 = Student('학생', 20, '12312312', 'student@naver.com', '190000')
```

##### 오버라이딩

>  자식클래스에서는 부모 클래스의 멤버를 재정의 하는 것이 가능하다. 이는 이름공간에서 인스턴스 > 자식 클래스 > 부모 클래스 > 전역 순으로 탐색을 시작하기 때문에 가능하다.

```
class dog:
    number_of_dogs = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        dog.number_of_dogs += 1
    
    def bark():
        print("wal wal")
    

class siba(dog):
    def __init__(self, name, age, species):
        super().__init__(name, age)
        self.species = species
    
    def bark(): # 부모클래스의 메소드를 재정의하였다.
        print("wol wol")
```

##### 다중상속

>  다중 상속에서는 두 부모 클래스에 같은 이름의 멤버가 있을 경우 이름이 충돌할 가능성이 있다. 이런 경우를 방지하기 위해 상속란에 먼저 기술된 클래스를 우선으로 한다. 따라서 super()도 먼저 상속된 부모 클래스를 우선으로 한다.

```
class Teacher(Person):
    def __init__(self, name, age, number, email, subject):
        super().__init__(name, age, number, email)
        self.subject = subject
        
    def greeting(self):
        print(f'안녕하세요, 저는 {self.subject} 선생님 입니다.')
        
class Master_Teacher(Teacher. Person):
    
    def __init__(self):
        super().__init__() 
        # super()는 먼저 기술된 Teacher를 의미
        # 만약 Person을 가리키게 하려면?
        Person.__init__(self, ) : 
        # super의 경우엔 self를 쓸 이유가 없으나 별도로 지정했으므로 self 필요.
    
t1 = Teacher("Tom", 31, '123', 'id@email.com', '도덕')
t1.greeting()
```

