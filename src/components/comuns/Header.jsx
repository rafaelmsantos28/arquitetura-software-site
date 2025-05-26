import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

// Redes sociais (SVG)
import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import youtubeIcon from '../../assets/redes-sociais/youtube.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';
import menuIcon from '../../assets/icons/menu.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container d-flex justify-content-between align-items-center">
            <Link className="navbar-brand logo" to="/">
              <img src={logo} alt="Logo do site" />
            </Link>

            {/* Botão menu mobile */}
            <button
              className={`navbar-toggler border-0 ${menuOpen ? 'open' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <img src={menuIcon} alt="Menu" style={{ height: '32px' }} />
            </button>

            {/* Menu desktop */}
            <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex flex-column align-items-end">
              <div className="d-flex gap-3 mb-2 pe-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/acadarqsoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a
                  href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeIcon} alt="Youtube" className="social-icon" />
                </a>
              </div>

              <ul className="navbar-nav gap-4 pe-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Quem sou eu', path: '/quemsoueu' },
                  { label: 'Atividades', path: '/atividades' },
                  { label: 'Pesquisa', path: '/pesquisa' },
                  { label: 'Extensão', path: '/extensao' },
                  { label: 'Sobre nós', path: '/sobrenos' },
                ].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <Link className="nav-link fw-medium " to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu mobile personalizado */}
      {menuOpen && (
        <div className="menu-overlay open">
          <ul className="list-unstyled d-flex flex-column align-items-center gap-4 p-0">
            {[
              { label: 'Home', path: '/' },
              { label: 'Quem sou eu', path: '/quemsoueu' },
              { label: 'Atividades', path: '/atividades' },
              { label: 'Pesquisa', path: '/pesquisa' },
              { label: 'Extensão', path: '/extensao' },
              { label: 'Sobre nós', path: '/sobrenos' },
            ].map((item, idx) => (
              <li key={idx}>
                <Link className="nav-link fs-4 fw-semibold" to={item.path} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-4 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin" className="social-icon-lg" />
            </a>
            <a
              href="https://www.instagram.com/acadarqsoftware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon-lg" />
            </a>
            <a
              href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="Youtube" className="social-icon-lg" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
