import { mapActions } from 'vuex';
import { setTimeout } from 'timers';

import LoaderBus from '../utils/loader';
import ListItem from '../components/ListItem';


export default {
  // 재사용할 컴포넌트 옵션, 로직
  methods: {
    ...mapActions([
      'FETCH_LIST'
    ])
  },
  components: {
    ListItem,
  },
  created() {
    LoaderBus.$emit('start:loader');
    this.FETCH_LIST(this.$route.name)
      .then(data => {
        LoaderBus.$emit('end:loader');
        console.log('fetched');
      })
      .catch(error => {
        console.log(error);
      })
  },
}