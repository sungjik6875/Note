### HTTP, HTTPS

------

#### HTTP (HyperText Transfer Protocol)

------

> WWW 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. TCP나 UDP를 사용하며, 80번 포트를 사용한다. 
>
> HTTP는 클라이언트와 서버 사이에서 이루어지는 요청/응답 프로토콜이다. 예를 들면, 클라이언트인 웹 브라우저가 HTTP를 통하여 서버로부터 웹 페이지나 그림 정보를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달하게 된다. 이 정보가 모니터와 같은 출력 장치를 통해 사용자에게 나타나는 것이다.
>
> HTTP를 통해 전달되는 자료는 http:로 시작하는 URL(인터넷 주소)로 조회할 수 있다. 





#### ※ URL (Uniform Resource Locator, 파일식별자, 유일자원지시기)

------

> 네트워크 상에서 자원이 어디있는 지를 알려주기 위한 규약이다. 즉, 컴퓨터 네트워크와 검색 메커니즘에서 위치를 지정하는, 웹 리소스에 대한 참조이다. 흔히 웹 사이트 주소로 알고 있지만, URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있다. 그 주소에 접속하려면 해당 URL에 맞는 프로토콜을 알아야 하고, 그와 동일한 프로토콜로 접속해야 한다.
>
> 예를 들어, FTP 프로토콜인 경우에는 FTP 클라이언트를 이용해야 하고, HTTP인 경우에는 웹 브라우저를 이용해야 한다. 텔넷의 경우에는 텔넷 프로그램을 이용해서 접속해야 한다.





#### 요청 방식 (GET, POST)

------

> 둘 다 HTTP 프로토콜을 이용해서 서버에 무엇인가를 요청할 때 사용하는 방식이다. 하지만 둘의 특징을 제대로 이해하여 기술의 목적에 맞게 알맞은 용도에 사용해야 한다.

##### GET

> 우선 GET 방식은 요청하는 데이터가 HTTP Request Message의 Header 부분의 url에 담겨서 전송된다. 때문에 url 상에 `?` 뒤에 데이터가 붙어 request를 보내게 되는 것이다. 이러한 방식은 url이라는 공간에 담기기 때문에 전송할 수 있는 데이터의 크기가 제한적이다. 또 보안이 필요한 데이터에 대해서는 데이터가 그대로 url에 노출되므로 GET 방식은 적절하지 않다.
>
> GET은 서버에서 어떤 데이터를 가져와서 보여주는 용도로 사용된다. 또한 GET 방식의 요청은 브라우저에서 캐싱이 가능하다. 때문에 POST 방식으로 요청해야 할 것을 보내는 데이터의 크기가 작고, 보안적인 문제가 없다는 이유로 GET 방식으로 요청한다면 기존에 캐싱되었던 데이터가 응답될 가능성이 존재하므로 이를 유의해야 한다.

##### POST

> POST 방식의 request는 HTTP Message의 Body 부분에 데이터가 담겨서 전송된다. 때문에 바이너리 데이터를 요청하는 경우 POST 방식으로 보내야 하는 것처럼 데이터 크기가 GET 방식보다 크고, 직접 노출되지는 않으므로 보안면에서 낫다. 다만 GET과 비교해서 낫다는 것이지, 암호화 되지 않는 이상 POST 방식 역시 보안에 취약하다.
>
> POST 방식은 주로 서버의 값이나 상태를 변경하기 위해서 또는 추가하기 위해서 사용된다.





#### 메시지 포맷

------

> 클라이언트와 서버 사이의 소통은 평문(ASCII) 메시지로 이루어진다. 클라이언트는 서버로 요청메시지를 전달하며 서버는 응답메시지를 보낸다.

##### ...





#### HTTP의 문제점과 HTTPS를 통한 해결

------

> HTTP의 가장 큰 문제는 보안에 취약하다는 점이다. 보안에 취약한 원인으로 다음의 세 가지를 꼽을 수 있다. 다음의 세 가지는 다른 암호화되지 않은 프로토콜들이 공통적으로 갖고 있는 문제점이기도 하다.

* 평문 통신이므로 도청이 가능하다.
* 통신 상대를 확인하지 않으므로 위장이 가능하다.
* 완전성을 증명할 수 없기 때문의 내용 변조가 가능하다.

> 각 문제점에 대한 상세하게 살펴보면 다음과 같다.



##### 평문 통신이므로 도청이 가능하다

> TCP/IP 구조의 통신은 통신 경로 상에서 패킷을 수집함으로써 도청하는 것이 가능하다. 따라서 평문으로 통신하는 경우 메시지의 의미를 파악하는 것이 가능하다. 이와 같은 이유로 반드시 내용을 암호화해서 통신해야 한다. 암호화의 방식은 대상에 따라 다음의 두 가지 방법으로 나뉜다.

> ##### 통신 자체를 암호화
>
> SSL(Secure Socket Layer)과 TLS(Transport Layer Security)라는 프로토콜을 조합함으로써 HTTP의 통신 내용을 암호화할 수 있다. SSL을 조합한 HTTP를 HTTPS(HTTP Secure 또는 HTTP over SSL)이라고 부른다. 

> ##### 콘텐츠를 암호화
>
> 말 그대로 HTTP를 사용해서 운반하는 내용인, HTTP 메시지에 포함되는 콘텐츠만 암호화하는 것이다. 암호화해서 전송하면 받은 측에서는 그 암호를 해독하여 출력하는 처리가 필요하다.



##### 통신 상대를 확인하지 않기 때문에 위장이 가능하다

> HTTP 기반의 통신에서는 상대가 누구인지 확인하는 메커니즘이 없다. 따라서 누구든지 요청을 보낼 수 있으며 IP 주소나 포트 등에서 그 웹 서버에 액세스 제한이 없는 경우 요청이 오면 상대가 누구든 응답을 반환한다. 이러한 특징은 여러 문제점을 유발한다.
>
> 먼저 클라이언트의 입장에서는 요청을 보낸 곳이 원래 의도한 응답을 보내야 하는 웹 서버인지 알 수 없다. 마찬가지로 서버의 입장에서도 응답을 반환한 곳의 클라이언트가 원래 의도한 요청을 보낸 클라이언트인지를 알 수 없다. 통신하고 있는 상대의 신뢰할 만한 상대인지 알 수 없다.
>
> 이러한 문제는 특히 서버 측의 입장에서 심각한 위협으로 다가온다. 서버 측에서는 누가 요청을 보냈는지 확인할 수 없으며, 의미없는 요청도 수신하게 된다. 따라서 Dos 공격을 방지할 수 없다. 이러한 문제를 해결하기 위해 상대를 확인하는 수단이 필요한데, 이 수단으로 SSL을 활용한다.

> ##### SSL 증명서를 통한 인증
>
> SSL은 상대를 확인하는 수단으로 증명서를 제공한다. 증명서는 신뢰할 수 있는 제 3자 기관에 의해 발행되므로 서버나 클라이언트가 실재하는 사실을 증명한다. 이 증명서를 이용함으로써 클라이언트는 통신 상대가 내가 통신하고자 하는 서버임을 알 수 있고, 따라서 클라이언트는 개인 정보 누설 등의 위험으로부터 회피할 수 있다. 또한 클라이언트 역시 증명서를 웹에서 자신의 인증 수단으로써 활용할 수 있다.



##### 완전성을 증명할 수 없으므로 변조가 가능하다.

> 여기서 완전성이란 정보의 정확성을 의미한다. 서버 또는 클라이언트에서 수신한 내용이 송신 측에서 보낸 내용과 일치한다라는 것을 보장할 수 없는 것이다. 요청이나 응답이 발신된 후에 상대가 수신하는 사이에 누군가에 의해 변조되더라도 이 사실을 알 수 없다. 이렇게 중간에 내용을 가로채서 변조하는 공격을 중간자 공격(Man-in-the-middle)이라고 한다.

> ##### SSL을 활용한 완전성 보장
>
> MD5, SHA-1 등의 해시값을 확인하는 방법과 파일의 디지털 서명을 확인하는 방법이 존재하지만 확실히 확인할 수 있는 것은 아니다. 확실히 방지하기에는 HTTPS를 사용해야 한다. 이는 SSL이 인증, 암호화, 다이제스트의 기능을 제공하기 때문이다.

##### ※ 다이제스트

> 다이제스트는 암호화 해시 함수를 통해 사용자 정보가 암호화된 값을 말한다.





#### HTTPS (HTTP Secured)

------

> HTTP에 암호화와 인증, 그리고 완전성 보호를 더한 것이 HTTPS이다. HTTPS는 SSL의 껍질을 덮어쓴 HTTP라고 할 수 있다. 즉, HTTPS는 새로운 애플리케이션 계층의 프로토콜은 아니다. HTTP 통신을 하는 소켓 부분을 SSL이나 TLS라는 프로토콜로 대체하는 것 뿐이다. HTTP는 원래 TCP와 직접 통신하였으나 HTTPS에서 HTTP는 SSL과 통신하고 SSL이 TCP와 통신하게 된다. SSL을 사용한 HTTPS는 암호화와 증명서, 안전성 보호를 이용할 수 있게 된다. SSL을 사용한 HTTPS는 암호화와 증명서, 안전성 보호를 이용할 수 있게 된다.
>
> HTTPS의 SSL에서는 공통키 암호화 방식과 공개키 암호화 방식을 혼합한 하이브리드 암호 시스템을 사용한다. 공통키를 공개키 암호화 방식으로 교환한 다음에 다음부터의 통신은 공통키 암호를 사용하는 방식이다.



##### HTTPS의 단점

> 대부분의 솔루션에는 장점이 있는 반면, 해당 장점을 유지하기 위한 비용 역시 존재한다. HTTPS의 암호화 통신은 CPU나 메모리 등이 리소스가 많이 필요하다. 통신마다 암호화를 하게 되면 많은 리소스를 소비하게 된다. 따라서 서버 한 대당 처리할 수 있는 요청의 수가 줄어들게 된다. 그렇기 때문에 보안이 필요한 경우에만 HTTPS에 의한 암호화 통신을 사용한다.
>
> 그러나 하드웨어의 성능이 충분히 발전되면서 현재는 HTTPS의 암호화 비용이 큰 단점으로 부각되지 않는다.







