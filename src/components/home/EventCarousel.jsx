import React, { useState, useRef } from 'react';
import './EventCarousel.css';

const EventCarousel = ({ fotos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!fotos || fotos.length === 0) {
    return (
      <div className="carousel-placeholder text-center my-3">
        <p>Sem fotos disponíveis para este evento.</p>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  // Swipe mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="event-carousel my-3"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {console.log(fotos)}
      {console.log(fotos[currentIndex])}
      <div className="event-carousel-image-container">
        <img
          src={fotos[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="event-carousel-image fade"
        />

        {/* Setas laterais */}
        <button className="event-carousel-btn prev-btn" onClick={handlePrev}>
          ‹
        </button>
        <button className="event-carousel-btn next-btn" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
