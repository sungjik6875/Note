<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
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
</style>
