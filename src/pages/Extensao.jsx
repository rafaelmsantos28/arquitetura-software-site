import ExtensaoDados from '../components/extensao/extensaodados';
import SideInfoColumn from '../components/comuns/SideInfoColumn.jsx';

import BannerExtensao from '../components/extensao/BannerExtensao.jsx';

function Extensao() {
  return (
    <>
      <div className="row gx-4">
        <BannerExtensao />
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <ExtensaoDados />
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
