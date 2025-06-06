// Importa hooks do React
import { useState, useEffect } from 'react';

// Importa imagens para diferentes resoluções de tela
import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg'; // (Comentada, não utilizada atualmente)
import bannerQuemSouEuDesktop from '../../assets/banners/BannerQuemSouEu.jpg'; // Imagem usada para telas maiores
import banner5Mobile from '../../assets/carrossel/banner-quemsoueu-mobile.jpg'; // Imagem usada em dispositivos móveis

// Importa estilos específicos do componente
import './BannerQuemSouEu.css';

function BannerQuemSouEu() {
  // Estado que define se a tela atual é considerada mobile (largura ≤ 768px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Define como mobile se a largura for menor ou igual a 768
    };

    checkScreenSize();

    // Adiciona ouvinte de evento para detectar mudanças de tamanho da janela
    window.addEventListener('resize', checkScreenSize);

    // Remove o ouvinte ao desmontar o componente, evitando vazamentos de memória
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Objeto que define os dados do banner de forma dinâmica conforme o tipo de dispositivo
  const banner = {
    image: isMobile ? banner5Mobile : bannerQuemSouEuDesktop, // Escolhe imagem de fundo com base no estado
    title: 'Prof. Dr. Frank José Affonso', // Título principal do banner
    text: 'Conheça a trajetória acadêmica, profissional e áreas de atuação do coordenador do projeto.', // Texto explicativo
  };

  return (
    // Seção principal do banner com classe específica para controle de layout
    <section className="hero-section-bannerquemsoueu">
      <div
        // Aplica a imagem de fundo diretamente como estilo inline
        className="slide-content-bannerquemsoueu"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="text-container-bannerquemsoueu">
          <h2 className="fw-bold">{banner.title}</h2> {/* Renderiza o título do banner */}
          <p>{banner.text}</p> {/* Renderiza o texto explicativo */}
        </div>
      </div>
    </section>
  );
}

// Exporta o componente para uso externo
export default BannerQuemSouEu;
