<template>
  <div class="is-one-quarter">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Filter by author
        </p>
      </header>

      <div class="card-content">
        <ul>
          <li>
            <input
              id="alessandro"
              type="radio"
              value="alessandro"
              v-model="filter"
              @click="filterBy"
            >
            <label for="alessandro">Alessandro</label>
          </li>

          <li>
            <input
              id="nicolle"
              type="radio"
              value="nicolle"
              v-model="filter"
              @click="filterBy"
            >
            <label for="nicolle">Nicolle</label>
          </li>

          <li>
            <input
              id="debora"
              type="radio"
              value="debora"
              v-model="filter"
              @click="filterBy"
            >
            <label for="debora">Débora</label>
          </li>

          <li>
            <input
              id="fernando"
              type="radio"
              value="fernando"
              v-model="filter"
              @click="filterBy"
            >
            <label for="fernando">Fernando</label>
          </li>

          <li>
            <input
              id="renato"
              type="radio"
              value="renato"
              v-model="filter"
              @click="filterBy"
            >
            <label for="renato">Renato</label>
          </li>

          <li>
            <input
              id="jose"
              type="radio"
              value="jose"
              v-model="filter"
              @click="filterBy"
            >
            <label for="jose">José</label>
          </li>

          <li>
            <input
              id="thulio"
              type="radio"
              value="thulio"
              v-model="filter"
              @click="filterBy"
            >
            <label for="thulio">Thulio</label>
          </li>
        </ul>
      </div>

      <footer class="card-footer">
        <a class="card-footer-item"
          @click="removeFilterBy">
          remove filter
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'CardFilter',

  data() {
    return {
      filter: '',
    };
  },

  methods: {
    filterBy() {
      Event.$emit('filter_by', this.filter);
    },

    removeFilterBy() {
      this.filter = '';
      Event.$emit('clear_filter');
    },
  },
};
</script>

<style scoped>
 .card {
    margin-bottom: 20px;
  }

  .card li {
    list-style: none;
    height: 40px;
  }

  .card input {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .card-component h1 {
    margin-bottom: 10px;
  }

  input:checked ~ label {
    color: #00d1b2;
  }
</style>
