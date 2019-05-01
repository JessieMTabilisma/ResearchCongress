import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueCountdown from '@chenfengyuan/vue-countdown';

import 'vuesax/dist/vuesax.css';
Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
