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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId("users_id")->constrained("users")->onDelete("cascade");
            $table->text("notes");
            $table->boolean("priority")->default(0)->comment("0 = Low, 1 = High");
            $table->boolean("visibility")->default("1")->comment("0 = Hiden, 1 = Visible");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
