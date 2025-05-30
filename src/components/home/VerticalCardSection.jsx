import palestraIcon from '../../assets/icons/palestra.png';
import artigoIcon from '../../assets/icons/artigo.png';
import cursoIcon from '../../assets/icons/curso.png';
import './VerticalCardSection.css';
import { Link } from 'react-router-dom';

function VerticalCardSection() {
  const features = [
    {
      icon: palestraIcon,
      title: 'Eventos & Palestras',
      text: 'Aprenda e aprofunde seus conhecimentos.',
      buttonLabel: 'Saiba mais',
      link: '/atividades',
    },
    {
      icon: artigoIcon,
      title: 'Artigos',
      text: 'Conteúdos completos de arquitetura de software.',
      buttonLabel: 'Ver artigos',
      link: '/pesquisa',
    },
    {
      icon: cursoIcon,
      title: 'Cursos',
      text: 'Desenvolva habilidades e avance na sua carreira!',
      buttonLabel: 'Ver cursos',
      link: '/atividades',
    },
  ];

  return (
    <section className="container-fluid px-5 my-5">
      <div className="row g-4">
        {features.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 text-center shadow-sm border-0 card-hover-verticalcardsection">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={item.icon} alt={item.title} className="mb-3 vertical-card-img" />
                <h5 className="card-title mb-2">{item.title}</h5>
                <p className="card-text text-muted mb-4">{item.text}</p>
                <Link to={item.link} className="btn btn-primary mt-auto">
                  {item.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalCardSection;
