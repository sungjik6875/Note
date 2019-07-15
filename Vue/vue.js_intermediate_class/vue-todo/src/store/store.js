import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp'

// use는 vue의 플러그인 기능을 추가하고자 할 때 사용
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp: todoApp
  }
});