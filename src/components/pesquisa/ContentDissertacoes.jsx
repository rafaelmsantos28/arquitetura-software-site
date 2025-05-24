import dissertacoesIcon from '../../assets/icons/iconM.png';
import './ContentDissertacoes.css';

function ContentDissertacoes() {
  const dissertacoes = [
    {
      title:
        'Desenvolvimento de serviços compostos autoadaptativos: um framework baseado em implantação dinâmica, métricas de QoS e informação semântica',
      data: '2020',
      autores: 'Passini, William Filisbino',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Biociências, Letras e Ciências Exatas (Ibilce), São José do Rio Preto',
      url: 'https://repositorio.unesp.br/entities/publication/dd7c0302-d968-4f3f-85f3-5af1a210de29',
    },
    {
      title:
        'Autoproteção para a camada de aplicação: uma abordagem baseada em técnicas de aprendizado e no laço de controle MAPE-K',
      data: '2022',
      autores: 'Martins, Ronaldo Rodrigues',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/entities/publication/a8cd4b1e-1562-4290-84f9-ce1ee7d12e46',
    },
    {
      title:
        'Estabelecimento de uma Arquitetura de Referência para Sistemas Ciber-Físicos Autoadaptativos',
      data: '2023',
      autores: 'Camargo, Marcos Paulo de Oliveira',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/items/6dac1693-a043-4f2e-a084-2e6540e2200a',
    },
    {
      title:
        'DynaSchema: uma biblioteca para evolução de banco de dados relacional para o domínio de software autoadaptativo',
      data: '2023',
      autores: 'Campos, Gabriel Nagassaki',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/items/407d5610-09e1-404e-94b3-0ac8b42db807',
    },
  ];

  // Ordena os artigos por data (mais recente primeiro)
  const dissertacoesOrdenados = [...dissertacoes].sort((a, b) => {
    const dataA = new Date(a.data.split('/').reverse().join('-'));
    const dataB = new Date(b.data.split('/').reverse().join('-'));
    return dataB - dataA;
  });

  return (
    <section id="dissertacoes" className="container my-5">
      <h2 className="fw-bold section-title text-center mb-4">Orientações Concluídas</h2>
      <h3 className="subsection-title mt-4 mb-3">Dissertações de Mestrado</h3>
      <div className="row g-4">
        {dissertacoesOrdenados.map((item, index) => (
          <div key={index} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentdissertacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row">
                <img
                  src={dissertacoesIcon}
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
                    <strong>Nota:</strong> {item.nota}
                  </p>
                  <p className="mb-0 text-muted">
                    <strong>Escola:</strong> {item.escola}
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

export default ContentDissertacoes;
