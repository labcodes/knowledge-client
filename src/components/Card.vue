<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <slot name="card-image"></slot>
        </figure>
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <slot name="card-title"></slot>
            </strong>

            <small>
              <slot name="card-date"></slot>
            </small>

            <br>

            <slot name="card-description"></slot>
            <slot name="card-tags"></slot>
          </p>
        </div>

        <hr />

        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item btn-copy"
              title="Copy to Clipboard"
              @click="copyToClipboard"
              target="_blank">
              <span class="icon is-medium">
                <i class="fa fa-copy"></i>
              </span>
            </a>

            <a class="level-item"
              @click="shareFacebook"
              title="Share with Facebook"
              target="_blank">
              <span class="icon is-medium">
                <i class="fa fa-facebook"></i>
              </span>
            </a>

            <a class="level-item"
              @click="shareTwitter"
              title="Share with Twitter"
              target="_blank">
              <span class="icon is-medium">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
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
      fbLink: null,
      twLink: null,
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
      const parent = event.target.parentElement.parentElement;

      if (parent) {
        parent.setAttribute('data-clipboard-text', this.card.url);
      }
    },

    shareFacebook() {
      const linkUrl = this.$props.card.url;
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${linkUrl}`;

      this.share(shareUrl);
    },

    shareTwitter() {
      const linkUrl = this.$props.card;
      const shareUrl = `https://twitter.com/intent/tweet?text=${linkUrl.title} ${linkUrl.url}`;

      this.share(shareUrl);
    },

    share(url) {
      return window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
  .box {
    margin: 20px auto;
  }

  .image {
    border-radius: 5px;
    overflow: hidden;
  }
</style>
