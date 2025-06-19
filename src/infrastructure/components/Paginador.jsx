
const Paginador = ({ setPage, page, infoPagina}) => {

  
      const cambiarPagina = (dir) => {
        const nuevaPagina = page + dir;
        if (nuevaPagina < 1 || nuevaPagina > infoPagina.pages) return;
        setPage(nuevaPagina);
    };



  return (
      <>
        {infoPagina.pages > 1 && (
            <div className="paginador">
            <button disabled={page === 1} onClick={() => cambiarPagina(-1)}><span>&laquo;</span><p>Anterior</p></button>
            <span>Página {page} de {infoPagina.pages}</span>
            <button disabled={!infoPagina.next} onClick={() => cambiarPagina(1)}><p>Siguiente</p><span>&raquo;</span></button>
            </div>
        )}
      </>
  );
}
export default Paginador;