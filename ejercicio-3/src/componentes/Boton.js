// En Boton.js
import React from 'react';

function Boton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Boton;
