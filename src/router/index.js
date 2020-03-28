import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import pubgGame from '@/components/pubgGame.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },

    {
        path:'/game',
        component:pubgGame,
     }

  

  ],






});
