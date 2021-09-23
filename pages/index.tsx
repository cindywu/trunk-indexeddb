import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'

export default function Home(){
  return (
    <div className={styles.container}>

      <Head>
        <title>Trunk IndexedDB</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        🗂
        </h1>
        <div className={styles.description}>
          <p>[ ] References stored in IndexedDB</p>
          <p>[ ] PDF source file stored in IndexedDB</p>
        </div>
        <div className={styles.link}>
          <Link href="/workspace">🕳</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Produced by Jelly Public Benefit Corporation
      </footer>

    </div>
  )
}


