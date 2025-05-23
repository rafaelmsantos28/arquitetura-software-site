import SideInfoColumn from '../components/home/SideInfoColumn';
import BannerEnsino from '../components/atividades/EnsinoBanner';

function Atividades() {
  return (
    <>
      <div className="row gx-4">
        <BannerEnsino />
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <div className="d-flex justify-content-center">
            <img src="https://images.squarespace-cdn.com/content/v1/5497cff1e4b0164414e293bc/541e185e-9477-4069-8936-b02b21e485f6/website-under-construction.png"></img>
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
