<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the rooms.
     */
    public function index()
    {
        try {
            $rooms = Room::available()
                ->orderBy('type')
                ->orderBy('price_monthly')
                ->get();

            $roomTypes = Room::select('type')
                ->distinct()
                ->orderBy('type')
                ->pluck('type');
        } catch (\Exception $e) {
            $rooms = collect();
            $roomTypes = collect();
        }

        return Inertia::render('rooms/index', [
            'rooms' => $rooms,
            'roomTypes' => $roomTypes,
        ]);
    }

    /**
     * Display the specified room.
     */
    public function show(Room $room)
    {
        $similarRooms = Room::available()
            ->where('type', $room->type)
            ->where('id', '!=', $room->id)
            ->limit(3)
            ->get();

        return Inertia::render('rooms/show', [
            'room' => $room,
            'similarRooms' => $similarRooms,
        ]);
    }
}