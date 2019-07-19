<template>
  <div>
    {{ askInfo }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    const askId = this.$route.params.askId;
    this.FETCH_ASKINFO(askId);
  },
  computed: {
    ...mapState([
      'askInfo'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_ASKINFO'
    ])
  }
}
</script>

<style scoped>

</style>
