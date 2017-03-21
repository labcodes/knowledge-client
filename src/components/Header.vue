<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        Knowledge
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
      @click="toggleNavbar()"
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
        class="nav-item"
        title="Login"
        to="/login"
        exact>
        Login
      </router-link>

      <router-link
        class="nav-item"
        title="Links"
        to="/links"
        exact>
        Links
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'header',

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
  },
};
</script>

<style></style>
