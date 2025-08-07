import React from 'react';
import './CardInfoPalestra.css';
import FundoPalestrantes from '../../assets/palestra-info/fundo-palestrantes.jpg';

const CardInfoPalestra = ({ palestras }) => {
  return (
    <div className="card-info-palestra-container px-3 mb-3">
      {palestras.map((palestra, index) => (
        <div key={index} className="card-info-palestra mb-4 p-4 rounded shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <img src={palestra.imagem} alt={palestra.nome} className="palestrante-img" />
            <div>
              <h5 className="fw-bold m-0">
                {palestra.titulo}{' '}
                {palestra.slides && (
                  <a
                    href={palestra.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link ms-2"
                  >
                    PDF
                  </a>
                )}
              </h5>

              <div className="mt-1">
                <a
                  href={palestra.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cardinfopalestra"
                >
                  <span className="nome-palestrante">{palestra.nome}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfoPalestra;
