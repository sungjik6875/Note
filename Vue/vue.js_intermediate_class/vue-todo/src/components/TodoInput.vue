<template>
  <div class="inputBox shadow" v-on:mouseenter="focusOn">
    <input type="text" ref="inputTodo" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
    <span class="addContainer" v-on:click="addTodoItem">
      <i class="addBtn fas fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        갓수니?
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      
      <div slot="body">
        할 일을 입력하세요.<br>혹시 할 일이 없으신가요?
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
  data: function() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodoItem: function() {
      // 저장
      if (this.newTodoItem !== "") {
        // 상위 메소드로 연결시키기, 인자는 뒤에 추가한다.
        this.$emit('addTodoItem', this.newTodoItem);
         // 초기화, 단일책임 디자인 패턴
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
      // 포커스
      this.focusOn();
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
    focusOn: function() {
      this.$refs.inputTodo.focus();
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50p;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
  float: right;
  padding-top: 11px;
}
.closeModalBtn:hover {
  color: #6478FB;
}
</style>
