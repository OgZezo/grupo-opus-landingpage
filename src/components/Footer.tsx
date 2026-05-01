import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.brand}>Opus Grupo</span>
        <div className={styles.sep} />
        <span className={styles.tagline}>Construindo soluções, blindando seu patrimônio</span>
      </div>
      <p className={styles.copy}>© 2026 Opus Grupo. Todos os direitos reservados.</p>
    </footer>
  )
}
