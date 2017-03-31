import axios from 'axios';
import Event from './Event';

class ApiService {
  constructor() {
    this.apiUrl = 'http://localhost:3000/api';
  }

  getLinks() {
    this.url = `${this.apiUrl}/links/`;

    axios
      .get(this.url)
      .then((response) => {
        Event.$emit('links_list', response.data);
      })
      .catch((err) => {
        Event.$emit('error', err);
      });
  }

  addLink() {
    console.warn(this.apiUrl);
  }
}

export default ApiService;
