<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\LoginLogController;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $credencials = $request->validated();

        if(!Auth::attempt($credencials)){
            return response([
                "message" => "Provided email or password is not valid"
            ], 422);
        }
        
        $user = Auth::user();
        
        $token = $user->createToken("main")->plainTextToken;
        $log = LoginLogController::loginLog($request);
        if($log === false) return response(["messages" => "Bad log"], 401);
        
        return response(compact("user", "token"));
    }

    public function registration(RegistrationRequest $request){
        $credencials = $request->validated();

        if($credencials["profile_images"]){
            $path = $credencials["profile_images"]->store("profile_images", "public");
        }

        $user = User::create([
            "name" => $credencials["name"],
            "email" => $credencials["email"],
            "password" => bcrypt($credencials["password"]),
            "profile_images" => $path
        ]);

        $token = $user->createToken("main")->plainTextToken;

        return response(compact("user", "token"));
    }
}
