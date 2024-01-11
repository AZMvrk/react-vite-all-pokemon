import Pokemon from "./Pokemon"

import './Pokemons.css'

function Pokemons({ pokemons }) {
	return (
		<div className="pokemons">
			{pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
		</div>
	)
}

export default Pokemons