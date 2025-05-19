import ExtensaoDados from '../components/extensao/extensaodados';
import SideInfoColumn from '../components/home/SideInfoColumn';
import Team from '../components/home/Team.jsx';

function Extensao() {
  return (
    <>
      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <ExtensaoDados />
          <Team />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </>
  );
}

export default Extensao;