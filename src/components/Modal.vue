<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>

    <div class="modal-content">
      <div class="is-half is-offset-one-quarter">
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
      this.form.tags = this.form.tags.split(',').map(item => item.replace(' ', ''));

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

  label {
    color: #FFFFFF;
  }
</style>
