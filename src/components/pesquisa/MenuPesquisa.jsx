import React from 'react';
import artigoIcon from '../../assets/icons/iconArtigo.png';
import orientacoesIcon from '../../assets/icons/iconOrient.png';
import dissertacoesIcon from '../../assets/icons/iconDisser.png';
import './MenuPesquisa.css';

const items = [
  { id: 'dissertacoes', icon: dissertacoesIcon, label: 'Dissertações' },
  { id: 'orientacoes', icon: orientacoesIcon, label: 'Orientações' },
  { id: 'artigos',    icon: artigoIcon,        label: 'Artigos' },
];

export default function MenuPesquisa() {
  return (
    <nav className="menu-pesquisa container py-4">
      <div className="row justify-content-center">
        {items.map(({ id, icon, label }) => (
          <div key={id} className="col-6 col-sm-4 col-md-3 text-center mb-3">
            <a
              href={`#${id}`}
              className="d-block text-decoration-none text-dark"
            >
              <img
                src={icon}
                alt={label}
                className="menu-icon img-fluid mb-2"
              />
              <div className="menu-label">{label}</div>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
