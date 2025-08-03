import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Room {
    id: number;
    name: string;
    type: string;
    description: string;
    price_monthly: number;
    price_daily?: number;
    capacity: number;
    facilities: string[];
    gallery: string[];
    is_available: boolean;
    floor?: number;
    size?: number;
}

interface Promotion {
    id: number;
    title: string;
    description: string;
    image?: string;
    discount_percentage?: number;
    discount_amount?: number;
    start_date: string;
    end_date: string;
}

interface Testimonial {
    id: number;
    name: string;
    occupation?: string;
    content: string;
    rating: number;
    photo?: string;
}

interface GalleryItem {
    id: number;
    title: string;
    description?: string;
    image_path: string;
    category: string;
}

interface Facility {
    id: number;
    name: string;
    description?: string;
    category: string;
    icon?: string;
}

interface Props {
    featuredRooms: Room[];
    activePromotions: Promotion[];
    featuredTestimonials: Testimonial[];
    featuredGallery: GalleryItem[];
    generalFacilities: Facility[];
    [key: string]: unknown;
}

export default function Welcome({
    featuredRooms,
    activePromotions,
    featuredTestimonials,
    featuredGallery,
    generalFacilities,
}: Props) {
    const handleBookingClick = () => {
        router.get(route('booking.create'));
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <>
            <Head title="ANTIEQ WISMA KOST - Modern Living Experience" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <h1 className="text-2xl font-bold text-blue-600">🏠 ANTIEQ WISMA KOST</h1>
                            </div>
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href={route('rooms.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Rooms
                                </Link>
                                <Link href={route('facilities.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Facilities
                                </Link>
                                <Link href={route('gallery.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Gallery
                                </Link>
                                <Link href={route('location')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Location
                                </Link>
                                <Link href={route('community')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Community
                                </Link>
                                <Button onClick={handleBookingClick} className="bg-blue-600 hover:bg-blue-700">
                                    📅 Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative py-20 px-4 text-center">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                ✨ ANTIEQ WISMA KOST
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90">
                                🌟 Modern • Aesthetic • Instagrammable Living Experience
                            </p>
                            <p className="text-lg mb-10 max-w-3xl mx-auto opacity-85">
                                Experience luxury kost living with 3D aesthetic design, premium facilities, 
                                and a vibrant community of Antieqkers. Your perfect home away from home! 🏡
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    onClick={handleBookingClick}
                                    size="lg" 
                                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                                >
                                    🎯 Check Availability
                                </Button>
                                <Button 
                                    onClick={() => router.get(route('rooms.index'))}
                                    size="lg" 
                                    variant="outline" 
                                    className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                                >
                                    👀 View Rooms
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Active Promotions */}
                {activePromotions.length > 0 && (
                    <section className="py-16 px-4">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                                🎉 Special Promotions
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {activePromotions.map((promotion) => (
                                    <Card key={promotion.id} className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                                            <CardTitle className="text-xl">🔥 {promotion.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <p className="text-gray-600 mb-4">{promotion.description}</p>
                                            {promotion.discount_percentage && (
                                                <Badge className="bg-red-100 text-red-800 text-lg px-3 py-1">
                                                    -{promotion.discount_percentage}% OFF
                                                </Badge>
                                            )}
                                            {promotion.discount_amount && (
                                                <Badge className="bg-red-100 text-red-800 text-lg px-3 py-1">
                                                    Save {formatPrice(promotion.discount_amount)}
                                                </Badge>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Featured Rooms */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            🏠 Featured Rooms
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredRooms.slice(0, 6).map((room) => (
                                <Card key={room.id} className="shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                                        <span className="text-6xl">🏠</span>
                                    </div>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl">{room.name}</CardTitle>
                                            <Badge variant="outline">{room.type}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {formatPrice(room.price_monthly)}/month
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                👥 {room.capacity} person{room.capacity > 1 ? 's' : ''}
                                            </span>
                                        </div>
                                        <div className="flex gap-2 mb-4">
                                            {room.facilities.slice(0, 3).map((facility, index) => (
                                                <Badge key={index} variant="secondary" className="text-xs">
                                                    {facility}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button 
                                            onClick={() => router.get(route('rooms.show', room.id))}
                                            className="w-full"
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button 
                                onClick={() => router.get(route('rooms.index'))}
                                size="lg" 
                                variant="outline"
                                className="px-8"
                            >
                                View All Rooms 🏡
                            </Button>
                        </div>
                    </div>
                </section>

                {/* General Facilities */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            ⚡ Premium Facilities
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {generalFacilities.map((facility) => (
                                <Card key={facility.id} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-4">
                                        {facility.icon || '🏢'}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{facility.name}</h3>
                                    <p className="text-gray-600 text-sm">{facility.description}</p>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button 
                                onClick={() => router.get(route('facilities.index'))}
                                size="lg" 
                                variant="outline"
                                className="px-8"
                            >
                                View All Facilities ⚡
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                {featuredTestimonials.length > 0 && (
                    <section className="py-16 px-4 bg-white">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                                💬 What Antieqkers Say
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredTestimonials.map((testimonial) => (
                                    <Card key={testimonial.id} className="shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                                    {testimonial.occupation && (
                                                        <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                                                        ⭐
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 italic">"{testimonial.content}"</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Gallery Preview */}
                {featuredGallery.length > 0 && (
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                                📸 Gallery Preview
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {featuredGallery.slice(0, 8).map((item) => (
                                    <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
                                        <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                            <span className="text-4xl">📷</span>
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                            <p className="text-white opacity-0 group-hover:opacity-100 text-center p-4 transition-opacity duration-300">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-12">
                                <Button 
                                    onClick={() => router.get(route('gallery.index'))}
                                    size="lg" 
                                    variant="outline"
                                    className="px-8"
                                >
                                    View Full Gallery 📸
                                </Button>
                            </div>
                        </div>
                    </section>
                )}

                {/* Call to Action */}
                <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            🚀 Ready to Join Antieqkers Community?
                        </h2>
                        <p className="text-xl mb-10 opacity-90">
                            Experience modern living with aesthetic design, premium facilities, and vibrant community life!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={handleBookingClick}
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                🎯 Book Your Room Now
                            </Button>
                            <Button 
                                onClick={() => router.get(route('community'))}
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                            >
                                🤝 Join Community
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-12 px-4 bg-gray-800 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="font-bold text-lg mb-4">🏠 ANTIEQ WISMA KOST</h3>
                                <p className="text-gray-300 text-sm">
                                    Modern aesthetic kost with premium facilities and vibrant community.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <div className="space-y-2 text-sm">
                                    <Link href={route('rooms.index')} className="block text-gray-300 hover:text-white transition-colors">
                                        Rooms & Pricing
                                    </Link>
                                    <Link href={route('facilities.index')} className="block text-gray-300 hover:text-white transition-colors">
                                        Facilities
                                    </Link>
                                    <Link href={route('gallery.index')} className="block text-gray-300 hover:text-white transition-colors">
                                        Photo Gallery
                                    </Link>
                                    <Link href={route('location')} className="block text-gray-300 hover:text-white transition-colors">
                                        Location & Map
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Community</h4>
                                <div className="space-y-2 text-sm">
                                    <Link href={route('community')} className="block text-gray-300 hover:text-white transition-colors">
                                        Antieqkers Community
                                    </Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                                        Events & Activities
                                    </Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                                        Testimonials
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Information</h4>
                                <div className="space-y-2 text-sm">
                                    <Link href={route('investor')} className="block text-gray-300 hover:text-white transition-colors">
                                        For Investors
                                    </Link>
                                    <Link href={route('projects')} className="block text-gray-300 hover:text-white transition-colors">
                                        Our Projects
                                    </Link>
                                    <Link href={route('management')} className="block text-gray-300 hover:text-white transition-colors">
                                        Kost Management
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                            <p>&copy; 2024 ANTIEQ WISMA KOST. All rights reserved. Made with ❤️ for Antieqkers Community</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}