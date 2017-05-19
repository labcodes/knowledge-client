import Vue from 'vue';
import Router from 'vue-router';

// Pages
import HomePage from '../pages/Home';
import LinksPage from '../pages/Links';
import LoginPage from '../pages/Login';

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
      component: LoginPage,
    },
    {
      path: '/links',
      name: 'Links',
      component: LinksPage,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },
  ],
});
