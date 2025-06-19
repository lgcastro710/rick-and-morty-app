// application/services/characterService.js
import  httpClient  from '../http/httpClient';
import { API_ENDPOINTS } from '../config/apiConfig';
import { characterAdapter } from '../../domain/adapters/characterAdapter';

export const CharacterService = {
  getAll: async (query = '') => {

    const url = `${API_ENDPOINTS.CHARACTERS}?${query}`;
    const response = await httpClient.get(url);
         console.log('aki', response);
    return characterAdapter(response);
  },

  getById: async (id) => {
    const url = `${API_ENDPOINTS.CHARACTERS}/${id}`;
    return await httpClient.get(url);
  },
};
