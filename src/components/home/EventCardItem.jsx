import React, { useState } from 'react';
import './EventCard.css';
import eventBg from '../../assets/eventos-cursos/event-card-bg.jpg';
import EventPopup from './EventPopup.jsx';

const EventCardItem = ({ event, showPalestraInfo }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [year, month, day] = event.date.split('-').map(Number);
  const eventDate = new Date(year, month - 1, day);

  return (
    <div className="col-12 mb-0 my-3">
      <div
        className="card event-card border-0"
        style={{
          backgroundImage: `url(${eventBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-2">
              {event.title} -{' '}
              {eventDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
              })}
            </h5>
            <p className="mb-0">{event.description}</p>
          </div>
        </div>

        <div className="event-card-icon">
          {event.inscrever ? (
            <a
              href={event.inscrever}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-bigscreen shake-btn"
            >
              Inscreva-se
            </a>
          ) : (
            <button className="btn btn-secondary btn-bigscreen" disabled>
              Inscrições encerradas
            </button>
          )}

          <button className="btn btn-primary btn-bigscreen" onClick={() => setShowPopup(true)}>
            Saiba Mais
          </button>
        </div>
      </div>

      {showPopup && <EventPopup event={event} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default EventCardItem;
