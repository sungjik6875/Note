<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllItems">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAllItems() {
      this.$emit('clearAllItems')
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  transition: background-color, 1s;
}
.clearAllContainer:hover {
  background-color: blanchedalmond;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
