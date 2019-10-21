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