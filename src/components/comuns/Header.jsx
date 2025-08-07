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

  // Para adicionar mais itens no menu de navegação, insira novos objetos neste array:
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Quem sou eu', path: '/quemsoueu' },
    { label: 'Pesquisa', path: '/pesquisa' },
    { label: 'Atividades', path: '/atividades' },
    { label: 'Extensão', path: '/extensao' },
    { label: 'Sobre nós', path: '/sobrenos' },
  ];

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container header-container">
            {/* Logo */}
            <Link className="navbar-brand logo" to="/">
              <img src={logo} alt="Logo do site" />
            </Link>

            {/* Menu Desktop */}
            <div className="d-none d-lg-flex nav-center">
              <ul className="navbar-nav gap-4">
                {navLinks.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <Link className="nav-link fw-medium" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociais Desktop */}
            <div className="d-none d-lg-flex social-icons">
              <a
                href="https://www.linkedin.com/company/academia-do-arquiteto-de-software/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
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

            {/* Botão Menu Mobile */}
            <button
              className={`navbar-toggler border-0 ${menuOpen ? 'open' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <img src={menuIcon} alt="Menu" />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="menu-overlay open">
          <ul className="list-unstyled d-flex flex-column align-items-center gap-4 p-0">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link className="nav-link fs-4 fw-semibold" to={item.path} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/academia-do-arquiteto-de-software/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
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
