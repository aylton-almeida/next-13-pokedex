import { AppBar } from '@_components/AppBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <AppBar />
      <main className={styles.main}>
        <section className={styles.section}>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
        </section>
        <aside className={styles.aside}>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
          <article className={styles.card}></article>
        </aside>
      </main>
    </>
  )
}
