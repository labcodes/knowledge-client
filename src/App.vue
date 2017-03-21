<template>
  <div id="app">
    <kn-header></kn-header>
    <router-view></router-view>
  </div>
</template>

<script>
  // Components
  import knHeader from './components/Header';

  // Services
  import Event from './assets/js/Event';
  import Auth from './assets/js/Auth';

  export default {
    name: 'app',

    components: {
      knHeader,
    },

    mounted() {
      Event.$on('login', this.handleLogin);
    },

    beforeDestroy() {
      Event.$off('login');
    },

    methods: {
      handleLogin(data) {
        this.auth = new Auth(data);
        this.auth.login();
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
