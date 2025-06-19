import "../styles/components/BuscadorFiltros.scss"; // Asegúrate de tener este archivo para los estilos
import SelectEstado from "./SelectEstado";
import SelectGenero from "./SelectGenero";
import CheckboxFavoritos from './CheckboxFavoritos';

function BuscadorFiltros({ filtros, setFiltros, favoritos, setFavoritos }) {

const resetFiltros = () => {
  setFiltros({
    name: "",
    status: "",
    gender: "",
  });
};


  return (
    <form className="filtros" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filtros.name}
        onChange={(e) => setFiltros({ ...filtros, name: e.target.value })}
      />

      <SelectEstado
          valor={filtros.status}
          onChange={(nuevoValor) =>
            setFiltros((prev) => ({ ...prev, status: nuevoValor }))
          }
        />
      <SelectGenero
      valor={filtros.gender}
      onChange={(nuevoValor) =>
        setFiltros((prev) => ({ ...prev, gender: nuevoValor }))
      }
    />
      <CheckboxFavoritos
      valor={favoritos}
      onChange={(nuevoValor) =>
        setFavoritos((prev) => ({ ...prev, favoritos: nuevoValor }))
      }
    />
        <button className="limpiar" onClick={resetFiltros}>🧼 Limpiar filtros</button>
    </form>
  );
}

export default BuscadorFiltros;
