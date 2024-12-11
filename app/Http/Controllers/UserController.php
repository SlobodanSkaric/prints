<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);

        if(!$user){
            return response()->json(["message" => "User not fond"], 404);
        }

        return new UserResource($user);
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

    public function addProfilePicture(Request $request){

        $request->validate(["profile_images" => "required|image|mimes:jpeg,png,jpg,gif"]);

        $user = Auth::user();

        if($user->profile_images){
            Storage::delete($user->profile_images);
        }

        $path = $request->file("profile_images")->store("profile_images", "public");

        $user->profile_images = $path;
        $user->save();

        return response()->json(["messages" => "Pictures add success"], 200);
    }
}
