import SideInfoColumn from '../components/comuns/SideInfoColumn';
import BannerEnsino from '../components/atividades/EnsinoBanner';
import MenuAtividades from '../components/atividades/MenuAtividades';

function Atividades() {
  return (
    <>
      <div className="row gx-4">
        <BannerEnsino />
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <div className="d-flex justify-content-center">
            <MenuAtividades />
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </>
  );
}

export default Atividades;
