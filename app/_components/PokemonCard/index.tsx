import Link from 'next/link'
import styles from './index.module.css'
import Image from 'next/image'
import { TypeBadge } from '@_components/TypeBadge'
import { Fragment } from 'react'
import { PokemonType } from '@_types/global'

type PokemonCardProps = {
  id: number
  name: string
  image: string
  types: PokemonType[]
  color: string
  priority?: boolean
}

export const PokemonCard = ({
  id,
  name,
  image,
  types,
  color,
  priority = false // TODO: add priority to first x cards
}: PokemonCardProps) => {
  return (
    <article className={styles.article} style={{ backgroundColor: color }}>
      <Link href={`/pokedex/${id}`}>
        <div className={styles.imgWrapper}>
          <Image
            src={image}
            alt={`${name} image`}
            fill
            className={styles.img}
            sizes="(max-width: 450px) 180px, (max-width: 768px) 300px, 250px"
            priority={priority}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.number}>{`Nº ${id
            .toString()
            .padStart(4, '0')}`}</p>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.types}>
            {types.map((type) => (
              <Fragment key={type}>
                <TypeBadge type={type} />
              </Fragment>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
