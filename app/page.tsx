import styles from './page.module.css'
import { getPokemons } from '_services/poke-api'
import { PokemonList } from '_components/PokemonList'

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
    </main>
  )
}
