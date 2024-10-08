<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TicketsStoreRequest;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketsController extends Controller
{
    public function index(){
        $tickets = Ticket::with("user")->get();

        return response()->json($tickets,200);
    }

    public function store(TicketsStoreRequest $request){

        $validation = $request->validated();
        $user = Auth::user();

       try{
            $tickets = new Ticket();
            $tickets->tickets_number = $validation["tickets_number"];
            $tickets->pri_348810 = isset($validation["pri_348810"]) ? $validation["pri_348810"]: null;
            $tickets->pri_327120 = isset($validation["pri_327120"]) ? $validation["pri_327120"] : null;
            $tickets->pri_521342 = isset($validation["pri_521342"]) ? $validation["pri_521342"] : null;
            $tickets->commnets = $validation["commnets"];
            $tickets->description =$validation["description"];
            $tickets->user_id = Auth::id();

            $tickets->save();

            return response()->json(['message' => 'Ticket created successfully', 'ticket' => $tickets], 201);
        }catch(QueryException $e){
            if($e->errorInfo[1] == 1062){
                return response()->json(["message" => "This ticket is existe"], 422);
            }

            return response()->json(['error' => 'Something went wrong.'], 500);
        }


    }

    function getOne($id){
        $tickets = Ticket::find($id);

        return response()->json($tickets, 200);
    }

    function ticketsUpdate(Request $request,$id){
        $tickets = Ticket::find($id);

        if(!$tickets){
            return response()->json(["messages" => "Tjis ticket not existes"], 404);
        }

        $tickets->exit = $request->input("exit");
        $tickets->save();


        $all = Ticket::with("user")->get();

        return response()->json(["message" => "Ticket update", "tickets" =>  $all], 200);
    }
}
