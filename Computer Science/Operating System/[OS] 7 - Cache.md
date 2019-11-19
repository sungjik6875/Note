### 캐시 메모리 (Cache Memory)

------

> 캐시 메모리는 CPU의 처리속도와 주기억장치의 접근 속도 차이를 줄이기 위해 사용하는 고속 Buffer Memory이다. 크기는 보통 수십 ~ 수백 KByte정도 된다.
>
> 캐시는 주기억장치와 CPU 사이에 위치하며, 자주 사용하는 프로그램과 데이터를 기억한다. 캐시 메모리는 메모리 계층 구조에서는 가장 빠른 소자로, 처리 속도가 CPU의 속도와 비슷할 정도의 빠른 속도를 갖고 있다. 따라서 캐시 메모리를 자주 사용할 수록 주기억장치를 접근하는 횟수가 줄어들게 되어 컴퓨터의 처리속도가 향상된다.
>
> 캐시 주소표는 검색시간을 단축시키기 위해 주로 연관기억장치를 사용한다. 





#### 지역성 (Locality)

------

> 캐시가 제 역할을 수행하기 위해서는 이후 CPU가 어떤 데이터를 원할 것인지 예측할 수 있어야 한다. 이는 캐시의 성능과 직결된다. 이때 CPU가 원하는 데이터가 캐시에 있을 경우 적중한다고 표현한다.
>
> 캐시의 적중율을 극대화하기 위해 데이터 지역성의 원리를 사용한다. 지역성의 원리는 프로그램의 모든 코드나 데이터가 균등하게 액세스되지 않는다는 특성을 전제로 한다. 이는 즉, CPU가 기억 장치 내의 정보를 고루 참조하는 것이 아니라, 특정 순간에 특정 부분의 정보를 집중적으로 참조한다는 의미이다.
>
> 지역성은 대표적으로 시간 지역성과 공간 지역성으로 나뉜다. 시간 지역성이란 최근에 참조된 주소의 내용이 다음에 다시 참조될 확률이 높은 것을 의미한다. 공간 지역성이란 참조된 주소화 인접한 주소의 내용이 다시 참조될 확률이 높은 것을 의미한다.





#### 캐싱 라인과 매핑 프로세스

------

##### 캐싱 라인 (Caching Line)

> 적중율 외에도 캐시가 제 성능을 발휘하기 위한 조건이 하나 더 있다. 캐시에 원하는 데이터가 있더라도, 캐시의 어느 곳에 저장되어 있는지를 알 수 있어야 한다. 만약 저장된 장소를 몰라 캐시의 모든 데이터를 순회해야 한다면 시간이 오래 걸릴 것이고, 이렇게 되면 캐시를 사용하는 이유가 없어진다.
>
> 이러한 이유로 캐시에서는 데이터를 저장 시 특정 자료구조를 사용하여 묶음으로 저장한다. 이를 캐싱 라인이라 한다. 캐시에서는 다양한 주소에 있는 데이터를 저장하게 된다. 따라서 캐시에 저장하는 데이터에는 데이터의 메모리 주소를 기록해둔 태그를 달아놓을 필요가 있다. 캐싱 라인은 이러한 태그들의 묶음을 의미한다. 

##### 매핑 프로세스 (Mapping Process)

> 캐시 메모리의 매핑 프로세스란 주기억장치로부터 캐시 메모리로 데이터를 전송하는 방법을 말한다. 캐싱 라인을 기준으로 전송이 이루어지며 다음의 세 가지 방법이 있다.

* Direct Mapping

> 주기억장치의 블록들이 지정된 한 개의 캐시 라인으로만 사상되는 매핑 방법이다. 간단하고 구현하는 비용이 적게드는 장점이 있지만 적중률이 낮아질 수 있다는 단점이 있다.

* Associative Mapping

> 직접 매핑 방식의 단점을 보완한다. 캐시 적중 검사가 모든 라인에 대해 병렬로 수행된다. 검사 시간이 길어지고 복잡해진다는 단점이 있다. 또한 구현 비용이 높다.

* Set-Associative Mapping

> 직접 매핑과 연관 매핑의 장점을 취한 방식이다.





#### 쓰기 정책

------

> 캐시에 저장되어 있는 데이터에 수정이 발생한 경우 수정된 내용을 주기억장치에 갱신하기 위해 시기와 방법을 결정하는 것을 말한다.

* Write Through

> 캐시에 쓰기 동작이 이루어질 때마다 캐시 메모리와 주기억장치의 내용을 동시에 갱신하므로 쓰기 동작에 걸리는 시간이 가장 길다. 이는 캐시에 비해 주기억장치나 보조기억장치에 데이터 기록에 소요되는 시간이 길기 때문이다. 이 때문에 성능이 떨어진다는 단점이 있다. 대신 데이터의 일관성을 유지할 수 있어 안정적이다.

* Write Back

> 캐시에 쓰기 동작이 이루어지는 동안은 캐시의 내용만이 갱신되고, 캐시의 내용이 캐시로부터 제거될 때 주기억 장치에 복사된다. 따라서 Write Through에 비하여좋은 성능을 보이지만 일관성이 떨어진다는 단점이 있다. 빠른 서비스를 요구하는 상황에서는 Write Back을 사용하는 것이 좋다.

* Write Once

> 캐시에 쓰기 동작이 이루어질 때 한번만 기록하고, 이후의 기록은 모두 무시된다.