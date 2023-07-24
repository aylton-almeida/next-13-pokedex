import { PokemonCard } from '@_components/PokemonCard'
import { LoadMore } from './components/LoadMore'
import { Pokemon } from '@_types/global'

type PokemonListProps = {
  pokemons: Pokemon[]
  limit: number
  offset: number
  hasMore: boolean
}

export const PokemonList = ({
  pokemons,
  ...paginationProps
}: PokemonListProps) => {
  return (
    <>
      {pokemons.map(({ id, image, color, name, types }, index) => (
        <PokemonCard
          key={id}
          id={id}
          image={image}
          name={name}
          types={types}
          color={color}
          priority={index < 4}
        />
      ))}
      <LoadMore {...paginationProps} />
    </>
  )
}
