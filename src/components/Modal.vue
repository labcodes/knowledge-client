<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>

    <div class="modal-content">
      <div class="heading">
        <h1 class="title">Adicionar Links</h1>
        <h2 class="subtitle">
          Utilize o formulário abaixo para adicionar um link, ou utilize a nossa <strong><a target="_blank" href="https://github.com/labcodes/knowledge-extension">extensão para o navegador</a></strong>.
        </h2>
      </div>

      <form @submit.prevent="addNewLink">
        <fieldset class="field">
          <label for="url" class="label">URL</label>
          <input
            id="url"
            class="input"
            type="url"
            required
            placeholder="Your URL here."
            v-model="form.url">
        </fieldset>

        <fieldset class="field">
          <label for="tags" class="label">Tags</label>
          <input
            class="input"
            id="tags"
            type="text"
            required
            placeholder="Tags here."
            v-model="form.tags">
        </fieldset>

        <button type="submit" class="button is-primary">
          Add link
        </button>
      </form>
    </div>

    <button
      type="button"
      class="modal-close"
      @click.prevent="closeModal">
    </button>
  </div>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'modal',

  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    isActive() {
      return this.$props.active;
    },
  },

  data() {
    return {
      form: {
        url: '',
        tags: [],
      },
    };
  },

  methods: {
    closeModal() {
      this.active = !this.active;
      setTimeout(() => this.clearFields());
    },

    clearFields() {
      Object.assign(this.$data, this.$options.data());
    },

    addNewLink() {
      Event.$emit('new_link', this.form);

      this.closeModal();
    },
  },
};
</script>

<style scoped>
  fieldset {
    border: none;
  }

  h1, h2, label {
    color: #FFFFFF;
  }

  strong {
    color: #00d1b2;
  }

  a {
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    transition: border .25s linear;
  }

  a:hover {
    color: #00d1b2;
    padding-bottom: 4px;
    border-bottom-color: #00d1b2;
  }

  .heading {
    margin-bottom: 30px;
  }
</style>
