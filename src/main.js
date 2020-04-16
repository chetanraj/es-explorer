import Vue from 'vue';
//! Other components
import VuePrism from 'vue-prism';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { store } from '../store';

Vue.config.productionTip = false;
Vue.use(VuePrism);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
