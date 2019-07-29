import Vue from 'vue'
import App from './App.vue'
import Chart from './plugins/chart';

Vue.config.productionTip = false

Vue.use(Chart);

new Vue({
  render: h => h(App),
}).$mount('#app')
