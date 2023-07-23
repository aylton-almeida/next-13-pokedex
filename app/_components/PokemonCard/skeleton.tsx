import skeleton from '@_styles/skeleton.module.css'
import styles from './index.module.css'
import { Key } from 'react'

type PokemonCardSkeletonProps = {
  key?: Key
}

export const PokemonCardSkeleton = ({ key }: PokemonCardSkeletonProps) => (
  <article className={`${styles.article} ${skeleton.loading}`} key={key}>
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
