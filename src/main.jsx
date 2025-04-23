import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'


// Aqui é onde será renderizado o componente principal (App.jsx) no index.html
// Veja que ele pega o Id root lá do index.html para rederizar os componentes na página

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
