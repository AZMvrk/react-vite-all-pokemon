import { useEffect, useState } from "react"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

function Pokemon({ pokemon }) {
	const [pokeData, setPokeData] = useState(null)

	useEffect(() => {
		fetch(pokemon.url)
			.then(res => res.json())
			.then(data => setPokeData(data))
	}, [pokemon.url])

	return (
		<Card 
			className="pokemon"
			sx={{ 
				width: 200,
				minHeight: 400
			}}
		>
			<CardHeader
				title={pokemon.name}
			/>
			{pokeData &&
				<>
					<CardContent
						sx={{ padding: "0 16px 16px 16px" }}
					>
						<h2>#{pokeData.id}</h2>
					</CardContent>
					<CardMedia
						component="img"
						image={pokeData.sprites.front_default}
						alt={pokemon.name}
					/>
					<CardContent>
						<p>HP: {pokeData.stats[0].base_stat}</p>
						<p>ATk: {pokeData.stats[1].base_stat}</p>
						<p>DEF: {pokeData.stats[2].base_stat}</p>
						<p>SPD: {pokeData.stats[5].base_stat}</p>
					</CardContent>
				</>
			}
		</Card>
	)
}

export default Pokemon