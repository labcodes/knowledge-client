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
            <input id="alessandro" type="radio" name="filter">
            <label for="alessandro">Alessandro</label>
          </li>

          <li>
            <input id="nicolle" type="radio" name="filter">
            <label for="nicolle">Nicolle</label>
          </li>

          <li>
            <input id="debora" type="radio" name="filter">
            <label for="debora">Débora</label>
          </li>

          <li>
            <input id="fernando" type="radio" name="filter">
            <label for="fernando">Fernando</label>
          </li>

          <li>
            <input id="renato" type="radio" name="filter">
            <label for="renato">Renato</label>
          </li>

          <li>
            <input id="jose" type="radio" name="filter">
            <label for="jose">José</label>
          </li>

          <li>
            <input id="thulio" type="radio" name="filter">
            <label for="thulio">Thulio</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFilter',

  data() {
    return {};
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
</style>
