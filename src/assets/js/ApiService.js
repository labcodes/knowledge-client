import axios from 'axios';
import Event from './Event';

class ApiService {
  constructor() {
    this.http = axios;
    this.apiUrl = 'http://localhost:3000/api';

    this.getLinks = this.getLinks;
    this.addLink = this.addLink;
  }

  getLinks() {
    this.url = `${this.apiUrl}/links/`;

    this.http.get(this.url)
      .then((response) => {
        Event.$emit('links_list', response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addLink() {
    console.warn(this.apiUrl);
  }
}

export default ApiService;
