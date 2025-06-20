import { useState, useEffect } from "react";
import { EpisodeService } from "../services/episodeServices";

const useEpisodes = (ids) => {
  const [episodios, setEpisodios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const obtenerEpisodios = async () => {
      setIsLoading(true);
      try {
        const { episodes } = await EpisodeService.getAll(ids);
        setEpisodios(episodes);
      } catch (err) {
        console.error("Error fetching episodes:", err);
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };

    obtenerEpisodios();
  }, [ids]);

  return { episodios, isLoading, isError };
};

export default useEpisodes;
