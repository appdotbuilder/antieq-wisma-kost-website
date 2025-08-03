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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->text('description');
            $table->decimal('price_monthly', 10, 2);
            $table->decimal('price_daily', 10, 2)->nullable();
            $table->integer('capacity')->default(1);
            $table->json('facilities')->nullable();
            $table->json('gallery')->nullable();
            $table->boolean('is_available')->default(true);
            $table->integer('floor')->nullable();
            $table->decimal('size', 8, 2)->nullable()->comment('Room size in square meters');
            $table->timestamps();
            
            $table->index('type');
            $table->index('is_available');
            $table->index('price_monthly');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};