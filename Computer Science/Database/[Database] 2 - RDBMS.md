### 관계형 데이터베이스 관리 시스템 (RDBMS)

------

> 데이터베이스에는 여러 종류의 모델이 있다. 그 중 가장 많이 사용되는 모델은 관계형 모델이다. 관계형 모델은 술어 논리와 집합론에 기반을 둔 데이터베이스 모델로, 개체로 이루어진 테이블과 테이블 사이의 관계로 묘사된다. 따라서 이를 개체관계 모델이라고도 한다.
>
> RDBMS는 이러한 관계형 모델을 바탕으로 데이터를 관리하는 시스템을 말한다. 대표적인 것으로 MySQL, PostgreSQL, Oracle 등이 있다.





#### SQL (Structured Query Language)

> SQL은 관계 대수와 관계 논리에 기반한, 데이터 질의어이다. RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어이다.
>
> SQL 문법의 종류는 다음 세가지로 크게 구분된다.



##### 데이터 정의 언어 (DDL, Data Definition Language)

> 테이블과 인덱스의 구조를 관리한다. CREATE, DROP, ALTER 등이 있다. CREATE는 테이블, 인덱스, 제약 조건등을 정의한다. DROP은 테이블을 삭제한다. ALTER는 테이블의 정의를 변경한다. 그 외에도 RENAME과 TRUNCATE가 있다.



##### 데이터 조작 언어 (DML, Data Manipulation Language)

> 데이터의 검색, 등록, 갱신, 삭제을 위해 사용된다. 각 목적에 사용되는 언어로 SELECT, INSERT, UPDATE, DELETE가 있다. 



##### 데이터 제어 언어 (DCL, Data Control Language)

> 데이터에 대한 접근을 제어하기 위해 사용된다. 주요 언어로 GRANT와 REVOKE가 있으며 각각 사용자에게 작업 수행 권한을 부여하거나 박탈할 때 사용한다.