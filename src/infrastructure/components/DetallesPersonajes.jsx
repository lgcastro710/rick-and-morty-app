import React, { useState, useEffect } from "react";
import "../styles/components/DetallesPersonajes.scss";

function DetallesPersonajes({ personaje, cerrar }) {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    if (!personaje) return;

    const obtenerEpisodios = async () => {
      try {
        const urls = personaje.episode;
        const ids = urls.map(url => url.split("/").pop()).join(",");
        const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
        const data = await res.json();
        setEpisodios(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error("Error al obtener episodios", err);
      }
    };

    obtenerEpisodios();
  }, [personaje]);

  if (!personaje) return null;

  return (
    <div className="popup-overlay" onClick={cerrar}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={cerrar}>✖</button>
        <img src={personaje.image} alt={personaje.name} />
        <h2>{personaje.name}</h2>
        <div className="content-detalles">
           <div className="info-personaje">
                <p><strong>Estado:</strong> {personaje.status}</p>
                <p><strong>Especie:</strong> {personaje.species}</p>
                <p><strong>Género:</strong> {personaje.gender}</p>
                <p><strong>Origen:</strong> {personaje.origin.name}</p>
                <p><strong>Ubicación:</strong> {personaje.location.name}</p>
           </div>
            <div className="episodios">
            <strong>Aparece en:</strong>
                <div className="episodios-list">
                    <ul>
                        {episodios.map(ep => (
                        <li key={ep.id}>{ep.episode} - {ep.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesPersonajes;
