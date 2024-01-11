import { useEffect, useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons'
import { CssBaseline, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [pokemons, setPokemons] = useState(null)
  const [dark, setDark] = useState(true)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => setPokemons(data))
  }, [])

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : ""}>
        <Button
          variant="contained"
          onClick={() => setDark(dark => !dark)}        
        >change theme</Button>

        <CssBaseline enableColorScheme />

        {pokemons && <Pokemons pokemons={pokemons.results} />}
      </ThemeProvider>
    </>
  )
}

export default App