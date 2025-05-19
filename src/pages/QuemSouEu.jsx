import InformacoesCoordenador from '../components/orientador/InformacoesCoordenador';
import SideInfoColumn from '../components/home/SideInfoColumn';

function QuemSouEu() {
  return (
    <>
      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <InformacoesCoordenador />
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
