import { useEffect, useRef, useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons'
import { CssBaseline, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [pokemons, setPokemons] = useState(null) // pokemon array
  const [pokemonsData, setPokemonsData] = useState(null) // fetch result: object with keys + pokemon array
  const [dark, setDark] = useState(true)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })

    if (pokemonsData) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect() // clean-up function
  }, [ref, pokemonsData])

  useEffect(() => {
    if (isIntersecting) {
      fetch(pokemonsData.next)
        .then(res => res.json())
        .then(data => {
          setPokemonsData(data)
          setPokemons(currentData => [...currentData, ...data.results])
        })
      setIsIntersecting(false)
    }
  }, [isIntersecting, pokemonsData])

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const whiteTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => {
        setPokemonsData(data)
        setPokemons(data.results)
      })
  }, [])

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : whiteTheme}>
        <Button
          variant="contained"
          onClick={() => setDark(dark => !dark)}
        >change theme</Button>

        <CssBaseline enableColorScheme />

        {pokemons && <Pokemons pokemons={pokemons} />}

        {pokemonsData?.next &&
          <Button
            ref={ref}
            variant="contained"
            onClick={() => {
              console.log("fetch more pokemons")
            }}
          >load more</Button>
        }
      </ThemeProvider>
    </>
  )
}

export default App