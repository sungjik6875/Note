import ListView from './ListView';
import LoaderBus from '../utils/loader';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들 (ex. el, data, components ..)
    name,
    created() {
      LoaderBus.$emit('start:loader');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(data => {
          LoaderBus.$emit('end:loader');
          console.log('fetched');
        })
        .catch(error => {
          console.log(error);
        })
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}