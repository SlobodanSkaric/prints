<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TicketsStoreRequest;
use App\Models\PriModel;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TicketsController extends Controller
{
    public function index(){
        $tickets = Ticket::with("user")->get();

        return response()->json($tickets,200);
    }

    public function store(TicketsStoreRequest $request){

        $validation = $request->validated();
        
        $pri_el = [];

        DB::beginTransaction();

       try{
            $tickets = new Ticket();
            $tickets->tickets_number = $validation["tickets_number"];
            $tickets->pri_348810 = isset($validation["pri_348810"]) ? $validation["pri_348810"]: null;
            $tickets->pri_327120 = isset($validation["pri_327120"]) ? $validation["pri_327120"] : null;
            $tickets->pri_521342 = isset($validation["pri_521342"]) ? $validation["pri_521342"] : null;
            if(isset($validation["pri_348810"])){
                $pri_el["pri_348810"] = $validation["pri_348810"];
            }

            if(isset($validation["pri_327120"])){
                $pri_el["pri_327120"] = $validation["pri_327120"];
            }

            if(isset($validation["pri_521342"])){
                $pri_el["pri_521342"] = $validation["pri_521342"];
            }
            $tickets->commnets = $validation["commnets"];
            $tickets->description =$validation["description"];
            $tickets->user_id = Auth::id();

            $tickets->save();

            $pri = PriModel::first();

            if($pri){
                $pri->pri_348810 = isset($validation["pri_348810"]) ? $pri->pri_348810 - $validation["pri_348810"] : $pri->pri_348810;
                $pri->pri_327120 = isset($validation["pri_327120"]) ? $pri->pri_327120 - $validation["pri_327120"] : $pri->pri_327120;
                $pri->pri_521342 = isset($validation["pri_521342"]) ? $pri->pri_521342 - $validation["pri_521342"] : $pri->pri_521342;

                $pri->save();
             }
            DB::commit();

            return response()->json(['message' => 'Ticket created successfully', 'ticket' => $tickets, "pri" => $pri_el], 201);
        }catch(QueryException $e){
            
            DB::rollBack();
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
        
        $all = Ticket::with("user")->get();
        
        
        if($tickets->exit){
            return response()->json(["messages" => "This ticket is passed",  "tickets" =>  $all],200);
        }

        $tickets->exit = $request->input("exit");
        $tickets->save();


       

        return response()->json(["message" => "Ticket update", "tickets" =>  $all], 200);
    }
}
