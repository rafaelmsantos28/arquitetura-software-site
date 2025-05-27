import { useState, useEffect } from 'react';
import './BannerSobreNos.css';

import banner1Mobile from '../../assets/banners/banner-sobrenos-mobile.jpg';
import banner1Desktop from '../../assets/banners/BannerSobreNos.jpg';

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
    image: isMobile ? banner1Mobile : banner1Desktop,
    title: 'Sobre nós',
    text: 'Conheça a equipe que deu vida ao projeto, transformando ideias em realidade.',
  };

  return (
    <section className="hero-section-bannersobrenos">
      <div
        className="slide-content-bannersobrenos"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-bannersobrenos">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerSobreNos;
