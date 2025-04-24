// Aqui é um componente reutilizável
import { useState } from "react";
import '../style/Header.css'
import logo from '../assets/logo.png'

// Redes sociais + Componente
import SocialIcon from './SocialIcon'
import instagramIcon from '../assets/redes-sociais/instagram-black.png'
import instagramIconBlue from '../assets/redes-sociais/instagram-blue.png'
import youtubeIcon from '../assets/redes-sociais/youtube-black.png'
import youtubeIconBlue from '../assets/redes-sociais/youtube-blue.png'
import linkedinIcon from '../assets/redes-sociais/linkedin-black.png'
import linkedinIconBlue from '../assets/redes-sociais/linkedin-blue.png'

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
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo do site" className="logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#capacitação">Capacitação</a></li>
          <li><a href="#contatos">Contatos</a></li>
          <li><a href="#contribuidores">Contribuidores</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank"><SocialIcon defaultIcon={linkedinIcon} hoverIcon={linkedinIconBlue} alt="Linkedin" /></a>
          <a href="https://www.instagram.com/acadarqsoftware/" target="_blank"><SocialIcon defaultIcon={instagramIcon} hoverIcon={instagramIconBlue} alt="Instagram" /></a>
          <a href="https://www.youtube.com/" target="_blank"><SocialIcon defaultIcon={youtubeIcon} hoverIcon={youtubeIconBlue} alt="Youtube" /></a>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={menuOpen}>
          <img src={menuIcon} alt="Menu" />
        </div>
      </nav>

      {/* Menu como Seção */}
      {menuOpen && (
        <div className="menu-overlay open">
          <ul className="overlay-links">
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre nós</a></li>
            <li><a href="#capacitação" onClick={closeMenu}>Capacitação</a></li>
            <li><a href="#contatos" onClick={closeMenu}>Contatos</a></li>
            <li><a href="#contribuidores" onClick={closeMenu}>Contribuidores</a></li>
          </ul>

          <div className="overlay-socials">
            <a href="https://www.linkedin.com" target="_blank"><SocialIcon defaultIcon={linkedinIcon} hoverIcon={linkedinIconBlue} alt="Linkedin" /></a>
            <a href="https://www.instagram.com/acadarqsoftware/" target="_blank"><SocialIcon defaultIcon={instagramIcon} hoverIcon={instagramIconBlue} alt="Instagram" /></a>
            <a href="https://www.youtube.com/" target="_blank"><SocialIcon defaultIcon={youtubeIcon} hoverIcon={youtubeIconBlue} alt="Youtube" /></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;