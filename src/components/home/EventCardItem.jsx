import React from 'react';
import './EventCard.css';
import eventBg from '../../assets/eventos-cursos/event-card-bg.jpg';
import CardInfoPalestra from './CardInfoPalestra.jsx';

const EventCardItem = ({ event, showPalestraInfo }) => {
  const [year, month, day] = event.date.split('-').map(Number);
  const eventDate = new Date(year, month - 1, day);

  return (
    <div className="col-12 mb-0">
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

          <div className="event-card-icon">
            <a target="_blank" href={event.link} rel="noopener noreferrer">
              <i className="bi bi-box-arrow-in-up-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Renderiza CardInfoPalestra se showPalestraInfo for true */}
      {showPalestraInfo && (
        <div className="mt-4">
          <CardInfoPalestra />
        </div>
      )}
    </div>
  );
};

export default EventCardItem;
