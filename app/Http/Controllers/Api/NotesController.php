<?php

namespace App\Http\Controllers\Api;

use App\Events\NoteEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\NotesRequest;
use App\Models\Notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Laravel\Prompts\Note;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notes = Notes::with("users")->get();
        return response()->json($notes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NotesRequest $request)
    {
        $credencilas = $request->validated();
        $users = Auth::id();

        if(!$users){
            return response()->json(["messages" => "This is users is not authentication"]);
        }

        $notes = new Notes();

        $notes->users_id = $users;
        $notes->notes =  Crypt::encrypt($credencilas["notes"]);
        $credencilas["priority"] = null ? $notes->priority = $credencilas["priority"] = 0 : $notes->priority = $credencilas["priority"] = 1 ;
        $credencilas["visibility"] = null ? $notes->visibility = $credencilas["visibility"] = 0 : $notes->visibility = $credencilas["visibility"] = 1;

        
        $saveNotes = $notes->save(); 
        
        Log::info('Note object before broadcasting', ['notes' => $notes]);

        if(!$saveNotes){
            return response()->json(["messages" => "Nostes is not save"], 404);           
        }
        
        Log::info('Broadcast config:', [
            'driver' => config('broadcasting.default'),
            'pusher' => config('broadcasting.connections.pusher'),
        ]);

        broadcast(new NoteEvent($notes))->toOthers();   
        
        return response()->json(["messages" => "Nostes is  save", "data" => $notes], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
