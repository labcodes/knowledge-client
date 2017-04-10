<template>
  <section class="is-half is-offset-one-quarter">
    <div class="column">
      <form @submit.prevent="handleLogin">
        <fieldset class="field">
          <label for="email" class="label">E-mail</label>
          <div class="control">
            <input
              type="email"
              class="input"
              placeholder="email@provider.com"
              id="email"
              required
              v-model="form.username">
          </div>
        </fieldset>

        <fieldset class="field">
          <label for="password" class="label">Password</label>
          <div class="control">
            <input
              type="password"
              class="input"
              placeholder="******"
              id="password"
              required
              pattern=".{6,}"
              title="6 characters minimum"
              v-model="form.password">
          </div>
        </fieldset>

        <button
          type="submit"
          class="button is-primary"
          :class="{ 'is-loading': form.isLoading }">
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'login',

  data() {
    return {
      form: {
        username: '',
        password: '',
        isLoading: false,
      },
    };
  },

  methods: {
    handleLogin() {
      this.form.isLoading = !this.form.isLoading;

      if (typeof this.form.username === 'string' && typeof this.form.password === 'string') {
        this.emitEvent();
      }

      this.data = this.$options.data();
    },

    emitEvent() {
      Event.$emit('login', this.form);
    },
  },

};
</script>

<style scoped>
  fieldset {
    border: none;
  }
</style>
