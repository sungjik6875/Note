#### Vuex 패키지에 추가하기

------

> 다음의 명령어를 입력하면 추가된다.

```
// npm
npm install vuex --save

// yarn
yarn add vuex
```

> package.json의 dependencies에  다음과 같이 추가된 것을 확인할 수 있다.

```json
"dependencies": {
    "vue": "^2.5.11",
    "vuex": "^3.1.1"
  },
```





#### Vuex 등록하기

------

> 정해진 것은 없지만 관례상 src 디렉토리 내부에 store라는 디렉토리를 만든 후, 그 안에 `store.js`라는 파일을 만든다.
>
> store.js에는 다음과 같이 입력한다.

```javascript
// store.js
import Vue from 'Vue';
import Vuex from 'vuex';

// use는 vue의 플러그인 기능을 추가하고자 할 때 사용
Vue.use(Vuex);

export const store = new Vuex.Store({
    
});
```



> Vuex의 Store 인스턴스를 생성한 후 이를 export한다. 이를 main.js에서 import한다.

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

> store는 변수이므로 변수를 import 할 때에는 {}로 감싸야 한다. import한 store를Vue 인스턴스 내부에 정의한다.



