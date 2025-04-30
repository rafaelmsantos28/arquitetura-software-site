import Header from './components/Header.jsx'
import BannerCarousel from './components/BannerCarousel';
import VerticalCardSection from './components/VerticalCardSection';
import SideInfoColumn from './components/SideInfoColumn';
import HorizontalCardSection from './components/HorizontalCardSection';
import './style/App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <BannerCarousel />

        <div className="content-layout">
          <div className="main-column">
            <VerticalCardSection />
          </div>

          <div className="side-column">
            <SideInfoColumn />
          </div>
        </div>

        {/* Aqui o horizontal card poderia ficar logo acima do rodapé, se quiser */}
        <HorizontalCardSection />
      </main>
    </div>
  )
}

export default App
