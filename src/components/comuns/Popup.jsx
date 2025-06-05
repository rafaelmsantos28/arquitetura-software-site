import React from 'react';
import './Popup.css';

const Popup = ({ imageDesktop, imageMobile, onClose }) => {
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
