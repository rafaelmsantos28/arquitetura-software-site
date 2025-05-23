import React from 'react';
import { FaBook, FaChalkboardTeacher, FaListAlt } from 'react-icons/fa';
import './EnsinoDados.css';

const SectionCard = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="card mb-5 p-4 shadow-sm section-card-quemsoueu">
    <div className="card-body">
      <div className="text-center mb-3">
        {Icon && <Icon className="section-icon mb-2" />}
        <h2 className="text-center">{title}</h2>
      </div>
      <div className="card-text text-start">{children}</div>
    </div>
  </section>
);

const pessoas = [
  {
    instituicoes: ['Graduação [G]', 'Pós-graduação [P]'],
    disciplinas: [
      '[G] Engenharia de Software I',
      '[G] Engenharia de Software II',
      '[G] Programação Orientada a Objetos',
      '[P] Arquitetura de Software: Teoria e Prática',
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
  return (
    <div className="container my-5">
      <h2 className="section-title fw-bold mb-5 text-center">Sobre o Ensino</h2>

      <SectionCard id="promovemos" icon={FaBook} title="O que promovemos no ensino">
        <p>
          Promovemos ensino de qualidade na graduação e pós-graduação, com disciplinas focadas em
          arquitetura de software, metodologias ágeis e práticas de engenharia de software. Buscamos
          formar profissionais preparados para os desafios do mercado e da pesquisa.
        </p>
      </SectionCard>

      <SectionCard
        id="pessoas"
        className="text-center"
        icon={FaChalkboardTeacher}
        title="Disciplinas"
      >
        {pessoas.map(({ instituicoes, disciplinas }) => (
          <div className="mb-4">
            <p className="mb-1">
              <strong>Instituições / Áreas:</strong> {instituicoes.join(', ')}
            </p>
            <p className="mb-1">
              <strong>Disciplinas ministradas:</strong>
            </p>
            <ul className="mb-0">
              {disciplinas.map((disciplina) => (
                <li key={disciplina}>{disciplina}</li>
              ))}
            </ul>
          </div>
        ))}
      </SectionCard>

      <SectionCard id="acoes" icon={FaListAlt} title="O que já fizemos">
        <ul className="mb-0">
          {acoesPromovidas.map((acao, index) => (
            <li key={index}>{acao}</li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
};

export default EnsinoDados;
