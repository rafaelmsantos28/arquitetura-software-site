import React from 'react';
import './EventCard.css';
import eventBg from '../../assets/eventos-cursos/event-card-bg.jpg';

// Array de eventos
const events = [
  {
    title: 'Evento de Inaugural',
    date: '2025-06-28',
    description:
      'Venha participar do evento inaugural do projeto Academia do Arquiteto de Software',
    link: 'https://forms.gle/3fFBLLaWTYWFLbv4A',
  },
];

// Ordenar eventos do mais recente para o mais antigo
const sortedEvents = events.sort((a, b) => {
  // Criar objetos Date para ordenação, garantindo que sejam tratados como datas locais
  // ou que não haja problema de fuso horário.
  // Uma forma é adicionar 'T00:00:00' para que o JavaScript crie a data no fuso horário local.
  const dateA = new Date(a.date + 'T00:00:00');
  const dateB = new Date(b.date + 'T00:00:00');
  return dateA.getTime() - dateB.getTime();
});

const EventCard = ({ limit }) => {
  // Filtrar eventos futuros
  const today = new Date();
  const futureEvents = sortedEvents.filter((event) => {
    const [year, month, day] = event.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= today;
  });

  // Se houver limit, pega só os primeiros 'limit' eventos
  const eventsToShow = limit ? futureEvents.slice(0, limit) : futureEvents;

  return (
    <div className="container-fluid px-5 my-5 maintitle-event-card">
      <h2 className="text-center fw-bold mb-4">Eventos</h2>
      <div className="row">
        {eventsToShow.map((event, index) => {
          const [year, month, day] = event.date.split('-').map(Number);
          const eventDate = new Date(year, month - 1, day);

          return (
            <div className="col-12 mb-4" key={index}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;
