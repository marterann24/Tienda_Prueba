import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Catálogo de productos</h1>
            <button
                onClick={() => navigate('/tienda')}
                style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Volver a tienda
            </button>
        </div>
    );
}

