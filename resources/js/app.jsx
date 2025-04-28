import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './components/Tienda';
import Catalogo from './components/Catalogo';
import '../css/tienda.css';

function App() {
  return (
    <div>
      <h1>¡Bienvenido a la tienda en prueba!</h1>
      <p>Este es un cambio temporal para verificar funcionamiento.</p>
      
      <BrowserRouter>
        <Routes>
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

