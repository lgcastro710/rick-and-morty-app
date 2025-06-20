import { FaStar } from "react-icons/fa";
import "../styles/components/CheckboxFavoritos.scss";

export default function CheckboxFavoritos({ valor, onChange }) {
  return (
    <label className="checkbox-favoritos">
      <input
        type="checkbox"
        checked={valor}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="switch">
        <FaStar className="icon" />
      </span>
      <span className="label-text">Mostrar solo favoritos</span>
    </label>
  );
}
