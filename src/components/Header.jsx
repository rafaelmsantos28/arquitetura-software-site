import { useState } from "react";
import './Header.css'
import logo from '../assets/logo.png'

// Redes sociais (SVG)
import instagramIcon from '../assets/redes-sociais/instagram.svg'
import youtubeIcon from '../assets/redes-sociais/youtube.svg'
import linkedinIcon from '../assets/redes-sociais/linkedin.svg'

import menuIcon from "../assets/icons/menu.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand logo" href="#home">
            <img src={logo} alt="Logo do site" style={{ height: '80px' }} />
          </a>

          {/* Botão menu mobile */}
          <button
            className={`navbar-toggler ${menuOpen ? 'collapsed' : ''}`}
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
              <a href="https://www.linkedin.com" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" />
              </a>
              <a href="https://www.instagram.com/acadarqsoftware/" target="_blank">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtubeIcon} alt="Youtube" />
              </a>
            </div>

            {/* Itens de navegação abaixo */}
            <ul className="navbar-nav me-3 gap-4 nav-links">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#orientador">Orientador</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobrenos">Sobre nós</a></li>
              <li className="nav-item"><a className="nav-link" href="#ensino">Ensino</a></li>
              <li className="nav-item"><a className="nav-link" href="#pesquisa">Pesquisa</a></li>
              <li className="nav-item"><a className="nav-link" href="#extensão">Extensão</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu mobile personalizado */}
      {menuOpen && (
        <div className="menu-overlay open">
          <ul className="overlay-links">
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#orientador" onClick={closeMenu}>Orientador</a></li>
            <li><a href="#sobrenos" onClick={closeMenu}>Sobre nós</a></li>
            <li><a href="#ensino" onClick={closeMenu}>Ensino</a></li>
            <li><a href="#pesquisa" onClick={closeMenu}>Pesquisa</a></li>
            <li><a href="#extensao" onClick={closeMenu}>Extensão</a></li>
          </ul>

          <div className="overlay-socials social-icons">
            <a href="https://www.linkedin.com" target="_blank">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/acadarqsoftware/" target="_blank">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtubeIcon} alt="Youtube" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
