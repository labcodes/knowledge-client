// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import VueMoment from 'vue-moment';

import App from './App';
import router from './router';

Vue.use(VueProgressBar, {
  color: '#00D1B2',
  failedColor: '#874b4b',
  thickness: '2px',
  location: 'top',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
});

Vue.use(VueMoment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
