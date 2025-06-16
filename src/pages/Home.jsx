import BannerCarousel from '../components/home/BannerCarousel.jsx';
import VerticalCardSection from '../components/home/VerticalCardSection.jsx';
import SideInfoColumn from '../components/comuns/SideInfoColumn.jsx';
import BannerYoutube from '../components/home/BannerYoutube.jsx';
import EventCard from '../components/home/EventCard.jsx';
import CoursesSection from '../components/home/CoursesSection.jsx';
import CardInfoPalestra from '../components/home/CardInfoPalestra.jsx';

function Home() {
  return (
    <main className="Home">
      <figure className="mb-0">
        <BannerCarousel />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <section id="evento-section">
            <EventCard limit={4} />
            <CardInfoPalestra />
          </section>

          <VerticalCardSection />
          <CoursesSection limit={3} />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3 ">
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
