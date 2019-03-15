// File's purpose is to house all Axios configuration code related to making API calls to unsplash to get images

import axios from 'axios';

// Creating an instance of the axios client with a couple of default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6d260733b6a12cac2762299e2ab7ef807387888008e19516b3342834fd6eb523'
  }
});
