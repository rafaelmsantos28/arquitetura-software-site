import React from 'react';
import './CourseCard.css';
import courseBg from '../../assets/eventos-cursos/course-card-bg.png';

const CourseCard = ({ type, title, date, link }) => {
  return (
    <div className="card course-card border-0 text-white text-center">
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${courseBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
        }}
      >
        <div>
          <div className="mb-3 fw-bold">
            <i className="bi bi-calendar-event me-1"></i>
            {type}
          </div>
          <h5 className="fw-bold mb-2">{title}</h5>
          <p className="mb-4">{date}</p>
        </div>
        <a
          href={link}
          className="btn btn-primary fw-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSCREVA-SE
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
