<template>
  <div id="app">
    <kn-header :logged="isLogged"></kn-header>
    <router-view></router-view>
  </div>
</template>

<script>
  // Components
  import knHeader from './components/Header';

  // Services
  import Localstorage from './assets/js/Localstorage';
  import Event from './assets/js/Event';
  import Auth from './assets/js/Auth';

  export default {
    name: 'app',

    components: {
      knHeader,
    },

    data() {
      return {
        isLogged: false,
      };
    },

    mounted() {
      this.storage = new Localstorage('userInfo');

      if (this.storage.get()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }

      Event.$on('login', this.handleLogin);
      Event.$on('user_logged', this.handleUserLogged);
    },

    beforeDestroy() {
      Event.$off('login');
      Event.$off('user_logged');
    },

    methods: {
      handleLogin(data) {
        this.auth = new Auth(data);
        this.auth.login();

        this.$Progress.finish();
      },

      handleUserLogged(data) {
        console.warn('O usuário acabou de fazer login..', data);

        this.storage.set(data);
        this.isLogged = true;
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

  @import "../node_modules/bulma/bulma.sass";
</style>
