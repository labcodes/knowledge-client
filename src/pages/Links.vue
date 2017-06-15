<template>
  <div>
    <kn-subheader
      title="Links"
      subtitle="Últimos links postados.">
    </kn-subheader>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="heading column">
            <h1 class="title">
              Até agora temos <span>{{allLinks.length}}</span> links
            </h1>

            <h2 class="subtitle" v-if="tagSearch.length">
              Existe uma busca por: <span class="tag-search">#{{route}}</span> que retornou {{tagSearch.length}} links</h2>

              <span
                v-if="tagSearch.length"
                @click="removeFilter"
                class="remove-filter">
                limpar filtros.
              </span>
          </div>
        </div>

        <div class="columns"
          v-if="allLinks.length <= 0">
          <div class="column">
            <spinner
              size="big"
              line-fg-color="#00D1B2"
              message="">
            </spinner>
          </div>
        </div>

        <div class="columns"
          v-if="allLinks.length > 0">
          <div class="column">
            <kn-card-filter></kn-card-filter>
          </div>

          <div class="column">
            <aside
              class="card-component"
              v-for="link in allLinks">

              <kn-card :card="link">
                <img
                  :src="link.author_image"
                  :alt="link.author"
                  slot="card-image">

                <h1 slot="card-title">
                  {{link.title}}
                </h1>

                <small slot="card-date">
                  <i
                    class="fa fa-clock-o"
                    aria-hidden="true">
                  </i>

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
                  @click="handleTag(tag)">

                  #{{tag}}
                </a>
              </kn-card>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <kn-fab-button></kn-fab-button>
    <kn-modal :active="modalActive"></kn-modal>
  </div>
</template>

<script>
  // Components
  import Spinner from 'vue-simple-spinner';

  import KnModal from '../components/Modal';
  import knCard from '../components/Card';
  import knFabButton from '../components/FabButton';
  import knSubheader from '../components/Subheader';
  import knCardFilter from '../components/CardFilter';

  // Assets
  import ApiService from '../assets/js/ApiService';
  import Event from '../assets/js/Event';

  export default {
    name: 'Links',

    components: {
      Spinner,
      knCard,
      knFabButton,
      knSubheader,
      KnModal,
      knCardFilter,
    },

    data() {
      return {
        allLinks: [],
        linksArray: [],
        tagSearch: [],
        route: null,
        modalActive: false,
      };
    },

    created() {
      this.$Progress.start();
    },

    mounted() {
      this.api = new ApiService();
      this.api.getLinks();

      Event.$on('filter_by', this.handleFilterBy);
      Event.$on('links_list', this.handleList);
      Event.$on('clear_filter', this.handleClearFilter);
      Event.$on('searched_links', this.handleSearch);
    },

    beforeDestroy() {
      Event.$off('filter_by');
      Event.$off('links_list');
      Event.$off('clear_filter');
      Event.$off('searched_links');
    },

    methods: {
      handleList(array) {
        this.allLinks = [];

        array.forEach((obj) => {
          const item = obj;

          if (item.tags) {
            item.tags = item.tags.split(', ');
          }

          this.getAuthorImage(item);

          this.allLinks.push(item);

          this.$Progress.finish();
        });

        this.linksArray = this.allLinks.slice(0);
      },

      getAuthorImage(item) {
        const linkAuthor = item;

        switch (linkAuthor.author) {
          case 'thulio':
            linkAuthor.author_image = 'https://avatars0.githubusercontent.com/u/2343288?v=3&s=460';
            break;

          case 'renato':
            linkAuthor.author_image = 'https://avatars1.githubusercontent.com/u/613912?v=3&s=460';
            break;

          case 'fernando':
            linkAuthor.author_image = 'https://avatars3.githubusercontent.com/u/1887601?v=3&s=460';
            break;

          case 'nicolle':
            linkAuthor.author_image = 'https://avatars2.githubusercontent.com/u/3246075?v=3&s=460';
            break;

          case 'alessandro':
            linkAuthor.author_image = 'https://avatars1.githubusercontent.com/u/8882260?v=3&s=460';
            break;

          case 'débora':
            linkAuthor.author_image = 'https://avatars1.githubusercontent.com/u/5848493?v=3&s=460';
            break;

          case 'josé carlos':
            linkAuthor.author_image = 'https://avatars2.githubusercontent.com/u/1657123?v=3&s=460';
            break;

          default:
            break;
        }
      },

      handleTag(name) {
        this.tagSearch = [];
        this.tagSearch.push(name.toLowerCase());

        this.route = name.toLowerCase();

        this.filterBy(this.tagSearch[0]);

        this.$router.push(`/links/page/${this.tagSearch}`);
      },

      filterBy(tag) {
        this.api.getLinksByTag(tag);
      },

      handleSearch(array) {
        this.tagSearch = array;
      },

      handleFilterBy(author) {
        const newArray = this.linksArray.filter(post => post.author === author);

        this.allLinks = newArray;
      },

      handleClearFilter() {
        this.allLinks = this.linksArray;
      },

      removeFilter() {
        this.tagSearch = [];
        this.$router.push('/links/');
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

  .tag:hover, .tag.is-active {
    background-color: #00d1b2;
    color: #FFFFFF;
  }

  .tag-search {
    color: #00d1b2;
  }

  .remove-filter {
    cursor: pointer;
    color: #00d1b2;
  }

  .content h1 {
    font-size: 1.4em;
  }

  small {
    font-size: 1.2em;
    vertical-align: top;
    color: #848484;
  }
</style>
