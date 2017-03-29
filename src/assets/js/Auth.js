import axios from 'axios';
import Event from './Event';

class Auth {
  constructor(data) {
    this.formData = data;
    this.apiUrl = 'https://jsonplaceholder.typicode.com';
    this.http = axios;
  }

  login() {
    this.url = `${this.apiUrl}/posts`;

    const { username, password } = this.formData;

    this.http
      .post(this.url, { username, password })
      .then((response) => {
        Event.$emit('user_logged', response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // logout() {}
}

export default Auth;
