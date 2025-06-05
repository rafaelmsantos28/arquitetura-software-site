import React from 'react';
import CourseCard from './CourseCard.jsx';
import './CoursesSection.css';

const courses = [
  {
    type: 'Curso',
    title: 'Arquiteturas em Nuvem com AWS e Azure',
    date: '2025-06-27',
    link: '#',
    comingSoon: true,
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

const sortedCourses = courses.sort((a, b) => new Date(a.date) - new Date(b.date));

const CoursesSection = ({ limit }) => {
  const displayedCourses = limit ? sortedCourses.slice(0, limit) : sortedCourses;

  return (
    <div className="container-fluid px-5 my-5 maintitle-courses-section">
      <h2 className="text-center fw-bold mb-4">Outras atividades</h2>
      <div className="row g-4">
        {displayedCourses.map((course, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <CourseCard
              type={course.type}
              title={course.title}
              date={new Date(course.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
              })}
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
