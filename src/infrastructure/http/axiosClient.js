// infrastructure/http/axiosClient.js
import axios from 'axios';

export const axiosClient = {
  get: async (url, config = {})  =>{
    try{
      const response = await  axios.get(url, config)
       console.log('Datos recibidos:', response.data);
        return response.data
    }catch{
      return {}
    }      
       
  },
  post: (url, data, config = {}) => axios.post(url, data, config),
  put: (url, data, config = {}) => axios.put(url, data, config),
  delete: (url, config = {}) => axios.delete(url, config),
};
