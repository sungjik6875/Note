# OOP

### : module, math, datetime

>  모듈이란 특정 기능과 관련된 메소드, 어트리뷰트, 클래스 등을 구현한 것을 말한다. 파이썬에서는 기본적으로 제공되는 모듈, 표준 라이브러리에서 제공되는 모듈을 활용할 수 있다. random, math, sys 등이 예이다.

```
import random
lotto = random.sample(range(1,46), 6)
print(lotto)
```

> 모듈을 활용하기 위해서는 import를 통해 모듈을 이름공간으로 가져와야 한다.

```
import random.choice
print(dir(random)) # random을 통해 활용가능한 멤버들을 조회가 가능하다.
```

> 만약 모듈의 모든 멤버가 아닌, 특정한 메소드나 어트리뷰트만을 활용하고 싶다면 from을 사용한다.

```
# 우리가 beautifulsoup을 사용할 때 활용했던 코드를 작성해봅시다.
from bs4 import BeautifulSoup
BeautifulSoup()

from bs4 import BeautifulSoup as bts
bts()
# 바로 bs4라는 모듈에서 BeautifulSoup만 가져온 것이었습니다.

import bs4
bs4.BeautifulSoup()
```

```
# 이름공간에 현재 sample이 없습니다.

from random import sample, choice
sample([1,2,3], 2) # [3,1] 등이 출력.
print(choice([1,2,3]))
```

>  *를 활용하여 모든 멤버를 가져오는 것도 가능하다. import module과 다른 점은 모듈의 멤버에 직접 접근이 가능하다는 것이다.

```
from random import * # import random과 다른 점은 메소드에 직접 접근이 가능하다.

print(sample([1,2,3,4], 2))
print(choice([1,2,3,4]))
```

> as를 활용하여 가져온 멤버에 이름을 지정하는 것도 가능하다.

```
from random import choice as c
c([1,2,3,4,5])
```

> 모듈은 import된 시점 이후부터 끝날 때 까지 생명 주기를 갖는다.



#### 수학 관련 함수

>  다음의 함수들은 import하지 않아도 활용이 가능하다. 
>
> ##### sum, max, min, abs, pow, round, divmod

```
print(pow(2,3))
print(divmod(5, 2)) # 몫, 나머지를 tuple로 반환
```

##### 수학 관련 모듈 (math)

> 수학과 관련된 모듈로 math가 존재한다. 어떤 함수들은 math에 속해있어 math를 import해야 한다.

```
원주율(pi)
import math
print(math.pi)
```

```
# 자연 상수(e)
import math
print(math.e)
```

```
# 올림, 내림, 버림
import math
a = 3.5
b = -2.5

print(math.ceil(a)) # 4
print(math.trunc(a)) # 3
print(math.floor(a)) # 3
print(math.ceil(b)) # -2
print(math.trunc(b)) # -2
print(math.floor(b)) # -3
```

```
# 프로그래밍에서 나눗셈은 음수로 하거나 양수로 하거나 두가지 상황이 있음. 
# %는 정수를 fmod는 float
# 부호가 다른 경우 서로 다르게 출력함.

import math
print(math.fmod(-5, 2)) # -1.0이 출력. %로 한 경우와 부호와 자료형이 다르다.
print(-5%2) # 1이 출력
```

```
# x^y
import math
print(math.pow(2,5)) # 실수도 커버
print(pow(2,5)) # 정수만 됨(?) 테스트해보니 실수도 커버.

print(math.pow(2.1,3.1))
print(pow(2.1,3.1))
print(2.1**3.1)
# 셋 다 모두 같은 결과 출력. 9.97423999265871
```

```
# 제곱근
math.sqrt(8)
```

```
# 로그 계산
math.log(8, 2) # 3.0이 출력된다.
```

```
# e^x
math.exp(1)
```



#### 날짜 관련 모듈 (datetime)

>  날짜와 관련된 모듈로, 웹에서 많이 활용되는 모듈이기도 하다. 기준은 1970년 1월 1일이며, 이 시점을 기준으로 1초씩 증가한다. 

```
# 오늘을 출력하기 : now(), today()가 존재한다.
import datetime

# datetime 모듈의 datetime 클래스의 now메소드는 마이크로 초 단위로 현재 시각을 나타낸다.
now = datetime.datetime.now()
print(now)
# 2019-01-10 16:35:26.916403

# datetime 모듈의 datetime 클래스의 today메소드도 현재 시각을 알 수 있다.
datetime.datetime.today() # 지저분하게(?) 출력된다.
print(datetime.datetime.today()) 
# 깔끔하게 출력된다. __repr__ 이라는 메소드 때문이다.
```

##### 시간 단위의 속성/메소드

| 속성/ 메소드 | 내용                               |
| ------------ | ---------------------------------- |
| .year        | 년                                 |
| .month       | 월                                 |
| .day         | 일                                 |
| .hour        | 시                                 |
| .minute      | 분                                 |
| .second      | 초                                 |
| .weekday()   | 월요일을 0으로 시작하여 일요일이 6 |

```
now = datetime.datetime.now()
print(now.year) # 2019
print(now.month) # 1
print(now.day) # 15
print(now.weekday()) # 요일에 따라 0~6
```

##### 시간 형식지시자(directive)

| 형식 지시자 | 의미                   |
| ----------- | ---------------------- |
| %y          | 연도표기(00~99)        |
| %Y          | 연도표기(전체)         |
| %b          | 월 이름(축약)          |
| %B          | 월 이름(전체)          |
| %m          | 월 숫자(01~12)         |
| %d          | 일(01~31)              |
| %H          | 24시간 기준(00~23)     |
| %M          | 분(00~59)              |
| %S          | 초(00~61)              |
| %a          | 요일(축약)             |
| %A          | 요일(전체)             |
| %w          | 요일(숫자: 일요일이 0) |
| %j          | 1월 1일부터 누적 날짜  |

```
# 크리스마스를 만들어봅시다.
christmas = datetime.datetime(2019, 12, 25)
print(christmas)
# 2019-12-25 00:00:00
```

```
# 위의 결과에서 형식 지시자를 사용하여 연, 월, 일을 추출하기
# strftime 메소드는 날짜와 시간을 문자열로 변환하는 메소드
christmas.strftime('year: %y, month : %m, day : %d')
# 'year: 19, month : 12, day : 25'
```

##### timedelta

> 시간의 경과나 흐름을 반환하는 메소드이다.

```
from datetime import timedelta
ago = timedelta(days = -3)
print(now + ago) # 현재 시점으로부터 3일 전의 시점을 출력한다.
print(now + timedelta(days=100)) # 현재로부터 100일 뒤의 시점을 출력.
```

```
# 크리스마스부터 지금까지 얼마나 지났을까?
christmas = datetime.datetime(2018, 12, 25)
now = datetime.datetime.now()
diff = christmas - now
# 위의 결과를 초 단위로 계산하기
print(diff.total_seconds())
```

