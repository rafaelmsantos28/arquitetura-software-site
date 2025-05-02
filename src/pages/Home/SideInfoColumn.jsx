import './SideInfoColumn.css';
import mailIcon from '../../assets/redes-sociais/mail.svg';
import phoneIcon from '../../assets/redes-sociais/phone.svg';
import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';

import newsImg1 from '../../assets/noticias/news1.png';
import newsImg2 from '../../assets/noticias/news2.png';
import newsImg3 from '../../assets/noticias/news3.png';
import newsImg4 from '../../assets/noticias/news4.png';

function SideInfoColumn() {
  return (
    <aside className="side-info side-info-column">
      
      <div className="info-section">
        <h3 className="section-title">Novidades</h3>

        <a href="#" target="_blank" rel="noopener noreferrer" className="news-item">
          <img src={newsImg1} alt="Nova oficina" className="news-image" />
          <div className="news-text">
            <h4>O programa Academia do Arquiteto de Software terá 3 oficinas no primeiro semestre</h4>
            <p className="news-date">10/05/2025</p>
          </div>
        </a>
        <hr />

        <a href="#" target="_blank" rel="noopener noreferrer" className="news-item">
          <img src={newsImg2} alt="Evento inaugural" className="news-image" />
          <div className="news-text">
            <h4>Evento inaugural do programa acontece no dia 24/06</h4>
            <p className="news-date">05/05/2025</p>
          </div>
        </a>
        <hr />

        <a href="#" target="_blank" rel="noopener noreferrer" className="news-item">
          <img src={newsImg3} alt="Unesp entre as maiores faculdades" className="news-image" />
          <div className="news-text">
            <h4>Unesp entre as maiores faculdades de pesquisa no país</h4>
            <p className="news-date">02/05/2025</p>
          </div>
        </a>
        <hr />

        <a href="#" target="_blank" rel="noopener noreferrer" className="news-item">
          <img src={newsImg4} alt="Veja as novas postagens no Instagram" className="news-image" />
          <div className="news-text">
            <h4>Veja as novas postagens no Instagram do programa, fique por dentro das novidades</h4>
            <p className="news-date">02/05/2025</p>
          </div>
        </a>
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
