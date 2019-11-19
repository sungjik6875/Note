### HTTP / 2

------

> 2015년에 IETF(Internet Engineering Task Force)에서 출시된 HTTP의 두 번째 버전이다.



#### HTTP / 2의 주요 목표

------

* 프로토콜 협상 메커니즘 : 프로토콜 선택 기능 지원 (HTTP / 1.1, HTTP / 2 등)
* HTTP / 1.1과의 높은 수준의 호환성 : 메소드, 상태코드, URI, 헤더 필드
* 페이지 로딩 속도 향상
* 요청 헤더 압축
* 이진 프로토콜
* HTTP / 2 서버 푸시
* 단일 TCP 연결을 통한 요청 및 응답의 다중화
* 스트림 우선순위
* 파이프라인이 요구됨
* HOL 패키지 차단





#### HTTP / 2의 특징

------

##### 요청 및 응답 다중화

> 참고 이미지는 다음과 같다.

![example_1](./image/network_6_1.png)

> 또 다른 참고 이미지. HTTP 1.1과의 차이점을 보여준다.

![example_2](./image/network_6_2.png)

> HTTP / 1.1에서는 한번에 커넥션을 맺고 데이터 요청과 응답이 반복된다. 그러나 HTTP / 2에서는 스트림을 통해 하나의 커넥션으로 동시에 여러개의 데이터를 주고 받을 수 있다. 응답은 순서에 상관없이 스트림으로 주고 받는다.  이는 추가 왕복 시간(RTT)를 줄어들게 하므로 최적화 없이 웹 사이트를 더 빠르게 로드할 수 있다.
>
> 이렇게 하여 HTTP / 2에서는 HTTP / 1.x에서의 이미지 스프라이팅, 도메인 샤딩 같은 방식을 사용하지 않아도 된다.



##### 스트림 우선 순위

> 참고 이미지는 다음과 같다.

![example_3](./image/network_6_3.png)

> 위와 같이 스트림의 프레임으로 다중화가 가능해짐과 동시에 클라이언트와 서버의 통신 순서를 위해 각 스트림에는 1~256 사이의 정수 가중치가 할당되어 스트림 처리 우선순위를 정한다. 우선순위는 CPU, 메모리 등의 리소스의 할당을 제어할 때 사용될 뿐 이 순서로 서버에서 처리되는 것을 의미하는 것은 아니다.
>
> 예를 들어 클라이언트가 요청한 HTML 문서 안에 CSS 파일 1개와 image파일 2개가 존재하고 이를 클라이언트가 각각 요청하고 난 후 image파일보다 CSS파일의 수신이 늦어지는 경우 브라우저의 렌더링이 늦어지는 문제가 발생하는데 HTTP / 2의 경우 리소스 간의 의존관계(우선순위)를 설정하여 이런 문제를 해결한다.



##### 서버 푸시

> 참고 이미지는 다음과 같다.

![example_4](./image/network_6_4.png)

> 서버 푸시 기능을 활용해 서버는 클라이언트의 요청에 대해 요청하지도 않은 리소스를 보내줄 수 있다. 서버 푸시는 현재에 클라이언트가 요구하는 자원이 아니더라도 미래의 요구가 예상되는 추가 캐시 가능한 정보를 클라이언트에 보낼 수 있다. 이는 클라이언트의 요청을 최소화하므로 성능 향상을 이끌어낼 수 있다.
>
> 예를 들어, 클라이언트가 자원 X를 요청하고 자원 Y가 요청한 파일에서 참조되는 것이 히해되는 경우 서버는 적절한 클라이언트의 요청을 기다리는 대신에 X에서 Y를 밀어 선택할 수 있다. 
>
> 서버 푸시 기능의 장점은 다음과 같다.

* 클라이언트는 푸시된 리소스를 캐시에 저장한다.
* 클라이언트는 이렇게 캐시된 리소스를 다른 페이지에 걸쳐 재사용할 수 있다.
* 푸시된 자원을 다중화할 수 있으며, 우선순위를 지정하는 것도 가능하다.
* 클라이언트는 필요에 따라 푸시된 자원을 거부하거나 서버 푸시를 비활성화 할 수 있다. 이는 클라이언트의 캐시 저장소를 효과적으로 사용하기 위함이다.
* 클라이언트는 동시에 다중화되는 푸시 스트림의 수를 제한할 수 있다. 



##### 헤더 압축

> 참고 이미지는 다음과 같다.

![example_5](./image/network_6_5.png)

![example_6](./image/network_6_6.png)

> HTTP / 2는 많은 수의 여분의 헤더 프레임을 압축한다. HPACK 사양을 헤더 압축에 대한 간단하고 안전한 방법으로 사용한다. 클라이언트와 서버는 이전 클라이언트와 서버 요청에 사용된 헤더 목록을 유지 관리한다. HPACK은 서버로 전송되기 전에 각 헤더의 개별값을 압축한 다음 이전에 전송된 헤더 값 목록에서 인코딩된 정보를 조회하여 전체 헤더 정보를 재구성한다.
>
> HTTP /1.x 에서는 클라이언트가 두번의 요청을 보낸다고 할 때 두 개의 요청에 헤더에 중복값이 존재해도 그냥 중복 전송하였다. 그런데 HTTP / 2에서는 헤더에 중복값이 존재하는 경우 Static / Dynamic Header Table 개념을 사용하여 중복 헤더를 검출하고 중복된 헤더는 인덱스 값만 전송하고 중복되지 않은 헤더 정보의 값은 Huffman Encoding 기법으로 인코딩 처리하여 전송한다.



##### 이진 프로토콜

> 