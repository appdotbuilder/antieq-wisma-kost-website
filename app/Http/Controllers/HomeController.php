<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use App\Models\Gallery;
use App\Models\Promotion;
use App\Models\Room;
use App\Models\Testimonial;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        // Gracefully handle if tables don't exist yet
        try {
            $featuredRooms = Room::available()
                ->orderBy('created_at', 'desc')
                ->limit(6)
                ->get();
        } catch (\Exception $e) {
            $featuredRooms = collect();
        }

        try {
            $activePromotions = Promotion::active()
                ->current()
                ->orderBy('created_at', 'desc')
                ->limit(3)
                ->get();
        } catch (\Exception $e) {
            $activePromotions = collect();
        }

        try {
            $featuredTestimonials = Testimonial::active()
                ->featured()
                ->orderBy('created_at', 'desc')
                ->limit(6)
                ->get();
        } catch (\Exception $e) {
            $featuredTestimonials = collect();
        }

        try {
            $featuredGallery = Gallery::featured()
                ->orderBy('sort_order')
                ->limit(8)
                ->get();
        } catch (\Exception $e) {
            $featuredGallery = collect();
        }

        try {
            $generalFacilities = Facility::active()
                ->byCategory('general')
                ->orderBy('sort_order')
                ->limit(8)
                ->get();
        } catch (\Exception $e) {
            $generalFacilities = collect();
        }

        return Inertia::render('welcome', [
            'featuredRooms' => $featuredRooms,
            'activePromotions' => $activePromotions,
            'featuredTestimonials' => $featuredTestimonials,
            'featuredGallery' => $featuredGallery,
            'generalFacilities' => $generalFacilities,
        ]);
    }
}