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



##### state를 mutations를 통해 변경해야 하는 이유

> 여러 개의 컴포넌트에서 아래의 예시와 같이 state 값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다. 

```javascript
methods: {
	increaseCounter() { this.$store.state.counter++; }
}
```

> 위와 같은 경우 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵다. 따라서 뷰의 반응성을 거스르지 않게 명시적으로 상태변화를 수행한다. 이렇게 함으로써 디버깅, 테스팅을 더욱 수월하게 할 수 있다.





#### actions

------

> 비동기 처리 로직을 선언하는 메서드이다. 데이터 요청, Promist, ES6 async와 같은 비동기 처리는 모두 actions에 선언한다.

```javascript
// store.js
state: {
	num: 10
},
mutations: {
    doubleNumber(state) {
        state.num * 2;
    }
},
action: {
    delayDoubleNumber(context) { 
        // context로 store의 메서드와 속성에 접근한다.
        context.commit('doubleNumber');
    }
}

// App.vue
this.$store.dispatch('delayDoubleNumber');
```

> dispatch를 통해 action을 호출하여 수행할 수 있다. action은 context라는 기본인자를 받는다. 이 인자를 통해 action에서 store의 메서드나 속성에 접근할 수 있다.
>
> 위의 예시에서는 action을 통해 mutations에 접근하고, mutations을 통해 state에 접근하는 기본적인 로직이 구현되었다.
>
> 다른 예시를 보자.

```javascript
// store.js
mutations: {
    addCounter(state) {
        state.counter++
    },
},
actions: {
    delayedAddCounter(Context) {
        setTimeout(() => context.commit('addCounter'), 2000);
    }
}

// App.vue
methods: {
    incrementCounter() {
        this.$store.dispatch('delayedAddCounter');
    }
}
```

> 위의 예시에서도 actions, mutations, state의 순으로 접근하여 state를 변경하는 로직을 구현하였다.

```javascript
// store.js
mutations: {
    setData(state, fetchedData) {
        state.product = fetchedData;
    }
},
actions: {
    fetchProductData(context) {
        return axios.get('url address')
        .then(response => context.commit('setData', response));
    }
}

// App.vue
methods: {
    getProduct() {
        this.$store.dispatch('fetchProductData');
    }
}
```

> 위의 예시에서도 actions, mutations, state의 순으로 접근하여 state를 변경하는 로직을 구현하였다.



##### 비동기 로직을 actions에 선언해야 하는 이유

> 만약 여러 컴포넌트에서 mutations를 통해 시간 차를 두고 state를 변경하면 state 값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 구현한다.