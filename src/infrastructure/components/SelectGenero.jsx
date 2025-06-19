import { useState, useRef, useEffect } from 'react';
import { FaMars, FaVenus, FaBan, FaQuestion } from 'react-icons/fa';
import '../styles/components/SelectGenero.scss'; 

const opciones = [
  { valor: '', label: 'Todos los géneros', icono: <FaQuestion /> },
  { valor: 'male', label: 'Masculino', icono: <FaMars color="#00bfff" /> },
  { valor: 'female', label: 'Femenino', icono: <FaVenus color="#ff69b4" /> },
  { valor: 'genderless', label: 'Sin género', icono: <FaBan color="#ccc" /> },
  { valor: 'unknown', label: 'Desconocido', icono: <FaQuestion color="yellow" /> },
];

export default function SelectGenero({ valor, onChange }) {
  const [abierto, setAbierto] = useState(false);
   const ref = useRef();
  const seleccionada = opciones.find(opt => opt.valor === valor) || opciones[0];

  // Cierra el select al hacer clic fuera
    useEffect(() => {
      const handleClickFuera = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setAbierto(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickFuera);
      return () => document.removeEventListener('mousedown', handleClickFuera);
    }, []);

  return (
    <div className="select-personalizado" ref={ref}>
      <div className="seleccion" onClick={() => setAbierto(!abierto)}>
        {seleccionada.icono} {seleccionada.label}
      </div>
      {abierto && (
        <div className="opciones">
          {opciones.map(opt => (
            <div
              key={opt.valor}
              className="opcion"
              onClick={() => {
                onChange(opt.valor);
                setAbierto(false);
              }}
            >
              {opt.icono} {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
