<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Homepage - main functionality
Route::get('/', [HomeController::class, 'index'])->name('home');

// Public routes
Route::get('/rooms', [RoomController::class, 'index'])->name('rooms.index');
Route::get('/rooms/{room}', [RoomController::class, 'show'])->name('rooms.show');
Route::get('/facilities', [FacilityController::class, 'index'])->name('facilities.index');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery.index');

// Booking routes
Route::get('/booking', [BookingController::class, 'create'])->name('booking.create');
Route::post('/booking', [BookingController::class, 'store'])->name('booking.store');

// Location page
Route::get('/location', function () {
    return Inertia::render('location');
})->name('location');

// Community page
Route::get('/community', function () {
    return Inertia::render('community');
})->name('community');

// Info pages
Route::get('/investor', function () {
    return Inertia::render('info/investor');
})->name('investor');

Route::get('/projects', function () {
    return Inertia::render('info/projects');
})->name('projects');

Route::get('/management', function () {
    return Inertia::render('info/management');
})->name('management');

// Dashboard (requires authentication)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
