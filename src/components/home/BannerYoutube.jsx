import React, { useRef, useEffect, useState } from 'react';
import youtubePhone from '../../assets/youtube/youtube-phone.png';
import circuitBg from '../../assets/youtube/circuito.png';
import './BannerYoutube.css';

function BannerYoutube() {
  // Referências para observação da visibilidade dos elementos
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const titleMobileRef = useRef(null);

  // Estados que controlam a exibição das animações
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [titleMobileVisible, setTitleMobileVisible] = useState(false);

  // Observador para imagem principal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  // Observador para conteúdo textual
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setContentVisible(true);
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  // Observador para título mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleMobileVisible(true);
      },
      { threshold: 0.3 }
    );

    if (titleMobileRef.current) observer.observe(titleMobileRef.current);

    return () => {
      if (titleMobileRef.current) observer.unobserve(titleMobileRef.current);
    };
  }, []);

  return (
    <section className="banner-section-banneryoutube d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Título Mobile */}
          <div
            className={`col-12 text-center mb-4 d-lg-none fade-up ${titleMobileVisible ? 'show' : ''}`}
            ref={titleMobileRef}
          >
            <h2 className="fw-bold">Conheça nosso canal no YouTube</h2>
          </div>

          <div className="col-lg-6 col-xxl-6 col-12 text-center order-lg-1 mb-4 mb-lg-0 position-relative overflow-hidden">
            {/* Imagem de fundo */}
            <img src={circuitBg} alt="Circuito" className="circuito-bg-banneryoutube" />

            {/* Imagem Principal */}
            <img
              ref={imgRef}
              src={youtubePhone}
              alt="Canal no YouTube"
              className={`img-fluid youtube-phone-img ${isVisible ? 'fade-in' : ''}`}
            />
          </div>

          {/* Conteúdo */}
          <div
            className={`col-lg-6 col-xxl-6 col-12 text-center text-lg-start order-lg-2 fade-up ${contentVisible ? 'show' : ''}`}
            ref={contentRef}
          >
            {/* Título no desktop */}
            <h2 className="fw-bold mb-3 d-none d-lg-block">Conheça nosso canal no YouTube</h2>
            <p className="mb-4">
              Inscreva-se e fique atualizado sobre eventos, palestras, cursos e muito mais.
            </p>
            <a
              href="https://www.youtube.com/@acadarqsoftware?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary btn-banneryoutube">Saiba mais</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerYoutube;
