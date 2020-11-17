import Head from 'next/head'
import styles from '../../../styles/Resource.module.css'

export default function PorfolioIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pessoas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
			<main className={styles.main}>
				<div class={styles.header}>
          <div class={styles.menuButton}>Menu</div>
          SISGER
        </div>
        <div class={styles.panel}>
          <div class={styles.content}>Pessoas</div>
        </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
			</main>
    </div>
  )
}
