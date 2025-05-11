import artigoIcon from '../../assets/icons/artigo.png';
import './ContentPesquisa.css';

function ContentPesquisa() {
  const artigos = [
    {
      title: 'RA4Self-CPS: A Reference Architecture for Self-adaptive Cyber-Physical Systems',
      data: '16/01/2024',
      autores: 'M. P. de O. Camargo, G. dos S. Pereira, D. Almeida, L. A. Bento, W. F. Dorante, F. J. Affonso',
      publicacao: 'IEEE Latin America Transactions, v. 22, p. 113-125',
      url: 'https://latamt.ieeer9.org/index.php/transactions/article/view/8354',
    },
    {
      title: 'A Reference Architecture Based on Reflection for Self-Adaptive Software: A Second Release',
      data: '01/01/2024',
      autores: 'F. J. Affonso, G. Nagassaki Campos and G. Guiguer Menaldo',
      publicacao: 'IEEE ACCESS, v. 12, p.',
      url: 'https://ieeexplore.ieee.org/document/10597388?denied=',
    },
    {
      title: ' A multi-agent approach to monitor and manage container-based distributed systems',
      data: '09/08/2021',
      autores: 'Pfeifer, V., Passini, W. F., Dorante, W. F. ., Guilherme, I. R., & Affonso, F. J',
      publicacao: 'IEEE Latin America Transactions, v. 20, p. 82-91',
      url: 'https://latamt.ieeer9.org/index.php/transactions/article/view/5076',
    },
  ];

  // Ordena os artigos por data (mais recente primeiro)
  const artigosOrdenados = [...artigos].sort((a, b) => {
    const dataA = new Date(a.data.split('/').reverse().join('-'));
    const dataB = new Date(b.data.split('/').reverse().join('-'));
    return dataB - dataA;
  });

  return (
    <section className="container my-5">
      <div className="row g-4">
        {artigosOrdenados.map((item, index) => (
          <div key={index} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={artigoIcon}
                  alt="Ícone do artigo"
                  style={{ height: '84px', width: '84px' }}
                  className="me-4"
                />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Data:</strong> {item.data}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Publicação:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentPesquisa;
