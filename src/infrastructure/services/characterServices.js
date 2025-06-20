// application/services/characterService.js
import httpClient from "../http/httpClient";
import { API_ENDPOINTS } from "../config/apiConfig";
import { characterAdapter } from "../../domain/adapters/characterAdapter";

export const CharacterService = {
  getAll: async (query = "") => {
    const url = `${API_ENDPOINTS.CHARACTERS}?${query}`;
    const response = (await httpClient.get(url)) || {};
    // const response = {info, results}
    // const response = {error, pepito}

    console.log(response);
    const info = response.info || {};
    const results = response.results || [];
    return characterAdapter({ info, results });
  },

  getById: async (id) => {
    const url = `${API_ENDPOINTS.CHARACTERS}/${id}`;
    return await httpClient.get(url);
  },
};
