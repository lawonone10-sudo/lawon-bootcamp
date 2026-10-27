import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Mensaje from './Mensaje'

const Mensaje = () => {
  return <h1>Hola mundo</h1>
}

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}
const App = () => {
  const mensaje = 'Hola'
  const a = 2
  const b = 3
  return (
    <div className="App">
      <Mensaje/>
      <Mensaje/>
      <Mensaje/>
      <Description/>

    </div>
  )
}
5 + 3
export default App
