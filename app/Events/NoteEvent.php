<?php

namespace App\Events;

use App\Models\Notes;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
class NoteEvent implements ShouldBroadcast
{
    use Dispatchable,InteractsWithSockets, SerializesModels;

    public $notess;
   
    public function __construct(Notes $notes)
    {
        
        $this->notess = $notes;
    }

    
    public function broadcastOn()
    {
        return new Channel('notess');
    }

    public function broadcastAs()
    {
        return 'note.created';
    }
}
