function Pokemon({ pokemon }) {
	console.log(pokemon)

	return (
		<div className="pokemon">
			{pokemon.name}
		</div>
	)
}

export default Pokemon