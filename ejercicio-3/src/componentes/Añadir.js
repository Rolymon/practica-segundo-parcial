
import React, { useState } from 'react';

function Añadir({ onAñadir, frases, onEliminarFrase }) {
  const [nuevaFrase, setNuevaFrase] = useState('');

  const handleInputChange = (event) => {
    setNuevaFrase(event.target.value);
  };

  const handleAñadirClick = () => {
    if (nuevaFrase.trim() !== '') {
      onAñadir(nuevaFrase);
      setNuevaFrase('');
    }
  };

  const handleEliminarClick = (index) => {
    const nuevasFrases = frases.filter((_, i) => i !== index);
    onEliminarFrase(nuevasFrases);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa una frase"
        value={nuevaFrase}
        onChange={handleInputChange}
      />
      <button onClick={handleAñadirClick}>Agregar Frase</button>
      <ul>
        {frases.map((frase, index) => (
          <li key={index}>
            {frase}
            <button onClick={() => handleEliminarClick(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Añadir;
