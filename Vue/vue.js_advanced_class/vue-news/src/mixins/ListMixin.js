import ListItem from '../components/ListItem';
import LoaderBus from '../utils/loader';


export default {
  // 재사용할 컴포넌트 옵션, 로직
  components: {
    ListItem,
  },
  mounted() {
    LoaderBus.$emit('end:loader');
  }
}