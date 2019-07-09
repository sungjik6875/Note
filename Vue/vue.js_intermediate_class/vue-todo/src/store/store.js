import Vue from 'vue';
import Vuex from 'vuex';

// use는 vue의 플러그인 기능을 추가하고자 할 때 사용
Vue.use(Vuex);

const storage = {
  fetch() {
    const todoItems = [];
    if (localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return todoItems;
  }
}


export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addTodoItem(state, todoItem) {
      const todo = { completed: false, item: todoItem }
      // localStorage.setItem(this.newTodoItem, todo); : 객체를 직접 DB에 집어넣으면 안된다.
      localStorage.setItem(todoItem, JSON.stringify(todo));  
      state.todoItems.push(todo);
    },
    removeTodoItem(state, todoItemArg) {
      localStorage.removeItem(todoItemArg.todoItem.item);
      state.todoItems.splice(todoItemArg.index, 1);
    },
    toggleTodoItem(state, todoItemArg) {
      state.todoItems[todoItemArg.index].completed = !state.todoItems[todoItemArg.index].completed;
      localStorage.removeItem(todoItemArg.todoItem.item);
      localStorage.setItem(todoItemArg.todoItem.item, JSON.stringify(todoItemArg.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});