<template>
  <div>
    <ul>
      <slot-item v-for="dog in dogs">
        {{ dog }}
        <button v-if="dog === '사모예드'">Click</button>
      </slot-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from './components/SlotItem';

export default {
  data() {
    return {
      dogs: ['말라뮤트', '웰시코기', '사모예드', '리트리버', '보더콜리']
    }
  },
  components: {
    SlotItem,
  },
}
</script>