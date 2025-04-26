
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
    @vite(['resources/js/app.jsx', 'resources/css/tienda.css']) //  carga react
</head>
<body class="antialiased">
    <div id="app">App</div> // se muestra react
</html> 
 -->

<!-- resources/views/tienda.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Tienda</title>
</head>
<body>
    <h1>Bienvenida a tu tienda en linea </h1>

    <form action="{{ url('/contacto') }}" method="get">
        <button type="submit">Ir a Contacto</button>
    </form>
</body>
</html>

