<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $rooms = [
            [
                'name' => 'Deluxe Single Room',
                'type' => 'Single',
                'description' => 'Spacious single room with modern amenities, perfect for students and young professionals. Features aesthetic interior design with Instagram-worthy spots.',
                'price_monthly' => 2500000,
                'price_daily' => 150000,
                'capacity' => 1,
                'facilities' => ['AC', 'WiFi', 'Private Bathroom', 'Study Desk', 'Wardrobe', 'Mini Fridge'],
                'gallery' => ['room1-1.jpg', 'room1-2.jpg', 'room1-3.jpg'],
                'is_available' => true,
                'floor' => 2,
                'size' => 20,
            ],
            [
                'name' => 'Premium Single Room',
                'type' => 'Single',
                'description' => 'Luxury single room with premium furnishing and city view. Perfect for professionals who value comfort and style.',
                'price_monthly' => 3200000,
                'price_daily' => 180000,
                'capacity' => 1,
                'facilities' => ['AC', 'WiFi', 'Private Bathroom', 'Study Desk', 'Walk-in Closet', 'Mini Fridge', 'TV', 'Balcony'],
                'gallery' => ['room2-1.jpg', 'room2-2.jpg', 'room2-3.jpg'],
                'is_available' => true,
                'floor' => 3,
                'size' => 25,
            ],
            [
                'name' => 'Cozy Twin Room',
                'type' => 'Twin',
                'description' => 'Comfortable twin room designed for sharing with friends or colleagues. Features modern amenities and aesthetic design.',
                'price_monthly' => 2000000,
                'price_daily' => 120000,
                'capacity' => 2,
                'facilities' => ['AC', 'WiFi', 'Shared Bathroom', 'Study Desks', 'Wardrobes', 'Mini Fridge'],
                'gallery' => ['room3-1.jpg', 'room3-2.jpg', 'room3-3.jpg'],
                'is_available' => true,
                'floor' => 2,
                'size' => 18,
            ],
            [
                'name' => 'Luxury Suite',
                'type' => 'Suite',
                'description' => 'Spacious suite with separate living area, perfect for long-term stays. Features premium amenities and stunning city views.',
                'price_monthly' => 4500000,
                'price_daily' => 250000,
                'capacity' => 1,
                'facilities' => ['AC', 'WiFi', 'Private Bathroom', 'Living Area', 'Kitchenette', 'Study Desk', 'Walk-in Closet', 'TV', 'Balcony', 'City View'],
                'gallery' => ['room4-1.jpg', 'room4-2.jpg', 'room4-3.jpg'],
                'is_available' => true,
                'floor' => 4,
                'size' => 35,
            ],
            [
                'name' => 'Studio Apartment',
                'type' => 'Studio',
                'description' => 'Modern studio apartment with complete facilities. Ideal for professionals who need their own space with full amenities.',
                'price_monthly' => 3800000,
                'price_daily' => 220000,
                'capacity' => 1,
                'facilities' => ['AC', 'WiFi', 'Private Bathroom', 'Full Kitchen', 'Living Area', 'Study Desk', 'Wardrobe', 'TV', 'Washing Machine'],
                'gallery' => ['room5-1.jpg', 'room5-2.jpg', 'room5-3.jpg'],
                'is_available' => true,
                'floor' => 3,
                'size' => 30,
            ],
            [
                'name' => 'Budget Single Room',
                'type' => 'Single',
                'description' => 'Affordable single room with essential amenities. Perfect for students looking for quality accommodation at a reasonable price.',
                'price_monthly' => 1800000,
                'price_daily' => 100000,
                'capacity' => 1,
                'facilities' => ['AC', 'WiFi', 'Shared Bathroom', 'Study Desk', 'Wardrobe'],
                'gallery' => ['room6-1.jpg', 'room6-2.jpg'],
                'is_available' => false,
                'floor' => 1,
                'size' => 15,
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}