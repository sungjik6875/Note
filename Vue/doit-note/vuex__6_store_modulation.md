#### Vuex의 모듈화

------

```javascript
// store.js
import vue from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})
```

> 위의 코드에서는 store의 각 속성별로 모듈화를 하지 않았다. 각 속성별로 모듈화한 코드는 다음과 같다.

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from 'store/getters.js'
import * as mutations from 'store/mutations.js'
import * as actionds from 'store/actions.js'

export const store = new Vuex.Store({
    state: {},
    getters: getters,
    mutations: mutations,
    actions: actions
})
```





#### store의 분리

------

```javascript
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import todo from 'modules/todo.js'

export const store = new Vuex.Store({
    modules: {
        moduleA: todo, // 모듈 명칭 : 모듈 파일명
        todo  // todo : todo
    }
});

/ todo.js
const state = {}
const getters = {}
const mutations = {}
const actions = {}
```

