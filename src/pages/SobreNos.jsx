import BannerSobreNos from '../components/sobrenos/BannerSobreNos.jsx';
import VerticalCardContent from '../components/sobrenos/VerticalCardContent.jsx';
import SideInfoColumn from '../components/home/SideInfoColumn.jsx';
import Team from '../components/home/Team.jsx';

function SobreNos() {
  return (
    <main className="SobreNos">
      <figure className="mb-0">
        <BannerSobreNos />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <Team />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </main>
  );
}

export default SobreNos;
