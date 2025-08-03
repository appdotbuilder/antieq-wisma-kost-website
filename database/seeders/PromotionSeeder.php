<?php

namespace Database\Seeders;

use App\Models\Promotion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PromotionSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $promotions = [
            [
                'title' => 'New Year Special Offer',
                'description' => 'Start your new year right! Get 20% off your first month rent when you book any room in January. Perfect opportunity to join the Antieqkers community!',
                'discount_percentage' => 20.00,
                'start_date' => '2024-01-01',
                'end_date' => '2024-01-31',
                'is_active' => true,
                'applicable_rooms' => null, // Applies to all rooms
            ],
            [
                'title' => 'Student Discount Program',
                'description' => 'Special discount for students! Show your student ID and get 15% off monthly rent. Valid for all single and twin rooms.',
                'discount_percentage' => 15.00,
                'start_date' => '2024-01-01',
                'end_date' => '2024-12-31',
                'is_active' => true,
                'applicable_rooms' => ['Single', 'Twin'],
            ],
            [
                'title' => 'Long Stay Bonus',
                'description' => 'Book for 6 months or more and save big! Get 1 month free when you commit to a 6-month stay. Perfect for professionals and long-term residents.',
                'discount_amount' => 2500000.00,
                'start_date' => '2024-01-01',
                'end_date' => '2024-06-30',
                'is_active' => true,
                'applicable_rooms' => null,
            ],
            [
                'title' => 'Refer a Friend Reward',
                'description' => 'Bring your friends to join the Antieqkers community! Refer a friend and both of you get 500,000 IDR credit towards your rent.',
                'discount_amount' => 500000.00,
                'start_date' => '2024-01-01',
                'end_date' => '2024-12-31',
                'is_active' => true,
                'applicable_rooms' => null,
            ],
        ];

        foreach ($promotions as $promotion) {
            Promotion::create($promotion);
        }
    }
}