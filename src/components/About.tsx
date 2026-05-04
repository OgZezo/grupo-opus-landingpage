import styles from './About.module.css'
import statueImg from '../assets/temis.png';

export default function About() {
  return (
    <section id="quem-somos" className={styles.section}>
      <div className={styles.grid}>
        <div className={`${styles.left} reveal`}>
          <p className={styles.label}>Quem somos</p>
          <h2 className={styles.title}>
            Um grupo<br />
            construído sobre<br />
            <em>excelência</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.text}>
            Somos um grupo especializado em soluções empresariais, jurídicas, tecnológicas e de proteção patrimonial,
            atuando com excelência, ética e comprometimento para proteger o que mais
            importa para nossos clientes.
          </p>
          <p className={styles.text}>
            Nossa equipe multidisciplinar combina experiência técnica e visão estratégica
            para entregar resultados que fazem a diferença na vida de empresas e famílias.
          </p>
          <a href="#contato" className={styles.cta}>Entre em contato →</a>
        </div>
        <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.2s' }}>
          <div className={styles.visual}>
            <div className={styles.visualBg} />
            <div className={styles.visualPattern}>
              <img src={statueImg} alt="Estátua de Temis" className={styles.statueImage} />
            </div>
            <div className={styles.visualText}>
              <p className={styles.quote}>"Construindo soluções, blindando seu patrimônio."</p>
              <p className={styles.attr}>Missão — Grupo Opus</p>
            </div>
          </div>
          <div className={styles.ornament} />
          <div className={styles.ornament2} />
        </div>
      </div>
    </section>
  )
}
