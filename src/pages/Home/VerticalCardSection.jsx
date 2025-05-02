import palestraIcon from '../../assets/icons/palestra.png';
import artigoIcon from '../../assets/icons/artigo.png';
import cursoIcon from '../../assets/icons/curso.png';
import './VerticalCardSection.css'

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
    <section className="container my-5">
      <div className="row g-4">
        {features.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 text-center shadow-sm border-0 card-hover">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={item.icon} alt={item.title} className="mb-3" style={{ height: '128px' }} />
                <h5 className="card-title mb-2">{item.title}</h5>
                <p className="card-text text-muted mb-4">{item.text}</p>
                <a href="#" className="btn btn-primary mt-auto">{item.buttonLabel}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalCardSection;
