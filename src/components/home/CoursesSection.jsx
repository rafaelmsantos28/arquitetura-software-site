import React from 'react';
import CourseCard from './CourseCard.jsx';

const courses = [
  {
    type: 'Workshop',
    title: 'Evento de Abertura',
    date: '2025-06-27',
    link: '#',
  },
  {
    type: 'Curso',
    title: 'Além do Código',
    date: '2025-06-28',
    link: '#',
  },
  {
    type: 'Curso',
    title: 'Arquitetura Dinâmica',
    date: '2025-06-29',
    link: '#',
  },
];

// Ordenar pela data mais próxima
const sortedCourses = courses.sort((a, b) => new Date(a.date) - new Date(b.date));

const CoursesSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Cursos</h2>
      <div className="row g-4">
        {sortedCourses.map((course, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <CourseCard
              type={course.type}
              title={course.title}
              date={new Date(course.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
              })}
              link={course.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
