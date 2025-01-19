<?php

use App\Events\NoteEvent;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\NotesController;
use App\Http\Controllers\Api\PriCotroller;
use App\Http\Controllers\Api\TicketsController;
use App\Http\Controllers\UserController;
use App\Models\Notes;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    Route::get("/user/{id}", [UserController::class, "show"])->where("id", "[0-9]+");

    Route::get("/tickets", [TicketsController::class, "index"]);
    Route::get("/onetickets/{id}", [TicketsController::class, "getOne"]);
    Route::put("/updatetickets/{id}", [TicketsController::class, "ticketsUpdate"]);
    Route::post("/ticketsstore", [TicketsController::class, "store"]);

    Route::get("/pri", [PriCotroller::class, "index"]);
    Route::post("/pristore", [PriCotroller::class, "update"]);

    Route::post("/users/addprofilepictures", [UserController::class, "addProfilePicture"]);

    Route::get("/user/getinfo/{id}", [UserController::class, "show"]);
    Route::post("/user/update/{id}", [UserController::class, "update"]);

    Route::get("/user/getnotes", [NotesController::class, "index"]);
    Route::post("/user/addnotes" , [NotesController::class, "store"]);




    Route::get("/notess", function(){
        $note = Notes::first();
        broadcast(new NoteEvent($note));
        return "Broadcast is work";
    });
});

Route::post("/signup", [AuthController::class, "registration"]);
Route::post("/login", [AuthController::class, "login"]);
