import { useEffect, useState } from "react";
import nopersonaje from "../assets/no-se-encontro.png";
import BuscadorFiltros from "./BuscadorFiltros";
import CardPersonaje from "./CardPersonaje";
import Loader from "./Loader";

import "../styles/components/PantallaGaleria.scss";

function PantallaGaleria({ personajes, cargando, error, setQuery, setPage }) {
  const [switchFavorito, setSwitchFavorito] = useState(false);
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const [characteresFilteres, setCharacteresFilteres] = useState([]);

  const [filtros, setFiltros] = useState({
    name: "",
    status: "",
    gender: "",
  });

  useEffect(() => {
    setCharacteresFilteres(personajes);
  }, [personajes]);

  useEffect(() => {
    if (switchFavorito) {
      const filtered = personajes.filter((item) => {
        return favoritos.find((favorite) => favorite.id === item.id);
      });
      setCharacteresFilteres(filtered);
    } else {
      setCharacteresFilteres(personajes);
    }
  }, [switchFavorito]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    setQuery(filtros);
    setPage(1);
  }, [filtros]);

  const toggleFavorito = (personaje) => {
    const existe = favoritos.find((f) => f.id === personaje.id);
    if (existe) {
      setFavoritos(favoritos.filter((f) => f.id !== personaje.id));
    } else {
      setFavoritos([...favoritos, personaje]);
    }
  };

  return (
    <div className="pantalla-galeria">
      <BuscadorFiltros
        filtros={filtros}
        setFiltros={setFiltros}
        switchFavorito={switchFavorito}
        setSwitchFavorito={setSwitchFavorito}
      />

      {cargando ? (
        <Loader />
      ) : (
        <div className="galeria">
          {characteresFilteres.length ? (
            characteresFilteres.map((p) => (
              <CardPersonaje
                key={p.id}
                personaje={p}
                toggleFavorito={toggleFavorito}
                favoritos={favoritos}
              />
            ))
          ) : (
            <div className="no-results">
              <img src={nopersonaje} alt="" />
              <p>No se encontraron personajes.</p>
            </div>
          )}
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default PantallaGaleria;
