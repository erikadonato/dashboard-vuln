import axios from 'axios';
const development = `${process.env.local.API}`;

const api = axios.create({
  baseURL: development,
});

export default api;
