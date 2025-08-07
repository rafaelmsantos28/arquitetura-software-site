import React, { useState } from 'react';
import './SideInfoColumn.css';

import newsImg2 from '../../assets/noticias/news2.png';
import eventoinaugural from '../../assets/noticias/eventoInaugural.jpg';
import popupEventoDesktop from '../../assets/popup/eventoinaugural-desktop.jpg';
import popupEventoMobile from '../../assets/popup/eventoinaugural-mobile.jpg';
import Popup from './Popup';

// Para adicionar mais notícias, insira novos objetos neste array:
const newsList = [
  {
    id: 1,
    image: eventoinaugural,
    title: 'Evento Inaugural: Obrigado a todos que participaram!',
    date: '29/06/2025',
    externalLink:
      'https://www.linkedin.com/posts/academia-do-arquiteto-de-software_neste-%C3%BAltimo-s%C3%A1bado-tivemos-a-abertura-do-activity-7345581059683549185-OVB6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdWWKMBFbVozcsMUbdVeyiyYgUkMZlZuqw',
  },
  {
    id: 2,
    image: newsImg2,
    title: 'Evento inaugural do programa acontece no dia 28/06',
    date: '05/06/2025',
    popupImageDesktop: popupEventoDesktop,
    popupImageMobile: popupEventoMobile,
  },
];

function SideInfoColumn() {
  // Estado que armazena a notícia selecionada para exibir no popup
  const [selectedPopup, setSelectedPopup] = useState(null);

  // Abre o popup com a notícia clicada
  const openPopup = (news) => {
    setSelectedPopup(news);
  };

  // Fecha o popup
  const closePopup = () => {
    setSelectedPopup(null);
  };

  return (
    <aside className="side-info-sideinfocolumn side-info-column-sideinfocolumn">
      <div className="info-section-sideinfocolumn my-3">
        <h3 className="section-title-sideinfocolumn">Novidades</h3>

        {newsList.map((news) => (
          <div key={news.id}>
            <button
              onClick={() => {
                if (news.externalLink) {
                  window.open(news.externalLink, '_blank');
                } else {
                  openPopup(news);
                }
              }}
              className="news-item-sideinfocolumn"
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                width: '100%',
                textAlign: 'left',
              }}
            >
              <img src={news.image} alt={news.title} className="news-image-sideinfocolumn" />
              <div className="news-text-sideinfocolumn">
                <h4>{news.title}</h4>
                <p className="news-date-sideinfocolumn">{news.date}</p>
              </div>
            </button>
            <hr />
          </div>
        ))}
      </div>

      {selectedPopup && (
        <Popup
          imageDesktop={selectedPopup.popupImageDesktop}
          imageMobile={selectedPopup.popupImageMobile}
          onClose={closePopup}
        />
      )}
    </aside>
  );
}

export default SideInfoColumn;
