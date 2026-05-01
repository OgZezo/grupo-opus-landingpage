import { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import logoNav from '../assets/logo-nav.svg' // Importação do ícone para o nav

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
        <a href="#inicio" className={styles.logo}>
          <img src={logoNav} alt="Grupo Opus" className={styles.navIcon} /> 
          <span className={styles.logoText}>Opus</span>
        </a>
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
