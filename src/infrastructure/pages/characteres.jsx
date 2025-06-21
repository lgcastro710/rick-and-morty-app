import PantallaGaleria from "../components/PantallaGaleria";
import Paginador from "../components/Paginador";
import useCharacteres from "../hooks/useCharacteres";
const Characteres = () => {
  const {
    personajes,
    infoPagina,
    cargando,
    error,
    query,
    setQuery,
    page,
    setPage,
  } = useCharacteres();
  return (
    <>
      <div className="container-title">
        <h2>🧪 Rick & Morty - Personajes</h2>
      </div>
      <PantallaGaleria
        personajes={personajes}
        cargando={cargando}
        error={error}
        setQuery={setQuery}
        setPage={setPage}
        query={query}
        page={page}
      />
      <Paginador infoPagina={infoPagina} page={page} setPage={setPage} />
    </>
  );
};

export default Characteres;
