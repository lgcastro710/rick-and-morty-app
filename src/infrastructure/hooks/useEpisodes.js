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

  function seasonsGroup() {
    const agrupado = episodios?.reduce((acc, ep) => {
      const temporada = ep.episode.substring(0, 3);
      if (!acc[temporada]) {
        acc[temporada] = [];
      }
      acc[temporada].push(ep);
      return acc;
    }, {});

    return Object.entries(agrupado).map(([season, episodes]) => ({
      season,
      episodes,
    }));
  }

  return { episodios, isLoading, isError, seasonsGroup };
};

export default useEpisodes;
