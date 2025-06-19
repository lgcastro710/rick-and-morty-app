import { useState, useEffect } from "react";
import { EpisodeService } from "../services/episodeServices";

const useEpisodes = () => {
  const [episodios, setEpisodios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const obtenerEpisodios = async () => {
        setIsLoading(true);
      try {
        const ids = episodios?.map(url => url.split("/").pop()).join(",");
        const { episodes: fetchedEpisodes } = await EpisodeService.getAll(ids);
        setEpisodios(fetchedEpisodes);
    
      } catch (err) {
        console.error("Error fetching episodes:", err);
        setIsError(err);
      }
      finally {
        setIsLoading(false);
      }
    };

    obtenerEpisodios();
  }, []);

  return { episodios, isLoading, isError };
}

export default useEpisodes;