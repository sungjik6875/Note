#### 뷰 라우터 설치

------

> 뷰 라우터를 사용하기 위해서는 먼저 설치해야 한다. package.json 파일의dependencies에 포함이 되도록 다음과 같은 명령어를 입력한다.

```
npm i vue-router --save
```

> package.json 파일에 다음과 같이 설치된 것을 확인할 수 있다.

```json
"dependencies": {
    //
    "vue-router": "^3.0.7"
  },
```





#### 뷰 라우터의 인스턴스 생성 및 정의

------

> src 디렉토리 밑에 router라는 디렉토리를 생성 후 router 디렉토리 내부에 index.js를 생성한다. 

```
src
ㄴrouter
  ㄴindex.js
```

> index.js에 다음과 같이 입력한다.

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
```



> 뷰 라우터를 사용하기 위해서는 import의 과정을 거쳐야 한다. 그리고 뷰 라우터를 뷰 객체가 사용하게 하기 위해서는 Vue.use()의 메소드를 사용해야 한다. 그런데 이때 문서가 Vue를 인식하지 못하므로 Vue 역시 import의 과정을 거쳐야 한다.
>
> 이제 router를 정의해야 한다. router를 정의할 때에는 먼저 뷰 라우터 인스턴스를 생성시 내부에 path와 path에 해당하는 component 정보를 매칭시켜 정의해주면 된다. 
>
> 우선 정의하기 전에 라우터로 매칭시킬 컴포넌트를 import한다.

```javascript
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
```



> 이제 위의 컴포넌트를 라우터의 path와 매칭시킨다. 해당 router는 main.js에서 import할 예정이므로 export를 붙여준다. 
>
> `mode: 'history'` 옵션은 라우터 링크를 타고 이동할시 #값을 url에서 제거해주는 옵션이다.
>
> 뷰 라우터 인스턴스 내부에 routes를 배열로 정의후, 배열의 각 원소에 `{ path:  ,  component: }`의 객체를 정의한다. path는 url주소, component는 url주소를 입력시 표시될 컴포넌트를 각각 값으로 매핑시킨다.
>
> 예시는 다음과 같다.

```javascript
export const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ]
});
```



> 이제 main.js에서 정의한 뷰 라우터 객체를 import하여 사용한 다음 뷰 인스턴스 내부에 정의하면 된다.

```javascript
import { router } from './router/index.js';

new Vue({
  router, // router : router
  render: h => h(App),
}).$mount('#app')
```





#### 뷰 라우터 사용하여 컴포넌트 표시하기

------

> router-view 태그를 사용하고 components 속성에 컴포넌트들을 import하여 등록하면 뷰 라우터를 사용하여 컴포넌트를 화면에 표시할 수 있다.
>
> 예시는 다음과 같다.

```vue
<template>
  <div id="app">
    Hello world
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AskView from './views/AskView';
import JobsView from './views/JobsView';
import NewsView from './views/NewsView';

export default {
  name: 'app',
  components: {
    HelloWorld,
    AskView,
    JobsView,
    NewsView
  }
}
</script>
```





#### router-link 사용하여 툴바 만들기

------

> router-link를 사용하여 a태그처럼 url을 변경하는 것이 가능하다. url을 변경함으로써 라우팅으로 매칭시킨 컴포넌트들을 화면에 표시할 수 있다.

```javascript
<router-link to="/news">News</router-link>
<router-link to="/ask">Ask</router-link>
<router-link to="/jobs">Jobs</router-link>
```





#### 라우터에 접근하기

------

> `this.$route`를 사용하여 라우터 정보에 접근할 수 있다. 라우터의 params 속성을 통해 동적으로 할당한 인자에도 접근이 가능하다.

