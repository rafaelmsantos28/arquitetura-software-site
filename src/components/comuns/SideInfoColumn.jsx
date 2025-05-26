import './SideInfoColumn.css';
import mailIcon from '../../assets/redes-sociais/mail.svg';
import phoneIcon from '../../assets/redes-sociais/phone.svg';
import instagramIcon from '../../assets/redes-sociais/instagram.svg';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';

import newsImg1 from '../../assets/noticias/news1.png';
import newsImg2 from '../../assets/noticias/news2.png';
import newsImg3 from '../../assets/noticias/news3.png';
import newsImg4 from '../../assets/noticias/news4.png';

const newsList = [
  {
    id: 1,
    image: newsImg1,
    title: 'O programa Academia do Arquiteto de Software terá 3 oficinas no primeiro semestre',
    date: '10/05/2025',
    link: 'https://site-da-novidade1.com',
  },
  {
    id: 2,
    image: newsImg2,
    title: 'Evento inaugural do programa acontece no dia 24/06',
    date: '05/05/2025',
    link: 'https://site-do-evento-inaugural.com',
  },
  {
    id: 3,
    image: newsImg3,
    title: 'Unesp entre as maiores faculdades de pesquisa no país',
    date: '02/05/2025',
    link: 'https://site-da-unesp.com',
  },
  {
    id: 4,
    image: newsImg4,
    title: 'Veja as novas postagens no Instagram do programa, fique por dentro das novidades',
    date: '02/05/2025',
    link: 'https://instagram.com/aa.softwareunesp',
  },
  {
    id: 5,
    image: newsImg4,
    title: 'Veja as novas postagens no Instagram do programa, fique por dentro das novidades',
    date: '03/05/2025',
    link: 'https://instagram.com/aa.softwareunesp',
  },
];

function SideInfoColumn() {
  return (
    <aside className="side-info-sideinfocolumn side-info-column-sideinfocolumn">
      <div className="info-section-sideinfocolumn my-3">
        <h3 className="section-title-sideinfocolumn">Novidades</h3>

        {newsList.map((news) => (
          <div key={news.id}>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-item-sideinfocolumn"
            >
              <img src={news.image} alt={news.title} className="news-image-sideinfocolumn" />
              <div className="news-text-sideinfocolumn">
                <h4>{news.title}</h4>
                <p className="news-date-sideinfocolumn">{news.date}</p>
              </div>
            </a>
            <hr />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideInfoColumn;
