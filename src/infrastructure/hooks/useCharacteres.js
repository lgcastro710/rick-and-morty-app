import { useState, useEffect } from "react"
import { CharacterService } from "../services/characterServices"

const useCharacteres = () =>{
  const [personajes, setPersonajes] = useState([]);
  const [infoPagina, setInfoPagina] = useState({});
    const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
    const [params, setParams] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const init = async () => {
    try{
        setCargando(true)
      const {characteres, info} = await CharacterService.getAll(params);

      const start = Date.now(); // Tiempo de inicio

      // Forzar que el loading se vea al menos 1200ms
      const elapsed = Date.now() - start;
      const delay = Math.max(0, 1200 - elapsed); // Si tardó menos, agregamos delay

      setTimeout(() => {
        setPersonajes(characteres);
        setInfoPagina(info);
        setError(null);
        setCargando(false);
      }, delay);

    }catch(err){
        setError(err)
    }
    finally{
        setCargando(false)
    }
  } 
 const handleQueryChange = () => {
    const _query = new URLSearchParams(query);
    setParams(new URLSearchParams({
      ...Object.fromEntries(_query.entries()),
       page: page,
    })) 
  };
    
 useEffect( ()  => {
     handleQueryChange()
 }, [page, query])


  
 useEffect( ()  => {
    init() 
 }, [params])

 return {
    personajes,
    infoPagina,
    cargando,
    error,
    query,
    page,
    setPage,
    setQuery,
 }

}

export default useCharacteres