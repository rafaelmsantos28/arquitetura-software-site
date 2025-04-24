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
    { image: banner1, title: 'Título 1', text: 'Texto descritivo do banner 1' },
    { image: banner2, title: 'Título 2', text: 'Texto descritivo do banner 2' },
    { image: banner3, title: 'Título 3', text: 'Texto descritivo do banner 3' },
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
