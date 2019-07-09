<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow todoBox" v-bind:key="todoItem.item" v-for="(todoItem, index) in this.$store.state.todoItems">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleTodoItem(todoItem, index)">
          <i v-if="todoItem.completed" class="fas fa-check"></i>
          <i v-else class="far fa-ellipsis-h"></i>
        </span>
        <span class="todoItem" v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodoItem(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodoItem(todoItem, index) {
      this.$store.commit('removeTodoItem', { todoItem, index });
    },
    toggleTodoItem(todoItem, index) {
      this.$store.commit('toggleTodoItem', { todoItem, index });
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.todoBox {
  background-color: white;
  transition: background-color, 1s;
}
.todoBox:hover {
  background-color: aquamarine;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.todoItem {
  margin-left: 10px;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #131313;
}
.removeBtn:hover {
  color: #de4343;
}

/* list transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>