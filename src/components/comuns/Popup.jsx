import React from 'react';
import './Popup.css';

const Popup = ({ imageDesktop, imageMobile, onClose }) => {
  // Verifica se a tela é mobile para definir qual imagem exibir
  const isMobile = window.innerWidth <= 768;
  const imageToShow = isMobile ? imageMobile : imageDesktop;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        <img src={imageToShow} alt="Evento" className="popup-image" />
      </div>
    </div>
  );
};

export default Popup;
