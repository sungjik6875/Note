<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addTodoItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
      v-on:removeTodoItem="removeTodoItem"
      v-on:toggleTodoItem="toggleTodoItem"
    ></TodoList>
    <TodoFooter v-on:clearAllItems="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  data() {
    return {
      todoItems : []
    }
  },
  methods: {
    addTodoItem(todoItem) {
      const todo = { completed: false, item: todoItem }
      // localStorage.setItem(this.newTodoItem, todo); : 객체를 직접 DB에 집어넣으면 안된다.
      localStorage.setItem(todoItem, JSON.stringify(todo));  
      this.todoItems.push(todo);   
    },
    removeTodoItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
      // console.log(todoItem);
    },
    toggleTodoItem(todoItem, index) {
      // todoItem이 앱에 존재하므로 this로 접근한다.
      // event로 하위 컴포넌트에서 받고 다시 props로 전달하는 패턴은 바람직하지 않으므로 리팩토링 한 것.
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    } else {
      alert("할 일을 등록해주세요.")
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
