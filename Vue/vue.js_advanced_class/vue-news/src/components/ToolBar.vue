<template>
  <div class="header">
    <router-link to="/news">News |</router-link> 
    <router-link to="/ask"> Ask |</router-link> 
    <router-link to="/jobs"> Jobs </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  padding: 8px;
  background-color: #42b883;
  display: flex;
  color: white;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>
