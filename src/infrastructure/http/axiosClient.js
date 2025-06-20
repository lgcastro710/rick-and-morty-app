// infrastructure/http/axiosClient.js
import axios from 'axios';

export const axiosClient = {
  get: async (url, config = {})  =>{
       const response = await  axios.get(url, config)
       return response.data;
  },
  post: (url, data, config = {}) => axios.post(url, data, config),
  put: (url, data, config = {}) => axios.put(url, data, config),
  delete: (url, config = {}) => axios.delete(url, config),
};
