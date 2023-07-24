import styles from './page.module.css'
import { getPokemons } from '@_services/poke-api'
import { PokemonList } from '@_components/PokemonList'

export default async function Home() {
  const { pokemons, limit, offset, hasMore } = await getPokemons({
    limit: 24,
    offset: 0
  })

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PokemonList
          pokemons={pokemons}
          limit={limit}
          offset={offset}
          hasMore={hasMore}
        />
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
