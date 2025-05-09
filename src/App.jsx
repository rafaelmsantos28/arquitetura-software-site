import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/comuns/Header';
import Footer from './components/comuns/Footer';

import Home from './pages/Home.jsx';
import Ensino from './pages/Ensino.jsx';
import Pesquisa from './pages/Pesquisa.jsx';
import Extensao from './pages/Extensao.jsx';
import SobreNos from './pages/SobreNos.jsx';
import Orientador from './pages/Orientador.jsx';

function App() {
  return (
    <Router basename="/arquitetura-software-site">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ensino" element={<Ensino />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/extensao" element={<Extensao />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/orientador" element={<Orientador />} />
        {/* outras rotas */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
