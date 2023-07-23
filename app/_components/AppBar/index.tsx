import styles from './index.module.css'

import Image from 'next/image'
import LogoImg from 'public/images/logo.png'

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Image src={LogoImg} alt="Pokedex Logo" priority className={styles.img} />
    </header>
  )
}
