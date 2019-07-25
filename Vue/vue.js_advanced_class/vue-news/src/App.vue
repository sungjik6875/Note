<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name='page'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import AskView from './views/AskView';
import JobsView from './views/JobsView';
import NewsView from './views/NewsView';
import UserView from './views/UserView';
import ItemView from './views/ItemView';


export default {
  name: 'app',
  components: {
    ToolBar,
    AskView,
    JobsView,
    NewsView,
    UserView,
    ItemView
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
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
