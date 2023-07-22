import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.appBar}>App Bar</header>
      <main className={styles.main}>
        <section className={styles.section}>Section</section>
        <aside className={styles.aside}>Aside</aside>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  )
}
