import axios from 'axios';
import Event from './Event';

import AppConfig from '../config';

class Auth {
  constructor(data) {
    this.data = data;
    this.apiUrl = AppConfig.apiUrl;
    this.event = Event;
  }

  login() {
    const { username, password } = this.data;

    axios
    .post(`${this.apiUrl}/accounts/login/`, {
      username,
      password,
    })
    .then((response) => {
      this.event.$emit('user_logged', response.data);
    })
    .catch((err) => {
      this.event.$emit('error', err);
    });
  }
}

export default Auth;
