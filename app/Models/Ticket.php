<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = ["tickets_number", "348810", "327120", "521342", "commnets", "description", "exit", "user_id"];

    protected $casts = [
        'created_at' => 'datetime:d-m-y H:i',
        'updated_at' => 'datetime:d-m-y H:i',
        'exit'       => 'datetime:d-m-y H:i',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
