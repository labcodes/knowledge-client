<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="http://dummyimage.com/128x128/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image">
        </figure>
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <strong><slot name="card-title"></slot></strong>
            <small><slot name="card-date"></slot></small>
            <br>

            <slot name="card-description"></slot>
            <slot name="card-tags"></slot>
          </p>
        </div>

        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item"
              :href="fbLink"
              target="_blank">
              <span class="icon is-small">
                <i class="fa fa-facebook"></i>
              </span>
            </a>

            <a class="level-item"
              :href="twLink"
              target="_blank">
              <span class="icon is-small">
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
  .box {
    margin: 20px auto;
  }
</style>
