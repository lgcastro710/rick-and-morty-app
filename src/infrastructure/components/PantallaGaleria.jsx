import { useEffect, useState } from "react";

import BuscadorFiltros from "./BuscadorFiltros";
import CardPersonaje from './CardPersonaje';
import DetallesPersonajes from "./DetallesPersonajes"; 
import Loader from "./Loader"; 

import "../styles/components/PantallaGaleria.scss"; 

import useCharacteres from "../hooks/useCharacteres";

function PantallaGaleria() {
  const {personajes, infoPagina, cargando, error, setQuery} = useCharacteres();
  const [pagina, setPagina] = useState(1);
  const [seleccionado, setSeleccionado] = useState(null);

  const [favoritos, setFavoritos] = useState(() => {
  const guardados = localStorage.getItem("favoritos");
  return guardados ? JSON.parse(guardados) : [];
});

  const [filtros, setFiltros] = useState({
    nombre: "",
    estado: "",
    genero: "",
    favoritos: false,
  });


  const fetchPersonajes = async () => {
          const query = new URLSearchParams();
      if (filtros.nombre) query.append("name", filtros.nombre);
      if (filtros.estado) query.append("status", filtros.estado);
      if (filtros.genero) query.append("gender", filtros.genero);
      query.append("page", pagina);
    setQuery(query)
  };

  useEffect(() => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);


  useEffect(() => {
  fetchPersonajes();
}, [filtros, pagina]);

  const cambiarPagina = (dir) => {
    setPagina((prev) => Math.max(1, prev + dir));
  };

  // Resetear a página 1 si cambian filtros
  useEffect(() => {
    setPagina(1);
  }, [filtros]);

  const toggleFavorito = (personaje) => {
  const existe = favoritos.find(f => f.id === personaje.id);
  if (existe) {
    setFavoritos(favoritos.filter(f => f.id !== personaje.id));
  } else {
    setFavoritos([...favoritos, personaje]);
  }
};
   const personajesFiltrados = personajes.filter((p) => {
  if (filtros.favoritos && !favoritos.some(f => f.id === p.id)) return false;
  if (filtros.nombre && !p.name.toLowerCase().includes(filtros.nombre.toLowerCase())) return false;
  if (filtros.estado && p.status.toLowerCase() !== filtros.estado) return false;
  if (filtros.genero && p.gender.toLowerCase() !== filtros.genero) return false;
  return true;
});

  return (
    <div className="pantalla-galeria">
      <h2>🧪 Rick & Morty - Personajes</h2>
      <BuscadorFiltros filtros={filtros} setFiltros={setFiltros} personajes={personajes}  favoritos={favoritos} />

      {cargando && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="galeria">
        {personajesFiltrados.map(p => (
          <CardPersonaje
          key={p.id}
          personaje={p}
          setSeleccionado={setSeleccionado}
          toggleFavorito={toggleFavorito}
          favoritos={favoritos}
        />
        ))}
      </div>

     <DetallesPersonajes personaje={seleccionado} cerrar={() => setSeleccionado(null)} />

      {/* PAGINADOR */}
      {infoPagina.pages > 1 && (
        <div className="paginador">
          <button disabled={pagina === 1} onClick={() => cambiarPagina(-1)}><span>&laquo;</span><p>Anterior</p></button>
          <span>Página {pagina} de {infoPagina.pages}</span>
          <button disabled={!infoPagina.next} onClick={() => cambiarPagina(1)}><p>Siguiente</p><span>&raquo;</span></button>
        </div>
      )}
    </div>
  );
}


export default PantallaGaleria;
