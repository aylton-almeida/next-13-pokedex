import { PokemonType } from '@_types/global'
import ColorThief from 'colorthief'

type PokemonAPIResponse = {
  id: number
  name: string
  ThumbnailImage: string
  type: PokemonType[]
}[]

type GetPokemonsArgs = {
  limit: number
  offset: number
}

type PokemonWithColor = {
  id: number
  name: string
  types: PokemonType[]
  image: string
  color: string
}

type GetPokemonsResponse = {
  totalCount: number
  hasMore: boolean
  limit: number
  offset: number
  pokemons: PokemonWithColor[]
}

// https://www.pokemon.com/br/api/pokedex/kalos

export const getPokemons = async ({
  limit,
  offset
}: GetPokemonsArgs): Promise<GetPokemonsResponse> => {
  const response = await fetch(`https://www.pokemon.com/br/api/pokedex/kalos`)

  const parsed: PokemonAPIResponse = await response.json()

  // Removing duplicates
  const seenIds = new Set()
  const filtered = parsed.filter(({ id }) => {
    if (seenIds.has(id)) return false
    seenIds.add(id)
    return true
  })

  const hasMore = parsed.length > offset + limit
  const totalCount = parsed.length
  const paginated = filtered.slice(offset, offset + limit)

  const pokemons = await Promise.all(
    paginated.map(
      ({ type, ThumbnailImage, ...rest }) =>
        new Promise<PokemonWithColor>(async (resolve) => {
          const [r, g, b] = await ColorThief.getColor(ThumbnailImage)
          return resolve({
            ...rest,
            types: type,
            image: ThumbnailImage,
            color: `rgb(${r}, ${g}, ${b})`
          })
        })
    )
  )

  return {
    totalCount,
    hasMore,
    limit,
    offset,
    pokemons: Array.from(new Set(pokemons))
  }
}
