<template>
  <div>
    <p v-for="ask in fetchedAsk">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
      <span> | {{ ask.time_ago }} by {{ ask.user }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.FETCH_ASK();
  },
  methods: {
    ...mapActions([
      'FETCH_ASK'
    ])
  },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
  }
}
</script>

<style>

</style>
