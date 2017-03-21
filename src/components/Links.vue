<template>
  <section class="section">
    <div v-for="link in linksArray">
      <kn-link-card>
        <h1 slot="card-title">
          {{link.title}}
        </h1>

        <small slot="card-date">
          {{link.published_at}}
        </small>

        <p slot="card-description">
          {{link.description}}
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
  </section>
</template>

<script>
import knLinkCard from './LinkCard';

export default {
  name: 'links',

  components: {
    knLinkCard,
  },

  data() {
    return {
      linksArray: [],
    };
  },

  mounted() {
    this.linksArray.push({
      title: 'Aqui vem um título',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, itaque',
      author: 'Alessandro Henrique',
      published_at: '2014-11-11T08:40:51.620Z',
      tags: [
        {
          name: 'Labcodes',
          url: 'google.com.br',
        },
        {
          name: 'Python',
          url: 'google.com.br',
        },
      ],
    });
  },

};
</script>

<style scoped></style>
