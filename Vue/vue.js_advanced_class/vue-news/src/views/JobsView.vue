<template>
  <div>
    <p v-for="job in fetchedJobs">
      <a :href="job.url" target="_blank">{{ job.title }}</a>
      <span> | {{ job.time_ago }} by {{ job.domain }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([
      'FETCH_JOBS'
    ])
  },
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  }
}
</script>

<style>

</style>
