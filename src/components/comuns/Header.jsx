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
          <div className="container">
            <Link className="navbar-brand logo" to="/">
              <img src={logo} alt="Logo do site" style={{ height: '80px' }} />
            </Link>

            {/* Botão menu mobile */}
            <button
              className={`navbar-toggler menu-toggle ${menuOpen ? 'open' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <img src={menuIcon} alt="Menu" style={{ height: '32px' }} />
            </button>

            {/* Itens do menu desktop */}
            <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex flex-column align-items-end">
              {/* Ícones sociais no topo */}
              <div className="d-flex gap-3 mb-2 pe-3 social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="Linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/acadarqsoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a
                  href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeIcon} alt="Youtube" />
                </a>
              </div>

              {/* Itens de navegação abaixo */}
              <ul className="navbar-nav me-3 gap-4 nav-links">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quemsoueu">
                    Quem sou eu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ensino">
                    Cursos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pesquisa">
                    Pesquisa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/extensao">
                    Extensão
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobrenos">
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Menu mobile personalizado */}
      {menuOpen && (
        <div className="menu-overlay open">
          <ul className="overlay-links">
            <li>
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/quemsoueu" onClick={closeMenu}>
                Quem sou eu
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/ensino" onClick={closeMenu}>
                Ensino
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/pesquisa" onClick={closeMenu}>
                Pesquisa
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/extensao" onClick={closeMenu}>
                Extensão
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/sobrenos" onClick={closeMenu}>
                Sobre nós
              </Link>
            </li>
          </ul>

          <div className="overlay-socials social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a
              href="https://www.instagram.com/acadarqsoftware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="Youtube" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
