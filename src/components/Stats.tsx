import styles from './Stats.module.css'

const stats = [
  { num: '15+', label: 'Anos de experiência' },
  { num: '800+', label: 'Clientes atendidos' },
  { num: '98%', label: 'Taxa de satisfação' },
  { num: '4', label: 'Áreas de atuação' },
]

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`${styles.item} reveal`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <span className={styles.num}>{s.num}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
