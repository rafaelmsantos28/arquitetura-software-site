import frank from '../../assets/team/frank.jpg';
import phone from '../../assets/redes-sociais/phone.svg';
import mail from '../../assets/redes-sociais/mail.svg';

function InformacoesCoordenador() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center fw-bold">Prof. Dr. Frank José Affonso</h1>

      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={frank}
            alt="Foto do Coordenador"
            className="img-fluid rounded-circle border border-secondary"
            style={{ maxWidth: '250px' }}
          />
          {/*<h3 className="mt-3">Prof. Dr. Frank José Affonso</h3>*/}
          <div className="mt-4">
            <ul className="list-unstyled d-flex flex-column align-items-center">
              <li className="mb-2 d-flex align-items-center">
                <img src={phone} alt="Telefone" style={{ width: '20px', marginRight: '8px' }} />
                <span>(19) 3526-9137</span>
              </li>
              <li className="d-flex align-items-center">
                <img src={mail} alt="Email" style={{ width: '20px', marginRight: '8px' }} />
                <span>f.affonso@unesp.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-8">
          <p>
            É professor assistente doutor do Departamento de Estatística, Matemática Aplicação e
            Computação do Instituto de Geociências e Ciências Exatas (DEMAC/IGCE/UNESP) em Regime
            (RDIDP) - Efetivo da PP-QDUNESP.
          </p>

          <p>
            Tem realizado revisão de artigos em várias conferências, workshops e jornais, como:
            Adaptive and Reconfigurable Service-oriented and Component-based Applications and
            Architectures, Conferência Ibérica de Sistemas e Tecnologias de Informação, Congresso
            Brasileiro de Informática na Educação, Simpósio Brasileiro de Componentes, Arquiteturas
            e Reuso de Software, Congresso Brasileiro de Software: Teoria e Prática (CBSoft), entre
            outros.
          </p>

          <p>
            Possui pós-doutorado (2013-2014) no ICMC/USP - São Carlos; doutorado em Engenharia
            Elétrica pela Escola de Engenharia de São Carlos - Universidade de São Paulo; e mestrado
            em Ciência da Computação pela Universidade Federal de São Carlos.
          </p>

          <p>
            Atuou como professor, coordenador de curso e coordenador de laboratórios no Centro
            Universitário Central Paulista (2002-2010). Atualmente, é professor efetivo da UNESP,
            onde desempenha funções administrativas e acadêmicas, incluindo vice-chefia de
            departamento e coordenação de laboratórios.
          </p>

          <p>
            Sua experiência está focada em Engenharia de Software, com ênfase em arquitetura de
            software, ambientes de engenharia de software e sistemas autoadaptativos em tempo de
            execução.
          </p>

          <p>
            Atua também como pesquisador colaborador no Laboratório de Inteligência Artificial
            Aplicada a Petróleo (LIAAP) no UNESPETRO e é docente credenciado no Programa de
            Pós-Graduação em Ciência da Computação da UNESP desde 2018. Além disso, é o
            representante institucional da SBC na UNESP - Câmpus Rio Claro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InformacoesCoordenador;
