import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerCarousel.css';

import banner1Desktop from '../../assets/carrossel/banner1.jpg';
import banner2Desktop from '../../assets/carrossel/banner2.jpg';
import banner3Desktop from '../../assets/carrossel/banner3.jpg';
import banner4Desktop from '../../assets/banners/BannerAtividade.jpg';

import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg';
import banner2Mobile from '../../assets/carrossel/banner-mobile2.jpg';
import banner3Mobile from '../../assets/carrossel/banner-mobile3.jpg';
import banner4Mobile from '../../assets/carrossel/banner-atividades-mobile.jpg';
import { Link } from 'react-router-dom';

function BannerCarousel() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isUltraWide = useMediaQuery({ query: '(min-width: 2560px)' });

  // Para adicionar ou alterar banners, edite o array abaixo:
  const banners = [
    {
      image: isMobile ? banner2Mobile : banner2Desktop,
      title: 'Evento de abertura ocorreu no dia 28/06!',
      text: 'Confira todas as fotos do evento aqui embaixo!',
      link: '/eventos',
      delay: 8000,
      buttonText: 'Veja aqui embaixo ',
      scrollTarget: 'evento-section', // id do elemento onde ele deve rolar
    },

    {
      image: isMobile ? banner1Mobile : banner1Desktop,
      title: 'O espaço ideal para Arquitetos de Software',
      text: 'Um projeto para alunos e toda comunidade',

      delay: 6000,
    },
    {
      image: isMobile ? banner4Mobile : banner4Desktop,
      title: 'Confira as Atividades do Projeto!',
      text: 'Workshops, cursos, palestras e muito mais!',
      link: '/atividades',
      delay: 6000,
    },

    {
      image: isMobile ? banner3Mobile : banner3Desktop,
      title: 'Artigos e Insights em Arquitetura de Software',
      text: 'Explore artigos especializados e fique por dentro de tudo',
      link: '/pesquisa',
      delay: 6000,
    },
  ];

  return (
    <section className="hero-section-bannercarousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        className="w-100 h-100"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} data-swiper-autoplay={banner.delay}>
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

                {/* Só exibe botão se houver link ou scrollTarget */}
                {(banner.link || banner.scrollTarget) &&
                  (banner.scrollTarget ? (
                    <button
                      className="btn btn-primary btn-bannercarousel d-flex align-items-center gap-2"
                      onClick={() => {
                        const target = document.getElementById(banner.scrollTarget);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {banner.buttonText}
                      <i className="bi bi-arrow-down-short"></i>
                    </button>
                  ) : (
                    <Link to={banner.link} className="btn btn-primary btn-bannercarousel">
                      {banner.buttonText || 'Saiba mais'}
                    </Link>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BannerCarousel;
