<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginLog extends Model
{
    use HasFactory;

    protected $fillable  = ["user_id", "ip_address", "browser", "os", "user_agent", "logged_in_at"];
}
