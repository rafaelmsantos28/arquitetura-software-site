import { useState, useEffect } from 'react';

import banner1Mobile from '../../assets/banners/banner-extensao-mobile.jpg';
import bannerExtensao from '../../assets/banners/BannerExtensao.jpg';
import './BannerExtensao.css';

function BannerExtensao() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Checa na primeira renderização
    window.addEventListener('resize', checkScreenSize); // Escuta mudanças de tamanho

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Para modificar o banner, altere os valores abaixo:
  const banner = {
    image: isMobile ? banner1Mobile : bannerExtensao,
    title: 'Projeto de Extensão',
    text: 'Visamos democratizar o conhecimento em arquitetura de software através de cursos, workshops e palestras interativas.',
  };

  return (
    <section className="hero-section-bannerextensao">
      <div
        className="slide-content-bannerextensao"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-bannerextensao">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerExtensao;
