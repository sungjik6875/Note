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

> v-bind는 아이디, 클래스, 스타일 등의 html 속성값에 뷰 데이터를 바인딩 할 때 사용하는 디렉티브이다.

```html
<body>
  <div id="app">
    <p v-bind:id="idBind">Id Binding</p>
    <p v-bind:class="classBind">Class Binding</p>
    <p v-bind:style="styleBind">Style Binding</p>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        idBind: 10,
        classBind: 'container',
        styleBind: 'color: blue'
      }
    })
  </script>
</body>
```

> v-bind를 활용하여 html 속성에 id, class, style의 값을 지정하였다.



##### JS 표현식

> 뷰의 템플릿 안에 JS 표현식(expression)을 쓸 수 있다.  

```html
<body>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ message + "!!!" }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        message: "Hellog Vue.js"
      }
    })
  </script>
</body>
```

> 위의 코드는 정상 작동된다. 그러나 세번째의 경우처럼 복잡한 로직은 가급적 뷰에서 처리하는 것이 가독성에서 좋으므로 권장하지 않는 방법이다.
>
> 그리고 선언문은 사용이 불가능하다. 위 처럼 하나의 값으로 나타낼 수 있는 표현식만 사용이 가능하다. 분기문은 사용이 불가능하고, 삼항 연산자로만 표현이 가능하다.

```html
<div id="app">
    <p>{{ const a = 10; }}</p>
    <p>{{ if (true) {return 100} }}</p>
    <p>{{ true ? 100 : 0 }}</p>
</div>
```

> 위에서는 삼항연산자만 사용이 가능하고, 나머지는 동작하지 않는다.



##### computed

> 뷰의 데이터를 바인딩 할 때 사용하기 좋은 속성이 computed이다. computed는 반복적인 연산에 대해 미리 결과를 계산하여 캐싱을 한다. 따라서 필요할 때 해당 값을 불러오는 속도가 빠르다. 

```html
<body>
  <div id="app">
    <p>{{ message.split('').reverse().join('') }}</p>
    <p>{{ reversedMessage }}</p>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        message: "Hello Vue.js"
      },
      computed: {
        reversedMessage: function() {
          return this.message.split('').reverse().join('');
        }
      }
    });
  </script>
</body>
```

> 복잡한 로직은 html단에서보다는 자바스크립트 단에서 미리 처리하는 것이 좋다.