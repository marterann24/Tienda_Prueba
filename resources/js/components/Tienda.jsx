import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tienda() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Bienvenido a la tienda online</h1>
            <button
                onClick={() => navigate('/catalogo')}
                style={{
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Ir al catálogo
            </button>
        </div>
    );
}
