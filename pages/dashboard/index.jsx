import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
			<main className={styles.main}>
				<div class={styles.header}>
          <div class={styles.menuButton}>Menu</div>
          SISGER
        </div>
        <div class={styles.panel}>
          <div class={styles.description}>Bem Vindo,</div>
          <div class={styles.content}>Gabriel Vanderlei de Oliveira</div>
        </div>
        <div class={styles.button}>
            <div class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Pessoas</div>
            </div>
          </div>
			</main>
    </div>
  )
}
