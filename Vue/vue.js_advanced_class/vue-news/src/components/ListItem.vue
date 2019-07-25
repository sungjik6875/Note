<template>
  <div>
    <ul class="item-list">
      <li class="post" v-for="item in ListItem">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url" target="_blank">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <span class="link-text">
            {{ item.time_ago }} by 
            <router-link v-if="item.user" :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url" target="_blank">
              {{ item.domain }}
            </a> 
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedList'
    ]),
    ListItem() {
      return this.fetchedList;
    },
  }
}
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style-type: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.item-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
