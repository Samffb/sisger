import Head from 'next/head'
import styles from '../../../../styles/ResourceNewPeople.module.css'

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
        <div className={styles.title}>Nova Pessoa</div>
        <div className={styles.camposDeEntrada}>
          <div>
            <div className={styles.campo}>Nome Completo</div>
            <input className={styles.entrada} placeholder='Digite o Nome Completo' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Escolaridade</div>
          <input className={styles.entrada} placeholder='Digite a Escolaridade' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Categoria Na Organização</div>
          <input className={styles.entrada} placeholder='Digite a Categoria Na Organização' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Endereço</div>
          <input className={styles.entrada} placeholder='Digite o Endereço' type="text"/>
          </div>
        </div>
        <button className={styles.buttonRegister} type='submit'>Criar Novo Registro</button>
      </main>
    </div>
  )
}