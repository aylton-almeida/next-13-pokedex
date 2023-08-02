'use server'

import { Pokemon, PokemonType } from '_types/global'
import ColorThief from 'colorthief'
import { cache } from 'react'

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

type GetPokemonsResponse = {
  totalCount: number
  hasMore: boolean
  limit: number
  offset: number
  pokemons: Pokemon[]
}

export const getPokemons = cache(
  async ({ limit, offset }: GetPokemonsArgs): Promise<GetPokemonsResponse> => {
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
          new Promise<Pokemon>(async (resolve) => {
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
      pokemons
    }
  }
)
