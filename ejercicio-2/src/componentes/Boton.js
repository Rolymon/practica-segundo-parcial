import React from 'react';
import '../styles/Boton.css';
function Boton({ corriendo, iniciarCronometro, detenerCronometro, resetearCronometro }) {
  return (
    <div>
      <button onClick={iniciarCronometro} disabled={corriendo} className='rojo'>
        Start
      </button>
      <button onClick={detenerCronometro} disabled={!corriendo} className='verde'>
        Stop
      </button>
      <button onClick={resetearCronometro } className='boton'>Reset</button>
    </div>
  );
}

export default Boton;
