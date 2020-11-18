import Head from 'next/head'
import styles from '../../../../styles/ResourceNewInstitute.module.css'

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
        <div className={styles.title}>Nova Instituição</div>
        <div className={styles.camposDeEntrada}>
          <div>
            <div className={styles.campo}>Nome Completo Da Instituição</div>
            <input className={styles.entrada} placeholder='Digite o Nome Completo Da Instituição' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Sigla</div>
          <input className={styles.entrada} placeholder='Digite a Sigla' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Endereço</div>
          <input className={styles.entrada} placeholder='Digite o Endereço' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Parceiro</div>
          <input className={styles.entrada} placeholder='Digite o Parceiro' type="text"/>
          </div>
        </div>
        <button className={styles.buttonRegister} type='submit'>Criar Novo Registro</button>
      </main>
    </div>
  )
}