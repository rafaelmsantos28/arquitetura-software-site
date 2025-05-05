import React, { useRef, useEffect, useState } from 'react';
import './BannerYoutube.css';

function BannerYoutube() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 30% visível já ativa o efeito
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="banner-section">
      <div ref={textRef} className={`banner-text ${isVisible ? 'fade-in' : ''}`}>
        <h2>Conheça nosso canal no Youtube</h2>
        <p>Inscreva-se e fique atualizado sobre eventos, palestras, cursos e muito mais</p>
        <button className="btn btn-primary mt-auto">Saiba mais</button>
      </div>
    </section>
  );
}

export default BannerYoutube;
