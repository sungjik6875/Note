<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile>
        <div slot="userName">
          {{ fetchedItem.user }}
        </div>

        <template slot="time">
          {{ fetchedItem.time_ago }}
        </template>
      </user-profile>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    const askId = this.$route.params.askId;
    this.FETCH_ASKINFO(askId);
  },
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_ASKINFO'
    ])
  },
  components: {
    UserProfile,
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
