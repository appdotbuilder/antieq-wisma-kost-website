<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Models\Booking;
use App\Models\Room;
use Inertia\Inertia;

class BookingController extends Controller
{
    /**
     * Show the form for creating a new booking.
     */
    public function create()
    {
        try {
            $availableRooms = Room::available()
                ->orderBy('type')
                ->orderBy('price_monthly')
                ->get();
        } catch (\Exception $e) {
            $availableRooms = collect();
        }

        return Inertia::render('booking/create', [
            'availableRooms' => $availableRooms,
        ]);
    }

    /**
     * Store a newly created booking.
     */
    public function store(StoreBookingRequest $request)
    {
        $room = Room::findOrFail($request->room_id);
        
        // Calculate total amount based on booking type
        $totalAmount = $request->booking_type === 'monthly' 
            ? $room->price_monthly 
            : $room->price_daily;

        $booking = Booking::create([
            'room_id' => $request->room_id,
            'guest_name' => $request->guest_name,
            'guest_email' => $request->guest_email,
            'guest_phone' => $request->guest_phone,
            'guest_id_number' => $request->guest_id_number,
            'check_in_date' => $request->check_in_date,
            'check_out_date' => $request->check_out_date,
            'booking_type' => $request->booking_type,
            'total_amount' => $totalAmount,
            'special_requests' => $request->special_requests,
            'status' => 'pending',
        ]);

        return Inertia::render('booking/success', [
            'booking' => $booking,
            'room' => $room,
        ]);
    }
}