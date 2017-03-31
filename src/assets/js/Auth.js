import axios from 'axios';
import Event from './Event';

class Auth {
  constructor(data) {
    this.data = data;
    this.apiUrl = 'http://localhost:3000/api';
  }

  login() {
    const { username, password } = this.data;

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
