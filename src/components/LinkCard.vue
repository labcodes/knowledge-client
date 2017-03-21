<template>
  <section class="columns">
    <div class="column">
      <aside class="card">
        <header class="card-header">
          <p class="card-header-title">
            <slot name="card-title"></slot>
          </p>
        </header>

        <div class="card-content">
          <div class="content">
            <slot name="card-description"></slot>
          </div>
        </div>

        <footer class="card-footer">
          <slot name="card-tags"></slot>
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

};
</script>

<style scoped>
</style>
