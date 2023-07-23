import { AppBar } from '@_components/AppBar'
import styles from './page.module.css'
import { PokemonCard } from '@_components/PokemonCard'
import { getPokemons } from '@_services/poke-api'
import { Fragment } from 'react'
import { PokemonCardSkeleton } from '@_components/PokemonCard/skeleton'

// TODO: Add loading state

export default async function Home() {
  const { pokemons } = await getPokemons({ limit: 12, offset: 0 })

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {pokemons.map(({ id, image, color, name, types }, index) => (
          <Fragment key={id}>
            <PokemonCard
              id={id}
              image={image}
              name={name}
              types={types}
              color={color}
              priority={index < 4}
            />
          </Fragment>
        ))}
      </section>
      {/* <aside className={styles.aside}>
          <PokemonCard
            id={1007}
            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1007.png"
            name="Koraidon"
            types={['fighting', 'dragon']}
            color="#925a5e"
          />
          <PokemonCard
            id={1007}
            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1007.png"
            name="Koraidon"
            types={['fighting', 'dragon']}
            color="#925a5e"
          />
          <PokemonCard
            id={1007}
            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1007.png"
            name="Koraidon"
            types={['fighting', 'dragon']}
            color="#925a5e"
          />
        </aside> */}
    </main>
  )
}
