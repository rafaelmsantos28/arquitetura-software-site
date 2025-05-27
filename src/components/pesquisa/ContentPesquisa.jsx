import artigoIcon from '../../assets/icons/iconA.png';
import './ContentPesquisa.css';

function ContentPesquisa() {
  const artigos = [
    {
      title:
        'Estudo comparativo da adaptação de software utilizando Chamada de Métodos Remotos e Serviços Web',
      data: '2011',
      autores: 'Affonso, Frank José; Rodrigues, Evandro Luis Linhari',
      publicacao: 'Revista de Sistemas de Informação da FSMA, v. 7, n. 2, p. 22–31',
      url: 'https://oaji.net/articles/2015/601-1433785163.pdf',
    },
    {
      title: 'ReflectTools: Uma ferramenta de apoio ao desenvolvimento de software reconfigurável',
      data: '2011',
      autores: 'Affonso, Frank José; Rodrigues, Evandro Luis Linhari',
      publicacao: 'Revista Brasileira de Computação Aplicada, v. 3, n. 2, p. 73–90',
      url: 'https://seer.upf.br/index.php/rbca/article/view/1804',
    },
    {
      title: 'Adaptive Software Development supported by an Automated Process: a Reference Model',
      data: '2013',
      autores:
        'Affonso, Frank José; Vecchiato Saenz Carneiro, Maria Cecilia; Rodrigues, Evandro Luis Linhari; Nakagawa, Elisa Yumi',
      publicacao: 'Salesian Journal on Information Systems, v. 12, p. 8–20',
      url: 'https://oaji.net/articles/2015/601-1433776680.pdf',
    },
    {
      title: 'A Reference Model as Automated Process for Software Adaptation at Runtime',
      data: '2015',
      autores: 'Affonso, F. J.; Carneiro, M. C. V. S.; Rodrigues, E. L. L.; Nakagawa, E. Y.',
      publicacao: 'IEEE Latin America Transactions, v. 13, n. 1, p. 214–221',
      url: 'https://doi.org/10.1109/TLA.2015.7040650',
    },
    {
      title:
        'Self-adaptive software: development approach and automatic process for adaptation at runtime',
      data: '2015',
      autores: 'Affonso, Frank José; Nakagawa, Elisa Yumi',
      publicacao: 'Revista Brasileira de Computação Aplicada, v. 7, n. 1, p. 68–84',
      url: 'http://dx.doi.org/10.5335/rbca.2015.4224',
    },
    {
      title: 'SASeS: A Framework for the Development of Service-based Self-adaptive Applications',
      data: '2016',
      autores: 'Costa Junior, E.; Maia, P. H. M.; Affonso, F. J.',
      publicacao: 'IEEE Latin America Transactions, v. 14, n. 9, p. 4187–4195',
      url: 'https://doi.org/10.1109/TLA.2016.7785951',
    },
    {
      title:
        'Developing Self-Adaptive Service-Oriented Mobile Applications: A Framework Based on Dynamic Deployment',
      data: '2018',
      autores: 'Passini, William Filisbino; Affonso, Frank José',
      publicacao:
        'International Journal of Software Engineering and Knowledge Engineering, v. 28, n. 11n12, p. 1537–1558',
      url: 'https://doi.org/10.1142/S0218194018400168',
    },
    {
      title:
        'A Reference Architecture to support the development of mobile applications based on self-adaptive services',
      data: '2019',
      autores: 'Affonso, Frank José; Passini, William Filisbino; Nakagawa, Elisa Yumi',
      publicacao: 'Pervasive and Mobile Computing, v. 53, p. 33–48',
      url: 'https://doi.org/10.1016/j.pmcj.2019.01.001',
    },
    {
      title:
        'Design of frameworks for self-adaptive service-oriented applications: A systematic analysis',
      data: '2022',
      autores:
        'Passini, William Filisbino; Lana, Cristiane Aparecida; Pfeifer, Vinicius; Affonso, Frank José',
      publicacao: 'Software: Practice and Experience, v. 52, n. 1, p. 5–38',
      url: 'https://doi.org/10.1002/spe.3013',
    },
    {
      title: 'A multi-agent approach to monitor and manage container-based distributed systems',
      data: '2022',
      autores:
        'Pfeifer, Vinicius; Passini, William Filisbino; Dorante, William Fernandes; Guilherme, Ivan Rizzo; Affonso, Frank José',
      publicacao: 'IEEE Latin America Transactions, v. 20, n. 1, p. 82–91',
      url: 'https://doi.org/10.1109/TLA.2022.9662176',
    },
    {
      title: 'RA4Self-CPS: A Reference Architecture for Self-adaptive Cyber-Physical Systems',
      data: '2024',
      autores:
        'Camargo, Marcos Paulo de Oliveira; Pereira, Gabriel dos Santos; Almeida, Daniel; Bento, Leandro Apolinário; Dorante, William Fernande; Affonso, Frank José',
      publicacao: 'IEEE Latin America Transactions, v. 22, n. 2, p. 113–125',
      url: 'https://doi.org/10.1109/TLA.2024.10412036',
    },
    {
      title:
        'A Reference Architecture Based on Reflection for Self-Adaptive Software: A Second Release',
      data: '2024',
      autores: 'Affonso, Frank José; Nagassaki Campos, Gabriel; Guiguer Menaldo, Guilherme',
      publicacao: 'IEEE Access, v. 12, p. 97476–97499',
      url: 'https://doi.org/10.1109/ACCESS.2024.3428368',
    },
  ];

  // Ordena os artigos por data (mais recente primeiro)
  const artigosOrdenados = [...artigos].sort((a, b) => {
    const dataA = new Date(a.data.split('/').reverse().join('-'));
    const dataB = new Date(b.data.split('/').reverse().join('-'));
    return dataB - dataA;
  });

  return (
    <section id="artigos" className="container-fluid my-5 px-5">
      <h2 className="fw-bold section-title text-center mb-4">Artigos Publicados</h2>
      <div className="row g-4">
        {artigosOrdenados.map((item, index) => (
          <div key={index} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentpesquisa text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row">
                <img
                  src={artigoIcon}
                  alt="Ícone do artigo"
                  style={{ height: '84px', width: '84px', margin: '12px' }}
                  className="me-4"
                />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted">
                    <strong>Data:</strong> {item.data}
                  </p>
                  <p className="mb-1 text-muted">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="mb-0 text-muted">
                    <strong>Publicação:</strong> {item.publicacao}
                  </p>
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
