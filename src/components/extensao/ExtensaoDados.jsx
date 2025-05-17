import React from 'react';
import {
  FaLightbulb,
  FaBullseye,
  FaCogs,
  FaChartLine,
  FaCalendarAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import './ExtensaoDados.css';

const Section = ({ icon: Icon, title, children }) => (
  <section className="section" data-title={title}>
    <div className="section-header">
      {Icon && <Icon className="section-icon" />}
      <h2>{title}</h2>
    </div>
    <div>{children}</div>
  </section>
);

const scrollToSection = (title) => {
  const section = document.querySelector(`[data-title="${title}"]`);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const ExtensaoDados = () => {
  return (
    <div className="container-dados">
      <h1 className="title">Projeto de Extensão: Academia do Arquiteto de Software</h1>
      <div className="icon-buttons">
        <button onClick={() => scrollToSection('Introdução')}>
          <FaLightbulb /> Introdução
        </button>
        <button onClick={() => scrollToSection('Objetivos')}>
          <FaBullseye /> Objetivos
        </button>
        <button onClick={() => scrollToSection('Metodologia')}>
          <FaCogs /> Metodologia
        </button>
        <button onClick={() => scrollToSection('Resultados Esperados')}>
          <FaChartLine /> Resultados
        </button>
        <button onClick={() => scrollToSection('Cronograma')}>
          <FaCalendarAlt /> Cronograma
        </button>
        <button onClick={() => scrollToSection('Participação Estudantil')}>
          <FaUserGraduate /> Participação
        </button>
      </div>

      <Section icon={FaLightbulb} title="Introdução">
        <p>
          O projeto “Academia do Arquiteto de Software” tem como objetivo disseminar de forma
          acessível o conhecimento sobre arquitetura de software, promovendo um diálogo entre a
          universidade e a sociedade por meio de atividades interativas como oficinas, workshops,
          cursos e palestras.
        </p>
      </Section>

      <Section icon={FaBullseye} title="Objetivos">
        <p>
          <strong>Objetivo Geral:</strong> Disseminar e aprofundar o conhecimento em arquitetura de
          software.
        </p>
        <ul>
          <li>Explorar padrões e estilos arquiteturais.</li>
          <li>Disponibilizar recursos práticos online.</li>
          <li>Promover o uso de ferramentas acessíveis.</li>
        </ul>
      </Section>

      <Section icon={FaCogs} title="Metodologia">
        <ul>
          <li>Cursos e oficinas presenciais/virtuais.</li>
          <li>Conteúdos online com fóruns e espaços interativos.</li>
          <li>Palestras com profissionais da área.</li>
        </ul>
      </Section>

      <Section icon={FaChartLine} title="Resultados Esperados">
        <ul>
          <li>Capacitação de estudantes e profissionais.</li>
          <li>Criação de materiais educacionais colaborativos.</li>
          <li>Realização de eventos interativos.</li>
        </ul>
      </Section>

      <Section icon={FaCalendarAlt} title="Cronograma">
        <p>
          O projeto será desenvolvido de Janeiro de 2025 a Dezembro de 2026 com atividades contínuas
          em duas fases principais: preparação e execução das ações educativas.
        </p>
      </Section>

      <Section icon={FaUserGraduate} title="Participação Estudantil">
        <p>
          Os estudantes envolvidos irão apoiar na produção de conteúdo, divulgação, organização dos
          eventos, e no desenvolvimento e manutenção do site do projeto.
        </p>
      </Section>
    </div>
  );
};

export default ExtensaoDados;
