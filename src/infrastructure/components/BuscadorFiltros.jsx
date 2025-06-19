import "../styles/components/BuscadorFiltros.scss"; // Asegúrate de tener este archivo para los estilos
import SelectEstado from "./SelectEstado";
import SelectGenero from "./SelectGenero";
import CheckboxFavoritos from './CheckboxFavoritos';

function BuscadorFiltros({ filtros, setFiltros, personajes, favoritos  }) {

const resetFiltros = () => {
  setFiltros({
    nombre: "",
    estado: "",
    genero: "",
    favoritos: false
  });
};


  return (
    <form className="filtros" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filtros.nombre}
        onChange={(e) => setFiltros({ ...filtros, nombre: e.target.value })}
      />

      <SelectEstado
          valor={filtros.estado}
          onChange={(nuevoValor) =>
            setFiltros((prev) => ({ ...prev, estado: nuevoValor }))
          }
        />
      <SelectGenero
      valor={filtros.genero}
      onChange={(nuevoValor) =>
        setFiltros((prev) => ({ ...prev, genero: nuevoValor }))
      }
    />
      <CheckboxFavoritos
      valor={filtros.favoritos}
      onChange={(nuevoValor) =>
        setFiltros((prev) => ({ ...prev, favoritos: nuevoValor }))
      }
    />
        <button className="limpiar" onClick={resetFiltros}>🧼 Limpiar filtros</button>
    </form>
  );
}

export default BuscadorFiltros;
