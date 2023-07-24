export type PokemonType = | 'normal'
| 'fire'
| 'water'
| 'grass'
| 'flying'
| 'fighting'
| 'poison'
| 'electric'
| 'ground'
| 'rock'
| 'psychic'
| 'ice'
| 'bug'
| 'ghost'
| 'steel'
| 'dragon'
| 'dark'
| 'fairy'


export type Pokemon = {
  id: number
  name: string
  types: PokemonType[]
  image: string
  color: string
} 
