import InformacoesCoordenador from '../components/quemsoueu/InformacoesCoordenador';
import SideInfoColumn from '../components/comuns/SideInfoColumn';
import EnsinoDados from '../components/quemsoueu/EnsinoDados';
import BannerQuemSouEu from '../components/quemsoueu/BannerQuemSouEu';

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
