import BannerSobreNos from '../components/sobrenos/BannerSobreNos.jsx';

import SideInfoColumn from '../components/comuns/SideInfoColumn.jsx';
import Team from '../components/sobrenos/Team.jsx';

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
          {/* Comentário */}
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
