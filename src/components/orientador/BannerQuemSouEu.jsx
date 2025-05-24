import { useState, useEffect } from 'react';

import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg'; // <------ ALTERAR
import bannerQuemSouEuDesktop from '../../assets/banners/BannerQuemSouEu.jpg';

import './BannerQuemSouEu.css';

function BannerQuemSouEu() {
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
    image: isMobile ? banner2Mobile : bannerQuemSouEuDesktop,
    title: 'Prof. Dr. Frank José Affonso',
    text: 'Conheça a trajetória acadêmica, profissional e áreas de atuação do coordenador do projeto.',
  };

  return (
    <section className="hero-section-bannerquemsoueu">
      <div
        className="slide-content-bannerquemsoueu"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-bannerquemsoueu">
          <h2 className="fw-bold">{banner.title}</h2>
          <p>{banner.text}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerQuemSouEu;
