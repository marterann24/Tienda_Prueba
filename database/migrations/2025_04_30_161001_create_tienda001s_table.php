<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tienda001', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre Producto');
            $table->integer('Costo');
            $table->string('Descripcion');
            $table->string('Color');
            $table->decimal('Peso');
            $table->string('Tipo De Productos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tienda001');
    }
};
