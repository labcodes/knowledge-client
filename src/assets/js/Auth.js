import Vue from 'vue';
import LocalStorage from './Localstorage';

class Auth {
  constructor(data) {
    this.formData = data;
    this.apiUrl = 'http://localhost:3000/api';
    this.http = Vue.http;

    this.storage = new LocalStorage('userInfo');
  }

  login() {
    this.url = `${this.apiUrl}/accounts/login/`;

    const { username, password } = this.formData;

    this.http.post(this.url, { username, password })
      .then((response) => {
        console.warn(response.body);
        this.storage.set(response.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // logout() {}
}

export default Auth;
