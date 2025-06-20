export const characterAdapter = ({info, results}) => {

    const characteres = [];

  results.forEach((item) => {
    const character = {
      id: item.id,
      name: item.name || "",
      gender: item.gender || "",
      status: item.status || "",
      species: item.species || "",
      type: item.type || "",
      image: item.image || "",
      origin: item.origin?.name || "",
      location: item.location?.name || "",
      episodes: item.episode || [],

    };
    characteres.push(character);
  });

  const infoPages = {
    count: info.count || 0,
    next: info.next || '',
    pages: info.pages || 0, 
    prev: info.prev || ''
  };


  return { 
    characteres, 
    total: results?.length, 
    info: infoPages 
  };
};