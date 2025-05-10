import { useState, useEffect } from 'react';
import './BannerSobreNos.css'

import banner1Mobile from '../../assets/carrossel/banner-mobile1.jpg';
import banner1Desktop from '../../assets/carrossel/banner1.jpg';

function BannerSobreNos() {
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
        image: isMobile ? banner1Mobile : banner1Desktop,
        title: 'Sobre nós',
        text: 'Conheça o projeto Academia do Arquiteto de Software, nossos objetivos, missões e muito mais',
    };

    return (
        <section className='hero-section'>
            <div className="slide-content" style={{ backgroundImage: `url(${banner.image})` }}>
                <div className="text-container">
                    <h2>{banner.title}</h2>
                    <p>{banner.text}</p>
                </div>
            </div>
        </section>
    );
}

export default BannerSobreNos;
