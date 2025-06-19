
import  httpClient  from '../http/httpClient';
import { API_ENDPOINTS } from '../config/apiConfig';
import { episodeAdapter } from '../../domain/adapters/episodeAdapter';

export const EpisodeService = {
  getAll: async (query = '') => {

    const url = `${API_ENDPOINTS.EPISODES}?${query}`;
    const response = await httpClient.get(url);
    return episodeAdapter(response);
  },

  getById: async (id) => {
    const url = `${API_ENDPOINTS.EPISODES}/${id}`;
    return await httpClient.get(url);
  },
};
