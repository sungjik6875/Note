#### Navigation Guard

------

> 네비게이션 가드란 뷰 라우터로 특정 URL에 접근할 때에 해당 URL의 접근을 제어하는 것으로 전역 가드, 라우트 별 가드, 컴포넌트 가드의 세 가지 종류가 있다. 
>
> 주로 사용자의 인증 정보에 따라 접근을 허용하거나, 막을 때 사용한다.





#### 전역 가드

------

> 앱 전역에서 동작하는 가드로 보통 beforeEach API를 통해 호출한다. beforeEach는 생성된 뷰 라우터 인스턴스에 연결하여 사용한다.

```javascript
const router new VueRouter({...})
                            
router.beforeEach((to, from, next) => {
    ...
})
```

> beforeEach는 3개의 인자를 갖는다. 그 인자는 to, from, next이다. to는 이동하고자 하는 대상의 라우트 객체이다. from은 현재 라우트 객체이다. next는 to에서 지정한 url로 이동하기 위해 호출되는 메소드이다. 그러나 next의 동작은 전달 인자에 따라 다르다.

* next()의 경우 다음 훅으로 이동하게 된다.  훅이 없으면 네비게이션이 승인된다.
* next(false)의 경우 현재 네비게이션을 중단한다. 브라우저의 url이 변경되면 해당 url이 from의 url로 재설정된다.
* next('/'), next({ path: '/' })는 다른 위치로 리디렉션한다. 현재 네비게이션을 중단하고, 새 네비게이션을 시작한다.
* next(error)는 next에 전달된 인자가 에러 인스턴스이면 탐색이 중단된다.





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





#### 컴포넌트 내부 가드

------

> 라우터 컴포넌트 안에 정의한다.
>
> beforeRouteEnter와 beforeRouteLeave를 사용하여 라우트 컴포넌트 (라우터 설정으로 전달되는 컴포넌트) 안에 라우트 네비게이션 가드를 직접 정의할 수 있다. 사용하는 API는 beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave이다. 

```javascript
// 컴포넌트 안에 지정하기
const Foo = {
	template: '...',
	beforeRouteEnter(to, from, next) {
        //
    },
    beforeRouteUpdate(to, from, next) {
        //
    },
    beforeRouteLeave(to, from, next) {
        //
    }
}
```



> beforeRouteEnter 가드는 네비게이션이 확인되기 전에 가드가 호출되어서 새로운 엔트리 컴포넌트가 아직 생성되지 않았기 때문에 this에 접근하지 못한다. 그러나 콜백을 next에 전달하여 인스턴스에 액세스 할 수 있다. 네비게이션이 확인되고 컴포넌트 인스턴스가 콜백에 전달인자로 전달될 때 콜백이 호출된다.

```javascript
beforeRouteEnter(to, from, next) {
	next(vm => {})
	// 'vm'을 통한 컴포넌트 인스턴스 접근
}
```



> beforeRouteLeave에서는 this에 직접 접근이 가능하다. leave API는 일반적으로 사용자가 저장하지 않은 편집 내용을 두고 실수로 라우트를 떠나는 것을 방지할 때 사용한다. 탐색은 next(false)를 호출함으로써 취소할 수 있다.





#### 네비게이션 시나리오

------

* 네비게이션이 트리거된다.
* 비활성화될 컴포넌트에서 가드를 호출한다.
* 전역 beforeEach 가드를 호출한다.
* 재사용되는 컴포넌트에서 beforeRouteUpdate 가드를 호출한다.
* 라우트 설정에서 beforeEnter를 호출한다.
* 비동기 라우트 컴포넌트를 해결한다.
* 활성화된 컴포넌트에서 beforeRouteEnter를 호출한다.
* 전역 beforeResolve 가드를 호출한다.
* 네비게이션 완료
* 전역 afterEach 훅 호출한다.
* DOM 갱신 트리거 된다.
* 인스턴스화 된 인스턴스들의 beforeRouteEnter 가드에서 next에 전달된 콜백을 호출합니다.