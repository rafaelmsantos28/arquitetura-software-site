import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerCarousel.css';

import banner1Desktop from '../../assets/carrossel/banner1.jpg';
import banner2Desktop from '../../assets/carrossel/banner2.jpg';
import banner3Desktop from '../../assets/carrossel/banner3.jpg';

import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg';
import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg';
import banner3Mobile from '../../assets/carrossel/banner-mobile3.jpg';

function BannerCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // checa na primeira renderização
    window.addEventListener('resize', checkScreenSize); // escuta mudanças de tamanho

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const banners = [
    {
      image: isMobile ? banner1Mobile : banner1Desktop,
      title: 'O espaço ideal para Arquitetos de Software',
      text: 'Um projeto para alunos e toda comunidade',
    },
    {
      image: isMobile ? banner2Mobile : banner2Desktop,
      title: 'Evento de abertura - 2º semestre de 2025',
      text: 'Venha participar do evento inaugural do programa',
    },
    {
      image: isMobile ? banner3Mobile : banner3Desktop,
      title: 'Artigos e Insights em Arquitetura de Software',
      text: 'Explore artigos especializados e fique por dentro de tudo',
    },
  ];

  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={0}
        initialSlide={0}
        className="banner-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="text-container">
                <h2>{banner.title}</h2>
                <p>{banner.text}</p>
                <button className="btn btn-primary mt-auto">Saiba mais</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BannerCarousel;
