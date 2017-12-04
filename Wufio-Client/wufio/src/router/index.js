import Vue from 'vue';
import Router from 'vue-router';
import RescueMain from '@/components/RescueMain';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RescueMain',
      component: RescueMain,
    },
  ],
});
