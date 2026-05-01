import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.lines} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Grupo Opus</p>
        <h1 className={styles.title}>
          Soluções<br />
          <em>jurídicas</em> com<br />
          precisão
        </h1>
        <p className={styles.sub}>
          Blindando seu patrimônio com expertise, ética e comprometimento absoluto.
        </p>
        <div className={styles.actions}>
          <a href="#contato" className={styles.btnPrimary}>Agendar consulta</a>
          <a href="#quem-somos" className={styles.btnGhost}>
            Conheça-nos
            <span className={styles.arrow}>↓</span>
          </a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
