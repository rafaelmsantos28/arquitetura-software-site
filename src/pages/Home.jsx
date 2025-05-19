import BannerCarousel from '../components/home/BannerCarousel.jsx';
import VerticalCardSection from '../components/home/VerticalCardSection.jsx';
import SideInfoColumn from '../components/home/SideInfoColumn.jsx';
import BannerYoutube from '../components/home/BannerYoutube.jsx';

function Home() {
  return (
    <main className="Home">
      <figure className="mb-0">
        <BannerCarousel />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <VerticalCardSection />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
      <figure className="mb-0">
        <BannerYoutube />
      </figure>
    </main>
  );
}

export default Home;
