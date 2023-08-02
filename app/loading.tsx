import { PokemonCardSkeleton } from '_components/PokemonCard/skeleton'
import styles from './page.module.css'

export default function Loading() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {Array(12)
          .fill(undefined)
          .map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
      </section>
    </main>
  )
}
