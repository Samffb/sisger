import Head from 'next/head'
import styles from '../../../styles/ResourcePortfolio.module.css'

export default function PorfolioIndex() {
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
          <div class={styles.content}>Programas</div>
          <a href="/dashboard/portfolio/newportfolio" className={styles.newPrograma}>Novo Programa</a>
        </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
        <div className={styles.painelPrograma}>
            <div className={styles.titlePrograma}>PDVG</div>
            <div className={styles.subtitlePrograma}>Programa Despertando Vocações para Gestão</div>
            <a href="" className={styles.buttonEdit}>Editar</a>
        </div>
			</main>
    </div>
  )
}
