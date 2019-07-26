#### 라우트 별 가드

------

> beforeEnter 속성을 라우트의 routes의 각 path별 객체에 정의함으로써 해당 url로 라우팅할때 가드 트리거를 발동시킬 수 있다. 정의 방식은 다음과 같다.

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

> beforeEnter는 순서대로 to, from, next의 3개의 인자를 갖는다. to는 이동하고자 하는 url, from은 현재 위치한 url, next는 to로 이동하게 하는 메소드이다. next 메소드를 반드시 내부에서 호출시켜야 to url로 이동할 수 있다.



> 라우터 네비게이션 가드에 데이터를 외부에서 받아오는 로직을 추가하여 활용할 수 있다. 데이터를 외부에서 받아온 후에 next 메소드를 호출시켜 컴포넌트를 불러오므로 사용자에게 조금 더 나은 UX를 제공하는 것이 가능하다.

```javascript
import { store } from '../store/index'; 
import LoaderBus from '../utils/loader';

// ...
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
   	  path: '...',
      components: '...',
      beforeEnter: (to, from, next) => {
          LoaderBus.$emit('start:loader');
          store.dispatch('FETCH_LIST', to.name)
            .then(() => { 
              next(); 
            })
            .catch(error => {
              console.log(error);
            })
    }
```

> beforeEnter에서 데이터를 불러오는 로직을 작성 할 때 한 가지 주의할 점은 바로 route나 store 정보로 접근하는 경우이다. $route, $store는 뷰 인스턴스 내부에서 접근하고자 할 때 사용하는 방식이었다. 그러나 beforeEnter는 라우터 객체 내부에서 정의된다. 라우터 내부에서 store로 접근하고자 할 때에는 위의 예시에서 처럼 store 정보가 있는 js 파일을 import한 다음 접근해야 한다. route 정보로 접근하고자 할 때에는 to, from을 거쳐서 접근하면 된다.