import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';



export default function Location(): React.JSX.Element {
    return (
        <>
            <Head title="Location - ANTIEQ WISMA KOST" />
            
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
                                <Link href={route('facilities.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Facilities
                                </Link>
                                <Link href={route('gallery.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Gallery
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
                            📍 Our Location
                        </h1>
                        <p className="text-xl opacity-90">
                            Strategically located in the heart of the city with easy access to everything you need
                        </p>
                    </div>
                </section>

                {/* Address & Contact */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Address Information */}
                            <div className="space-y-8">
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            🏢 Address
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-lg">
                                            <p className="font-semibold text-gray-800">ANTIEQ WISMA KOST</p>
                                            <p className="text-gray-600">Jl. Sudirman No. 123</p>
                                            <p className="text-gray-600">Kebayoran Baru, Jakarta Selatan</p>
                                            <p className="text-gray-600">DKI Jakarta 12190</p>
                                            <p className="text-gray-600">Indonesia</p>
                                        </div>
                                        <div className="pt-4 border-t">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xl">📱</span>
                                                <span>+62 812 3456 7890</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xl">📧</span>
                                                <span>info@antieqkost.com</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">💬</span>
                                                <span>WhatsApp: +62 812 3456 7890</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            🕐 Operating Hours
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="font-medium">Monday - Friday:</span>
                                            <span>8:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Saturday:</span>
                                            <span>9:00 AM - 9:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Sunday:</span>
                                            <span>10:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="pt-3 border-t text-sm text-gray-600">
                                            <p>✅ 24/7 Emergency Contact Available</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Interactive Map Placeholder */}
                            <div>
                                <Card className="shadow-lg h-full">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            🗺️ Interactive Map
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-96 flex flex-col items-center justify-center">
                                            <div className="text-6xl mb-4">🗺️</div>
                                            <p className="text-gray-600 text-center mb-4">
                                                Interactive map will be embedded here
                                            </p>
                                            <div className="space-y-2 text-center">
                                                <Button variant="outline" className="mr-2">
                                                    📱 Open in Google Maps
                                                </Button>
                                                <Button variant="outline">
                                                    🚗 Get Directions
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nearby Places */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🏪 What's Nearby</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🏫</div>
                                <h3 className="font-semibold text-lg mb-2">Universities</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>UI - 15 min</li>
                                    <li>UGM - 20 min</li>
                                    <li>Binus - 10 min</li>
                                </ul>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="font-semibold text-lg mb-2">Business District</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>SCBD - 10 min</li>
                                    <li>Sudirman - 5 min</li>
                                    <li>Kuningan - 15 min</li>
                                </ul>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🛒</div>
                                <h3 className="font-semibold text-lg mb-2">Shopping</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>Plaza Senayan - 8 min</li>
                                    <li>FX Sudirman - 12 min</li>
                                    <li>Pondok Indah Mall - 10 min</li>
                                </ul>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🚇</div>
                                <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>MRT Station - 5 min</li>
                                    <li>TransJakarta - 3 min</li>
                                    <li>Grab/Gojek Available</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Transportation Options */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🚗 How to Get Here</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4">🚗</div>
                                    <h3 className="text-xl font-semibold">By Car</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Free parking available</li>
                                    <li>• 24/7 security</li>
                                    <li>• Easy access from main roads</li>
                                    <li>• GPS coordinates available</li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4">🚇</div>
                                    <h3 className="text-xl font-semibold">Public Transport</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• MRT: 5 minutes walk</li>
                                    <li>• TransJakarta: 3 minutes walk</li>
                                    <li>• Bus stops nearby</li>
                                    <li>• Easy connections citywide</li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4">📱</div>
                                    <h3 className="text-xl font-semibold">Ride Sharing</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Grab & Gojek available</li>
                                    <li>• Quick pickup times</li>
                                    <li>• Safe drop-off area</li>
                                    <li>• 24/7 service</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Area Highlights */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🌟 Why This Location?</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🎯</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                                        <p className="text-gray-600">
                                            Located in the golden triangle of Jakarta with easy access to business districts, 
                                            universities, and entertainment areas.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🚇</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Excellent Connectivity</h3>
                                        <p className="text-gray-600">
                                            Multiple transportation options including MRT, TransJakarta, and major highways 
                                            make commuting a breeze.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🛒</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Complete Amenities</h3>
                                        <p className="text-gray-600">
                                            Shopping malls, restaurants, hospitals, banks, and all daily necessities 
                                            are within walking distance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🌆</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Vibrant Neighborhood</h3>
                                        <p className="text-gray-600">
                                            Safe, clean, and lively area with 24/7 security, street lighting, 
                                            and active community life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🏙️</div>
                                    <p className="text-gray-600">City view from ANTIEQ WISMA KOST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visit Us */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🏠 Ready to Visit?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Come see our beautiful location and facilities in person! Book a viewing or contact us for more information.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => router.get(route('booking.create'))}
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                📅 Schedule a Visit
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                            >
                                📞 Call Us Now
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}