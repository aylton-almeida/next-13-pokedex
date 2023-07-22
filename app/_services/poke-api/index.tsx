type GetPokemonsArgs = {
  limit: number
  offset: number
}

type GetPokemonsResponse = {
  count: number
  next: string
  previous: string
  results: {
    name: string
    url: string
  }[]
}

// https://www.pokemon.com/br/api/pokedex/kalos

export const getPokemons = async ({
  limit,
  offset
}: GetPokemonsArgs): Promise<GetPokemonsResponse> => {
  const pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )

  const pokemonsJson = await pokemons.json()

  return pokemonsJson
}
