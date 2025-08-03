<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Sarah Putri',
                'occupation' => 'UI Student',
                'content' => 'Living at ANTIEQ WISMA KOST has been an amazing experience! The community is so welcoming and the facilities are top-notch. I\'ve made lifelong friends here and the Instagram-worthy spaces make every photo perfect!',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Michael Chen',
                'occupation' => 'Software Developer',
                'content' => 'The location is perfect for my daily commute, and the high-speed WiFi is essential for my work. The community events helped me network and find new opportunities. Highly recommended for young professionals!',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Andini Rahma',
                'occupation' => 'Marketing Specialist',
                'content' => 'I love the aesthetic design of this kost! Every corner is Instagram-worthy. The facilities are modern and well-maintained. The community activities are fun and I\'ve learned so much from other residents.',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'David Lim',
                'occupation' => 'Graphic Designer',
                'content' => 'The creative atmosphere here is inspiring! As a designer, I appreciate the aesthetic details everywhere. The co-working space is perfect for freelance work, and the community is very supportive.',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Rizky Pratama',
                'occupation' => 'Startup Founder',
                'content' => 'ANTIEQ WISMA KOST provided the perfect environment to launch my startup. The networking opportunities with other entrepreneurs and professionals are invaluable. The facilities support my busy lifestyle perfectly.',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Amanda Silva',
                'occupation' => 'Content Creator',
                'content' => 'As a content creator, having photogenic spaces is crucial for my work. This kost exceeds expectations! The lighting is perfect, the design is aesthetic, and the community is very supportive of creative endeavors.',
                'rating' => 5,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Faisal Rahman',
                'occupation' => 'Data Analyst',
                'content' => 'The study room and quiet environment help me focus on my work. The security is excellent and I feel safe here. The monthly community dinners are a great way to unwind and meet new people.',
                'rating' => 5,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'name' => 'Lestari Dewi',
                'occupation' => 'Teacher',
                'content' => 'Living here feels like having a second family. Everyone is so friendly and helpful. The facilities are clean and modern. I especially love the shared kitchen where we cook and eat together.',
                'rating' => 5,
                'is_featured' => false,
                'is_active' => true,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}