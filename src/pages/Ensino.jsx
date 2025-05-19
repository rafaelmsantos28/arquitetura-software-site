import EnsinoDados from '../components/ensino/EnsinoDados';
import SideInfoColumn from '../components/home/SideInfoColumn';


function Ensino() {
  return (
    <>
      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <EnsinoDados />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </>
  );
}

export default Ensino;