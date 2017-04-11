import axios from 'axios';
import Event from './Event';

import AppConfig from '../config';

class ApiService {
  constructor() {
    this.apiUrl = AppConfig.apiUrl;
    this.event = Event;
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

  addLink() {
    console.warn(this.apiUrl);
  }
}

export default ApiService;
