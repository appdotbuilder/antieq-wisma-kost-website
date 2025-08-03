import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


interface Facility {
    id: number;
    name: string;
    description?: string;
    category: string;
    icon?: string;
}

interface Props {
    facilities: Record<string, Facility[]>;
    [key: string]: unknown;
}

export default function FacilitiesIndex({ facilities }: Props) {
    const categoryEmojis: Record<string, string> = {
        general: '🏢',
        room: '🛏️',
        kitchen: '🍳',
        bathroom: '🚿',
        security: '🔒',
        internet: '📶',
        parking: '🚗',
        recreation: '🎮',
        laundry: '👕',
        cleaning: '🧹',
    };

    const categoryTitles: Record<string, string> = {
        general: 'General Facilities',
        room: 'Room Amenities',
        kitchen: 'Kitchen & Dining',
        bathroom: 'Bathroom Facilities',
        security: 'Security Features',
        internet: 'Internet & Technology',
        parking: 'Parking & Transportation',
        recreation: 'Recreation & Entertainment',
        laundry: 'Laundry Services',
        cleaning: 'Cleaning Services',
    };

    return (
        <>
            <Head title="Facilities - ANTIEQ WISMA KOST" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link href={route('home')} className="flex items-center space-x-4">
                                <h1 className="text-2xl font-bold text-blue-600">🏠 ANTIEQ WISMA KOST</h1>
                            </Link>
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href={route('home')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                                <Link href={route('rooms.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Rooms
                                </Link>
                                <Link href={route('gallery.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Gallery
                                </Link>
                                <Link href={route('location')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Location
                                </Link>
                                <Button onClick={() => router.get(route('booking.create'))} className="bg-blue-600 hover:bg-blue-700">
                                    📅 Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            ⚡ Premium Facilities
                        </h1>
                        <p className="text-xl opacity-90">
                            Experience luxury living with our comprehensive range of modern amenities and services
                        </p>
                    </div>
                </section>

                {/* Facilities by Category */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-7xl">
                        {Object.keys(facilities).length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🏢</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Facilities Coming Soon</h3>
                                <p className="text-gray-500 mb-8">We're preparing amazing facilities for our residents</p>
                                <Button onClick={() => router.get(route('home'))} variant="outline">
                                    Back to Home
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-16">
                                {Object.entries(facilities).map(([category, categoryFacilities]) => (
                                    <div key={category} className="space-y-8">
                                        {/* Category Header */}
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">
                                                {categoryEmojis[category] || '🏢'}
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                                {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                                            </h2>
                                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                                        </div>

                                        {/* Facilities Grid */}
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {categoryFacilities.map((facility) => (
                                                <Card key={facility.id} className="shadow-lg hover:shadow-xl transition-shadow group">
                                                    <CardHeader className="text-center pb-4">
                                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                                            {facility.icon || '✨'}
                                                        </div>
                                                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                                            {facility.name}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    {facility.description && (
                                                        <CardContent className="pt-0">
                                                            <p className="text-gray-600 text-sm text-center">
                                                                {facility.description}
                                                            </p>
                                                        </CardContent>
                                                    )}
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Why Choose Our Facilities */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🌟 Why Choose Our Facilities?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🔧</div>
                                <h3 className="text-xl font-semibold mb-4">24/7 Maintenance</h3>
                                <p className="text-gray-600">
                                    Our dedicated maintenance team ensures all facilities are always in perfect condition
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🆕</div>
                                <h3 className="text-xl font-semibold mb-4">Modern Equipment</h3>
                                <p className="text-gray-600">
                                    All facilities feature the latest technology and modern equipment for your comfort
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🧹</div>
                                <h3 className="text-xl font-semibold mb-4">Regular Cleaning</h3>
                                <p className="text-gray-600">
                                    Professional cleaning services ensure all common areas are spotless and hygienic
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Facility Rules */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-12">📋 Facility Guidelines</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-green-700">✅ Do's</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Keep facilities clean after use
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Report any damage immediately
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Respect operating hours
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Be considerate of other residents
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Follow safety guidelines
                                    </li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-red-700">❌ Don'ts</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">•</span>
                                        Don't leave personal items unattended
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">•</span>
                                        Don't misuse or damage equipment
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">•</span>
                                        Don't monopolize shared facilities
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">•</span>
                                        Don't bring guests without permission
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">•</span>
                                        Don't ignore facility rules
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🎯 Ready to Enjoy These Facilities?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Book your room today and experience premium living with world-class facilities!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => router.get(route('booking.create'))}
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                📅 Book Your Room Now
                            </Button>
                            <Button 
                                onClick={() => router.get(route('rooms.index'))}
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                            >
                                🏠 View Available Rooms
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-12 px-4 bg-gray-800 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h3 className="text-2xl font-bold mb-6">❓ Questions About Our Facilities?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Our team is here to help you understand everything about our premium facilities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📧</span>
                                <span>facilities@antieqkost.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📱</span>
                                <span>+62 812 3456 7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🕐</span>
                                <span>Available 24/7</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}