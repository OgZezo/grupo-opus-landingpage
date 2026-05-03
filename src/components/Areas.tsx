import styles from './Areas.module.css'

const areas = [
  {
    num: '01',
    name: 'Consultoria juridica estratégica',
    text: 'Assessoria jurídica personalizada para empresas e indivíduos, com foco em soluções estratégicas e prevenção de riscos legais.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"/>
        <path d="M12 12v9M3 7l9 5 9-5"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Regularização Fiscal e Recuperação de Crédito',
    text: 'Especialização em regularização fiscal, recuperação de créditos tributários e consultoria para otimização da carga tributária, garantindo conformidade e eficiência financeira.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Soluções digitais e Compliance',
    text: 'Desenvolvimento de soluções digitais e consultoria em compliance para garantir a conformidade regulatória e a proteção dos dados dos nossos clientes.',
    icon: (
      <svg viewBox="-10.5 -9.45 21 18.9" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="0" r="2" fill="currentColor"/>
        <g stroke="currentColor">
          <ellipse rx="10" ry="4.5" />
          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Proteção Patrimonial',
    text: 'Estruturação de holdings, blindagem patrimonial, planejamento tributário e sucessório para preservar e perpetuar o seu patrimônio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Areas() {
  return (
    <section id="areas" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div>
          <p className={styles.label}>Especialidades</p>
          <h2 className={styles.title}>Áreas de<br /><em>atuação</em></h2>
        </div>
        <p className={styles.desc}>
          Atuamos em frentes estratégicas do direito para garantir segurança jurídica
          e proteção ampla aos nossos clientes.
        </p>
      </div>
      <div className={`${styles.grid} reveal`} style={{ transitionDelay: '0.15s' }}>
        {areas.map((a) => (
          <div key={a.num} className={styles.card}>
            <span className={styles.num}>{a.num}</span>
            <div className={styles.icon}>{a.icon}</div>
            <h3 className={styles.name}>{a.name}</h3>
            <p className={styles.text}>{a.text}</p>
            <a href="#contato" className={styles.link}>Saiba mais →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
