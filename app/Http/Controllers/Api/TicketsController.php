<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    public function index(){
        $tickets = Ticket::with("user")->get();

        return response()->json($tickets);
    }
}
