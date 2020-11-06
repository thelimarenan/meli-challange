import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_STATIC_API_URL
});

export default api;
