import './App.css'
import { CompositionExample } from './components/CompositionExample'



function App() {

  // La composición permite que App delegue la estructura de la pantalla en un componente especializado.
  return (
    <>
      <CompositionExample/>
    </>
  )
}

export default App
