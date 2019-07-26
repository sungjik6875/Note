#### High Order Component

------

> React의 하이 오더 컴포넌트에서 기원한 것으로, 컴포넌트의 로직을 재사용하기 위해 사용하는 방법이다. 컴포넌트의 로직을 재사용한다는 것은, data, created와 같은 뷰 인스턴스 옵션을 재사용하는 것을 의미한다.
>
> HOC는 컴포넌트를 렌더링하는 함수를 정의함으로써 사용한다. 사용 예시는 다음과 같다.



```javascript
// CreateListView.js

import ListView from './ListView';
import LoaderBus from '../utils/loader';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들 (ex. el, data, components ..)
    name,
    created() {
      LoaderBus.$emit('start:loader');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(data => {
          LoaderBus.$emit('end:loader');
          console.log('fetched');
        })
        .catch(error => {
          console.log(error);
        })
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}
```

> 위의 예시에서는 재사용할 인스턴스 옵션으로 name, created 속성을 정의하였다. 이 중 name은 인자로 정의하게끔 하였다. 이렇게 정의한 옵션을 render 메소드를 통해 ListView에 이식한다.
>
> 이후 컴포넌트를 함수를 통해 생성할 때에는 ListView가 하위 컴포넌트로 등록되어 통째로 생성시킨다. 함수 호출의 예시는 다음과 같다.



```javascript
// router를 정의한 파일

import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      component: CreateListView('NewsView'),
    },
    { 
      path: '/news',
      name: 'news',
      component: CreateListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: CreateListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: CreateListView('JobsView'),
    },
  ]
});
```

> 라우터에서 경로 지정 시에 components의 값으로 함수를 호출한다. 함수가 생성된 컴포넌트 객체를 반환하기 때문에 잘 동작하는 것을 확인할 수 있다.



##### HOC의 단점

> 하이 오더 컴포넌트를 통해 컴포넌트에서 반복 사용되는 로직이나 패턴을 단순화할 수 있지만, 하이 오더 컴포넌트를 사용함으로써 컴포넌트 트리 구조의 깊이가 깊어진다는 단점이 있다. 이는 이후 컴포넌트 사이의 데이터 트랜지션을 처리할 때 작업이 번거로워지는 원인이 된다.