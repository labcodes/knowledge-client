<template>
  <section class="section columns">
    <div v-for="link in linksArray" class="column is-3">
      <kn-link-card :card="link">
        <h1 slot="card-title">
          {{link.title}}
        </h1>

        <small slot="card-date">
          {{link.published_at}}
        </small>

        <p slot="card-description">
          {{link.url}}
        </p>

        <a
          slot="card-tags"
          v-for="tag in link.tags"
          target="_blank"
          :href="tag.url">

          #{{tag.name}}
        </a>
      </kn-link-card>
    </div>

    <kn-fab-button></kn-fab-button>
  </section>
</template>

<script>
import knLinkCard from './LinkCard';
import knFabButton from './FabButton';

import ApiService from '../assets/js/ApiService';
import Event from '../assets/js/Event';

export default {
  name: 'links',

  components: {
    knLinkCard,
    knFabButton,
  },

  data() {
    return {
      linksArray: [],
    };
  },

  mounted() {
    this.api = new ApiService();
    this.api.getLinks();

    Event.$on('links_list', this.handleList);
  },

  beforeDestroy() {
    Event.$off('links_list');
  },

  methods: {
    handleList(array) {
      this.linksArray = [];

      array.forEach((item) => {
        this.linksArray.push(item);
      });
    },
  },
};
</script>

<style scoped></style>
