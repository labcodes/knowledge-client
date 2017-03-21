import Vue from 'vue';

class Auth {
  constructor(data) {
    this.formData = data;
    this.apiUrl = 'http://localhost:3000/api';
    this.http = Vue.http;
  }

  login() {
    this.url = `${this.apiUrl}/accounts/login/`;

    const { username, password } = this.formData;

    this.http.post(this.url, { username, password })
      .then((response) => {
        console.warn(response.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // logout() {}
}

export default Auth;
