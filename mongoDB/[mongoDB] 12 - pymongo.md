#### pymongo

------

> Python과 몽고DB를 연동할 때 사용한다. 다음과 같이 설치한다. Python을 통해 설치해야 하므로 python이 환경변수로 설정되어 있어야 한다. 



##### 설치

```
> python -m pip install pymongo
```



##### 연동

> 먼저 몽고DB가 실행된 상태여야 한다. 만약 로컬환경일 경우, 몽고DB를 실행시킨다.

```
> mongod
```

> 테스트 용도의 파이썬 파일을 준비한다. 그 파일에 다음과 같이 pymongo를 불러올 수 있다.

```python
# test.py
import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
```

> `MongoClient()` 내에 연결할 몽고DB의 주소를 매핑함으로써 몽고DB에 연결한다.



##### 데이터베이스, 컬렉션에 접근하기, 데이터 불러오기(READ)

> 몽고DB의 `test`라는 데이터베이스에 존재하는 `user` 컬렉션에 접근하고자 할 때 다음과 같은 방법으로 접근할 수 있다.

```python
# test.py
...

db = client.test # test 데이터베이스에 접근
res = db.user.find() # user 컬렉션에 접근, 모든 데이터 불러오기
print(list(res))
```

> test.py를 실행시키면 `user` 컬렉션의 모든 문서가 출력되는 것을 확인할 수 있다. find 메소드는 몽고DB의 find 명령어와 동일하게 동작한다. 따라서 특정 조건에 부합하는 문서만을 얻고자 할 때에는 find 메소드 내에 쿼리를 넣어주면 된다. 예시는 다음과 같다.

```
res = db.user.find({'password': 1111})
```



##### 데이터 생성, 갱신, 삭제(CREATE, UPDATE, DELETE)

> Python에서 변수명은 Snake 명명법을 주로 사용하기 때문에, 몽고DB에서 사용하였던 명령어인 `insertOne`은 `insert_one`으로, `updateMany`는 `update_many` 등으로 매핑이 된다.



> ##### CREATE

```python
# 하나의 문서 생성
db.user.insert_one({"username": "kkk"})

# 여러 개의 문서 생성
docs = [{"username": "hehe"}, {"username": "imhappy"}]
db.user.insert_many(docs)
```



> ##### UPDATE

```python
filter = {'password': 1111}

# 하나의 문서 갱신
db.user.update_one(filter, {'$set': {"password": 1112}})

# 여러 개의 문서 갱신
db.user.update_many(filter, {'$set': {"password": 1112}})

# 하나의 문서 교체
db.user.replace_one(filter, {"replaced": True})
```



> ##### DELETE

```python
filter = {'accepted': True}

# 하나의 문서 삭제
db.user.delete_one(filter)

# 여러 개의 문서 삭제
db.user.delete_many(filter)

# 컬렉션 삭제
db.user.drop()

# 데이터베이스 삭제
client.drop_database('test')
```

