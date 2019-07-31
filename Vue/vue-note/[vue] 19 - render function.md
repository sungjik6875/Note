#### Render Function

------

> 뷰에서는 기본적으로 template 속성을 활용하여 html 요소를 빌드하는 것을 권장한다. 그러나 template 속성을 대체할 수 있는 방식으로 렌더 함수가 존재한다. 렌더 함수의 사용법은 다음과 같다.

```js
render: function(createElement) {
	return createElement('태그 이름', '태그 속성', '하위 태그 내용')
}
```

> 렌더 함수는 기본인자로 createElement라는 함수를 받으며 이 함수를 리턴하는 함수이다. createElement 함수는 다시 세 개의 인자를 필요로 한다. 세 개의 인자에 들어갈 내용은 태그명, 태그 속성, 하위 태그 내용이다.



> 다음의 예시를 보자.

```html
<div id="app">
    <!-- instance area -->
    <p>{{ message }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue',
        },
    })
</script>
```

> 위의 코드는 아래와 같다.

```html
<div id="app">
	<!-- instance area -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
        	message: 'Hello Vue',
        },
        template: '<p>{{ message }}</p>'
    })
</script>
```

> 위와 같이 template 속성을 활용하여 위와 같이 html 요소를 인스턴스 영역에 이식하는 것도 가능하다. 이 코드는 또 아래와 같다.

```html
<div id="app">
	<!-- instance area -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue',
        },
        render(createElement) {
            return createElement('p', this.message)
        }
    })
</script>
```



> 렌더 함수의 대표적인 예로 main.js에서 Vue 인스턴스를 index.html에 마운팅하는 코드가 있다. 그 예를 보자.

```js
// main.js

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
```

> 위의 코드에서 `render: h => h(App)`의 부분은 렌더 함수로 ES6의 문법을 활용하여 간략하게 표현된 것이다.

```json
// 1
render: function(createElement) {
	return createElement(App);
}

// 2
render: function(h) {
    return h(App);
}

// 3
render: (h) => {
    return h(App);
}

// 4
render: h => h(App)
```

