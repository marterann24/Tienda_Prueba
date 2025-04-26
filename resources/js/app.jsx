/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css'; // Importar CSS

function App() {
    return (
        <div>
            <h1>¡Hola desde React con CSS puro!</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import Tienda from './components/Tienda';
import '../css/app.css'; // Importa app.css si quieres estilos generales

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Tienda />
    </React.StrictMode>
);


