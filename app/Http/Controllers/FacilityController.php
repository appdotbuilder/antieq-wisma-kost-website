<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of the facilities.
     */
    public function index()
    {
        try {
            $facilities = Facility::active()
                ->orderBy('category')
                ->orderBy('sort_order')
                ->get()
                ->groupBy('category');
        } catch (\Exception $e) {
            $facilities = collect();
        }

        return Inertia::render('facilities/index', [
            'facilities' => $facilities,
        ]);
    }
}