import Vue from 'vue';
import Router from 'vue-router';

// Components
import Login from '../components/Login';
import Links from '../components/Links';

// Pages
import HomePage from '../pages/Home';

// Services
import LocalStorage from '../assets/js/Localstorage';

Vue.use(Router);

// ====

const storage = new LocalStorage('userInfo');

function validateRoute(next) {
  const userInfo = storage.get();

  if (!userInfo) {
    // next(true);
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
      name: 'Home',
      component: HomePage,
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
