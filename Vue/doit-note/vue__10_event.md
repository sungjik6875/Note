##### 이벤트로 인자 넘기기

```html
<body>
  <div id="app">
    <button v-on:click="clickBtn(10)">click</button>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
      },
      methods: {
        clickBtn: function(num) {
          alert(`value of param is ${num}`)
        }
      }
    });
  </script>
</body>
```

> 위의 예시에서 처럼 인자를 넘기는 것도 가능하다.



##### 이벤트 인자 : 이벤트 인자를 활용하여 이벤트에 접근하기

> 이벤트 인자는 html 태그에서 따로 정의하지 않아도 자바스크립트 단에서 정의하여 사용할 수 있다. 이벤트 인자를 활용하면 이벤트 객체에 접근할 수 있다.

```html
<body>
  <div id="app">
    <button v-on:click="clickBtn">event</button>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
      },
      methods: {
        clickBtn: function(e) {
          console.log(e)
        }
      }
    });
  </script>
</body>
```

> 위의 코드를 작성하고 버튼을 클릭하면 콘솔에 다음이 출력되는 것을 확인할 수 있다.

```
MouseEvent {isTrusted: true, screenX: 36, screenY: 102, clientX: 30, clientY: 22, …}
```

