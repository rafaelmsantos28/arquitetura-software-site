import './Footer.css';

import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';
import youtubeIcon from '../../assets/redes-sociais/youtube.svg';
import mailIcon from '../../assets/redes-sociais/mail.svg';
import phoneIcon from '../../assets/redes-sociais/phone.svg';
import logoFooter from '../../assets/logo-footer.png';

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
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">Orientador</a>
              </li>
              <li className="mb-2">
                <a href="#">Sobre nós</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">
            {' '}
            {/* Aumenta a largura em md e lg */}
            <h4 className="fw-bold mb-4">Acadêmico</h4>
            <ul className="list-unstyled lead">
              <li className="mb-2">
                <a href="#">Ensino</a>
              </li>
              <li className="mb-2">
                <a href="#">Pesquisa</a>
              </li>
              <li className="mb-2">
                <a href="#">Extensão</a>
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
          <span>Academia do Arquiteto de Software Copyright © Todos os Direitos Reservados</span>
          <a href="#" className="text-light text-decoration-none fw-bold">
            Políticas de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
