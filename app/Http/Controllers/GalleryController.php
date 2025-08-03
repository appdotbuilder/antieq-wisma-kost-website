<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the gallery.
     */
    public function index()
    {
        try {
            $gallery = Gallery::orderBy('sort_order')
                ->orderBy('created_at', 'desc')
                ->get()
                ->groupBy('category');

            $categories = Gallery::select('category')
                ->distinct()
                ->orderBy('category')
                ->pluck('category');
        } catch (\Exception $e) {
            $gallery = collect();
            $categories = collect();
        }

        return Inertia::render('gallery/index', [
            'gallery' => $gallery,
            'categories' => $categories,
        ]);
    }
}