<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TiendaController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/tienda', [TiendaController::class, 'index']);

Route::get('/tienda', function () {
    return view('tienda');
});

Route::get('/contacto', function () {
    return view('contacto');
});

