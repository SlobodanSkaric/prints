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
        Schema::table('users', function (Blueprint $table) {
            $table->string("postion")->nullable();
            $table->string("skills")->nullable();
            $table->text("description")->nullable();
            $table->string("projects")->nullable();
            $table->string("github")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("postion");
            $table->dropColumn("skills");
            $table->dropColumn("description");
            $table->dropColumn("projects");
            $table->dropColumn("github");
        });
    }
};
