import Head from 'next/head'
import styles from '../../../../styles/ResourceNewGroup.module.css'

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
        <div className={styles.title}>Novo Grupo De Trabalho</div>
        <div className={styles.camposDeEntrada}>
          <div>
            <div className={styles.campo}>Nome</div>
            <input className={styles.entrada} placeholder='Digite o Nome' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Instituição</div>
          <input className={styles.entrada} placeholder='Digite a Instituição' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Coordenador</div>
          <input className={styles.entrada} placeholder='Digite o Coordenador' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Alunos</div>
          <input className={styles.entrada} placeholder='Digite os Alunos' type="text"/>
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