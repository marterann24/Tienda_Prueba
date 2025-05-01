import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
    const navigate = useNavigate();

    return ( 
        <div className="container">
            <h1>Catálogo de productos</h1>
            <button onClick={() => navigate('/tienda')}>
                Volver a tienda
            </button>
        </div>
    );
}
