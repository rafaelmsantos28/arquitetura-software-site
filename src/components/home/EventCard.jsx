import React from 'react';
import './EventCard.css';
import EventCardItem from './EventCardItem.jsx';

import Palestrante1 from '../../assets/palestra-info/erik-aceiro.jpg';
import Palestrante2 from '../../assets/palestra-info/guilherme-menaldo-teste.jpg';

import Foto1 from '../../assets/palestra-info/palestra28-06-25/foto1.jpg';
import Foto2 from '../../assets/palestra-info/palestra28-06-25/foto2.jpg';
import Foto3 from '../../assets/palestra-info/palestra28-06-25/foto3.jpeg';

const events = [
  {
    title: 'Evento Inaugural',
    date: '2025-06-28',
    description:
      'Agradecemos a todos que participaram! Veja como foi o evento, palestrantes e fotos!',
    longDescription: `No dia 28 de junho de 2025, a Academia do Arquiteto de Software realizou seu evento de abertura, marcando o início das atividades do projeto de extensão.

A abertura foi conduzida pelo professor Frank José Affonso, seguida pela palestra de Erik Aceiro, com o tema "Além do Código: A Jornada de Dev, Arquiteto de Software e Staff Engineer", abordando caminhos de carreira e competências essenciais para o desenvolvimento profissional.

Já na segunda palestra, "Por que Arquitetura de Software Importa?", Guilherme Menaldo apresentou sobre boas práticas e escolhas estratégicas para a construção de softwares estáveis e projetos bem-sucedidos, destacando também a importância da comunicação e do trabalho em equipe.

O evento foi encerrado com os agradecimentos do professor Frank José Affonso e o convite para os próximos encontros do projeto.`,
    inscrever: '',
    linkfotos:
      'https://photos.google.com/share/AF1QipNdO_gHV3kkUOwoP_sw6KxQofA2FAiaGp8yEu8mcvhD0wXqVE2lcrSsnny8VwwidA?key=ZGcycEk0NE1yRFhfQi1FVFc4VlNIZkNNZ1dDc3hn',
    fotos: [Foto1, Foto2, Foto3],
    palestras: [
      {
        nome: 'Erik Aceiro',
        titulo: 'Além do Código: A Jornada de Dev, Arquiteto de Software e Staff Engineer',
        imagem: Palestrante1,
        link: 'https://www.linkedin.com/in/erikaceiro/',
        slides:
          'https://drive.google.com/file/d/1a_K9JrRze4u5C0UlvVJQkXmzgxsPXSNN/view?usp=sharing',
      },
      {
        nome: 'Guilherme Menaldo',
        titulo: 'Por que Arquitetura de Software Importa?',
        imagem: Palestrante2,
        link: 'https://www.linkedin.com/in/ggmenaldo/',
        slides: 'https://drive.google.com/file/d/1nYQQCkahBYvCNBCXk7OxDGFCeSW1FWOm/view',
      },
    ],
  },
  {
    title: 'Em breve...',
    date: '2025-08-30',
    description:
      'Novo evento da Academia do Arquiteto de Software vem aí! Então reserve a data e fique de olho nas nossas redes sociais!',
    longDescription: `Marque em seu calendário: 30 de agosto de 2025.

A Academia do Arquiteto de Software prepara um evento especial, e em breve revelaremos todos os detalhes. Mantenha-se informado sobre as novidades seguindo nossas redes sociais.

Instagram: @acadarqsoftware

LinkedIn: Academia do Arquiteto de Software

Aguardamos você!`,
    inscrever: '',
    linkfotos: '',
    fotos: [],
    palestras: [],
  },
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
