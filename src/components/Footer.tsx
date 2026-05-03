/* src/components/Footer.tsx */
import styles from './Footer.module.css';
import logoNav from '../assets/logo-nav.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Coluna 1: Branding (Lado Esquerdo) */}
          <div className={styles.brandColumn}>
            <div className={styles.logoGroup}>
              <img src={logoNav} alt="Grupo Opus" className={styles.footerLogo} />
              <h3 className={styles.brandName}>OPUS</h3>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <ul className={styles.links}>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#areas">Atuação</a></li>
              <li><a href="#localizacao">Localização</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contatos */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contatos</h4>
            <ul className={styles.contactList}>
              <li>
                <strong>E-mail</strong><br />
                <a href="mailto:contato@opusgrupo.com">contato@opusgrupo.com</a>
              </li>
              <li>
                <strong>WhatsApp</strong><br />
                <a href="https://wa.me/5521979629991" target="_blank" rel="noopener noreferrer">
                  (21) 97962-9991
                </a>
              </li>
              <li>
                <strong>WhatsApp</strong><br />
                <a href="https://wa.me/5521971767324" target="_blank" rel="noopener noreferrer">
                  (21) 97176-7324
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Endereço */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Escritório</h4>
            <p className={styles.addressText}>
              Av. Alm. Júlio de Sá Bierrenbach, 200<br />
              Bloco 1, Sala 501 - Barra da Tijuca<br />
              Rio de Janeiro — RJ<br />
              CEP: 22775-028
            </p>
          </div>
        </div>

        {/* Direitos Reservados (Embaixo) */}
        <div className={styles.bottomBar}>
          <p>CNPJ: 66.488.857/0001-00 | © {currentYear} Grupo Opus — Todos os direitos reservados.</p>
          <p className={styles.legalText}>Desenvolvido por <a href="https://portfolio-ogzezo.vercel.app/" target="_blank" rel="noopener noreferrer">Jose M. Bandeira</a></p>
        </div>
      </div>
    </footer>
  );
}