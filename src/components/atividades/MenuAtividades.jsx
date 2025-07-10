import React from 'react';
import eventosIcon from '../../assets/icons/palestra.png';
import cursoIcon from '../../assets/icons/curso.png';
import dissertacoesIcon from '../../assets/icons/iconDisser.png';
import './MenuAtividades.css';

// 🔧 Para adicionar mais itens no menu, insira novos objetos neste array:
const items = [
  { id: 'eventos', icon: eventosIcon, label: 'Eventos' },
  { id: 'cursos', icon: cursoIcon, label: 'Cursos' },
];

export default function MenuAtividades() {
  return (
    <nav className="menu-atividades container py-4">
      <div className="row justify-content-center">
        {items.map(({ id, icon, label }) => (
          <div key={id} className="col-6 col-sm-4 col-md-3 text-center mb-3">
            <a href={`#${id}`} className="d-block text-decoration-none text-dark">
              <div>{label}</div>
              <img src={icon} alt={label} className="menu-icon-menuatividades img-fluid mb-2" />
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
