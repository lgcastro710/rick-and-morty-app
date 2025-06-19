import React from 'react';
import portalGif from '../assets/loader.gif'; // ajustá la ruta según tu estructura
import '../styles/components/Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={portalGif} alt="Cargando..." className="loader-gif" />
      <p className="loader-text">Cargando...</p>
    </div>
  );
};

export default Loader;
