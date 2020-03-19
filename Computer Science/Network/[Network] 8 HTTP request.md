## HTTP Request

클라이언트가 서버로 보내는 요청을 의미하며, HTTP에서의 요청 메시지는 다음과 같은 형식을 갖고 있다.

```
GET /index.html HTTP/1.1
Host: developer.mozilla.org
...
```

첫 줄은 HTTP Method, URL 경로, HTTP 버전에 대한 정보를 담고 있다. 그 밑으로는 헤더 정보들이 위치한다. 



### HTTP Request Header

------

To Do..



### HTTP Request Method

------

HTTP는 요청 메서드를 정의함으로써, URL로 명시된 리소스에 어떤 행동을 수행할 것인지에 대한 정보를 명시한다. 메소드에는 다음과 같은 것들이 있다.



##### GET

> 서버로부터 특정한 리소스를 가져오도록 요청할 때 사용된다(**READ**). GET 요청은 반드시 데이터를 가져오는 경우에만 사용해야 한다. GET 메소드는 다음과 같은 특성을 갖는다. POST와 더불어 HTML 양식에서 사용이 가능하다.

* 요청에 본문이 존재하지 않는다.
* 성공적인 응답에는 본문이 존재한다.
* 안전하다.
* 멱등하다.
* 캐시 가능하다.



##### HEAD

> 특정 리소스를 GET 메서드로 요청했을 때 돌아올 헤더를 요청한다. 따라서 GET 방식과 동일하지만, 응답에 body가 포함되지 않는다는 점에서 GET과 차이가 있다.
>
> 특징은 다음과 같다.

* 요청에 본문이 존재하지 않는다.
* 성공적인 응답에 본문이 존재하지 않는다.
* 안전하다.
* 멱등하다.
* 캐시 가능하다.



##### POST

> 특정한 리소스에 엔티티를 제출하는 경우에 사용된다. 일반적으로 서버가 새로운 자원을 생성하도록 요청한다(**CREATE**). 따라서 이러한 동작은 서버의 상태 변화나 부작용을 일으킬 수 있다. 요청 시 본문의 컨텐츠 유형은 Content-Type 헤더로 나타낸다.
>
> 예시는 다음과 같다.

```
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

> POST는 다음과 같은 특성을 갖는다.

* 요청에 본문이 존재한다.
* 성공적인 응답에 본문이 존재한다.
* 안전하지 않다.
* 멱등하지 않다.
* 조건에 따라 캐시가 가능하다.



##### PUT

> 요청 시 페이로드를 사용하여 서버가 새로운 리소스를 생성하거나, URI로 명시한 대상 리소스를 대체하도록 요청한다. 일반적으로는 리소스의 정보를 갱신하는 용도로 사용된다(**UPDATE**).
>
> PUT은 POST와 다르게 멱등성을 갖는다. PUT은 동일한 요청을 여러번 연속으로 보내도 부수 효과를 유발하지 않는다.
>
> 예시는 다음과 같다.

```
# 요청
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

```
# 응답 - 성공적으로 생성됨
HTTP/1.1 201 Created
Content-Location: /new.html

# 응답 - 성공적으로 수정됨
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

> PUT의 특성은 다음과 같다.

* 요청에 본문이 존재한다.
* 성공적인 응답에는 본문이 존재하지 않는다.
* 안전하다.
* 멱등하다.
* 캐시가 불가능하다.



##### DELETE

> 요청한 리소스를 서버에서 삭제하는 요청을 보낼 때 사용된다(**DELETE**). DELETE 메소드가 성공적으로 적용되는 경우 서버는 다음과 같은 응답 코드를 사용할 수 있다.

* 200 (OK) : 요청이 수행되었으며, 응답 메시지가 status 정보를 포함하고 있음.
* 202 (Accepted) : 요청이 받아들여졌으나, 아직 수행되지 않음.
* 204 (No Content) : 요청이 수행되었으며, 더 표시할 정보가 없음.

> DELETE는 다음과 같은 특성을 갖는다.

* 요청에 본문이 존재하지 않는다.
* 성공적인 응답에는 본문이 존재하지 않는다.
* 안전하지 않다.
* 멱등하다.
* 캐시가 불가능하다.



##### PATCH

> 리소스를 부분적으로 수정하고자 할 때 사용된다(**UPDATE**). PUT이 리소스를 완전히 교체하거나 또는 모든 필드를 초기화하는 의미를 갖는다면, PATCH는 리소스를 부분적으로 수정하는 작업을 의미한다. 따라서 PATCH는 PUT과 달리 멱등성을 보장할 수 없다. 동일한 PATCH 요청이라도 반복에 따라 리소스의 상태가 다를 수 있다. 
>
> 예시는 다음과 같다.

```
# 요청
PATCH /file.txt HTTP/1.1 
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

```
# 응답 - 유의미한 정보가 없는 경우
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

> 성공적인 응답은 2xx 상태 코드를 통해 확인 가능하다. 위 예시에서는 유의미한 정보가 없으므로 204 상태 코드가 사용되었다. 반면 상태코드가 200인 응답에는 body에 유의미한 정보가 포함되어 있음을 유추할 수 있다.

> PATCH는 다음과 같은 특성을 갖는다.

* 요청에 본문이 존재한다.
* 성공적인 응답에 본문이 존재한다.
* 안전하지 않다.
* 멱등하지 않다.
* 캐시가 불가능하다.



##### OPTIONS

> 어떤 리소스에 대해 웹 서버로부터 지원되는 메소드의 종류를 비롯한 통신 옵션 등을 확인하고자 할 때 사용한다. 예시 요청 및 응답은 다음과 같다.

```
# 요청
OPTIONS /echo/options/ HTTP/1.1
Host: reqbin.com
```

```
# 응답
HTTP/1.1 200 OK
Allow: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
Access-Control-Allow-Origin: https://reqbin.com
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
Access-Control-Allow-Headers: Content-Type
```

> 응답 헤더의 Allow를 통해 대상 리소스에 대해 요청 가능한 메소드를 확인할 수 있다.
>
> OPTIONS는 다음과 같은 특성을 갖는다.

* 요청에 본문이 존재하지 않는다.
* 성공적인 응답에 본문이 존재한다.
* 안전하다.
* 멱등하다.
* 캐시가 불가능하다.



> ##### Preflighted requests in CORS
>
> CORS의 상황에서는 클라이언트가 실제 요청을 보내기 전에 Preflight 요청을 서버에게 보낸다. 이는 해당 요청이 허용되는 지의 여부를 확인하기 위함이다. 클라이언트는 Preflight 요청에 실제 요청 시 어떤 메소드와 헤더 등을 사용할 것인지에 대한 정보를 담아 서버에게 보낸다. 서버는 이 요청에 대해 허용되는 method, 허용되는 헤더, 쿠키 허용 여부 등의 정보를 클라이언트에게 보낸다. 실제 보낼 요청의 옵션이 허용되는 조건을 충족한다면, 클라이언트는 실제 요청을 서버에게 보낸다.
>
> Preflight 요청은 OPTIONS 메소드로 진행된다. 예시 요청 및 응답은 다음과 같다.

```
# Preflight 요청
OPTIONS /resources/post-here/ HTTP/1.1 
Host: bar.other 
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 
Accept-Language: en-us,en;q=0.5 
Accept-Encoding: gzip,deflate 
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7 
Connection: keep-alive 
Origin: http://foo.example 
Access-Control-Request-Method: POST 
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

> `Access-Control-Request-Method` 에는 실제 요청시 사용할 메소드, `Access-Control-Request-Headers` 에는 실제 요청에 담길 헤더에 대한 정보를 담고 있다.

```
# 응답
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT 
Server: Apache/2.0.61 (Unix) 
Access-Control-Allow-Origin: http://foo.example 
Access-Control-Allow-Methods: POST, GET, OPTIONS 
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type 
Access-Control-Max-Age: 86400 
Vary: Accept-Encoding, Origin 
Content-Encoding: gzip 
Content-Length: 0 
Keep-Alive: timeout=2, max=100 
Connection: Keep-Alive 
Content-Type: text/plain
```

> 서버는 이에 대한 응답으로 해당 리소스에 대해 허용되는 메소드, 헤더 등을 `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` 에 담아 보낸다.



##### CONNECT

> 웹 서버에 프록시 기능을 요청하기 위해 사용한다. 프록시 서버는 클라이언트와 서버의 통신을 중개하는 역할을 한다.



##### TRACE

> 원격 서버에서 루프백 메시지를 호출하기 위해 사용된다. 따라서 루프백(loop-back) 메시지를 테스트할 때 사용한다. 루프백이란 전기 신호의 라우팅, 디지털 데이터 스트림 등이 의도적인 가공이나 수정 없이 원래의 장치나 장비로 되돌아가는 것을 말한다. 이러한 테스트를 하는 이유는 클라이언트에서 보낸 요청이 최종적으로 서버에게 도달하는 과정에서 메시지가 변조될 가능성이 있기 때문이다.
>
> TRACE 메소드는 보안 공격의 목적으로 악용되는 경우가 있어, 서버는 이 메소드를 지원하지 않을 수 있다. (XST)





#### Safe, Idempotent, Cacheable

------

위에서 각 메소드들의 특성을 설명할 때 안전하다, 멱등하다, 캐시 가능하다 등의 표현이 있었다. 이 표현들은 어떤 의미일까?



##### 안전함(Safe)

> HTTP 메소드가 안전하다는 것은, 해당 메소드가 서버의 상태를 변경하지 않는 것을 의미한다. Read-Only 동작을 요청하는 GET, HEAD, OPTIONS 메소드는 안전한 메소드이다. 안전한 메소드는 멱등성을 갖는다. 그러나 멱등성을 갖는 메소드가 안전하다고 보장할 수는 없다. PUT, DELETE는 멱등성을 갖지만 안전하지 않다.
>
> 그런데 안전한 메소드를 요청하는 경우에도 서버의 상태가 변할 수 있다. 예를 들면 로그나 통계 기록 등의 변화를 말한다. 그렇다면 안전하다고 표현한 메소드를 여전히 안전하다고 표현할 수 있을까? 사실 로그나 통계 기록의 변화는 해당 메소드가 요청한 것이 아니다. 따라서 안전하다고 표현할 수 있다.



##### 멱등성(Idempotent)

> 수학에서의 멱등성이란, 어떤 연산이 여러번 적용하더라도 결과가 달라지지 않는 연산의 성질을 의미한다. 간략히 표현하면 다음과 같다.

```
f(f(x)) = f(x)
```

> HTTP 메소드에서 멱등성이란, 동일한 요청을 서버에게 한 번 보내는 것과 여러 번 보내는 것이 동일한 효과를 지니면서, 서버의 상태도 동일한 경우에 해당 메소드가 멱등성을 갖고 있다고 말한다. 
>
> 올바르게 구현된 경우 GET, HEAD, PUT, DELETE 메소드는 멱등성을 갖는다. 반면POST, PATCH는 멱등성을 보장하지 않는다. 또한 모든 안전한 메소드는 멱등성도 갖는다.



##### 캐시 가능(Cacheable)

> 일부 HTTP 응답은 캐시가 가능하다. HTTP 응답이 캐시 가능 여부에 대해 다음과 같은 제약들이 존재한다.

* GET, HEAD는 요청이 캐시가 가능하다.
* POST, PATCH 요청에 대한 응답은 조건에 따라 캐시가 가능하다. (Freshness, Content-Location Header)
* PUT, DELETE는 요청과 응답 모두 캐시가 불가능하다.
* 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501 응답 상태 코드는 캐시가 가능하다.
* Cache-Control과 같은 응답에 있는 특정한 헤더들은 캐싱을 방지한다.
* 캐시 불가능한 요청이나 응답은 해당 리소스의 캐싱된 정보를 무효화(invalidate)한다.

