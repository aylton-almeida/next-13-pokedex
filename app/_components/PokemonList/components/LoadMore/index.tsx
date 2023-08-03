'use client'

import { PokemonCard } from '_components/PokemonCard'
import { PokemonCardSkeleton } from '_components/PokemonCard/skeleton'
import useInfiniteScroll from '_hooks/use-infinite-scroll'
import { getPokemons } from '_services/poke-api'
import { useState } from 'react'

import styles from './index.module.css'
import { Pokemon } from '_types/global'

type LoadMoreProps = {
  limit: number
  offset: number
  hasMore: boolean
}

export const LoadMore = ({ hasMore, limit, offset }: LoadMoreProps) => {
  const [data, setData] = useState({
    pokemons: [] as Pokemon[],
    limit,
    offset,
    hasMore
  })

  const loadMore = async () => {
    if (!data.hasMore) return

    const { pokemons, ...page } = await getPokemons({
      limit: data.limit,
      offset: data.offset + data.limit
    })

    setData({
      pokemons: [...data.pokemons, ...pokemons],
      ...page
    })
  }

  const { moreRef } = useInfiniteScroll(loadMore)

  return (
    <>
      {data.pokemons.map(({ id, image, color, name, types }) => (
        <PokemonCard
          key={id}
          id={id}
          image={image}
          name={name}
          types={types}
          color={color}
        />
      ))}
      {data.hasMore && (
        <>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <PokemonCardSkeleton key={index} />
            ))}
          <div ref={moreRef} className={styles.pageRef} />
        </>
      )}
    </>
  )
}
