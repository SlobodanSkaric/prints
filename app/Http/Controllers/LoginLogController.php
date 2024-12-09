<?php

namespace App\Http\Controllers;

use App\Models\LoginLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginLogController extends Controller
{
    public static function loginLog(Request $request){
        $user = Auth::user();
        $userAgent = $request->header("User-Agent");

        $browser = self::getBrowser($userAgent);
        $os = self::getOs($userAgent);

        $createLog = LoginLog::create([
            "user_id" => $user->id,
            "ip_address" => $request->ip(),
            "browser" => $browser,
            "os" => $os,
            "user_agent" => $userAgent,
            "logged_in_at" => now()
        ]);

        if($createLog) return true;

    }

    private static function getBrowser($userAgent){
        if(strpos($userAgent, "Firefox") !== false) return "Firefox";
        if(strpos($userAgent, "Chrome") !== false) return "Chrome";
        if(strpos($userAgent, "Safari") !== false) return "Safari";
        if(strpos($userAgent, "Chrome") !== false) return "Edge";
        if(strpos($userAgent, "MSIE") !== false) return "MSIE";
        return "Unknown";
    }

    private static function getOs($userAgent){
        if(strpos($userAgent, "Windows") !== false) return "Windows";
        if(strpos($userAgent, "Macintosh") !== false) return "Macintosh";
        if(strpos($userAgent, "Linux") !== false) return "Linux";
        if(strpos($userAgent, "Android") !== false) return "Android";
        if(strpos($userAgent, "iPhone") !== false) return "iPhone";
        return "Unknown";
    }
}
