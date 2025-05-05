import Header from './components/Header.jsx';
import BannerCarousel from './pages/Home/BannerCarousel.jsx';
import VerticalCardSection from './pages/Home/VerticalCardSection.jsx';
import SideInfoColumn from './pages/Home/SideInfoColumn.jsx';
import Team from './pages/Home/Team.jsx';
import BannerYoutube from './pages/Home/BannerYoutube.jsx';
import Footer from './components/Footer.jsx';
import './style/App.css';

function App() {
  return (
    <main className="App">
      <header>
        <Header />
      </header>

      <figure className="mb-0">
        <BannerCarousel />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <VerticalCardSection />
          <Team />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>

      <figure className="mb-0">
        <BannerYoutube />
      </figure>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
