import axios from 'axios';
const development = 'http://201.49.62.134:8080/';

const api = axios.create({
  baseURL: development,
});

export default api;
