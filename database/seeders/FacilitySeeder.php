<?php

namespace Database\Seeders;

use App\Models\Facility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacilitySeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $facilities = [
            // General Facilities
            [
                'name' => '24/7 Security',
                'description' => 'Round-the-clock security with CCTV surveillance and security guards',
                'category' => 'general',
                'icon' => '🔒',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'High-Speed WiFi',
                'description' => 'Fiber optic internet connection throughout the building',
                'category' => 'general',
                'icon' => '📶',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Elevator Access',
                'description' => 'Modern elevators for easy access to all floors',
                'category' => 'general',
                'icon' => '🛗',
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Reception Desk',
                'description' => '24/7 reception service for assistance and inquiries',
                'category' => 'general',
                'icon' => '🏨',
                'is_active' => true,
                'sort_order' => 4,
            ],
            
            // Kitchen Facilities
            [
                'name' => 'Shared Kitchen',
                'description' => 'Fully equipped shared kitchen with modern appliances',
                'category' => 'kitchen',
                'icon' => '🍳',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Dining Area',
                'description' => 'Comfortable dining space for communal meals',
                'category' => 'kitchen',
                'icon' => '🍽️',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Refrigerators',
                'description' => 'Multiple large refrigerators for food storage',
                'category' => 'kitchen',
                'icon' => '❄️',
                'is_active' => true,
                'sort_order' => 3,
            ],
            
            // Laundry Facilities
            [
                'name' => 'Laundry Room',
                'description' => 'Self-service laundry with washing machines and dryers',
                'category' => 'laundry',
                'icon' => '👕',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Drying Area',
                'description' => 'Covered outdoor area for air-drying clothes',
                'category' => 'laundry',
                'icon' => '🌪️',
                'is_active' => true,
                'sort_order' => 2,
            ],
            
            // Recreation Facilities
            [
                'name' => 'Common Lounge',
                'description' => 'Comfortable lounge area for relaxation and socializing',
                'category' => 'recreation',
                'icon' => '🛋️',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Game Room',
                'description' => 'Entertainment room with games and TV',
                'category' => 'recreation',
                'icon' => '🎮',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Study Room',
                'description' => 'Quiet study space for focused work and learning',
                'category' => 'recreation',
                'icon' => '📚',
                'is_active' => true,
                'sort_order' => 3,
            ],
            
            // Parking Facilities
            [
                'name' => 'Motorcycle Parking',
                'description' => 'Secure covered parking for motorcycles',
                'category' => 'parking',
                'icon' => '🏍️',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Car Parking',
                'description' => 'Limited car parking spaces available',
                'category' => 'parking',
                'icon' => '🚗',
                'is_active' => true,
                'sort_order' => 2,
            ],
            
            // Cleaning Services
            [
                'name' => 'Daily Cleaning',
                'description' => 'Daily cleaning of common areas and facilities',
                'category' => 'cleaning',
                'icon' => '🧹',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Waste Management',
                'description' => 'Regular waste collection and disposal service',
                'category' => 'cleaning',
                'icon' => '🗑️',
                'is_active' => true,
                'sort_order' => 2,
            ],
        ];

        foreach ($facilities as $facility) {
            Facility::create($facility);
        }
    }
}