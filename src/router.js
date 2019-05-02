import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CallForPapers from './components/CallForPapers.vue';
import Registration from './components/Registration.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/call-for-papers',
      name: 'callforpapers',
      component: CallForPapers
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
});
