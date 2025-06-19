
import "../styles/components/DetallesPersonajes.scss";


import useEpisodes from "../hooks/useEpisodes";

function DetallesPersonajes({ personaje, cerrar }) {
  const {episodios} = useEpisodes();


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
                <p><strong>Origen:</strong> {personaje.origin}</p>
                <p><strong>Ubicación:</strong> {personaje.location}</p>
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
