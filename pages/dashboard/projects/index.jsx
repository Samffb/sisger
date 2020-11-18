import Head from 'next/head'
import styles from '../../../styles/ResourceProjects.module.css'

export default function PorfolioIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projetos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
			<main className={styles.main}>
				<div class={styles.header}>
          <div class={styles.menuButton}>Menu</div>
          SISGER
        </div>
        <div class={styles.panel}>
          <div class={styles.content}>Projetos</div>
          <a href="/dashboard/projects/newproject" className={styles.newProject}>Novo Projeto</a>
        </div>
        <div class={styles.dashboard}>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Filtrar Por Programa</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Filtrar Por Instituição</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Filtrar Por Grupo de Trabalho</div>
            </div>
        </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
          <div className={styles.painelProject}>
            <div className={styles.titleProject}>Análise das Relações internacionais geradas através do Programa Despertando Vocações </div>
            <div className={styles.subtitleProject}>GT Arduino</div>
            <a href="" className={styles.buttonEdit}>Editar</a>
        </div>
			</main>
    </div>
  )
}
