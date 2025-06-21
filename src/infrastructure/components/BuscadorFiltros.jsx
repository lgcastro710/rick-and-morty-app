import "../styles/components/BuscadorFiltros.scss";
import SelectEstado from "./SelectEstado";
import SelectGenero from "./SelectGenero";
import CheckboxFavoritos from "./CheckboxFavoritos";

function BuscadorFiltros({
  filtros,
  setFiltros,
  switchFavorito,
  setSwitchFavorito,
}) {
  const resetFiltros = () => {
    const clearFilter = {
      name: "",
      status: "",
      gender: "",
    };
    setFiltros(clearFilter);
    setSwitchFavorito(false);
  };

  return (
    <div className="buscador-filtros">
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
          valor={switchFavorito}
          onChange={setSwitchFavorito}
        />
        <button className="limpiar" onClick={resetFiltros}>
          🧼 Limpiar filtros
        </button>
      </form>
    </div>
  );
}

export default BuscadorFiltros;
