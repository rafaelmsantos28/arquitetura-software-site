import './Footer.css';

import logoFooter from '../../assets/logo-footer.png';
import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';
import mailIcon from '../../assets/redes-sociais/mail.svg';
import phoneIcon from '../../assets/redes-sociais/phone.svg';
import youtubeIcon from '../../assets/redes-sociais/youtube.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">
            {' '}
            {/* Ajuste para ocupar menos espaço em md e lg */}
            <img
              src={logoFooter}
              alt="Logo"
              className="mb-3 img-fluid"
              style={{ maxWidth: '150px' }}
            />
            <div className="d-flex justify-content-center justify-content-md-start gap-3 social-icons-footer">
              <a
                href="https://www.instagram.com/acadarqsoftware/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" width="30" height="30" />
              </a>
              <a
                href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube" width="30" height="30" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" width="30" height="30" />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">
            {' '}
            {/* Aumenta a largura em md e lg */}
            <h4 className="fw-bold mb-4">Institucional</h4>
            <ul className="list-unstyled lead">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/quemsoueu">Quem sou eu</Link>
              </li>
              <li className="mb-2">
                <Link to="/sobrenos">Sobre nós</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">
            {' '}
            {/* Aumenta a largura em md e lg */}
            <h4 className="fw-bold mb-4">Acadêmico</h4>
            <ul className="list-unstyled lead">
              <li className="mb-2">
                <Link to="/atividades">Atividades</Link>
              </li>
              <li className="mb-2">
                <Link to="/pesquisa">Pesquisa</Link>
              </li>
              <li className="mb-2">
                <Link to="/extensao">Extensão</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">
            {' '}
            {/* Ajuste para ocupar menos espaço em md e lg */}
            <h4 className="fw-bold mb-4">Contatos</h4>
            <ul className="list-unstyled ">
              <li className="align-items-center mb-2 lead">
                <img src={mailIcon} alt="E-mail" width="20" height="20" className="me-2" />
                <span className="small">a.software-unesp@gmail.com</span>
              </li>
              <li className="align-items-center mb-2 lead">
                <img src={phoneIcon} alt="Telefone" width="20" height="20" className="me-2" />
                <span className="small">(99) 99999-9999</span>
              </li>
              <li className="align-items-center mb-2 lead">
                <img src={instagramIcon} alt="Instagram" width="20" height="20" className="me-2" />
                <span className="small">@aa.softwareunesp</span>
              </li>
              <li className="align-items-center mb-2 lead">
                <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" className="me-2" />
                <span className="small">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary text-light text-center py-3 mt-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <span>
            © Todos os Direitos Reservados.{' '}
            <a
              className="proec-unesp-footer"
              href="https://www2.unesp.br/portal#!/proec"
              rel="noopener noreferrer"
              target="_blank"
            >
              ProEC Unesp
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
