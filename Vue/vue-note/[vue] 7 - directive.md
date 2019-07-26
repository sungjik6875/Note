##### v-if

> v-if의 값이 true, false에 따라 해당 요소가 렌더링이 될지 안 될지 결정한다.



##### v-show

> v-if와 유사하게 데이터의 진위 여부에 따라 해당 태그를 화면에 표시할지, 말지 결정한다. 그러나 v-if는 false일 경우 렌더링조차 되지 않지만, v-show는 `display: none;`으로 css 속성이 정의되어 태그는 남아있으나 화면에만 보이지 않는다.



##### v-for

> 지정한 뷰 데이터의 개수만큼 해당 html 태그를 반복하여 출력한다.



##### v-model

> 폼에서 주로 사용되는 속성이다. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화한다. 화면에 입력된 값을 저장하여 서버에 보낼때 사용된다. 혹은 watch와 같은 속성과 활용되어 추가 로직을 사용할 수 있다.
>
> input, select, textarea 태그에서만 사용이 가능하다.



```html
<body>
  <div id="app">
    <a v-if="flag">do it Vue.js</a>
    <ul>
      <li v-for="system in systems">{{ system }}</li>
    </ul>
    <p v-show="flag">do it Vue.js</p>
    <h5 v-bind:id="uid">Vue intro</h5>
    <button v-on:click="popupAlert">Alert</button>
    <button v-on:click="flagToggle">flag {{ flag ? 'on' : 'off' }}</button>
  </div>

  <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
  
  <script>
    new Vue({
      el: "#app",
      data: {
        flag: true,
        systems: ['android', 'ios', 'window'],
        uid: 10
      },
      methods: {
        popupAlert: function() {
          return alert('Alert')
        },
        flagToggle: function() {
          this.flag = !this.flag
        }
      }
    });
  </script>
</body>
```

> 위의 코드는 디렉티브의 사용 예시이다.
>
> flag가 false일때에 콘솔의 element 탭을 확인하면, v-if와 v-show의 차이를 확인할 수 있을 것이다.
>
> 그 외에 v-for, v-bind, v-on의 사용 예시를 확인할 수 있다.