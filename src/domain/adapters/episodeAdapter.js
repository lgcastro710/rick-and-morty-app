export const episodeAdapter = (results) => {
  const episodes = [];

  results.forEach((item) => {
    const episode = {
      id: item.id,
      name: item.name || "",
      episode: item.episode || "",
    };
    episodes.push(episode);
  });

  return { episodes, total: results?.length || 0 };
};
