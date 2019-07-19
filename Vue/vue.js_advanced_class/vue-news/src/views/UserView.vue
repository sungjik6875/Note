<template>
  <div>
    <p>name : {{ userName.id }}</p>
    <p>karma : {{ userName.karma }}</p>
    <p>created: {{ userName.created }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    console.log(this.$route.params.id);
    const userName = this.$route.params.id
    this.FETCH_USER(userName);
  },
  computed: {
    ...mapState([
      'userName'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_USER'
    ])
  }
}
</script>

<style scoped>

</style>
