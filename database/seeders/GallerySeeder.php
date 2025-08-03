<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $gallery = [
            // Room Photos
            [
                'title' => 'Deluxe Single Room Interior',
                'description' => 'Modern aesthetic design with perfect lighting for Instagram photos',
                'image_path' => 'gallery/rooms/room1.jpg',
                'category' => 'rooms',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Premium Suite Living Area',
                'description' => 'Spacious living area with city view and modern furnishing',
                'image_path' => 'gallery/rooms/room2.jpg',
                'category' => 'rooms',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Cozy Twin Room Setup',
                'description' => 'Perfect for friends sharing accommodation with style',
                'image_path' => 'gallery/rooms/room3.jpg',
                'category' => 'rooms',
                'is_featured' => false,
                'sort_order' => 3,
            ],
            
            // Common Areas
            [
                'title' => 'Community Lounge',
                'description' => 'Comfortable space for socializing and relaxation',
                'image_path' => 'gallery/common/lounge1.jpg',
                'category' => 'common_areas',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Shared Kitchen & Dining',
                'description' => 'Modern kitchen facilities for cooking and communal dining',
                'image_path' => 'gallery/common/kitchen1.jpg',
                'category' => 'common_areas',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Study & Co-working Space',
                'description' => 'Quiet and productive environment for work and study',
                'image_path' => 'gallery/common/study1.jpg',
                'category' => 'common_areas',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            
            // Building Exterior
            [
                'title' => 'ANTIEQ WISMA KOST Facade',
                'description' => 'Modern architecture with aesthetic design elements',
                'image_path' => 'gallery/exterior/building1.jpg',
                'category' => 'exterior',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Entrance & Reception',
                'description' => 'Welcoming entrance with 24/7 reception service',
                'image_path' => 'gallery/exterior/entrance1.jpg',
                'category' => 'exterior',
                'is_featured' => false,
                'sort_order' => 2,
            ],
            
            // Facilities
            [
                'title' => 'Laundry Room',
                'description' => 'Modern laundry facilities with washing machines and dryers',
                'image_path' => 'gallery/facilities/laundry1.jpg',
                'category' => 'facilities',
                'is_featured' => false,
                'sort_order' => 1,
            ],
            [
                'title' => 'Parking Area',
                'description' => 'Secure parking space for motorcycles and cars',
                'image_path' => 'gallery/facilities/parking1.jpg',
                'category' => 'facilities',
                'is_featured' => false,
                'sort_order' => 2,
            ],
            
            // Events & Activities
            [
                'title' => 'Community Dinner Night',
                'description' => 'Monthly community gathering with delicious food and great company',
                'image_path' => 'gallery/events/dinner1.jpg',
                'category' => 'events',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Game Night Fun',
                'description' => 'Weekly game night bringing Antieqkers together',
                'image_path' => 'gallery/events/gamenight1.jpg',
                'category' => 'events',
                'is_featured' => false,
                'sort_order' => 2,
            ],
            [
                'title' => 'Birthday Celebration',
                'description' => 'Celebrating special moments with the Antieqkers family',
                'image_path' => 'gallery/events/birthday1.jpg',
                'category' => 'events',
                'is_featured' => false,
                'sort_order' => 3,
            ],
            
            // Lifestyle Photos
            [
                'title' => 'Morning Routine',
                'description' => 'Starting the day right in our beautiful spaces',
                'image_path' => 'gallery/lifestyle/morning1.jpg',
                'category' => 'lifestyle',
                'is_featured' => false,
                'sort_order' => 1,
            ],
            [
                'title' => 'Work from Kost',
                'description' => 'Productive workspace with great ambiance',
                'image_path' => 'gallery/lifestyle/work1.jpg',
                'category' => 'lifestyle',
                'is_featured' => false,
                'sort_order' => 2,
            ],
            [
                'title' => 'Evening Hangout',
                'description' => 'Relaxing evenings with fellow Antieqkers',
                'image_path' => 'gallery/lifestyle/evening1.jpg',
                'category' => 'lifestyle',
                'is_featured' => false,
                'sort_order' => 3,
            ],
        ];

        foreach ($gallery as $item) {
            Gallery::create($item);
        }
    }
}