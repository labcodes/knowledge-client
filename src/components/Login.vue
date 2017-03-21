<template>
  <section class="container-fluid">
    <div class="row justify-content-md-center">
      <h1>Welcome to Knowledge</h1>
    </div>

    <div class="row justify-content-md-center">
      <form @submit.prevent="handleLogin">
        <fieldset class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            class="form-control"
            placeholder="email@provider.com"
            id="email"
            required
            v-model="form.email">
        </fieldset>

        <fieldset class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="******"
            id="password"
            required
            pattern=".{6,}"
            title="6 characters minimum"
            v-model="form.password">
        </fieldset>

        <button
          type="submit"
          class="btn btn-primary">

          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    handleLogin() {
      console.warn(this.form);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
