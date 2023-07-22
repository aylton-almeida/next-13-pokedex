import { getPokemons } from '@_services/poke-api'

export default async function Pokedex() {
  const pokemons = await getPokemons({ limit: 10, offset: 0 })

  return (
    <main>
      <h1>Bem Vindo à Pokedex</h1>
      <section>
        <ul>
          {pokemons.results.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
