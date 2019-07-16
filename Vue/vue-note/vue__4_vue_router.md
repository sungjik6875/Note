##### 뷰 라우터

> SPA에서는 주로 라우팅을 활용하여 웹 페이지를 이동한다. 링크 이동시 새로고침을 하지 않기 때문에 이는 향상된 사용자 경험을 제공할 수 있다. 이 라우팅 기능을 뷰에서는 뷰 라우터를 통해 지원한다.
>
> 뷰 라우터 구현시 필수적으로 사용되는 특수 태그는 다음과 같다.

```
<router-link to="url">
: 페이지 이동 태그, 화면에는 <a href="url">로 표시됨
```

```
<router-view>
: 페이지 표시 태그, 변경되는 url에 따라 해당 컴포넌트를 뿌려주는 영역
```



```html
<body>
    <div id="app">
        <h1>Vue Router Practice</h1>
        <p>
            <router-link to="/main">Show Main Component</router-link>
            <router-link to="/login">Show Login Component</router-link>
        </p>
        <router-view></router-view>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.0.6/dist/vue-router.js"></script>
    <script>
        const Main = {template: '<div>main</div>'};
        const Login = {template: '<div>login</div>'};

        const routes = [
            { path: '/main', component: Main },
            { path: '/login', component: Login }
        ]

        const router = new VueRouter({
            mode: 'history',
            routes
        })

        const app = new Vue({
            router
        }).$mount('#app')
    </script>  
</body>
```

> routes, router는 예약어로 다른 네이밍을 사용할 수 없다. 대문자로 할 경우 에러가 난다. 콘솔 로그 확인시 undefined가 출력된다.

> 두 컴포넌트(main, login)를 정의한다. 이후 routes에는 url의 path정보와 path별 연결할 컴포넌트를 정의한다.

> 뷰라우터를 사용하기 위해 뷰라우터 CDN을 추가한다. 이후 뷰라우터 객체를 생성하고 생성시 내부에 routes를 정의한다.
>
> mode: 'history' 옵션은 url의 해시 값을 없애기 위함이다.

> 공식문서 가이드에 따르면 뷰라우터 추가시에는 .$mount()를 활용한다. .$mount()는 el속성 처럼 인스턴스를 화면에 부착하는 역할을 한다.



##### 네스티드 라우터 (Nested Router)

> 만약 여러 컴포넌트를 동시에 표시하려면 어떻게 해야 할까? 이런 경우 활용할 수 있는 옵션 중 하나가 네스티드 라우터이다. 네스티드 라우터를 사용하면 url에 따라 특정 컴포넌트의 하위 컴포넌트를 바꿀 수 있다.

```html
<body>
    <div id="app">
        <h1>Vue Router Practice</h1>
        <router-view></router-view>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.0.6/dist/vue-router.js"></script>
    <script>
        const User = {
            template: `
                <div>
                    User Component
                    <router-view></router-view>
                </div>
            `
        };
        
        const UserProfile = {
            template: '<p>User Profile Component</p>'
        };
        const UserPost = {
            template: `
            <div>
              <p>User Post Component</p>
              <router-view></router-view>
            </div>
            `
        };
        const Post1 = {
            template: '<p>Post1 Component</p>'
        };
        const Post2 = {
            template: '<p>Post2 Component</p>'
        };

        const routes = [
            { path: '/user',
                component: User,
                children: [
                    {
                        path: 'posts',
                        component: UserPost,
                        children: [
                            { 
                              path: 'post1',
                              component: Post1
                            },
                            { 
                              path: 'post2',
                              component: Post2
                            },
                        ]
                    },
                    {
                        path: 'profile',
                        component: UserProfile
                    },
                ]
            }
        ];

        const router = new VueRouter({
            routes
        });

        const app = new Vue({
            router
        }).$mount('#app');
    </script>  
</body>
```

> div#app 에 정의된 `<router-view>`에는 User 컴포넌트가 뿌려진다.
>
> 사용할 컴포넌트들을 전부 정의한다. 이때 User처럼 하위 컴포넌트에 라우팅을 사용할 경우에는 template 속성 내부에 다시 `<router-view>`를 정의해야 한다.
>
> routes를 정의한다. 이때 하위 컴포넌트에 라우팅을 사용할 경우 children 속성을 사용하여 내부에 다시 path, component를 정의해야 한다.
>
> 뷰 라우터를 정의하고, 뷰 인스턴스에 라우터를 추가하는 것은 뷰라우터 코드와 같다.



##### 네임드 뷰 (Named View)

> 네임드 뷰는 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 표시하는 라우팅 방식이다. 네스티드 라우팅이 상위 컴포넌트 밑에 하위 컴포넌트를 정의하는 방식이라면, 네임드 뷰는 같은 레벨의 여러 컴포넌트를 정의할 때 사용한다.

```html
<body>
  <div id="app">
    <h1>Vue Router Practice</h1>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router@3.0.6/dist/vue-router.js"></script>
  <script>
    const Header = {
      template: '<div>this is header</div>'
    };
    const Body = {
      template: '<div>this is body</div>'
    };
    const Footer = {
      template: '<div>this is footer</div>'
    };

    const router = new VueRouter(
      {
        routes: [
          {
            path: '/',
            components: {
              default: Body,
              header: Header,
              footer: Footer
            }
          }
        ]
      }
    );

    const app = new Vue({
      router
    }).$mount('#app');
  </script>  
</body>
```

> 네임드 뷰의 핵심은 `<router-view>`태그에 name 속성을 붙인 후 컴포넌트에 매칭 시키는 것이다. 매칭은 routes의 components 속성에서 이루어진다. 이들은 동일한 레벨이므로 같은 path를 갖는다.
>
> name 속성을 정해주지 않을경우 default로 지정된 값으로 매칭시킨다. default값 역시 정의해줄 수 있다.