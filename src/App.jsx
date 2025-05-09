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
    <Router>
      <Header />
      <Routes>
        <Route path="/arquitetura-software-site/home" element={<Home />} />
        <Route path="/arquitetura-software-site/ensino" element={<Ensino />} />
        <Route path="/arquitetura-software-site/pesquisa" element={<Pesquisa />} />
        <Route path="/arquitetura-software-site/extensao" element={<Extensao />} />
        <Route path="/arquitetura-software-site/sobrenos" element={<SobreNos />} />
        <Route path="/arquitetura-software-site/orientador" element={<Orientador />} />
        {/* outras rotas */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
