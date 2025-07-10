// Importa ícones utilizados nas cards
import palestraIcon from '../../assets/icons/palestra.png';
import artigoIcon from '../../assets/icons/artigo.png';
import cursoIcon from '../../assets/icons/curso.png';

// Importa o estilo CSS da seção
import './VerticalCardSection.css';

// Importa o componente Link do React Router para navegação interna
import { Link } from 'react-router-dom';

// Componente funcional que exibe uma seção de três cards verticais
function VerticalCardSection() {
  // Vetor com os dados dos cards que serão renderizados dinamicamente
  const features = [
    {
      icon: palestraIcon, // Ícone ilustrativo
      title: 'Eventos & Palestras', // Título do card
      text: 'Aprenda e aprofunde seus conhecimentos.', // Descrição do card
      buttonLabel: 'Saiba mais', // Texto do botão
      link: '/atividades', // Rota de destino ao clicar no botão
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
        {/* Mapeia os itens do vetor features, criando um card para cada um */}
        {features.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 text-center shadow-sm border-0 card-hover-verticalcardsection">
              <div className="card-body d-flex flex-column align-items-center">
                {/* Ícone superior do card */}
                <img src={item.icon} alt={item.title} className="mb-3 vertical-card-img" />

                {/* Título e descrição do card */}
                <h5 className="card-title mb-2">{item.title}</h5>
                <p className="card-text text-muted mb-4">{item.text}</p>

                {/* Botão de ação que redireciona para a rota configurada */}
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
