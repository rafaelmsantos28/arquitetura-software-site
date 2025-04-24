import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/BannerCarousel.css';

import banner1 from '../assets/carrossel/banner1.png';
import banner2 from '../assets/carrossel/banner2.png';
import banner3 from '../assets/carrossel/banner3.png';

function BannerCarousel() {
  const banners = [
    { image: banner1, title: 'O espaço ideal para Arquitetos de Software', text: 'Um projeto para alunos e toda comunidade' },
    { image: banner2, title: 'Evento de abertura - 2º semestre de 2025', text: 'Venha participar do evento inaugural do programa' },
    { image: banner3, title: 'Artigos e Insights em Arquitetura de Software', text: 'Explore artigos especializados e fique por dentro de tudo' },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="banner-swiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content" style={{ backgroundImage: `url(${banner.image})` }}>
            <div className="text-container">
              <h2>{banner.title}</h2>
              <p>{banner.text}</p>
              <button>Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerCarousel;
