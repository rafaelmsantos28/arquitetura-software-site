import { useState, useEffect } from 'react';

/* import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg'; */
import bannerExtensao from '../../assets/banners/bannerExtensao.png';

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
    image: isMobile ? banner1Mobile : bannerExtensao,
    title: 'Projeto de Extensão',
    text: 'Visamos democratizar o conhecimento em arquitetura de software através de cursos, workshops e palestras interativas.',
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

export default BannerSobreNos;
