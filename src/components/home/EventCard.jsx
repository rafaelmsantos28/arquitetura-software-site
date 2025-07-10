import React from 'react';
import './EventCard.css';
import EventCardItem from './EventCardItem.jsx';

// Lista de eventos
const events = [
  {
    title: 'Evento de Inaugural',
    date: '2025-06-28',
    description: 'Agradecemos a todos que participaram do nosso primeiro evento! Confira todas as fotos tiradas no evento!',
    link: 'https://photos.app.goo.gl/tLRQUtsfMdte8RiD8',
  },

  // outros eventos
];

// Ordena os eventos
const sortedEvents = events.sort((a, b) => {
  const dateA = new Date(a.date + 'T00:00:00');
  const dateB = new Date(b.date + 'T00:00:00');
  return dateB.getTime() - dateA.getTime();
});

const EventCard = ({ limit }) => {
  const eventsToShow = limit ? sortedEvents.slice(0, limit) : sortedEvents;

  return (
    <div className="container-fluid px-5 mt-5 maintitle-event-card">
      <h2 className="text-center fw-bold mb-4">Eventos</h2>

      <div className="row">
        {eventsToShow.map((event, index) => (
          <EventCardItem
            key={index}
            event={event}
            showPalestraInfo={index === 0} // Só no primeiro card
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
