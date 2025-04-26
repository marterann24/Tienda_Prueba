import React from 'react';
import '../../css/tienda.css'; // Importamos el CSS

export default function Tienda() {
    return (
        <div className="container">
            <h1>Bienvenido a la tienda </h1>
            <button onClick={() => alert('¡Botón funcionando!')}>
                ¡Haz clic aquí!
            </button>
        </div>
    );
}
/*
../ te lleva a resources/js/

../../ te lleva a resources/

Y ahí sí encuentra el css/tienda.css
*/
