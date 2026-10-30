const Mensaje = (props) => {
  return (
    <h2 style={{ color: props.color }}>
      {props.message}
    </h2>
  )
}

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  const a = 2
  const b = 3

  // Mensajes de depuración en consola:
  console.log("full stack")
  console.log("Suma de a + b:", a + b)

  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="En un curso" />
      <Mensaje color="yellow" message="De react" />
      <Description />
    </div>
  )
}

export default App