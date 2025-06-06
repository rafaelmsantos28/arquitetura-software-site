import React from 'react';
import ExtensaoMenu from './ExtensaoMenu';
import {
  FaLightbulb,
  FaBullseye,
  FaCogs,
  FaChartLine,
  FaCalendarAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import './ExtensaoDados.css';

// Para adicionar novas seções, utilize o componente Section abaixo:
const Section = ({ icon: Icon, title, children }) => (
  <section className="card mb-5 p-4 shadow-sm section-card-extensaodados" data-title={title}>
    <div className="card-body">
      <div className="text-center mb-3">
        {Icon && <Icon className="section-icon-extensaodados mb-2" />}
        <h2 className="text-center">{title}</h2>
      </div>
      <div className="card-text text-start">{children}</div>
    </div>
  </section>
);

const ExtensaoDados = () => {
  return (
    <div className="container-fluid px-5 my-5 container-margin">
      <h2 className="section-title fw-bold mb-5 text-center title-extensaodados">
        Academia do Arquiteto de Software
      </h2>

      {/* Menu de Ícones */}
      <ExtensaoMenu />

      {/* Seções */}
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
