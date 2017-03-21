import Vue from 'vue';
import Router from 'vue-router';

// Components
import Hello from '../components/Hello';
import Login from '../components/Login';
import Links from '../components/Links';

// Services
import LocalStorage from '../assets/js/Localstorage';

Vue.use(Router);

// ====

const storage = new LocalStorage('userInfo');

function validateRoute(next) {
  const userInfo = storage.get();

  if (!userInfo) {
    next({ path: '/' });
  } else {
    next(true);
  }
}

// ====

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
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },
  ],
});
