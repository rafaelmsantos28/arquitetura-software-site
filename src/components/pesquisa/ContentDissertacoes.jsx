import dissertacoesIcon from '../../assets/icons/iconM.png';
import './ContentDissertacoes.css';

function ContentDissertacoes() {
  // Lista de dissertações com metadados importantes
  const dissertacoes = [
    {
      title:
        'Desenvolvimento de serviços compostos autoadaptativos: Um framework baseado em implantação dinâmica, métricas de QoS e informação semântica',
      data: '2018',
      autores: 'Passini, William Filisbino',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Biociências, Letras e Ciências Exatas (Ibilce), São José do Rio Preto',
      url: 'https://repositorio.unesp.br/entities/publication/dd7c0302-d968-4f3f-85f3-5af1a210de29',
    },
    {
      title:
        'Autoproteção para a camada de aplicação: Uma abordagem baseada em técnicas de aprendizado e no laço de controle MAPE-K',
      data: '2019',
      autores: 'Martins, Ronaldo Rodrigues',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/entities/publication/a8cd4b1e-1562-4290-84f9-ce1ee7d12e46',
    },
    {
      title:
        'Estabelecimento de uma Arquitetura de Referência para Sistemas Ciber-Físicos Autoadaptativos',
      data: '2020',
      autores: 'Camargo, Marcos Paulo de Oliveira',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/items/6dac1693-a043-4f2e-a084-2e6540e2200a',
    },
    {
      title:
        'DynaSchema: Uma biblioteca para evolução de banco de dados relacional para o domínio de software autoadaptativo',
      data: '2021',
      autores: 'Campos, Gabriel Nagassaki',
      nota: 'Programa de Pós-Graduação em Ciência da Computação (PPGCC/Unesp)',
      escola:
        'Universidade Estadual Paulista (UNESP), Instituto de Geociências e Ciências Exatas (IGCE), Rio Claro',
      url: 'https://repositorio.unesp.br/items/407d5610-09e1-404e-94b3-0ac8b42db807',
    },
  ];

  // Ordena por ano (do mais recente para o mais antigo)
  const dissertacoesOrdenados = [...dissertacoes].sort((a, b) => {
    return parseInt(b.data) - parseInt(a.data);
  });

  return (
    <section id="dissertacoes" className="container-fluid px-5 my-5">
      {/* Título geral da seção */}
      <h2 className="fw-bold section-title text-center mb-4 title-orientacoesconcluidas">
        Orientações Concluídas
      </h2>

      {/* Subtítulo específico da subseção */}
      <h3 className="subsection-title mt-4 mb-3 title-dissertacoesdemestrado">
        Dissertações de Mestrado
      </h3>

      <div className="row g-4">
        {/* Renderiza cada dissertação como um card */}
        {dissertacoesOrdenados.map((item, index) => (
          <div key={index} className="col-12">
            <a
              href={item.url} // Link externo para o repositório
              className="card shadow-sm border-0 card-hover-contentdissertacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentdissertacoes">
                {/* Ícone representando a dissertação */}
                <img src={dissertacoesIcon} alt="Ícone do artigo" className="me-4" />
                <div>
                  {/* Título da dissertação */}
                  <h5 className="mb-1 info-contentdissertacoes">{item.title}</h5>

                  {/* Metadados da dissertação */}
                  <p className="mb-1 text-muted info-contentdissertacoes">
                    <strong>Data:</strong> {item.data}
                  </p>
                  <p className="mb-1 text-muted info-contentdissertacoes">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="mb-0 text-muted info-contentdissertacoes">
                    <strong>Nota:</strong> {item.nota}
                  </p>
                  <p className="mb-0 text-muted info-contentdissertacoes">
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
