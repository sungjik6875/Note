import Vue from 'vue';
import VueRouter from 'vue-router';

import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

// HOC
import CreateListView from '../views/CreateListView';

// Components with Mixin
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      // component: CreateListView('NewsView'),
      component: NewsView
    },
    { 
      path: '/news',
      name: 'news',
      // component: CreateListView('NewsView'),
      component: NewsView
    },
    {
      path: '/ask',
      name: 'ask',
      // component: CreateListView('AskView'),
      component: AskView
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: CreateListView('JobsView'),
      component: JobsView
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:askId',
      component: ItemView,
    }
  ]
});