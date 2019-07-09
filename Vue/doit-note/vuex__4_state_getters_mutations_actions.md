#### Vuex의 기술 요소

------

* state : 여러 컴포넌트에 공유되는 데이터, `data`와 유사
* getters : 연산된 state 값을 접근하는 속성, `computed`와 유사
* mutation : state 값을 변경하는 이벤트 로직이나 메서드, `methods`와 유사
* actions : 비동기 처리 로직을 선언하는 메서드, `async methods`와 유사



#### state

------

> 여러 컴포넌트 간에 공유하는 데이터로, 상태라고도 한다. Vuex의 state는 Vue의 data와 유사하다.

```javascript
// Vue
data: {
    message: 'Hello Vue.js!'
}

// Vuex
state: {
    message: 'Hello Vue.js!'
}
```

> 그러나 데이터에 접근하는 법은 아래와 같은 차이가 있다.

```html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```



#### getters

------

> state 값을 접근하는 속성이자 `computed()`처럼 미리 연산된 값을 접근하는 속성

```javascript
// store.js
state: {
    num: 10
},
getters: {
    getNumber(state) {
        return state.num;
    },
    doubleNumber(state) {
		return state.num * 2;
    }
}
```

> getters를 통해 state 값에 간접적으로, 다양하게 접근할 수 있다.

```html
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```



#### mutations

------

> state의 값을 변경할 수 있는 유일한 방법이자 메서드. mutation은 `commit()`으로 동작시킨다. commit의 첫번째 인자는 무조건 state로 고정된다.

```javascript
// store.js
state: { num: 10 },
mutations: {
    printNumbers(state) {
        return state.num
    },
    setNumbers(state, anotherNum) {
        return state.num + anotherNum;
    }
}

// App.vue
this.$store.commit('printNumbers'); 		// 10 반환
this.$store.commit('sumNumbers', 20); 		// 30 반환
```



> mutation을 통해 state를 변경하고자 할때, 인자를 통해 변경하는 것이 가능하다. 다음의 예시를 보자.

```javascript
// store.js
state: { storeNum: 10 },
mutations: {
    modifyState(state, payload) {
        console.log(payload.str);
        return state.storeNum += payload.num;
    }
}

// App.vue
this.$store.commit('modifyState', {
    str: 'passed from Payload',
    num: 20
})
```

> 위의 예시와 같이 객체 리터럴을 통해 한번에 여러 개의 인자를 전달하는 것도 가능하다. mutation에서 state로 접근시에는 state가 인자로 들어가므로 state를 통한 직접 접근이 가능하다.