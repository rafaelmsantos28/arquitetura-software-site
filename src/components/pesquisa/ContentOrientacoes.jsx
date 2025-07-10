// Importa os ícones usados para mestrado e doutorado
import orientacoesMestrado from '../../assets/icons/iconM.png';
import orientacoesDoutorado from '../../assets/icons/iconD.png';

// Importa o arquivo de estilos CSS específico deste componente
import './ContentOrientacoes.css';

function ContentOrientacoes() {
  // Lista de orientações de Mestrado em andamento
  const mestrados = [
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'Daniel de Almeida',
      publicacao:
        'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7012017033083102',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'João Pedro Vieira Brodt',
      publicacao:
        'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'https://br.linkedin.com/in/jo%C3%A3o-pedro-vieira-brodt-656544169?original_referer=https%3A%2F%2Fwww.google.com%2F',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'José William Pinto Gomes',
      publicacao:
        'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7012017033083102',
    },
    {
      title: 'Tema da dissertação:  Modernização de Sistemas Legados em para Arquitetura de Microsserviços',
      data: '2023',
      autores: 'Nathalia Rodrigues de Almeida',
      publicacao:
        'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/1947433919425425',
    },
    {
      title: 'Tema da dissertação: Modernização de Sistemas Legados em Delphi para Arquitetura de Microsserviços',
      data: '2022',
      autores: 'Lucas Fernando Fávero',
      publicacao:
        'Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/0548860613594021',
    },
  ];

  // Lista de orientações de Doutorado em andamento
  const doutorados = [
    {
      title: 'Tema da dissertação: Desenvolvimento de Software baseado em Micro Frontends',
      data: '2023',
      autores: 'Fernando Rodrigues de Moraes',
      publicacao:
        'Tese (Doutorado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7173809746210421',
    },
    {
      title: 'Tema da dissertação: A definir',
      data: '2025',
      autores: 'Ronaldo Rodrigues Martins',
      publicacao:
        'Tese (Doutorado em Ciência da Computação) - Universidade Estadual Paulista Júlio de Mesquita Filho',
      url: 'http://lattes.cnpq.br/7099148763256951',
    },
  ];

  // Função para ordenar os itens por data (do mais recente para o mais antigo)
  const ordenarPorData = (items) => {
    return [...items].sort((a, b) => {
      const da = new Date(a.data);
      const db = new Date(b.data);
      return db - da;
    });
  };

  // Função utilitária que extrai apenas o ano de uma data
  const extrairAno = (dataCompleta) => {
    return dataCompleta.split('/')[0];
  };

  // Aplicação da ordenação
  const mestradosOrdenados = ordenarPorData(mestrados);
  const doutoradosOrdenados = ordenarPorData(doutorados);

  return (
    <section id="orientacoes" className="container-fluid px-5 my-5">
      {/* Título principal da seção */}
      <h2 className="fw-bold section-title text-center mb-4 title-orientacaoandamento">
        Orientações em Andamento
      </h2>

      {/* Subtítulo da seção de mestrado */}
      <h3 className="subsection-title mt-4 mb-3 title-dissertacoesmestrado">
        Dissertações de Mestrado
      </h3>

      {/* Renderização dos cartões de Mestrado */}
      <div className="row g-4">
        {mestradosOrdenados.map((item, idx) => (
          <div key={`mestrado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentorientacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentorientacoes">
                <img src={orientacoesMestrado} alt="Ícone de orientação" className="me-4" />
                <div>
                  <h5 className="mb-1 info-dissertacaoori">{item.title}</h5>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Ano:</strong> {extrairAno(item.data)}
                  </p>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="info-dissertacaoori mb-0 text-muted">
                    <strong>Publicação:</strong> {item.publicacao}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Subtítulo da seção de doutorado */}
      <h3 className="subsection-title mt-5 mb-3 title-dissertacoesmestrado">Tese de Doutorado</h3>

      {/* Renderização dos cartões de Doutorado */}
      <div className="row g-4">
        {doutoradosOrdenados.map((item, idx) => (
          <div key={`doutorado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentorientacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentorientacoes">
                <img src={orientacoesDoutorado} alt="Ícone de orientação" className="me-4" />
                <div>
                  <h5 className="mb-1 info-dissertacaoori">{item.title}</h5>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Ano de início:</strong> {extrairAno(item.data)}
                  </p>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="info-dissertacaoori mb-0 text-muted">
                    <strong>Sobre:</strong> {item.publicacao}
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

export default ContentOrientacoes;
