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
        class="card-footer-item btn-copy"
        @click="copyToClipboard">

        <span class="icon">
          <i class="fa fa-clipboard"></i>
        </span>
      </a>

      <a
        title="Click to share with Facebook."
        class="card-footer-item"
        :href="fbLink" target="_blank">

        <span class="icon">
          <i class="fa fa-facebook"></i>
        </span>
      </a>

      <a
        title="Click to share with Twitter."
        class="card-footer-item"
        :href="twLink" target="_blank">

        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </footer>
  </aside>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: 'link-card',

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      fbLink: '',
      twLink: '',
    };
  },

  mounted() {
    this.clipboard = new Clipboard('.btn-copy');
  },

  beforeDestroy() {
    this.clipboard.destroy();
  },

  methods: {
    copyToClipboard(event) {
      event.target.setAttribute('data-clipboard-text', this.card.url);
    },

    shareFacebook() {
      const obj = this.makeUrl();
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${obj.postUrl}`;

      return shareUrl;
    },

    shareTwitter() {
      const obj = this.makeUrl();
      const shareUrl = `https://twitter.com/intent/tweet?text=${obj.title} ${obj.postUrl}`;

      return shareUrl;
    },

    makeUrl() {
      const title = this.card.title.replace(/\s/g, '-');
      const postUrl = this.card.url;

      return {
        title,
        postUrl,
      };
    },
  },
};
</script>

<style scoped>
</style>
