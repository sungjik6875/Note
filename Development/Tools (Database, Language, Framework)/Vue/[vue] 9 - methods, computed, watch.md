##### computed

> 데이터를 가공하는 복잡한 연산은 뷰 인스턴스 내부에서 처리하고, html 단에서는 이 처리한 데이터를 표현하는 로직만 들어가는 것이 바람직하다. computed속성은 이러한 데이터 연산들을 정의하는 영역이다. 

```html
<body>
  <div id="app">
    <input v-model="message" type="text">
    <p>{{ message }}</p>
    <p>{{ revereseMessage }}</p>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        message: ''
      },
      methods: {
        clickBtn: function(e) {
          console.log(e)
        }
      },
      computed: {
        revereseMessage: function() {
          return this.message.split('').reverse().join('')
        }
      }
    });
  </script>
</body>
```

> reverseMessage처럼 데이터를 가공하는 연산은 computed에서 처리하는 것이 가독성에 좋다.
>
> computed 속성의 장점은 의존하고 있는 data값이 변화할 때마다 다시 자동으로 연산을 처리한다는 점이다. 또 다른 장점은 캐싱으로, 동일한 연산을 반복해서 수행하지 않기 위해 연산의 결과값을 미리 저장하고 있다가 필요할 때 불러오는 동작이다.
>
> 캐싱의 장점을 이해하기 위해 methods 속성과의 차이점을 알아보자.



##### computed와 methods의 차이점

> methods와 computed의 가장 큰 차이점은 methods 속성은 해당 메소드를 호출할 때만 로직이 수행되는 반면 , computed 속성은 대상 데이터의 값이 변경될 때마다 자동적으로 수행된다는 점이다. 즉, 수동적으로 데이터 갱신이 이루어지는지, 능동적으로 데이터의 갱신이 이루어지는 지의 차이이다.
>
> 다음의 예시를 보자.

```html
<body>
  <div id="app">
    <input v-model="message" type="text">
    <p>Message : {{ message }}</p>
    <p>Computed : {{ revereseMessage1 }}</p>
    <p>Methods : {{ reverseMessage2 }}</p>
    <button v-on:click="reverseMessage">methods</button>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        message: '',
        reverseMessage2: ''
      },
      methods: {
        reverseMessage: function() {
          this.reverseMessage2 = this.message.split('').reverse().join('')
        }
      },
      computed: {
        revereseMessage1: function() {
          return this.message.split('').reverse().join('')
        }
      }
    });
  </script>
</body>
```

> input 태그에서 데이터를 입력하면 입력 도중에도 데이터의 값이 계속해서 갱신되고, computed의 로직이 자동적으로 실행되는 것을 알 수 있다. 그러나 methods의 로직은 버튼을 누를 때마다 로직이 실행된다. 게다가 computed는 캐싱을 사용하므로 로직의 수행속도도 빠르다.
>
> 따라서 복잡한 연산을 반복해서 수행해야 한다면, 특히 그 이유가 데이터의 갱신에 따른 것이라면 computed 속성을 사용하여 해당 연산이 빠르고 자동적으로 수행되도록 하는 것이 좋다.



##### watch

> 데이터 변화를 감지하여 변화 시마다 자동적으로 특정 로직을 수행한다. computed 속성과 유사하지만  computed속성은 내장 API를 활용한 간단한 연산을 수행하기에 적합한 반면, watch 속성은 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 비동기 처리에 적합하다.

```html
<body>
  <div id="app">
    <input v-model="message" type="text">
    <p>Message : {{ message }}</p>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        message: '',
      },
      watch: {
        message: function(data) {
          console.log("message의 값이 바뀝니다.", this.message)
        }
      }  
    });
  </script>
</body>
```



##### ※ 비동기 처리

> 웹에서 데이터를 호출할 때에는 서버에 http요청을 보낸다. 이 서버에 요청을 보내는 로직이 수행되는 시점에서 서버에 보낸 요청이 언제 올지 알 수 없다. 이 요청이 지연되는 경우, 자바스크립트의 다른 연산에 영향을 줄 수 있을 것이다. 이를 방지하기 위해 이런 비동기 로직은 별도의 영역(실행 컨텍스트)에서 해당 데이터를 요청하고, 응답을 기다린다. 이런 로직을 비동기 처리 로직이라고 한다.

