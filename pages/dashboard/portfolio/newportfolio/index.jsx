import Head from 'next/head'
import styles from '../../../../styles/ResourceNewPortfolio.module.css'

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
        <div className={styles.title}>Novo Programa</div>
        <div className={styles.camposDeEntrada}>
          <div>
            <div className={styles.campo}>Nome</div>
            <input className={styles.entrada} placeholder='Digite o Nome' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Coordenador</div>
          <input className={styles.entrada} placeholder='Digite o Coordenador' type="text"/>
          </div>
        </div>
        <button className={styles.buttonRegister} type='submit'>Criar Novo Registro</button>
      </main>
    </div>
  )
}