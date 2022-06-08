import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:3090/',
});

export default customFetch;
