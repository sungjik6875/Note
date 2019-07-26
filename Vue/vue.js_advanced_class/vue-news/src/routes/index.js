import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';

// HOC
import CreateListView from '../views/CreateListView';

// Navigation Guard
import { navigationGuard } from '../utils/navigationGuard';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      // component: CreateListView('NewsView'),
      component: NewsView,
      beforeEnter: navigationGuard
    },
    { 
      path: '/news',
      name: 'news',
      // component: CreateListView('NewsView'),
      component: NewsView,
      beforeEnter: navigationGuard
    },
    {
      path: '/ask',
      name: 'ask',
      // component: CreateListView('AskView'),
      component: AskView,
      beforeEnter: navigationGuard
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: CreateListView('JobsView'),
      component: JobsView,
      beforeEnter: navigationGuard
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