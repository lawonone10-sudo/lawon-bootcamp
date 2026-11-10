import { useState } from 'react';

const App = () => {
  //1. Estado
  const [clicks, setClicks] = useState();

  //2. Manejar de eventos
  const incrementar = () => setClicks(clicks + 1);
  const decrementar = () => setClicks(clicks - 1);
  const resetiar = () => setClicks(0);

  //3. Renderizado condicional
  const esPar = clicks % 2 === 0;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>

      <h1>Contador interactivo: {clicks}</h1>
      
      {/* Operador ternario*/}
      <p>El numero es: <strong>{esPar ? 'Par ' : 'Impar' }</strong></p>

      {/* Operaador && */}
      {clicks === 0 && <p style={{ color: 'grey' }}>El contador esta en cero.</p>}
      {clicks > 15 && <p style={{ color: 'orange' }}>Racha de mas de 15M clicks! XD</p>}

      {/*Botones con onClick */}
      <button onClick={decrementar}>-1</button>
      <button onClick={resetiar} style={{margin: '0 8px'}}>Reset</button>
      <button onClick={incrementar}>+1</button>
    </div>

  )
}

export default App