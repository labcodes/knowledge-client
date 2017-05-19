<template>
  <div>
    <kn-subheader title="Links" subtitle="">
    </kn-subheader>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">Últimos Links</h1>
          <h2 class="subtitle">Até hoje temos {{linksArray.length}} links.</h2>
        </div>

        <aside v-for="link in linksArray">
          <kn-card :card="link">
            <h1 slot="card-title">
              {{link.title}}
            </h1>

            <small slot="card-date">
              {{link.published_at | moment("from", "now", true)}}
            </small>

            <a
              class="link-url"
              :href="link.url"
              target="_blank"
              slot="card-description">
              {{link.url}}
            </a>

            <a
              slot="card-tags"
              v-for="tag in link.tags"
              target="_blank"
              class="tag"
              :href="tag.url">

              #{{tag.name}}
            </a>
          </kn-card>
        </aside>

        <kn-fab-button></kn-fab-button>
      </div>
    </section>
  </div>

</template>

<script>
  // Components
  import knCard from '../components/Card';
  import knFabButton from '../components/FabButton';
  import knSubheader from '../components/Subheader';

  // Assets
  import ApiService from '../assets/js/ApiService';
  import Event from '../assets/js/Event';

  export default {
    name: 'Links',

    components: {
      knCard,
      knFabButton,
      knSubheader,
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

<style scoped>
  .heading {
    margin-bottom: 40px;
  }

  .link-url {
    display: block;
    margin: 10px auto;
  }

  .tag {
    margin-right: 5px;
  }

  .tag:hover {
    background-color: #00d1b2;
    color: #FFFFFF;
  }
</style>
