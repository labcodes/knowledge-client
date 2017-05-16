<template>
  <nav class="nav has-shadow">
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
        v-if="!logged"
        class="nav-item"
        title="Login"
        to="/"
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

      <!-- <button
        v-if="logged"
        class="button is-default nav-item"
        @click="logout">
        Logout
      </button> -->

      <router-link
        v-if="logged"
        class="nav-item"
        title="Logout"
        to="/"
        exact
        @click.native="logout">
        Logout
      </router-link>
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
  %active {
    background-color: #00D1B2;
    border-color: transparent;
    color: #FFFFFF;
  }

  .router-link-active {
    @extend %active;
  }

  .nav-right {
    .nav-item {
      transition: all, .25s, linear;
      border-radius: 0 0 5px 5px;

      &:hover {
        @extend %active;
      }
    }
  }
</style>
