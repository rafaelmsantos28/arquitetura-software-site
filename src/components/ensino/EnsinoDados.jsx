import React from 'react';
import { FaBook, FaUsers, FaListAlt } from 'react-icons/fa';
import './EnsinoDados.css';



const Section = ({ id, icon: Icon, title, children }) => (
  <section className="section" id={id} data-title={title}>
    <div className="section-header">
      {Icon && <Icon className="section-icon" />}
      <h2>{title}</h2>
    </div>
    <div>{children}</div>
  </section>
);

const pessoas = [
  {
    nome: 'Frank Affonso',
    papel: 'Coordenador / Professor',
    instituicoes: ['Graduação', 'Pós-graduação'],
    disciplinas: [
      { nome: 'Disciplina 1 (Graduação)', link: 'https://link-curso-graduacao.com' },
      { nome: 'Disciplina 2 (Pós)', link: 'https://link-curso-pos.com' },
    ],
  },
  {
    nome: 'Veronica Carvalho',
    papel: 'Professora',
    instituicoes: ['Graduação', 'Pós-graduação'],
    disciplinas: [
      { nome: 'Disciplina Verônica 1', link: 'https://link-curso-veronica.com' },
    ],
  },
  {
    nome: 'Daniel Pedronette',
    papel: 'Professor',
    instituicoes: ['Graduação', 'Pós-graduação'],
    disciplinas: [
      { nome: 'Disciplina Daniel 1', link: 'https://link-curso-daniel.com' },
    ],
  },
  {
    nome: 'Orlando Saraiva',
    papel: 'Servidor UNESP e Engajado na Comunidade',
    instituicoes: ['UNESP', 'Comunidade'],
    disciplinas: [
      { nome: 'Disciplina Orlando 1', link: 'https://link-curso-orlando.com' },
    ],
  },
];

const acoesPromovidas = [
  'Ministração de disciplinas de graduação e pós-graduação.',
  'Organização de workshops e seminários para alunos.',
  'Mentoria e acompanhamento de projetos de pesquisa.',
  'Participação em eventos acadêmicos e comunitários.',
];

const EnsinoDados = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ensino">
      <h1 className="title">Ensino no Projeto Academia do Arquiteto de Software</h1>

      {/* NOVOS botões estilo extensão com ícones */}
      <div className="icon-buttons" style={{ marginBottom: '40px' }}>
        <button onClick={() => scrollToSection('promovemos')}>
          <FaBook />
          O que promovemos
        </button>
        <button onClick={() => scrollToSection('pessoas')}>
          <FaUsers />
          Pessoas envolvidas
        </button>
        <button onClick={() => scrollToSection('acoes')}>
          <FaListAlt />
          O que<br />já fizemos
        </button>
      </div>

      <Section id="promovemos" icon={FaBook} title="O que promovemos no ensino">
        <p>
          Promovemos ensino de qualidade tanto na graduação quanto na pós-graduação, com disciplinas focadas em arquitetura de software, metodologias ágeis e práticas de engenharia de software. Nosso objetivo é formar profissionais preparados para os desafios do mercado e da pesquisa.
        </p>
      </Section>

      <Section id="pessoas" icon={FaUsers} title="Pessoas envolvidas">
        {pessoas.map(({ nome, papel, instituicoes, disciplinas }) => (
          <div key={nome} className="person">
            <h3>{nome}</h3>
            <p><em>{papel}</em></p>
            <p><strong>Instituições / Áreas:</strong> {instituicoes.join(', ')}</p>
            <p><strong>Disciplinas ministradas:</strong></p>
            <ul>
              {disciplinas.map(({ nome, link }) => (
                <li key={nome}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{nome}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="acoes" icon={FaListAlt} title="O que já fizemos">
        <ul>
          {acoesPromovidas.map((acao, i) => (
            <li key={i}>{acao}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default EnsinoDados;
