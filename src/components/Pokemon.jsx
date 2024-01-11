import { useEffect, useState } from "react"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

function Pokemon({ pokemon }) {
	const [pokeData, setPokeData] = useState(null)

	useEffect(() => console.log(pokeData), [pokeData])

	useEffect(() => {
		fetch(pokemon.url)
			.then(res => res.json())
			.then(data => setPokeData(data))
	}, [pokemon.url])

	console.log("loading component")
	return (
		<Card 
			className="pokemon"
			sx={{ width: 200 }}
		>
			<CardHeader
				title={pokemon.name}
			/>
			{pokeData &&
				<>
					<CardMedia
						component="img"
						image={pokeData.sprites.front_default}
						alt={pokemon.name}
					/>
					<CardContent>
						<p>weight: {pokeData.weight}kg</p>
						<p>height: {pokeData.height}cm</p>
					</CardContent>
				</>
			}
		</Card>
	)
}

export default Pokemon
