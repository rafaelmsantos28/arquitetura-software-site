import frank from '../../assets/team/frank.jpg';
import phone from '../../assets/redes-sociais/phone.svg';
import mail from '../../assets/redes-sociais/mail.svg';

import './InformacoesCoordenador.css';

function InformacoesCoordenador() {
  return (
    <div className="container-fluid my-5">
      {/*<h1 className="titulo-coordenador mb-5 fw-bold text-center text-md-start">
        Prof. Dr. Frank José Affonso
      </h1>*/}

      <div className="row align-items-start">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={frank}
            alt="Foto do Coordenador"
            className="img-fluid rounded-circle border border-secondary coordenador-foto"
          />
          <div className="mt-2">
            <ul className="list-unstyled d-flex flex-column align-items-center coordenador-contato">
              <li className="mb-2 d-flex align-items-center">
                <img src={phone} alt="Telefone" />
                <span>(19) 3526-9137</span>
              </li>
              <li className="d-flex align-items-center">
                <img src={mail} alt="Email" />
                <span>f.affonso@unesp.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-8 coordenador-info">
          <p>
            É professor assistente doutor do Departamento de Estatística, Matemática Aplicação e
            Computação do Instituto de Geociências e Ciências Exatas (DEMAC/IGCE/UNESP) em Regime
            (RDIDP) - Efetivo da PP-QDUNESP.
          </p>

          <h4 className="fw-bold mt-4">Formação acadêmica</h4>
          <ul>
            <li>Pós-Doutorado no Instituto de Ciências Matemáticas e de Computação da USP.</li>
            <li>Doutorado em Programa de Pós-Graduação em Engenharia Elétrica.</li>
            <li>Mestrado em Programa de Pós-Graduação em Ciência da Computação.</li>
            <li>Graduação em Ciência da Computação.</li>
          </ul>

          <h4 className="fw-bold mt-4">Áreas de Interesse</h4>
          <ul>
            <li>Arquitetura de Software</li>
            <li>Computação Móvel</li>
            <li>Computação Orientada a Serviços</li>
            <li>Engenharia de Software</li>
            <li>Ferramentas CASE</li>
            <li>Sistemas de Software Autoadaptativos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformacoesCoordenador;
