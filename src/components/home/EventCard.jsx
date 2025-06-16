import React from 'react';
import './EventCard.css';
import eventBg from '../../assets/eventos-cursos/event-card-bg.jpg'; // Imagem de fundo dos cards

// Lista de eventos com título, data, descrição e link
const events = [
  {
    title: 'Evento de Inaugural',
    date: '2025-06-28',
    description:
      'Venha participar do evento inaugural do projeto Academia do Arquiteto de Software',
    link: 'https://forms.gle/3fFBLLaWTYWFLbv4A',
  },
  //Adicione novos eventos aqui
];

// Ordena os eventos do mais próximo para o mais distante
const sortedEvents = events.sort((a, b) => {
  // Concatena T00:00:00 para garantir consistência no fuso horário
  const dateA = new Date(a.date + 'T00:00:00');
  const dateB = new Date(b.date + 'T00:00:00');
  return dateA.getTime() - dateB.getTime();
});

// Componente principal que renderiza os cards de eventos
const EventCard = ({ limit }) => {
  // Obtém a data atual
  const today = new Date();

  // Filtra apenas os eventos com data igual ou posterior à data atual
  const futureEvents = sortedEvents.filter((event) => {
    const [year, month, day] = event.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= today;
  });

  // Se a propriedade limit for definida, limita o número de eventos a serem exibidos
  const eventsToShow = limit ? futureEvents.slice(0, limit) : futureEvents;

  return (
    <div className="container-fluid px-5 mt-5 maintitle-event-card">
      {/* Título da seção de eventos */}
      <h2 className="text-center fw-bold mb-4">Eventos</h2>

      <div className="row">
        {eventsToShow.map((event, index) => {
          // Converte a data do evento em objeto Date para exibição formatada
          const [year, month, day] = event.date.split('-').map(Number);
          const eventDate = new Date(year, month - 1, day);

          return (
            <div className="col-12 mb-0" key={index}>
              <div
                className="card event-card border-0"
                style={{
                  backgroundImage: `url(${eventBg})`, // Define a imagem de fundo do card
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    {/* Exibe o título do evento seguido da data formatada */}
                    <h5 className="fw-bold mb-2">
                      {event.title} -{' '}
                      {eventDate.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                      })}
                    </h5>

                    {/* Exibe a descrição do evento */}
                    <p className="mb-0">{event.description}</p>
                  </div>

                  {/* Link externo para inscrição ou mais informações */}
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
