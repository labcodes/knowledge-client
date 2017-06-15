<template>
  <div>
    <a
      class="button is-large fab-button"
      @click="openModal"
      title="Click to add a new link">

      <span class="icon is-large">
        <i class="fa fa-plus-circle"></i>
      </span>
    </a>
  </div>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'fab-button',

  data() {
    return {};
  },

  methods: {
    openModal() {
      Event.$emit('open_modal', true);
    },
  },
};
</script>

<style scoped>
  .fab-button {
    position: fixed;
    bottom: 2%;
    right: 2%;
    border-radius: 100%;
    z-index: 9;
  }
</style>
