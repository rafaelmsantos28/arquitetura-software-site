import React from 'react';
// Importa os ícones usados em cada item do menu
import artigoIcon from '../../assets/icons/iconArtigo.png';
import orientacoesIcon from '../../assets/icons/iconOrient.png';
import dissertacoesIcon from '../../assets/icons/iconDisser.png';
// Importa o arquivo CSS específico para este menu
import './MenuPesquisa.css';

// Definição dos itens do menu com id, ícone e texto
const items = [
  { id: 'artigos', icon: artigoIcon, label: 'Artigos Publicados' },
  { id: 'orientacoes', icon: orientacoesIcon, label: 'Orientações em Andamento' },
  { id: 'dissertacoes', icon: dissertacoesIcon, label: 'Orientações Defendidas' },
];

export default function MenuPesquisa() {
  return (
    <nav className="menu-pesquisa container py-4">
      <div className="row justify-content-center">
        {/* Mapeia os itens para renderizar as colunas do menu */}
        {items.map(({ id, icon, label }) => (
          <div key={id} className="col-6 col-sm-4 col-md-3 text-center mb-3">
            {/* Link para a seção correspondente da página */}
            <a href={`#${id}`} className="d-block text-decoration-none text-dark">
              {/* Texto do menu */}
              <div>{label}</div>
              {/* Ícone do menu */}
              <img src={icon} alt={label} className="menu-icon-menupesquisa img-fluid mb-2" />
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
