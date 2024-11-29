import {Menu} from "./components/Menu"

//Funcion App vendria siendo la pantalla principal (¿Recomendable llamar componentes aquí?)
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello world!
      </h1>
      <Menu/>
    </>
  )
}

export default App