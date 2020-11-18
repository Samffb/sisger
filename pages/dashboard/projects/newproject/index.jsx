import Head from 'next/head'
import styles from '../../../../styles/ResourceNewProject.module.css'

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
        <div className={styles.title}>Novo Projeto</div>
        <div className={styles.camposDeEntrada}>
          <div>
            <div className={styles.campo}>Título</div>
            <input className={styles.entrada} placeholder='Digite o Título' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Descrição</div>
          <input className={styles.entrada} placeholder='Digite a Descrição' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Grupo de Trabalho</div>
          <input className={styles.entrada} placeholder='Digite o Grupo de Trabalho' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Coordenador Responsável</div>
          <input className={styles.entrada} placeholder='Digite o Coordenador Responsável' type="text"/>
          </div>
          <div>
          <div className={styles.campo}>Endereço</div>
          <input className={styles.entrada} placeholder='Digite o Endereço' type="text"/>
          </div>
        </div>
        <button className={styles.buttonRegister} type='submit'>Criar Novo Projeto</button>
      </main>
    </div>
  )
}