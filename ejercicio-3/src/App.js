// En App.js
import React, { useState } from 'react';
import Añadir from './componentes/Añadir';

function App() {
  const [frases, setFrases] = useState([]);
  return (
    <div>
      <h1>Aplicación de React</h1>
      <Añadir
        onAñadir={(nuevaFrase) => setFrases([...frases, nuevaFrase])}
        frases={frases}
      />
    </div>
  );
}
export default App;
