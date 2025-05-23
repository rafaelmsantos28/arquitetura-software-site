import InformacoesCoordenador from '../components/orientador/InformacoesCoordenador';
import SideInfoColumn from '../components/comuns/SideInfoColumn';
import EnsinoDados from '../components/orientador/EnsinoDados';
import BannerQuemSouEu from '../components/orientador/BannerQuemSouEu';

function QuemSouEu() {
  return (
    <>
      <div className="row gx-4">
        <BannerQuemSouEu />
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4 ">
          <InformacoesCoordenador />
          <EnsinoDados />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3 pl-5">
          <SideInfoColumn />
        </div>
      </div>
    </>
  );
}

export default QuemSouEu;
