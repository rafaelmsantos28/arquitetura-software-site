import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerCarousel.css';

import banner1Desktop from '../../assets/carrossel/banner1.jpg';
import banner2Desktop from '../../assets/carrossel/banner2.jpg';
import banner3Desktop from '../../assets/carrossel/banner3.jpg';

import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg';
import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg';
import banner3Mobile from '../../assets/carrossel/banner-mobile3.jpg';
import { Link } from 'react-router-dom';

function BannerCarousel() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isUltraWide = useMediaQuery({ query: '(min-width: 2560px)' });

  const banners = [
    {
      image: isMobile ? banner1Mobile : banner1Desktop,
      title: 'O espaço ideal para Arquitetos de Software',
      text: 'Um projeto para alunos e toda comunidade',
      link: '/sobrenos',
    },
    {
      image: isMobile ? banner2Mobile : banner2Desktop,
      title: 'Evento de abertura - 2º semestre de 2025',
      text: 'Venha participar do evento inaugural do programa',
      link: '/eventos',
    },
    {
      image: isMobile ? banner3Mobile : banner3Desktop,
      title: 'Artigos e Insights em Arquitetura de Software',
      text: 'Explore artigos especializados e fique por dentro de tudo',
      link: '/pesquisa',
    },
  ];

  return (
    <section className="hero-section-bannercarousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 60000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        className="w-100 h-100"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className={`d-flex ${isMobile ? '' : 'align-items-center'} w-100 h-100`}
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className={`text-start ${isMobile ? 'text-white p-4 pt-5' : 'text-dark '} w-100 content-bannercarousel`}
                style={{ maxWidth: isUltraWide ? '1300px' : '700px' }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: isMobile ? '1.8rem' : isUltraWide ? '6rem' : '3rem',
                    lineHeight: isMobile ? '2.2rem' : isUltraWide ? '6.6rem' : '3.2rem',
                  }}
                >
                  {banner.title}
                </h2>
                <p
                  className="mb-4"
                  style={{
                    fontSize: isMobile ? '0.95rem' : isUltraWide ? '2.4rem' : '1.2rem',
                  }}
                >
                  {banner.text}
                </p>
                <Link to={banner.link} className="btn btn-primary btn-bannercarousel">
                  Saiba mais
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BannerCarousel;
