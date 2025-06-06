import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Obtém a URL atual
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que a URL mudar, volta o scroll para o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // ou 'auto' se quiser sem animação
    });
  }, [pathname]);
  // Componente não renderiza nada na tela
  return null;
}

export default ScrollToTop;
