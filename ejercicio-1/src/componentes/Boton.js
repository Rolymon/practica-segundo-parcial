
import React, { useState } from 'react';
import Texto from './Texto'; 
import "../styles/Boton.css";
function Boton() {
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const mostexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div >
      <button onClick={mostexto} className='boton'>
        {mostrarTexto ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {mostrarTexto && <Texto />} 
    </div>
  );
}

export default Boton;
