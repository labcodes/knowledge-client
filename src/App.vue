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
    },

    beforeDestroy() {
      Event.$off('login');
    },

    methods: {
      handleLogin(data) {
        this.auth = new Auth(data);
        this.auth.login();

        this.$Progress.finish();
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
