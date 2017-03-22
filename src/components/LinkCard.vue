<template>
  <aside class="card">
    <header class="card-header">
      <p class="card-header-title">
        <slot name="card-title"></slot>
      </p>
    </header>

    <div class="card-content">
      <div class="content">
        <slot name="card-description"></slot>

        <slot name="card-tags"></slot>

        <br>
        <slot name="card-date"></slot>
      </div>
    </div>

    <footer class="card-footer">
      <a
        title="Copy to clipboard."
        class="card-footer-item"
        @click="copyToClipboard">

        <span class="icon">
          <i class="fa fa-clipboard"></i>
        </span>
      </a>

      <a
        title="Click to share with Facebook."
        class="card-footer-item"
        @click="shareFacebook">

        <span class="icon">
          <i class="fa fa-facebook"></i>
        </span>
      </a>

      <a
        title="Click to share with Twitter."
        class="card-footer-item"
        @click="shareTwitter">

        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </footer>
  </aside>
</template>

<script>
export default {
  name: 'link-card',

  data() {
    return {
    };
  },

  methods: {
    copyToClipboard() {
      console.warn('Copiado para o clipboard.');
    },

    shareFacebook() {
      console.warn('Facebook.');
    },

    shareTwitter() {
      console.warn('Twitter.');
    },
  },
};
</script>

<style scoped>
</style>
