import React from "react";
import logo from "../assets/logo-r&m.png";
import "../styles/components/Header.scss";

const Header = ({ modoOscuro, toggleModoOscuro }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Rick and Morty Logo" />
      </div>

      <button className="toggle-modo" onClick={toggleModoOscuro}>
        {modoOscuro ? "🌞" : "🌚"}
      </button>
    </header>
  );
};

export default Header;
