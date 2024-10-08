<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TicketsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get("/user/{id}", [UserController::class, "show"]);

    Route::get("/tickets", [TicketsController::class, "index"]);
    Route::get("/onetickets/{id}", [TicketsController::class, "getOne"]);
    Route::put("/updatetickets/{id}", [TicketsController::class, "ticketsUpdate"]);
    Route::post("/ticketsstore", [TicketsController::class, "store"]);
});

Route::post("/signup", [AuthController::class, "registration"]);
Route::post("/login", [AuthController::class, "login"]);
