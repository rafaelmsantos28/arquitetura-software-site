import React from 'react';
import { FaBook, FaChalkboardTeacher, FaListAlt } from 'react-icons/fa';
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
      { nome: 'Engenharia de Software I' },
      { nome: 'Engenharia de Software II' },
      { nome: 'Programação Orientada a Objetos' },
      { nome: 'Arquitetura de Software: Teoria e Prática' },
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
    <div className="container my-5 ">
      <h1 className="titulo-coordenador mb-5 fw-bold text-center text-md-start">Sobre o Ensino</h1>

      <Section id="promovemos" icon={FaBook} title="O que promovemos no ensino">
        <p>
          Promovemos ensino de qualidade tanto na graduação quanto na pós-graduação, com disciplinas
          focadas em arquitetura de software, metodologias ágeis e práticas de engenharia de
          software. Nosso objetivo é formar profissionais preparados para os desafios do mercado e
          da pesquisa.
        </p>
      </Section>

      <Section id="pessoas" icon={FaChalkboardTeacher} title="Disciplinas">
        {pessoas.map(({ nome, papel, instituicoes, disciplinas }) => (
          <div key={nome} className="person">
            <p>
              <strong>Instituições / Áreas:</strong> {instituicoes.join(', ')}
            </p>
            <p>
              <strong>Disciplinas ministradas:</strong>
            </p>
            <ul>
              {disciplinas.map(({ nome }) => (
                <li key={nome}>{nome}</li>
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
