<template>
  <div>
    <kn-subheader
      title="Home"
      subtitle="Seja bem vindo..">
    </kn-subheader>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">Home Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import knSubheader from '../components/Subheader';

  export default {
    name: 'Home',

    components: {
      knSubheader,
    },

    data() {
      return {};
    },
  };
</script>

<style scoped></style>
