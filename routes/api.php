<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PriCotroller;
use App\Http\Controllers\Api\TicketsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    Route::get("/user/{id}", [UserController::class, "show"]);

    Route::get("/tickets", [TicketsController::class, "index"]);
    Route::get("/onetickets/{id}", [TicketsController::class, "getOne"]);
    Route::put("/updatetickets/{id}", [TicketsController::class, "ticketsUpdate"]);
    Route::post("/ticketsstore", [TicketsController::class, "store"]);

    Route::get("/pri", [PriCotroller::class, "index"]);
    Route::post("/pristore", [PriCotroller::class, "update"]);

    Route::post("/users/addprofilepictures", [UserController::class, "addProfilePicture"]);

    Route::get("/user/getinfo/{id}", [UserController::class, "show"]);
    Route::post("/user/update/{id}", [UserController::class, "update"]);
});

Route::post("/signup", [AuthController::class, "registration"]);
Route::post("/login", [AuthController::class, "login"]);
