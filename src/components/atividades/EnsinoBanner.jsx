import { useState, useEffect } from 'react';

/* import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg'; */
import bannerEnsino from '../../assets/banners/BannerEnsino.jpg';
import banner4Mobile from '../../assets/carrossel/banner-atividades-mobile.jpg';
import './EnsinoBanner.css';

function BannerSobreNos() {
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
    image: isMobile ? banner4Mobile : bannerEnsino,
    title: 'Atividades do Projeto',
    text: 'Participe de cursos, workshops e palestras focadas em desafios atuais.',
  };

  return (
    <section className="hero-section-ensinobanner">
      <div
        className="slide-content-ensinobanner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-ensinobanner">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerSobreNos;
