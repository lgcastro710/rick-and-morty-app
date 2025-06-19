import { useState, useEffect } from "react"
import { CharacterService } from "../services/characterServices"

const useCharacteres = () =>{
  const [personajes, setPersonajes] = useState([]);
  const [infoPagina, setInfoPagina] = useState({});
  const [query, setQuery] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const init = async (param) => {
    try{
        setCargando(true)
      const {characteres, info} = await CharacterService.getAll(param.toString());

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
  
 useEffect( ()  => {
    init(query) 
 }, [query])

 return {
    personajes,
    infoPagina,
    cargando,
    error,
    setQuery
 }

}

export default useCharacteres