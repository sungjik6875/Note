<template>
  <div>
    <user-profile>
      <div slot="userName">
        {{ userName.id }}
      </div>

      <template slot="time">
        {{ userName.created }}
      </template>

      <div slot="karma">
        Karma : {{ userName.karma }}
      </div>
    </user-profile>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserProfile from '../components/UserProfile';

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
  },
  components: {
    UserProfile,
  }
}
</script>

<style scoped>

</style>
