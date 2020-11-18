import Head from 'next/head'
import styles from '../../../styles/ResourceGroups.module.css'

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
          <div class={styles.content}>Grupos De Trabalho</div>
          <a href="/dashboard/group/newgroup" className={styles.newProject}>Novo Grupo de Trabalho</a>
        </div>
        <div class={styles.dashboard}>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Filtrar Por Instituição</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Filtrar Por Programa</div>
            </div>
          </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
          <div className={styles.painelGroup}>
            <div className={styles.titleGroup}>GT Arduino</div>
            <div className={styles.subtitleGroup}>IFPE - Campus Recife</div>
            <a href="" className={styles.buttonEdit}>Editar</a>
        </div>
			</main>
    </div>
  )
}
