// infrastructure/http/axiosClient.js
import axios from 'axios';

export const axiosClient = {
  get: (url, config = {}) => axios.get(url, config),
  post: (url, data, config = {}) => axios.post(url, data, config),
  put: (url, data, config = {}) => axios.put(url, data, config),
  delete: (url, config = {}) => axios.delete(url, config),
};

export const httpClient = axiosClient;