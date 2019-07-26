<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name='page'>
      <router-view></router-view>
    </transition>
    <loader 
      :loading="loading"
      :color="color"
      :size="size"
    >
    </loader>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Loader from './components/Loader';
import LoaderBus from './utils/loader';

export default {
  name: 'app',
  data() {
    return {
      // loader options
      loading: false,
      color: '#42b883',
      size: '15px',
      margin: '2px',
      radius: '2px'
    }
  },
  methods: {
    startLoader() {
      this.loading = true;
    },
    endLoader() {
      this.loading = false;
    }
  },
  created() {
    LoaderBus.$on('start:loader', this.startLoader);
    LoaderBus.$on('end:loader', this.endLoader);
  },
  beforeDestroy() {
    LoaderBus.$off('start:loader');
    LoaderBus.$off('end:loader');
  },
  components: {
    ToolBar,
    Loader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
