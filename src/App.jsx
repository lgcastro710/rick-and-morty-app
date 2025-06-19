import React, { useState, useEffect } from "react";
import Header from "./infrastructure/components/Header";
import PantallaInicio from "./infrastructure/components/PantallaInicio";
import Characteres from "./infrastructure/pages/characteres";

function App() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem("modoOscuro");
    return guardado === "true"; // convertimos a boolean
  });

  const [juegoIniciado, setJuegoIniciado] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (modoOscuro) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
    localStorage.setItem("modoOscuro", modoOscuro);
  }, [modoOscuro]);

  const toggleModoOscuro = () => {
    setModoOscuro(prev => !prev);
  };

  return (
    <>
     {juegoIniciado && (
      <Header
        modoOscuro={modoOscuro}
        toggleModoOscuro={() => setModoOscuro((prev) => !prev)}
      />
    )}
    <div>
      {!juegoIniciado ? (
        <Characteres />
      ) : (
        <PantallaInicio onStart={() => setJuegoIniciado(true)} />
      )}
    </div>
    </>
  );
}

export default App;
