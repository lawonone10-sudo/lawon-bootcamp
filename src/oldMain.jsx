
import { createRoot } from 'react-dom/client';
import { useState} from 'react';

const rootElement = document.querySelector('#root');

const Counter = ({contadorValue}) => {
  console.log('the Counter component has render')
  return <h1>{contadorValue}</h1>
}

const App = (props) => {
  const [contadorValue, updatecontador] = useState(5)

  console.log('render')

  const handleClick = () => {
    updatecontador(prevContador => {
      return prevContador + 1
      }
    )
  }
  const reset = () => {
    updatecontador(0)
  }

  const isEven = contadorValue % 2 === 0; 
  const mensajePar = isEven ? 'es Par' : 'inpar';

  return (
    <div>
      <h1>Contador</h1>
      <p>{mensajePar}</p>
   <Counter contadorValue={contadorValue} />
   <button onClick={handleClick}>Add</button>
   <button onClick={reset}>Reset</button>
    </div>
  );
}


   

