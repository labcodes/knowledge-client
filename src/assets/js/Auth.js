import axios from 'axios';
import Event from './Event';

class Auth {
  constructor(data) {
    this.formData = data;
    this.apiUrl = 'http://localhost:3000/api';
  }

  login() {
    const { username, password } = this.formData;

    axios
    .post(`${this.apiUrl}/accounts/login/`, {
      username,
      password,
    })
    .then((response) => {
      Event.$emit('user_logged', response.data);
    })
    .catch((err) => {
      Event.$emit('error', err);
    });
  }

  // logout() {}
}

export default Auth;
