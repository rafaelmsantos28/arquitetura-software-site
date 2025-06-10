import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ imageDesktop, imageMobile, onClose }) => {
  const isMobile = window.innerWidth <= 768;
  const imageToShow = isMobile ? imageMobile : imageDesktop;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Bloquear scroll ao abrir o pop-up e restaurar ao fechar
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={handleContentClick}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        <img src={imageToShow} alt="Evento" className="popup-image" />
      </div>
    </div>
  );
};

export default Popup;
