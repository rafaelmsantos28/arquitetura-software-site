import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/comuns/Header';
import Footer from './components/comuns/Footer';

import Home from './pages/Home.jsx';
import Atividades from './pages/Atividades.jsx';
import Pesquisa from './pages/Pesquisa.jsx';
import Extensao from './pages/Extensao.jsx';
import SobreNos from './pages/SobreNos.jsx';
import QuemSouEu from './pages/QuemSouEu.jsx';
import ScrollToTop from './components/comuns/ScrollToTop.jsx';

function App() {
  return (
    <Router basename="/academia-do-arquiteto-de-software">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/extensao" element={<Extensao />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/quemsoueu" element={<QuemSouEu />} />

        {/* outras rotas */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;