import { store } from '../store/index';
import LoaderBus from '../utils/loader';

export const navigationGuard = async (to, from, next) => {
    LoaderBus.$emit('start:loader');
    try {
      await store.dispatch('FETCH_LIST', to.name);
      next();
    } catch(error) {
      console.log(error);
    }
}