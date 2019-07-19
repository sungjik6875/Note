<template>
  <div>
    <p v-for="news in fetchedNews">
      <a :href="news.url" target="_blank">{{ news.title }}</a>
      <span> | {{ news.time_ago }} by 
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </span>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.FETCH_NEWS();
  },
  methods: {
    ...mapActions([
      'FETCH_NEWS'
    ])
  },
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  }
}
</script>

<style>

</style>
