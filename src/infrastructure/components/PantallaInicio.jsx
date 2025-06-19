import logo from '../assets/logo-r&m.png';
import "../styles/components/PantallaInicio.scss"; // Asegúrate de tener este archivo para los estilos

function PantallaInicio({ onStart }) {
  return (
    <div className="container-inicio">
      <img src={logo} alt="" className='logo-inicio' />
      <button
        onClick={onStart}
        className="neon-button neon"
      >
        START
      </button>
    </div>
  );
}

export default PantallaInicio;
