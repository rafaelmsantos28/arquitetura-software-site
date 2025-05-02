import './SideInfoColumn.css';
import mailIcon from '../../assets/redes-sociais/mail.svg';  // Importe os ícones SVG
import phoneIcon from '../../assets/redes-sociais/phone.svg';
import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';

function SideInfoColumn() {
  return (
    <aside className="side-info side-info-column">
      
      <div className="info-section">
        <h3 className="section-title">Novidades</h3>
        <div className="news-item">
          <img src="./assets/news1.jpg" alt="Nova oficina" className="news-image" />
          <div className="news-text">
            <h4>O programa Academia do Arquiteto de Software terá 3 oficinas no primeiro semestre</h4>
            <p className="news-date">10/05/2025</p>
          </div>
        </div>
        <hr />
        <div className="news-item">
          <img src="./assets/news2.jpg" alt="Evento inaugural" className="news-image" />
          <div className="news-text">
            <h4>Evento inaugural do programa acontece no dia 24/06</h4>
            <p className="news-date">05/05/2025</p>
          </div>
        </div>
        <hr />
        <div className="news-item">
          <img src="./assets/news3.jpg" alt="Unesp entre as maiores faculdades" className="news-image" />
          <div className="news-text">
            <h4>Unesp entre as maiores faculdades de pesquisa no país</h4>
            <p className="news-date">02/05/2025</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="info-section">
        <h3 className="section-title">Fale Conosco</h3>
        <div className="contact-item">
          <img src={mailIcon} alt="Email" className="contact-icon" />
          <p>a.software-unesp@gmail.com</p>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Telefone" className="contact-icon" />
          <p>(99) 99999-9999</p>
        </div>
        <div className="contact-item">
          <img src={instagramIcon} alt="Instagram" className="contact-icon" />
          <p>@aa.softwareunesp</p>
        </div>
        <div className="contact-item">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          <p>Linkedin</p>
        </div>
      </div>
      
    </aside>
  );
}

export default SideInfoColumn;
