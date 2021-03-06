### Monolithic Architecture

------

> Monolithic이란 '단단지 하나로 짜여져 있는' 이라는 의미를 갖는다. 따라서 이러한 설계 방식은 서비스의 모든 부분이 하나의 덩어리로 묶여있음을 의미한다. Monolithic하게 설계된 온라인 서점 서비스를 3계층형 시스템으로 분류한 예시를 들자면 다음과 같다.

![example_1](./image/architecture_2_1.png)

> 이러한 설계 구조는 단순하며 운영 및 관리 또한 어렵지 않다. 사실 서비스가 충분히 성장하지 않아 기능이 단순하다면 위와 같이 설계해도 무방하다. 만약 서비스가 충분히 성장하여 서비스의 기능이 복잡해진다면 어떻게 될까? 아래의 예시를 보자.

![example_1](./image/architecture_2_2.png)

> 전보다 서비스의 규모가 커지면서 복잡해진 것을 볼 수 있다. 이렇게 서비스가 성장하게 되면서 여러 이슈가 생기게 된다. 그 이슈는 다음과 같다.



##### 단점

> ##### 빌드 시간, 테스트 시간이 길어진다.
>
> 처음에는 전혀 문제가 되지 않던 빌드와 테스트가 서비스가 커짐에 따라 점점 오래 걸린다. 이는 CI / CD가 강조되는 현재의 추세에 치명적인 문제로 작용할 수 있다.

> ##### 개발 언어에 종속적이다.
>
> 상황에 맞게 기술을 유연하게 적용하지 못한다. Java + Spring으로 구현이 되어 있다면, 선택의 여지 없이 이후 추가될 기능도 Java + Spring으로 구현해야 한다.

> ##### 선택적 확장이 불가능하다.
>
> 이벤트 서비스와 주문 서비스의 사용률이 90 : 10이라 하더라도, 원하는 서비스만 확장할 수 없고, 프로젝트 하나를 통째로 확장해야 한다.

> ##### 하나의 서비스가 모든 서비스에 영향을 준다.
>
> 하나의 서비스에 문제가 생기면 Monolithic은 그 구조상 모든 서비스에 영향을 줄 수 밖에 없다. 이벤트 서비스에 트래픽이 몰려 해당 서버가 죽게 된다고 가정해보자. Monolithic 구조에서는 하나의 서버에 모든 서비스가 있기 때문에 하나의 서비스의 트래픽 폭주로 인해 다른 서비스도 마비되는 상황이 온다.

> 이처럼 서비스의 규모가 커지면 Monolithic 구조는 위와 같은 문제점을 낳는다. 이러한 문제를 해결하기 위해 등장한 구조가 MSA이다.





### Microservice Architecture (MSA)

------

> MSA란 전체 서비스를 나누어 작은 서비스의 조합으로 구축하는 방식을 말한다. MSA의 구조에 대한 참고 이미지는 다음과 같다.

![example_3](./image/architecture_2_3.png)

> 3계층형 시스템의 특성 상 가로 방향으로 구분되어 있던 경계가 MSA에서 서비스의 기능에 따라 세로로도 구분이 된다. 기존에는 하나의 프로젝트가 프레젠테이션, 비즈니스, 데이터베이스 계층으로 구분되었다. MSA에서는 서비스가 하나의 프로젝트로써, 각각 3개의 계층으로 구분된다.
>
> 따라서 이제 서비스 별로 별도의 서버를 갖는다. 이제 어떤 서비스에 문제가 생겨도 다른 서비스에 영향을 주지 않는다. 이러한 점을 비롯하여 MSA 방식이 갖는 이점은 다음과 같다.



##### 장점

> ##### 빌드 및 테스트 시간을 단축시킬 수 있다.
>
> 30개의 서비스를 가진 Monolithic의 빌드 시간이 30분이었다면, MSA는 각각의 서비스를 1분 만에 빌드할 수 있다. 따라서 CI / CD를 추구하는 기업에서는 빌드와 배포를 빈번하게 진행하므로 MSA가 적합한 모델이 된다.

> ##### 폴리글랏 아키텍처 구성이 가능하다.
>
> 상황에 맞게 기술을 유연하게 적용할 수 있다. 예를 들어 TPS(시간당 트랜잭션)가 높고, 읽기 작업이 많은 서비스에서는 Node + Redis로 구현을 하고, 트랜잭션 및 안정성이 중요한 서비스에서는 Spring + RDB를 적용할 수 있다. 

![example_4](./image/architecture_2_4.png)

> ##### 탄력적이고 선택적인 확장이 가능하다.
>
> MSA는 작은 단위의 작업이라서 필요한 서비스만을 선택적으로 확장할 수 있다. 만약, 주문 서비스와 이벤트 서비스의 사용률이 90 : 10 이라면 이벤트 서비스만을 선택적으로 확장할 수 있다.

> ##### 하나의 서비스가 다른 서비스에 영향을 주지 않는다.
>
> 이는 위에서 언급한 장점으로, 하나의 서비스가 기능이 마비되어도 다른 서비스에는 영향이 가지 않는다. 물론 죽은 서비스를 다른 서비스에서 호출하게 될 경우 문제가 있다. 이는 Circuit Breaker에서 알아보도록 한다.



##### 단점

> 그러나 서비스를 분리시킴으로써 얻는 문제점 또는 단점도 있다. 그러한 점들은 다음과 같다.

> ##### 성능 상의 이슈가 있다.
>
> Monolithic은 다른 서비스 간의 상호작용이 필요할 시에는 Method 호출을 이용한다. 즉 이러한 행위는 메모리 안에서 일어난다. 그런데 MSA 에서는 각 서비스가 별도의 서버로 분리되어 있으므로 HTTP를 통해 통신을 한다. 이는 즉, Network I/O를 통해 이루어지는 서버 간의 통신을 통해서만 서비스 간의 상호작용이 가능함을 의미한다.

> ##### 트랜잭션이 불편하다.
>
> Spring에서는 @Transactional이라는 어노테이션만 달아주어도 자동으로 트랜잭션 처리를 해준다. 그러나 서비스가 각각 나뉘게 되면 불편함이 따른다. MSA에서는 서비스 간에 Global 트랜잭션이 일어나는 상황보다는 Local 트랜잭션이 주로 이루어지게 경계를 나누고, 불가피하게 서비스 간의 Global 트랜잭션이 필요하면 이에 관련된 로직을 추가한다.

> ##### 관리 포인트가 늘어난다.
>
> Monolithic은 간단한 경우 애플리케이션 서버와 데이터베이스 서버 두개를 관리하면 된다. 그런데 MSA에서는 기본적으로 서비스의 수 * 인스턴스 만큼의 서버가 존재한다. 서버의 수가 늘어난 만큼 로깅, 모니터링, 배포, 테스트, 클라우드 환경에서의 관리가 부담스럽다. 이러한 문제는 관리에 들어가는 비용을 줄이기 위해 자동화와 간단하게 모니터링할 수 있는 환경을 권장한다.