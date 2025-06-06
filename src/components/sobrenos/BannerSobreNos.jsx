import { useState, useEffect } from 'react';
import './BannerSobreNos.css';

import banner1Mobile from '../../assets/banners/banner-sobrenos-mobile.jpg'; // Imagem para telas pequenas
import banner1Desktop from '../../assets/banners/BannerSobreNos.jpg';       // Imagem para telas maiores

function BannerSobreNos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função que atualiza estado com base na largura da janela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Executa ao montar o componente para definir estado inicial
    window.addEventListener('resize', checkScreenSize); // Atualiza estado em redimensionamento

    return () => window.removeEventListener('resize', checkScreenSize); // Limpa listener ao desmontar
  }, []);

  // Define qual banner usar e o conteúdo textual
  const banner = {
    image: isMobile ? banner1Mobile : banner1Desktop,
    title: 'Sobre nós',
    text: 'Conheça a equipe que deu vida ao projeto, transformando ideias em realidade.',
  };

  return (
    <section className="hero-section-bannersobrenos">
      {/* Aplica imagem de fundo dinamicamente */}
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
