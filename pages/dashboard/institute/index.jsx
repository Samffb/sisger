import Head from 'next/head'
import styles from '../../../styles/ResourceInstitute.module.css'

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
          <div class={styles.content}>Instituições</div>
          <a href="/dashboard/institute/newinstitute" className={styles.newInstitute}>Nova Instituição</a>
        </div>
        <div class={styles.dashboard}>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Estados</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Parceiros</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Grupos de Trabalho</div>
            </div>
          </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
          <div className={styles.painelInstitute}>
            <div className={styles.titleInstitute}>Instituto Federal de Pernambuco</div>
            <div className={styles.subtitleInstitute}>IFPE</div>
            <a href="" className={styles.buttonEdit}>Editar</a>
        </div>
		</main>
    </div>
  )
}