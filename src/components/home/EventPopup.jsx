import React, { useEffect } from 'react';
import './EventPopup.css';
import CardInfoPalestra from './CardInfoPalestra.jsx';
import EventCarousel from './EventCarousel.jsx';

const EventPopup = ({ event, onClose }) => {
  const handleOverlayClick = (e) => {
    // Fecha o popup só se clicou no fundo, e não no conteúdo
    if (e.target.classList.contains('event-popup-overlay')) {
      onClose();
    }
  };

  // Bloquear scroll ao abrir o pop-up e restaurar ao fechar
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="event-popup-overlay" onClick={handleOverlayClick}>
      <div className="event-popup-content animate-popup">
        <div className="event-popup-scrollable">
          <h3 className="fw-bold text-eventpopup">{event.title}</h3>
          <p className="mb-3 text-eventpopup">{event.longDescription}</p>
          <CardInfoPalestra palestras={event.palestras} />
          <EventCarousel fotos={event.fotos} />
          <div className="text-center">
            {event.inscrever ? (
              <a
                href={event.inscrever}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-bigscreen mt-3 mx-1"
              >
                Inscreva-se
              </a>
            ) : (
              <button className="btn btn-secondary btn-bigscreen mt-3 mx-1" disabled>
                Inscrições encerradas
              </button>
            )}
            {event.linkfotos ? (
              <a
                href={event.linkfotos}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-bigscreen mt-3"
              >
                Todas as Fotos
              </a>
            ) : (
              <button className="btn btn-secondary btn-bigscreen mt-3" disabled>
                Sem fotos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
