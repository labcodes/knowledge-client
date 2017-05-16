import axios from 'axios';
import Event from './Event';
import Localstorage from './Localstorage';

import AppConfig from '../config';

class ApiService {
  constructor() {
    this.apiUrl = AppConfig.apiUrl;
    this.event = Event;
    this.storage = new Localstorage('userInfo');

    const authToken = this.storage.get().auth_token;
    axios.defaults.headers.common.Authorization = `Token ${authToken}`;
  }

  getLinks() {
    this.url = `${this.apiUrl}/links/`;

    axios
      .get(this.url)
      .then((response) => {
        this.event.$emit('links_list', response.data);
      })
      .catch((err) => {
        this.event.$emit('error', err);
      });
  }
}

export default ApiService;
