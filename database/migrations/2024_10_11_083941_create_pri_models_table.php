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
        Schema::create('pri_models', function (Blueprint $table) {
            $table->id();
            $table->integer("pri_348810")->unsigned();
            $table->integer("pri_327120")->unsigned();
            $table->integer("pri_521342")->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pri_models');
    }
};
