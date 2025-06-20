import { useEffect, useState } from "react";

import BuscadorFiltros from "./BuscadorFiltros";
import CardPersonaje from './CardPersonaje';
import DetallesPersonajes from "./DetallesPersonajes"; 
import Loader from "./Loader"; 

import "../styles/components/PantallaGaleria.scss"; 


function PantallaGaleria({ personajes, cargando, error, setQuery, setPage }) {
  const [favoritos, setFavoritos] = useState(() => {
  const guardados = localStorage.getItem("favoritos");
  return guardados ? JSON.parse(guardados) : [];
});

  const [filtros, setFiltros] = useState({
    name: "",
    status: "",
    gender: "",
  });

  useEffect(() => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);


  useEffect(() => {
    setQuery(filtros)
  setPage(1); 
}, [filtros]);



  const toggleFavorito = (personaje) => {
  const existe = favoritos.find(f => f.id === personaje.id);
  if (existe) {
    setFavoritos(favoritos.filter(f => f.id !== personaje.id));
  } else {
    setFavoritos([...favoritos, personaje]);
  }
};


  return (
    <div className="pantalla-galeria">

      <BuscadorFiltros filtros={filtros} setFiltros={setFiltros} personajes={personajes}  favoritos={favoritos} />

      {cargando && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="galeria">
        {personajes.map(p => (
          <CardPersonaje
          key={p.id}
          personaje={p}
          toggleFavorito={toggleFavorito}
          favoritos={favoritos}
        />
        ))}
      </div>
    </div>
  );
}


export default PantallaGaleria;
