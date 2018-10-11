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
          <li v-for="member in team">
            <input
              type="radio"
              name="members"
              :value="member.value"
              :id="member.value"
              @change="filterBy"
            >
            <label :for="member.value">
              {{member.label}}
            </label>
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
      team: [
        { value: 'nicysneiros', label: 'Nicolle' },
        { value: 'debscorreia', label: 'Débora' },
        { value: 'fernandolins', label: 'Fernando' },
        { value: 'renatooliveira', label: 'Renato' },
        { value: 'thulioph', label: 'Thulio' },
        { value: 'cacoze', label: 'José' },
        { value: 'danielafalcone', label: 'Dani' },
        { value: 'gsilva49', label: 'Nivaldo' },
        { value: 'luanfonceca', label: 'Luan' },
        { value: 'luizbraga', label: 'Luiz' },
        { value: 'maribedran', label: 'Mari' },
        { value: 'olgapinheiro', label: 'Olga' },
      ],
    };
  },

  methods: {
    filterBy(evt) {
      const value = evt.target.value;
      Event.$emit('filter_by', value);
    },

    removeFilterBy() {
      Event.$emit('filter_by', null);
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
