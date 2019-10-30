> 뷰에서 http 통신을 지원하는 라이브러리로 뷰 리소스와 액시오스가 있다. 뷰 리소스보다 액시오스가 더욱 많이 사용되고 편리한 라이브러리 이므로 액시오스를 사용해보자.
>
> 액시오스는 npm으로 설치할 수 있지만 여기서는 간편하게 CDN을 활용할 수도 있다. axios로 요청을 보내는 방법은 다음과 같다.

```
axios.method('URL address').then().catch();
```

```
axios({
	method: 'get',
	url: 'URL address',
	...
});
```

> then()은 서버로부터 정상적으로 데이터를 수신할 경우 실행되는 로직이다. 만약 데이터 수신에 실패할 경우엔 catch() 로직이 실행된다.

```html
<body>
  <div id="app">
    <h1>Vue http transition</h1>
    <button @click="getData">axios</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    new Vue({
      el: "#app",
      methods: {
        getData: function() {
	axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
            .then(function(response) {
              console.log(response);
            });
        }
      }
    });
  </script>  
</body>
```

> response 객체를 확인해보면 data 속성이 일반 문자열 형식이 아니라 객체 형식이므로 JSON.parse()를 사용하여 객체로 변환할 필요가 없다. 이런 부분에서 액시오스는 굉장히 편리한 라이브러리이다.