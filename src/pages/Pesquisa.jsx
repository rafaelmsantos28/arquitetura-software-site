import BannerPesquisa from '../components/pesquisa/BannerPesquisa';
import SideInfoColumn from '../components/comuns/SideInfoColumn';
import ContentPesquisa from '../components/pesquisa/ContentPesquisa';
import ContentOrientacoes from '../components/pesquisa/ContentOrientacoes';
import ContentDissertacoes from '../components/pesquisa/ContentDissertacoes';
import MenuPesquisa from '../components/pesquisa/MenuPesquisa';

function Pesquisa() {
  return (
    <main className="Pesquisa">
      <figure className="mb-0">
        <BannerPesquisa />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <MenuPesquisa />
          <ContentPesquisa />
          <ContentOrientacoes />
          <ContentDissertacoes />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </main>
  );
}

export default Pesquisa;
