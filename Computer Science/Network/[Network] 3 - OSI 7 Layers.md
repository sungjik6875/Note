### OSI 7 Layers (Open Systems Interconnection 7 Layers)

------

> OSI 모형이란 국제표준화기구에서 개발한 모델로, 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다. 일반적으로 OSI 7 계층 모형이라고 한다.
>
> OSI 7 계층은 프로토콜을 기능 별로 나눈 것이다. 각 계층은 하위 계층의 기능만을 이용하고, 상위 계층에게 기능을 제공한다. 프로토콜 스택 은 이러한 계층들로 구성되는 프로토콜 시스템을 말한다. 프로토콜 스택은 하드웨어나 소프트웨어 혹은 둘의 혼합으로 구현될 수 있다. 일반적으로 하위 계층들은 하드웨어로, 상위 계층들은 소프트웨어로 구현된다.
>
> 이렇게 7 계층으로 나눈 이유는 통신이 일어나는 과정을 단계별로 파악할 수 있기 때문이다. 따라서 통신의 흐름을 한눈에 알아보기 쉽고, 사람들이 이해하기 쉽고, 7단계 중 특정한 곳에 이상이 생기면 다른 단계의 장비 및 소프트웨어를 건들이지 않고도 이상이 생긴 단계만 고칠 수 있기 때문이다.
>
> OSI 7 계층의 참고 이미지는 다음과 같다. 해당 이미지는 OSI 7 계층과 각 계층에 대응하는 TCP?IP의 4 계층에 대한 이미지이다.

![example_1](./image/network_3_1.png)

> 각 계층에 대한 설명은 다음과 같다.





#### 1 계층 - 물리 계층 (Physical Layer)

------

> 이 계층에서는 주로 전기적, 기계적, 기능적인 특성을 활용하여 통신 케이블로 데이터를 전송하게 된다. 이 계층에서 사용되는 통신 단위는 비트이다. 이 계층에서는 단지 데이터를 전달하기만 한다. 전송하려는 데이터가 무엇인지, 어떤 에러가 있는지 등에는 전혀 신경쓰지 않는다. 단지 데이터를 전기적인 신호로 변환해서 주고받는 기능만 할 뿐이다.
>
> 이 계층에 속하는 대표적인 장비는 통신 케이블, 리피터, 허브 등이 있다.





#### 2 계층 - 데이터링크 계층 (Datalink Layer)

------

> 물리 계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 신뢰성있고 안전한 정보의 전달을 수행할 수 있도록 도와주는 역할을 한다. 따라서 통신에서의 오류도 찾아주고 오류 시 재전송의 기능을 담당한다. 이 계층에서는 MAC 주소를 갖고 통신한다. 데이터링크 계층이 대표적인 예로 이더넷이 있으며, 대표적인 장비로는 MAC 주소를 사용하는 브리지, 스위치 등이 있다. 그리고 데이터링크 계층에서 사용되는 전송 단위를 프레임이라 한다.





#### 3 계층 - 네트워크 계층 (Network Layer)

------

> 이 계층에서 가장 중요한 기능은 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능인 라우팅이다. 여기에 사용되는 프로토콜의 종류도 다양하고, 라우팅하는 기술도 다양하다.
>
> 라우팅이란 통신 경로를 선택하고, 주소를 정하고, 경로에 따라 패킷을 전달해주는 것을 말한다. 라우팅을 위한 장비인 라우터가 사용된다. 따라서 통신 경로 상의 각 노드를 거칠 때마다 경로를 찾아주는 역할을 한다.
>
> 그 외에도 네트워크 계층은 오류와 흐름 제어, 세그멘테이션, 인터네트워킹 등의 기능을 수행한다. 인터네트워킹이란 네트워크와 네트워크 사이의 정보 통신을 가능하게 하여 인터넷이 가능하게 만드는기능이다. 논리적인 주소 구조인 IP 주소를 사용한다. 이 계층에서 사용되는 데이터 단위는 패킷이다.





#### 4 계층 - 전송 계층 (Transport Layer)

------

> 통신을 활성화하기 위한 계층으로, 보통 TCP를 사용한다. 포트를 열어서 응용프로그램들이 전송을 할 수 있도록 한다. 이 계층은 양 종단 간의 사용자들이 신뢰성있는 데이터를 주고 받을 수 있도록 해주어, 상위 계층에서 데이터 전달의 유효성이나 효율성을 생각하지 않도록 해준다. 시퀀스 넘버 기반의 오류 제어 방식을 사용한다. 패킷들의 전송이 유효한지 확인하고 전송 실패한 패킷들을 재전송하는 역할 등을 담당한다.
>
> 전송 계층은 종단간 통신을 다루는 최하위 계층이기도 하다. 효율적 데이터 전송, 오류 검출 및 복구, 흐름제어, 중복 검사 등을 수행한다. 이 계층에서 사용되는 데이터 단위는 세그먼트이다.





#### 5 계층 - 세션 계층 (Session Layer)

------

> 데이터가 통신하기 위한 논리적인 연결을 말한다. 세션 계층은 하위 4개의 계층과는 달리 애플리케이션의 관점에서 봐야한다. 세션 설정, 유지, 전송 중단시 복구 등의 기능이 있다. 세션 계층은 양 끝단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공한다. 동시 송수신 방식(duplex), 반이중 방식(half-duplex), 전이중 방식(Full duplex)의 통신과 함께 체크 포인팅과 유휴, 종료, 다시 시작 과정등을 수행한다. 이 계층은 TCP/IP 세션을 만들고 없애는 책임을 진다.





#### 6 계층 - 표현 계층 (Presentation Layer)

------

> 데이터 표현이 상이한 응용 프로세스의 독립성을 제공하고, 암호화 한다. 표현 계층은 코드 간의 번역을 담당하여 사용자 시스템에서 데이터의 형식상 차이를 다루는 부담을 응용 계층으로부터 덜어준다. MIME 인코딩이나 암호화 등의 동작이 이 계층에서 이루어진다. 예를 들어 EBCDIC로 인코딩된 문서 파일을 ASCII로 인코딩된 파일로 바꿔주거나 해당 데이터의 확장자를 구분하는 것 등이 표현 계층의 몫이다.





#### 7 계층 - 응용 계층 (Application Layer)

------

> 최종 목적지로서 HTTP, FTP, SMTP, POP3, IMAP, Telnet 등과 같은 프로토콜이 있다. 해당 통신 패킷들은 방금 나열한 프로토콜에 의해 모두 처리되며 우리가 사용하는 브라우저나, 메일 프로그램은 프로토콜을 보다 쉽게 사용하게 해주는 응용프로그램이다. 한마디로 모든 통신의 양 끝단은 HTTP와 같은 프로토콜이지 응용 프로그램이 아니다.
>
> 응용 계층은 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행한다. 일반적인 응용 서비스는 관련된 응용 프로세스들 사이의 전환을 제공한다.