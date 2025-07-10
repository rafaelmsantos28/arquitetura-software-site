import React from 'react';
import './ExtensaoMenu.css';
import {
  FaLightbulb,
  FaBullseye,
  FaCogs,
  FaChartLine,
  FaCalendarAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import './ExtensaoDados.css';

// Para adicionar ou remover itens, edite este array:
const menuItems = [
  { icon: FaLightbulb, label: 'Introdução' },
  { icon: FaBullseye, label: 'Objetivos' },
  { icon: FaCogs, label: 'Metodologia' },
  { icon: FaChartLine, label: 'Resultados Esperados' },
  { icon: FaCalendarAlt, label: 'Cronograma' },
  { icon: FaUserGraduate, label: 'Participação Estudantil' },
];

const scrollToSection = (title) => {
  const section = document.querySelector(`[data-title="${title}"]`);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const ExtensaoMenu = () => {
  return (
    <div className="icon-buttons-extensaomenu">
      {menuItems.map(({ icon: Icon, label }) => (
        <button key={label} onClick={() => scrollToSection(label)}>
          <Icon /> {label}
        </button>
      ))}
    </div>
  );
};

export default ExtensaoMenu;
