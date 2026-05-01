import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#inicio" className={styles.logo}>
        <svg className={styles.logoMark} viewBox="0 0 40 40" fill="none">
          <path d="M20 4 L36 32 H4 Z" stroke="#C9983A" strokeWidth="1.5" fill="none" />
          <path d="M20 12 L29 28 H11 Z" fill="rgba(201,152,58,0.15)" stroke="#C9983A" strokeWidth="1" />
        </svg>
        <span className={styles.logoText}>Opus</span>
      </a>
      <ul className={styles.links}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#quem-somos">Sobre</a></li>
        <li><a href="#areas">Atuação</a></li>
        <li><a href="#contato" className={styles.cta}>Consulta</a></li>
      </ul>
    </nav>
  )
}
