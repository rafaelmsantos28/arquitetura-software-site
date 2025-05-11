import { useState, useEffect } from 'react';
import './BannerPesquisa.css';

import banner3Mobile from '../../assets/carrossel/banner-mobile3.jpg';
import banner3Desktop from '../../assets/carrossel/banner3.jpg';

function BannerPesquisa() {
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
    image: isMobile ? banner3Mobile : banner3Desktop,
    title: 'Pesquisa',
    text: 'Veja artigos e pesquisas completas na área de Engenharia e Arquitetura de Software',
  };

  return (
    <section className="hero-section">
      <div className="slide-content" style={{ backgroundImage: `url(${banner.image})` }}>
        <div className="text-container">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerPesquisa;
