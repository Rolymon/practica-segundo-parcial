import React, { useState, useRef } from 'react';
import Boton from './Boton.js';
import '../styles/Contador.css';
function Contador() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const aux = useRef(null);

  const iniciarCronometro = () => {
    if (!corriendo) {
      setCorriendo(true);
      aux.current = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    }
  };

  const detenerCronometro = () => {
    setCorriendo(false);
    clearInterval(aux.current);
  };

  const resetearCronometro = () => {
    setSegundos(0);
    setCorriendo(false);
    clearInterval(aux.current);
  };

  return (
    <div>
      <p className='contador'>{segundos} segundos</p>
      <Boton
        corriendo={corriendo}
        iniciarCronometro={iniciarCronometro}
        detenerCronometro={detenerCronometro}
        resetearCronometro={resetearCronometro}
      />
    </div>
  );
}

export default Contador;
