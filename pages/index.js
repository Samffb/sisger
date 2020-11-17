import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SISGER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.centered}>
            <div className={styles.title}>
              SISGER
            </div>
            <div className={styles.description}>
              Sistema de Gerenciamento de Recursos
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.title}>
          <h1> Entrar na Conta</h1>
          <input className={styles.boxEmail} placeholder='E-mail'></input>
          <input className={styles.boxPassword} type= 'password'placeholder=' Senha'></input>
            <button type= 'submit'className = {styles.buttonHome} > Enviar </button>
            <a className={styles.forgot} href="*colocar link aqui*">Esqueci minha senha</a>
          </div>
        </div>
      </main>

    </div>
  )
}
