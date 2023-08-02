import { PokemonType } from '_types/global'
import styles from './index.module.css'

type TypeBadge = {
  type: PokemonType
}

export const TypeBadge = ({ type }: TypeBadge) => {
  return (
    <span className={styles.badge} data-type={type}>
      {type}
    </span>
  )
}
