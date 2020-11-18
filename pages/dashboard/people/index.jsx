import Head from 'next/head'
import styles from '../../../styles/ResourcePeople.module.css'

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
          <a href="/dashboard/people/newpeople" className={styles.newPeople}>Nova Pessoa</a>
        </div>
        <div class={styles.dashboard}>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Alunos</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Professores</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Cordenadores</div>
            </div>
        </div>
        <div class={styles.button}>
            <input type="text" placeholder="Pesquisar" class={styles.searchInput} />
          </div>
        <div className={styles.painelPrograma}>
            <div className={styles.titleName}>Gabriel Vanderlei De Oliveira</div>
            <div className={styles.subtitleEmail}>gvo@cin.ufpe.com</div>
            <a href="" className={styles.buttonEdit}>Editar</a>
        </div>
			</main>
    </div>
  )
}
