import { useState } from "react";
import "../styles/components/DetallesPersonajes.scss";
import useEpisodes from "../hooks/useEpisodes";

function DetallesPersonajes({ personaje, cerrar }) {
  const [seasonActiva, setSeasonActiva] = useState(null);
  const ids = personaje.episodes?.map((url) => url.split("/").pop()).join(",");
  const { seasonsGroup } = useEpisodes(ids);

  if (!personaje) return null;

  const toggleSeason = (season) => {
    setSeasonActiva(seasonActiva === season ? null : season);
  };

  return (
    <div className="popup-overlay" onClick={cerrar}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={cerrar}>
          ✖
        </button>
        <img src={personaje.image} alt={personaje.name} />
        <h2>{personaje.name}</h2>
        <table className="tabla-rick">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Especie</th>
              <th>Género</th>
              <th>Origen</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{personaje.status}</td>
              <td>{personaje.species}</td>
              <td>{personaje.gender}</td>
              <td>{personaje.origin}</td>
              <td>{personaje.location}</td>
            </tr>
            <tr>
              <td colSpan="5">
                <div className="contenedor-acordeones">
                  {seasonsGroup().map(({ season, episodes }) => (
                    <div key={season} className="acordeon">
                      <button
                        className="acordeon-titulo"
                        onClick={() => toggleSeason(season)}
                      >
                        {season} {seasonActiva === season ? "▲" : "▼"}
                      </button>

                      {seasonActiva === season && (
                        <div className="acordeon-contenido">
                          <div className="chips-container">
                            {episodes.map((ep) => (
                              <div key={ep.id}>
                                <span className="chip" title={ep.name}>
                                  {ep.episode}
                                </span>{" "}
                                {ep.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info-mobile">
          <div className="content-detalles">
            <div className="info-personaje">
              <p>
                <strong>Estado:</strong> {personaje.status}
              </p>
              <p>
                <strong>Especie:</strong> {personaje.species}
              </p>
              <p>
                <strong>Género:</strong> {personaje.gender}
              </p>
              <p>
                <strong>Origen:</strong> {personaje.origin}
              </p>
              <p>
                <strong>Ubicación:</strong> {personaje.location}
              </p>
            </div>
            <div className="contenedor-acordeones">
              {seasonsGroup().map(({ season, episodes }) => (
                <div key={season} className="acordeon">
                  <button
                    className="acordeon-titulo"
                    onClick={() => toggleSeason(season)}
                  >
                    {season} {seasonActiva === season ? "▲" : "▼"}
                  </button>

                  {seasonActiva === season && (
                    <div className="acordeon-contenido">
                      <div className="chips-container">
                        {episodes.map((ep) => (
                          <div key={ep.id}>
                            <span className="chip" title={ep.name}>
                              {ep.episode}
                            </span>{" "}
                            {ep.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesPersonajes;
