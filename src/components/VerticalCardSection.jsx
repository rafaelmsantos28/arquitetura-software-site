import '../style/VerticalCardSection.css';
import palestraIcon from '../assets/icons/palestra.png';
import artigoIcon from '../assets/icons/artigo.png';
import cursoIcon from '../assets/icons/curso.png';

function VerticalCardSection() {
    const features = [
      {
        icon: palestraIcon,
        title: 'Eventos & Palestras',
        text: 'Aprenda e aprofunde seus conhecimentos.',
        buttonLabel: 'Saiba mais',
      },
      {
        icon: artigoIcon,
        title: 'Artigos',
        text: 'Conteúdos completos de arquitetura de software.',
        buttonLabel: 'Ver artigos',
      },
      {
        icon: cursoIcon,
        title: 'Cursos',
        text: 'Desenvolva habilidades e avance na sua carreira!',
        buttonLabel: 'Ver cursos',
      },
    ];
  
    return (
      <section className="features-section">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button>{item.buttonLabel}</button>
          </div>
        ))}
      </section>
    );
  }
  
  export default VerticalCardSection;