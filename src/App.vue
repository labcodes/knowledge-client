<template>
  <div id="app">
    <kn-header></kn-header>
    <router-view></router-view>
  </div>
</template>

<script>
import knHeader from './components/Header';

export default {
  name: 'app',

  components: {
    knHeader,
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
