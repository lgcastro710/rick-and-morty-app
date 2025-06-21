import React, { useState, useEffect } from "react";
import Header from "./infrastructure/components/Header";
import Characteres from "./infrastructure/pages/characteres";
import Banner from "./infrastructure/components/Banner";

function App() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem("modoOscuro");
    return guardado === "true";
  });

  const [juegoIniciado] = useState(false);

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
    setModoOscuro((prev) => !prev);
  };

  return (
    <>
      {!juegoIniciado && (
        <Header
          modoOscuro={modoOscuro}
          toggleModoOscuro={() => setModoOscuro((prev) => !prev)}
        />
      )}
      <Banner />
      <Characteres />
    </>
  );
}

export default App;
