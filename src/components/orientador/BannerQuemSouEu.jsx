import { useState, useEffect } from 'react';

import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg';
import banner2Desktop from '../../assets/carrossel/banner2.jpg';

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
    image: isMobile ? banner2Mobile : banner2Desktop,
    title: 'Quem sou Eu',
    text: 'Conheça a trajetória acadêmica, profissional e áreas de atuação do coordenador do projeto.',
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

export default BannerQuemSouEu;
