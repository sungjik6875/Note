> html 화면 요소를 뷰 인스턴스의 데이터와 연결하는 것을 의미한다. 주로 v-bind 디렉티브와 {{}} 템플릿을 사용한다.



##### {{}} 콧수염 괄호

> {{}}는 뷰 인스턴스의 데이터를 html 태그에 연결한다. 

```html
<body>
  <div id="app">
    <h5>{{ message }}</h5>
    <button @click="getData">axios</button>
  </div>
	...
  <script>
    new Vue({
      el: "#app",
      data: {
        message: "Data binding by Mustache"
      
    });
  </script>  
</body>
```

> data 속성의 message 속성의 값을 연결하였다.



##### v-once

> 뷰의 데이터가 변경되어도 값을 바꾸고 싶지 않다면 첫 1회 바인딩만 허용하는 v-once 디렉티브를 사용하면 된다.

```html
<body>
  <div id="app">
    <h5 v-once>{{ message }}</h5>
    <input v-model="inputMsg" type="text">
    <button @click="changeMsg">change</button>
  </div>
	...
  <script>
    new Vue({
      el: "#app",
      data: {
        message: "Data binding by Mustache",
        inputMsg: "",
      },
      methods: {
        changeMsg: function() {
          this.message = this.inputMsg
        }
      }
    });
  </script>  
</body>
```

> h5 태그에 v-once가 있으므로 changeMsg 메소드가 실행되어도, 첫 1회 바인딩만 허용되므로 값이 바뀌지 않는다. 그러나 로그를 찍어보면 내부의 값은 변경되는 것을 확인할 수 있다. 즉, 값은 변경되지만 다시 렌더링이 되지 않도록 한다.



##### v-bind

> v-bind는 아이디, 클래스, 스타일 등의 html 속성에 뷰 데이터 값을 연결할 때 사용한다.

