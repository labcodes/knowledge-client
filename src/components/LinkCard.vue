<template>
  <section class="columns">
    <div class="column">
      <aside class="card">
        <header class="card-header">
          <p class="card-header-title">
            <slot name="card-title"></slot>
          </p>

          <a class="card-header-icon" @click="copyToClipboard">
            <span class="icon">
              <i class="fa fa-clipboard"></i>
            </span>
          </a>
        </header>

        <div class="card-content">
          <div class="content">
            <slot name="card-description"></slot>

            <slot name="card-tags"></slot>

            <br>
            <slot name="card-date"></slot>
          </div>
        </div>

        <footer class="card-footer">
          <!-- <a class="card-footer-item" href=""></a> -->
          <!-- <slot name="card-tags"></slot> -->
        </footer>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: 'link-card',

  data() {
    return {
    };
  },

  methods: {
    copyToClipboard() {
      console.warn('Copiado para o clipboard.');
    },
  },
};
</script>

<style scoped>
</style>
