<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://www.labcodes.com.br/static/core/imgs/logo500x216.svg" alt="Labcodes">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item" :href="repoUrl" target="_blank">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>

    <span
      class="nav-toggle"
      @click="toggleNavbar"
      :class="{ 'is-active': isActive }">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div
      class="nav-right nav-menu"
      :class="{ 'is-active': isActive }">

      <router-link
        class="nav-item"
        title="Home"
        to="/"
        exact>
        Home
      </router-link>

      <router-link
        v-if="!logged"
        class="nav-item"
        title="Login"
        to="/login"
        exact>
        Login
      </router-link>

      <router-link
        v-if="logged"
        class="nav-item"
        title="Links"
        to="/links"
        exact>
        Links
      </router-link>

      <a
        v-if="logged"
        class="nav-item"
        title="Logout"
        @click="logout">
        Logout
      </a>
    </div>
  </nav>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'header',

  props: {
    logged: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      isActive: false,
      repoUrl: 'https://github.com/labcodes/knowledge-client',
    };
  },

  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive;
    },

    logout() {
      Event.$emit('logout');
    },
  },
};
</script>

<style scoped lang="scss">
  .router-link-active {
    color: #00D1B2;
  }
</style>
