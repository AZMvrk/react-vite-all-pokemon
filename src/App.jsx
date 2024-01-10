import { useEffect, useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons'

function App() {
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => setPokemons(data))
  }, [])

  return (
    <>
      {pokemons && <Pokemons pokemons={pokemons.results} />}
    </>
  )
}

export default App