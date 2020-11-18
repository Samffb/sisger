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
          <div>
            <input type='checkbox' id='check' class={styles.menuButton}></input>
            <label className={styles.icone} for='check'><img src="/menu.svg " width='25'height='25'/></label>
            <div className={styles.barraLateral}>
              <nav className={styles.optionBarra}>
                <a href=""><div className={styles.link}>Início</div></a>
                <a href=""><div className={styles.link}>Recursos</div></a>
                <a href=""><div className={styles.link}>Indicador</div></a>
              </nav>

            </div>
          </div>
          <div className={styles.titleHeader}>SISGER</div>
          <div className={styles.ifpe}>Instituto Internacional Despertando Vocações</div>
        </div>
        <div class={styles.panel}>
          <div class={styles.description}>Bem Vindo,</div>
          <div class={styles.content}>Gabriel Vanderlei de Oliveira</div>
        </div>

        <div class={styles.button}>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Pessoas</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Programas</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Grupos de Trabalho</div>
            </div>
            <div href="url"class={styles.buttonElement}>
              <div class={styles.value}>0</div>
              <div class={styles.metric}>Atividades</div>
            </div>
          </div>

          
          <div className={styles.title}>Próximo Passo</div>
          <div className={styles.funcionalidades}> 
            <div><a href='/dashboard/people/newpeople' className={styles.buttonNew}>Nova Pessoa</a>
            <a href='/dashboard/group/newgroup' className={styles.buttonNew}>Novo Grupo de Trabalho</a></div>
            <div><a href='/dashboard/portfolio/newportfolio' className={styles.buttonNew}>Novo Programa</a>
            <a href='dashboard/institute/newinstitute' className={styles.buttonNew}>Nova Atividade</a></div>
          </div>
          
          
          
			</main>
    </div>
  )
}
