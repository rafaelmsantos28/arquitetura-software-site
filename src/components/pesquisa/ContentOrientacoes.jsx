import orientacoesIcon from '../../assets/icons/iconOrient.png';
import './ContentOrientacoes.css';

function ContentOrientacoes() {
  // Dados de orientações divididos por tipo
  const mestrados = [
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'Daniel de Almeida',
      publicacao: 'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7012017033083102',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'João Pedro Vieira Brodt',
      publicacao: 'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: '#',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'José William Pinto Gomes',
      publicacao: 'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7012017033083102',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2023',
      autores: 'Nathalia Rodrigues de Almeida',
      publicacao: 'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/1947433919425425',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2022',
      autores: 'Lucas Fernando Fávero',
      publicacao: 'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/0548860613594021',
    },
    // ... adicione outras orientações de mestrado aqui
  ];

  const doutorados = [
    {
      title: 'Tema da dissertação: A definir',
      data: '2023',
      autores: 'Fernando Rodrigues de Moraes',
      publicacao: 'Tese (Doutorado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7173809746210421',
    },
    // ... adicione outras orientações de doutorado aqui
  ];

  const iniciacoes = [
    {
      title: 'Projeto e implementação de templates para geração automática de código na ferramenta DSLModer4SaS',
      data: '2024',
      autores: 'Daniel de Almeida',
      publicacao: 'Iniciação científica (Graduando em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho, Fundação de Amparo à Pesquisa do Estado de São Paulo',
      url: '#',
    },
    {
      title: 'Projeto e implementação de interface Web baseada em React para a ferramenta DSLModeler4SaS',
      data: '2023',
      autores: 'Nícolas Denadai Schmidt',
      publicacao: 'Iniciação científica (Graduando em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho, Fundação de Amparo à Pesquisa do Estado de São Paulo',
      url: '#',
    },
    // ... adicione outras iniciativas de IC aqui
  ];

  // Função utilitária para ordenar qualquer array por data (desc)
  const ordenarPorData = items => {
    return [...items].sort((a, b) => {
      const da = new Date(a.data.split('/').reverse().join('-'));
      const db = new Date(b.data.split('/').reverse().join('-'));
      return db - da;
    });
  };

  const mestradosOrdenados = ordenarPorData(mestrados);
  const doutoradosOrdenados = ordenarPorData(doutorados);
  const iniciacoesOrdenadas = ordenarPorData(iniciacoes);

  return (
    <section id="orientacoes" className="container my-5">
      <h2 className="section-title text-center mb-4">Orientações em Andamento</h2>

      {/* Mestrados */}
      <h3 className="subsection-title mt-4 mb-3">Dissertações de Mestrado</h3>
      <div className="row g-4">
        {mestradosOrdenados.map((item, idx) => (
          <div key={`mestrado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={orientacoesIcon}
                  alt="Ícone de orientação"
                  style={{ height: '84px', width: '84px' }}
                  className="me-4"
                />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Data de início:</strong> {item.data}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Sobre:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Doutorados */}
      <h3 className="subsection-title mt-5 mb-3">Tese de Doutorado</h3>
      <div className="row g-4">
        {doutoradosOrdenados.map((item, idx) => (
          <div key={`doutorado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={orientacoesIcon}
                  alt="Ícone de orientação"
                  style={{ height: '84px', width: '84px' }}
                  className="me-4"
                />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Data de início:</strong> {item.data}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Sobre:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Iniciação Científica */}
      <h3 className="subsection-title mt-5 mb-3">Iniciação Científica</h3>
      <div className="row g-4">
        {iniciacoesOrdenadas.map((item, idx) => (
          <div key={`iniciacao-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={orientacoesIcon}
                  alt="Ícone de orientação"
                  style={{ height: '84px', width: '84px' }}
                  className="me-4"
                />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Data de início:</strong> {item.data}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Sobre:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentOrientacoes;
