<template>
  <div id="app">
    <kn-header :logged="isLogged"></kn-header>
    <router-view></router-view>
    <kn-footer></kn-footer>
  </div>
</template>

<script>
  // Components
  import knHeader from './components/Header';
  import knFooter from './components/Footer';

  // Services
  import Localstorage from './assets/js/Localstorage';
  import ApiService from './assets/js/ApiService';
  import Event from './assets/js/Event';
  import Auth from './assets/js/Auth';
  import Alert from './assets/js/Alert';

  export default {
    name: 'app',

    components: {
      knHeader,
      knFooter,
    },

    data() {
      return {
        isLogged: false,
      };
    },

    mounted() {
      this.api = new ApiService();
      this.storage = new Localstorage('userInfo');

      if (this.storage.get()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }

      Event.$on('login', this.handleLogin);
      Event.$on('logout', this.handleLogout);
      Event.$on('user_logged', this.handleUserLogged);
      Event.$on('new_link', this.handleLink);
      Event.$on('error', this.handleError);
    },

    beforeDestroy() {
      Event.$off('login');
      Event.$off('logout');
      Event.$off('user_logged');
      Event.$off('new_link');
      Event.$off('error');
    },

    methods: {
      handleLogin(data) {
        this.$Progress.start();

        this.auth = new Auth(data);
        this.auth.login();
      },

      handleLogout() {
        this.storage.clear();

        this.$router.push('/');

        this.isLogged = false;
      },

      handleUserLogged(data) {
        this.storage.set(data);
        this.isLogged = true;

        this.$router.push('/links');

        this.$Progress.finish();
      },

      handleLink(data) {
        this.api.addLink(data);

        this.api.getLinks();

        this.$Progress.finish();
      },

      handleError(data) {
        const modal = new Alert(data);
        modal.error();
      },
    },
  };
</script>

<style lang="scss">
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .section {
    min-height: 380px;
  }

  @import "../node_modules/bulma/bulma.sass";
  @import "../src/assets/css/sweetalert.scss";
</style>
