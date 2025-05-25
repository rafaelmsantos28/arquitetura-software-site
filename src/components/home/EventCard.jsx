import React from 'react';
import './EventCard.css';
import eventBg from '../../assets/eventos-cursos/event-card-bg.png';

// Array de eventos
const events = [
  {
    title: 'Evento de Abertura',
    date: '2025-06-17',
    description:
      'Venha participar do evento inaugural do projeto Academia do Arquiteto de Software',
  },
  {
    title: 'Evento de Exemplo',
    date: '2025-06-20',
    description: 'Veja que você tem que clicar no ícone que indica "nova guia será aberta".',
  },
  {
    title: 'Evento de Outro Exemplo',
    date: '2025-06-21',
    description: 'Veja também que os eventos mais recentes ficam em primeiro.',
  },
  {
    title: 'Evento de Mais Outro Exemplo',
    date: '2025-06-22',
    description: 'Quantos eventos devem aparecer na home? Eventos passados sumirão.',
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

const EventCard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Eventos</h2>
      <div className="row">
        {sortedEvents.map((event, index) => {
          // Criar um objeto Date para cada evento, garantindo que seja no fuso horário local
          // ou que o dia seja mantido.
          // Uma boa prática é analisar a string e criar a data explicitamente para evitar problemas de fuso horário.
          const [year, month, day] = event.date.split('-').map(Number);
          // month - 1 porque os meses são baseados em 0 (Janeiro é 0, Fevereiro é 1, etc.)
          const eventDate = new Date(year, month - 1, day);

          return (
            <div className="col-12 mb-4" key={index}>
              <div
                className="card event-card border-0 "
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
                    <i className="bi bi-box-arrow-in-up-right"></i>
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
