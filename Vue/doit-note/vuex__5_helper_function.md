#### Helper

------

> 헬퍼함수는 store의 각 속성들을 더 편하게 사용하도록 도와준다. 속성별로 사용하는 헬퍼함수는 다음과 같다.

* state : mapState
* getters: mapGetters
* mutations: mapMutations
* actions : mapActions



##### 사용법

> 헬퍼를 사용하려는 vue 파일에서 아래와 같이 헬퍼를 로딩한다.

```javascript
// App.vue
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed() { ...mapState(['num']), ...mapGetters(['countedNum'])},
    methods: { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn'])}
}
```

> 헬퍼를 사용하기 전에 state에 접근하려면 $store를 거쳐야 했다. 가령 `num`에 접근하기 위해서는 `this.$store.state.num`으로 접근해야 했으나, 헬퍼를 사용하면 `this.num`으로 편하게 접근할 수 있다.
>
> `...`는 ES6의 문법인 Object Spread Operator이다.



##### 배열 리터럴 / 객체 리터럴

> 헬퍼는 배열 리터럴과 객체 리터럴 모두를 사용할 수 있어 문법적인 측면에서 유용하고 편리하다. Vuex에서 선언한 속성을 이름 변경 없이 그대로 컴포넌트에 연결할 때에는 배열 리터럴이 편리하다. 반면 선언한 속성을 컴포넌트의 특정 메서드에다 연결할 때에는 객체 리터럴이 편리하다. 
>
> 사용 예시는 다음과 같다.

```javascript
// 배열 리터럴
...mapMutations([
    'clickBtn',
    'addNumber'
])
```

> `clickBtn`과 `addNumber`의 의미는 각각 `clickBtn: clickBtn`, `addNumber: addNumber`와 같다. 이때 인자가 있다 하더라도, 인자를 생략해도 괜찮다.

```javascript
// 객체 리터럴
...mapMutations({
    popupMsg: 'clickBtn'
})
```

> 위의 예시에서는 store의 mutations 속성의 이름인 `clickBtn`을 컴포넌트의 `popupMsg` 메서드로 연결하였다.





#### mapState

------

```javascript
// App.vue
import { mapState } from 'vuex'

computed() {
    ...mapState(['num'])
    // num() { return this.$store.state.num; }
}

// store.js
state: {
    num: 10
}
```

```html
<!-- <p>{{ this.$store.state.num }}</p> -->
<p>{{ this.num }}</p>
```





#### mapGetters

------

```javascript
// App.vue
import { mapGetters } from 'vuex'

computed() { ...mapGetters(['reverseMessage']) }

// store.js
getters: {
    reverserMessage(state) {
        return state.msg.split('').reverse().join('');
    }
}
```

```html
<!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
<p>{{ this.reverseMessage }}</p>
```





#### mapMutations

------

```javascript
// App.vue
import { mapMutations } from 'vuex'

methods: {
    ...mapMutations(['clickBtn']),
    authLogin() {},
    displayTable() {}
}

// store.js
mutations: {
    clickBtn(state) {
        alert(state.msg);
    }
}
```

```html
<button @click="clickBtn">popup message</button>
```





#### mapActions

------

```javascript
// App.vue
import { mapActions } from 'vuex'

methods: {
    ...mapActions(['delayClickBtn']),
}
    

// store.js
actions: {
    delayClickBtn(context) {
        setTimeout(() => context.commit('clickBtn'), 2000)
    }
}
```

```html
<button @click="delayClickBtn">
    delay popup message
</button>
```

