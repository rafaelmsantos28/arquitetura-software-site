import React, { useState } from 'react';
import './CardInfoPalestra.css';
import Palestrante1 from '../../assets/palestra-info/erik-aceiro.jpg';
import Palestrante2 from '../../assets/palestra-info/guilherme-menaldo-teste.jpg';
import FundoPalestrantes from '../../assets/palestra-info/fundo-palestrantes.jpg';
import Popup from '../comuns/Popup.jsx';

// Imagens para o popup
import PopupDesktop from '../../assets/popup/eventoinaugural-desktop.jpg';
import PopupMobile from '../../assets/popup/eventoinaugural-mobile.jpg';

// Aqui você adiciona outras palestras
const palestras = [
  {
    nome: 'Erik Aceiro',
    titulo: 'Além do Código: A Jornada de Dev, Arquiteto de Software e Staff Engineer',
    imagem: Palestrante1,
    link: 'https://www.linkedin.com/in/erikaceiro/',
  },
  {
    nome: 'Guilherme Menaldo',
    titulo: 'Por que Arquitetura de Software Importa?',
    imagem: Palestrante2,
    link: 'https://www.linkedin.com/in/ggmenaldo/',
  },
];

// Aqui é feito a lógica do popup ao clicar em Saiba Mais
const CardInfoPalestra = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // HTML do componente
  return (
    <div
      className="card-info-palestra-container px-5 mx-5"
      style={{ backgroundImage: `url(${FundoPalestrantes})` }}
    >
      {palestras.map((palestra, index) => (
        <div key={index} className="card-info-palestra mb-4 p-4 rounded shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <img src={palestra.imagem} alt={palestra.nome} className="palestrante-img" />
            <div>
              <h5 className="fw-bold m-0">{palestra.titulo}</h5>
              <div className="mt-1">
                <a
                  href={palestra.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cardinfopalestra"
                >
                  <span className="nome-palestrante">{palestra.nome}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botões fixos */}
      <div className="botoes-container">
        <button onClick={handleOpenPopup} className="btn btn-primary">
          Saiba mais
        </button>
        <a
          href="https://forms.gle/3fFBLLaWTYWFLbv4A"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Inscreva-se
        </a>
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup imageDesktop={PopupDesktop} imageMobile={PopupMobile} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default CardInfoPalestra;
