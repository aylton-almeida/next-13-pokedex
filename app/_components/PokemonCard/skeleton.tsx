import skeleton from '@_styles/skeleton.module.css'
import styles from './index.module.css'

export const PokemonCardSkeleton = () => (
  <article className={`${styles.article} ${skeleton.loading}`}>
    <div className={styles.imgWrapper}>
      <div className={styles.img} />
    </div>
    <div className={styles.description}>
      <div className={`${styles.number} ${styles.numberSkeleton}`} />
      <div className={styles.nameSkeleton} />
      <div className={`${styles.types} ${styles.typesSkeleton}`} />
    </div>
  </article>
)
