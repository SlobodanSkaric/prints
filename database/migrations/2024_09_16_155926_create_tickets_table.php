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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string("tickets_number")->unique();
            $table->integer("pri_348810")->nullable();
            $table->integer("pri_327120")->nullable();
            $table->integer("pri_521342")->nullable();
            $table->string("commnets")->nullable();
            $table->string("description")->nullable();
            $table->timestamp("exit")->nullable();
            $table->foreignId("user_id")->constrained("users")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
