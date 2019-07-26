> Vue의 컴포넌트는 각각 자체적인 유효 범위를 갖는다. 이를 독립적이라고 표현한다. 따라서 다른 같은 웹 페이지에 위치한 컴포넌트라 하더라도, 다른 컴포넌트로부터 직접적으로 데이터를 참조할 수 없다.
>
> 뷰 컴포넌트간의 데이터 전달 유형은 네 가지로 분류된다. 상위 컴포넌트에서 하위 컴포넌트로, 하위 컴포넌트에서 상위 컴포넌트로, 관계 없는 컴포넌트 간의 데이터 전달이 있다.



##### 상위 컴포넌트에서 하위 컴포넌트로 전달 : props

```html
<body>
    <div id="app">
        <child-component v-bind:propsdata="message"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        Vue.component('child-component', {
            props: ['propsdata'],
            template: '<p>{{ propsdata }}</p>'
        })

        new Vue({
            el: '#app',
            data: {
                message: "hello, Vue"
            }
        });
    </script>  
</body>
```

> props의 전달은 v-bind 디렉티브를 활용한다. 컴포넌트 호출시에 v-bind를 활용한 전달 형식은 다음과 같다.

```
v-bind:propsName="상위 컴포넌트의 data 속성"
```

> 여기서 정의된 propsName을 해당 컴포넌트의 props 속성에 정의해준다. 그리고 어디서 사용될지 template속성에서 명시해주면 된다.
>
> 여기서 이상한 점이 있다. 우리는 뷰 인스턴스와 전역 컴포넌트 간의 관계를 명시하지 않았다. 사실 뷰 인스턴스 안에 컴포넌트를 등록하면, 뷰 인스턴스는 해당 컴포넌트의 상위 컴포넌트가 된다. 뷰 인스턴스는 모든 컴포넌트의 상위 컴포넌트이므로 최상위 컴포넌트(root component)라고도 한다.



##### 하위 컴포넌트에서 상위 컴포넌트로 전달: event 발생

```html
<body>
    <div id="app">
        <child-component v-on:show-log="printText"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        Vue.component('child-component', {
            template: '<button v-on:click="showLog">showLog</button>',
            methods: {
                showLog: function() {
                    this.$emit('show-log')
                }
            }
        })

        new Vue({
            el: '#app',
            data: {
                message: "hello, Vue"
            },
            methods: {
                printText: function() {
                    console.log("received an event")
                }
            }
        });
    </script>  
</body>
```

> v-on 디렉티브를 사용한다. 하위 컴포넌트에서 상위 컴포넌트로  이벤트를 전달하는 형식은 다음과 같다.

```
v-on:eventName="상위 컴포넌트의 methods"
```

> eventName은 하위 컴포넌트에 정의된 this.$emit()의 인자가 된다. this.$emit()을 동작시키는 메소드는 컴포넌트 template에 명시된다.



##### 상하 관계가 아닌 컴포넌트 간의 통신 : 이벤트 버스

> 뷰는 상위에서 하위로만 데이터를 전달해야 하는 기본적인 규칙이 있다. 이 규칙으로 인해 불편한 점이 있는데, 상하 관계가 아닌 컴포넌트 간의 통신이 그렇다. 이 경우, 공통의 상위 컴포넌트를 거쳐서 데이터를 전달해야 한다. 하위 - 상위 - 하위의 과정을 거치므로, 굉장히 번거로울 것이다. 또한 강제로 상위 컴포넌트를 두어야 하는 경우도 있을 것이다.
>
> 다행이 이를 해결할 수 있는 방법이 있는데, 이벤트 버스이다. 이벤트 버스는 개발자가 지정한 두 컴포넌트 간에 데이터를 주고 받을 수 있는 방법이다. 
>
> 이벤트 버스의 활용 방식은 다음과 같다.

```javascript
// 이벤트 버스용도의 추가 Vue 인스턴스
var eventBus = new Vue();

// 이벤트를 보내는 컴포넌트
methods: {
    methodName: function() {
        eventBus.$emit('eventName', param)
    }
}

// 이벤트를 받는 컴포넌트
methods: {
    created: function() {
        eventBus.$on('eventName', arg)
    }
}
```

> 이벤트 버스 용도의 뷰 인스턴스를 하나 생성한다. 이벤트를 보내는 컴포넌트의 methods 속성에서 `eventBus.$emit('eventName', param)`를 메소드 내부에 정의한다. 받는 컴포넌트의 created 속성에서 `eventBus.$on('eventName', arg)`를 정의한다.
>
> 이벤트 버스의 예시는 다음과 같다.

```html
<body>
    <div id="app">
        <child-component></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        const eventBus = new Vue()

        Vue.component('child-component', {
            template: '<button v-on:click="showLog">showLog</button>',
            methods: {
                showLog: function() {
                    eventBus.$emit('triggerEventBus', 100)
                }
            }
        })

        new Vue({
            el: '#app',
            data: {
                message: "hello, Vue"
            },
            created: function() {
                eventBus.$on('triggerEventBus', function(value) {
                    console.log("eventBus are triggered", value)
                })
            }
        });
    </script>  
</body>
```



> 이벤트 버스를 활용하면 쉽게 컴포넌트 간의 데이터 전달이 가능하여 편리하다. 그러나 컴포넌트가 많아지면 어디서 어디로 데이터가 전달이 되었는지 관리가 되지 않는 문제가 발생한다.
>
> 이를 해결하려면 Vuex라는 상태 관리 도구가 필요하다. Vuex는 규모가 있는 앱에서 컴포넌트 간의 데이터 관리를 효율적으로 할 수 있도록 도와주는 라이브러리이다. 

