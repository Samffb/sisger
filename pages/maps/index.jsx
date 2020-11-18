import Head from 'next/head'
import styles from '../../styles/maps.module.css'

export default function PorfolioIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grupo De Trabalho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
			<main className={styles.main}>
				<div class={styles.header}>
          <div class={styles.menuButton}>Menu</div>
          SISGER
        </div>
        <div class={styles.panel}>
          <div class={styles.content}>Relatórios</div>
        </div>
        <div class={styles.dashboard}>
            <div>
                <div>
                    <div href="url"class={styles.buttonElement}>
                    <div class={styles.metric}>Mapa De Programa</div>
                    </div>
                </div>
                <div>
                    <div href="url"class={styles.buttonElement}>
                    <div class={styles.metric}>Mapa De pessoa</div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div href="url"class={styles.buttonElement}> 
                    <div class={styles.metric}>Mapa De Projeto</div>
                    </div>
                </div>
                <div>
                    <div href="url"class={styles.buttonElement}>
                    <div class={styles.metric}>Mapa De Grupo De Trabalho</div>
                    </div>
                </div>
            </div>
        </div>

		</main>
    </div>
  )
}