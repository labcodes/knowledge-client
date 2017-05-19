<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Subheader',

    props: {
      title: {
        type: String,
        required: false,
      },

      subtitle: {
        type: String,
        required: false,
      },
    },

    data() {
      return {};
    },
  };
</script>

<style scoped></style>
