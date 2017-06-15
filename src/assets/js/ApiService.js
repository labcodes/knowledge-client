import axios from 'axios';
import Event from './Event';
import Localstorage from './Localstorage';

import AppConfig from '../config';

class ApiService {
  constructor() {
    this.apiUrl = AppConfig.apiUrl;
    this.event = Event;
    this.storage = new Localstorage('userInfo');


    if (this.storage.get()) {
      const authToken = this.storage.get().auth_token;
      axios.defaults.headers.common.Authorization = `Token ${authToken}`;
    }
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

  getLinksByTag(tag) {
    this.url = `${this.apiUrl}/links/?page=${tag}`;

    axios
      .get(this.url)
      .then((response) => {
        this.event.$emit('searched_links', response.data);
      })
      .catch((err) => {
        this.event.$emit('error', err);
      });
  }

  addLink(obj) {
    this.data = obj;

    axios
      .post(`${this.apiUrl}/links/create/`, this.data)
      .then((response) => {
        this.event.$emit('link_added', response.data);
      })
      .catch((err) => {
        this.event.$emit('error', err);
      });
  }
}

export default ApiService;
