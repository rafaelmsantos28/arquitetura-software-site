import React from 'react';
import { FaBook, FaChalkboardTeacher, FaListAlt } from 'react-icons/fa';
import './EnsinoDados.css';

// Componente reutilizável que representa cada seção do ensino
const SectionCard = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="card-ensinodados mb-5 p-4 shadow-sm section-card-ensinodados">
    <div className="card-body">
      <div className="text-center mb-3">
        {Icon && <Icon className="section-icon-ensinodados mb-2" />} {/* Ícone da seção */}
        <h2 className="text-center">{title}</h2> {/* Título da seção */}
      </div>
      <div className="card-text text-start">{children}</div> {/* Conteúdo da seção */}
    </div>
  </section>
);

// Lista de instituições e disciplinas ministradas
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

// Lista de ações educacionais realizadas
const acoesPromovidas = [
  'Ministração de disciplinas de graduação e pós-graduação.',
  'Organização de workshops e seminários para alunos.',
  'Mentoria e acompanhamento de projetos de pesquisa.',
  'Participação em eventos acadêmicos e comunitários.',
];

const EnsinoDados = () => {
  return (
    <div className="container-fluid my-5 px-5">
      {/* Título principal da página */}
      <h2 className="section-title fw-bold mb-5 text-center title-ensinodados">Sobre o Ensino</h2>

      {/* Seção 1 - Descrição geral das ações no ensino */}
      <SectionCard id="promovemos" icon={FaBook} title="O que promovemos no ensino">
        <p>
          Promovemos ensino de qualidade na graduação e pós-graduação, com disciplinas focadas em
          arquitetura de software, metodologias ágeis e práticas de engenharia de software. Buscamos
          formar profissionais preparados para os desafios do mercado e da pesquisa.
        </p>
      </SectionCard>

      {/* Seção 2 - Disciplinas ministradas, listadas dinamicamente */}
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
                <li key={disciplina}>{disciplina}</li> // Gera lista de disciplinas
              ))}
            </ul>
          </div>
        ))}
      </SectionCard>

      {/* Seção 3 - Lista de ações promovidas */}
      <SectionCard id="acoes" icon={FaListAlt} title="O que já fizemos">
        <ul className="mb-0">
          {acoesPromovidas.map((acao, index) => (
            <li key={index}>{acao}</li> // Exibe cada ação como item de lista
          ))}
        </ul>
      </SectionCard>
    </div>
  );
};

export default EnsinoDados;
