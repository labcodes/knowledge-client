import Vue from 'vue';
import Router from 'vue-router';

// Components
import Hello from '../components/Hello';
import Login from '../components/Login';
import Links from '../components/Links';

Vue.use(Router);

export default new Router({
  mode: 'history', // removes the # from URL
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/links',
      name: 'Links',
      component: Links,
    },
  ],
});
