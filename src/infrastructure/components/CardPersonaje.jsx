import React, { useState } from 'react';

import DetallesPersonajes from './DetallesPersonajes';

import '../styles/components/CardPersonaje.scss';

const CardPersonaje = ({ personaje, toggleFavorito, favoritos }) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
       <div className="card">
      <img src={personaje.image} alt={personaje.name} />
      
      <div className="contenido">
        <h3>{personaje.name}</h3>
        <p className={`estado ${personaje.status.toLowerCase()}`}>
          <span className="dot"></span> {personaje.status}
        </p>
        <p><strong>Especie:</strong> {personaje.species}</p>
      </div>
      
      <div className="btn-card">
        <button onClick={() => setMostrar(true)}>Ver más</button>
      </div>
      
      <div className="favorito" onClick={() => toggleFavorito(personaje)}>
        {favoritos.some(f => f.id === personaje.id) ? "⭐" : "☆"}
      </div>
    </div>

    
    {mostrar && 
     <DetallesPersonajes personaje={personaje} cerrar={() => setMostrar(false)} />  
    }
    </>

  );
};

export default CardPersonaje;

