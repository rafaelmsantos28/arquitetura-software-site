import Header from './components/Header.jsx'
import BannerCarousel from './pages/Home/BannerCarousel.jsx';
import VerticalCardSection from './pages/Home/VerticalCardSection.jsx';
import SideInfoColumn from './pages/Home/SideInfoColumn.jsx';
import Team from './pages/Home/Team.jsx';
import BannerYoutube from './pages/Home/BannerYoutube.jsx';
import Footer from './components/Footer.jsx';
import './style/App.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <BannerCarousel />

        <div className="content-layout">
          <div className="main-column">
            <VerticalCardSection />
            <Team />
          </div>

          <div className="side-column">
            <SideInfoColumn />
          </div>

        </div>
        <BannerYoutube />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
