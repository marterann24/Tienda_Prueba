import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './components/Tienda';
import Catalogo from './components/Catalogo';
import '../css/tienda.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/home" element={<welcome.blade.php/>}/> 
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
