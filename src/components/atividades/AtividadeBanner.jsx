import { useState, useEffect } from 'react';

import bannerAtividade from '../../assets/banners/BannerAtividade.jpg';
import banner4Mobile from '../../assets/carrossel/banner-atividades-mobile.jpg';
import './AtividadeBanner.css';

function AtividadeBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // checa na primeira renderização
    window.addEventListener('resize', checkScreenSize); // escuta mudanças de tamanho

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const banner = {
    image: isMobile ? banner4Mobile : bannerAtividade,
    title: 'Atividades do Projeto',
    text: 'Participe de cursos, workshops e palestras focadas em desafios atuais.',
  };

  return (
    <section className="hero-section-atividadebanner">
      <div
        className="slide-content-atividadebanner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-atividadebanner">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default AtividadeBanner;
