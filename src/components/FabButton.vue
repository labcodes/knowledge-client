<template>
  <div>
    <kn-modal :active="modalActive"></kn-modal>

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
import KnModal from './Modal';

export default {
  name: 'fab-button',

  components: {
    KnModal,
  },

  data() {
    return {
      modalActive: false,
    };
  },

  methods: {
    openModal() {
      this.modalActive = !this.modalActive;
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
  }
</style>
