import axios from 'axios';
import Event from './Event';

class ApiService {
  constructor() {
    this.apiUrl = 'http://localhost:3000/api';
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
