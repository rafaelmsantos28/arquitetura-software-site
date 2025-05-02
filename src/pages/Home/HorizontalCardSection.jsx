import '../style/HorizontalCardSection.css';
import overviewIcon from '../assets/icons/overview.png';
import objetivoIcon from '../assets/icons/objetivo.png';
import publicoIcon from '../assets/icons/publico.png';

function HorizontalCardSection() {
  const infos = [
    {
      icon: overviewIcon,
      title: 'Visão Geral',
      text: 'Saiba mais sobre o conceito e importância da Arquitetura de Software no desenvolvimento de sistemas de alta qualidade.',
    },
    {
      icon: objetivoIcon,
      title: 'Objetivo',
      text: 'Apresentar os fundamentos, boas práticas e padrões arquiteturais que orientam a construção de sistemas escaláveis e bem estruturados.',
    },
    {
      icon: publicoIcon,
      title: 'Público Alvo',
      text: 'Estudantes, desenvolvedores e profissionais de TI interessados em aprimorar conhecimentos sobre estruturação de projetos de software.',
    },
  ];

  return (
    <section className="info-section">
      {infos.map((item, index) => (
        <div className="info-card" key={index}>
          <img src={item.icon} alt={item.title} />
          <div className="info-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HorizontalCardSection;
