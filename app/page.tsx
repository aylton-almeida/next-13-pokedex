import { AppBar } from '@_components/AppBar'
import styles from './page.module.css'
import { PokemonCard } from '@_components/PokemonCard'

// TODO: Add loading state

export default function Home() {
  return (
    <>
      <AppBar />
      <main className={styles.main}>
        <section className={styles.section}>
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
          <PokemonCard
            id={1007}
            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1007.png"
            name="Koraidon"
            types={['fighting', 'dragon']}
            color="#925a5e"
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
    </>
  )
}
