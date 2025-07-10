import { useState, useEffect } from 'react';
import './BannerPesquisa.css';

// Importa imagens para diferentes tamanhos de tela
import banner3Mobile from '../../assets/carrossel/banner-mobile3.jpg';
import banner3Desktop from '../../assets/carrossel/banner3.jpg';

function BannerPesquisa() {
  // Estado que controla se o dispositivo é mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função que verifica a largura da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Define ponto de corte para mobile
    };

    checkScreenSize(); // Verifica ao montar o componente

    // Adiciona o listener para resize
    window.addEventListener('resize', checkScreenSize);

    // Remove o listener no unmount para evitar memory leak
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Objeto com os dados do banner
  const banner = {
    image: isMobile ? banner3Mobile : banner3Desktop, // Imagem condicional
    title: 'Pesquisa',
    text: 'Veja artigos e pesquisas completas na área de Engenharia e Arquitetura de Software',
  };

  return (
    <section className="hero-section-bannerpesquisa">
      <div
        className="slide-content-bannerpesquisa"
        style={{ backgroundImage: `url(${banner.image})` }} // Aplica imagem de fundo dinamicamente
      >
        <div className="text-container-bannerpesquisa">
          <h2 className="fw-bold">{banner.title}</h2> {/* Título do banner */}
          <p>{banner.text}</p> {/* Texto descritivo */}
        </div>
      </div>
    </section>
  );
}

export default BannerPesquisa;
