import React from 'react';
import CourseCard from './CourseCard.jsx'; // Componente visual de cada curso
import './CoursesSection.css'; // Estilos específicos para a seção de cursos

// Lista de cursos a serem exibidos
const courses = [
  {
    type: 'Curso', // Tipo de atividade
    title: 'Arquiteturas em Nuvem com AWS e Azure', // Título exibido no card
    date: '2025-06-27', // Data do evento (formato ISO)
    link: '#', // Link para mais informações (editar aqui)
    comingSoon: true, // Se true, indica que o curso ainda será lançado
  },
  {
    type: 'Workshop',
    title: 'Fundamentos da Arquitetura de Software Moderna',
    date: '2025-06-28',
    link: '#',
    comingSoon: true,
  },
  {
    type: 'Curso',
    title: 'Microservices na Prática: Do Monólito ao Distribuído',
    date: '2025-06-29',
    link: '#',
    comingSoon: true,
  },
];

// Ordena os cursos da data mais próxima para a mais distante
const sortedCourses = courses.sort((a, b) => new Date(a.date) - new Date(b.date));

/**
 * Componente principal que renderiza a seção de cursos.
 * @param {number} limit - Opcional. Limita a quantidade de cursos exibidos.
 */
const CoursesSection = ({ limit }) => {
  // Aplica limite de exibição se a prop 'limit' estiver definida
  const displayedCourses = limit ? sortedCourses.slice(0, limit) : sortedCourses;

  return (
    <div className="container-fluid px-5 my-5 maintitle-courses-section">
      {/* Título da seção - pode ser alterado para refletir outras atividades */}
      <h2 className="text-center fw-bold mb-4">Outras atividades</h2>

      <div className="row g-4">
        {displayedCourses.map((course, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            {/* Cada curso renderizado como um card */}
            <CourseCard
              type={course.type}
              title={course.title}
              date={new Date(course.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
              })} // Converte data para formato legível (ex: "27 de junho")
              link={course.link}
              comingSoon={course.comingSoon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
