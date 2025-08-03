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

interface Props {
    room: Room;
    similarRooms: Room[];
    [key: string]: unknown;
}

export default function RoomShow({ room, similarRooms }: Props) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <>
            <Head title={`${room.name} - ANTIEQ WISMA KOST`} />
            
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
                                    All Rooms
                                </Link>
                                <Link href={route('facilities.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Facilities
                                </Link>
                                <Button onClick={() => router.get(route('booking.create'), { room_id: room.id })} className="bg-blue-600 hover:bg-blue-700">
                                    📅 Book This Room
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Breadcrumbs */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link href={route('home')} className="hover:text-blue-600">Home</Link>
                            <span>/</span>
                            <Link href={route('rooms.index')} className="hover:text-blue-600">Rooms</Link>
                            <span>/</span>
                            <span className="text-gray-900">{room.name}</span>
                        </div>
                    </div>
                </div>

                {/* Room Details */}
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Image Gallery */}
                            <div>
                                <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <span className="text-8xl">🏠</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                            <span className="text-2xl">📷</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Room Info */}
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{room.name}</h1>
                                        <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                                            {room.type}
                                        </Badge>
                                    </div>
                                    {!room.is_available && (
                                        <Badge className="bg-red-100 text-red-800">
                                            Not Available
                                        </Badge>
                                    )}
                                </div>

                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {room.description}
                                </p>

                                {/* Price */}
                                <div className="bg-white rounded-xl p-6 shadow-lg border mb-6">
                                    <h3 className="text-xl font-semibold mb-4">💰 Pricing</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Monthly Rate:</span>
                                            <span className="text-3xl font-bold text-blue-600">
                                                {formatPrice(room.price_monthly)}
                                            </span>
                                        </div>
                                        {room.price_daily && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Daily Rate:</span>
                                                <span className="text-xl font-semibold text-gray-700">
                                                    {formatPrice(room.price_daily)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Room Specs */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-xl font-semibold mb-4">📋 Room Specifications</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">👥</span>
                                            <span>Capacity: {room.capacity} person{room.capacity > 1 ? 's' : ''}</span>
                                        </div>
                                        {room.size && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">📐</span>
                                                <span>Size: {room.size}m²</span>
                                            </div>
                                        )}
                                        {room.floor && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">🏢</span>
                                                <span>Floor: {room.floor}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">✅</span>
                                            <span>Status: {room.is_available ? 'Available' : 'Occupied'}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Actions */}
                                {room.is_available ? (
                                    <div className="space-y-4">
                                        <Button 
                                            onClick={() => router.get(route('booking.create'), { room_id: room.id })}
                                            size="lg" 
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4"
                                        >
                                            📅 Book This Room Now
                                        </Button>
                                        <div className="flex gap-3">
                                            <Button 
                                                onClick={() => router.get(route('booking.create'))}
                                                variant="outline" 
                                                className="flex-1"
                                            >
                                                💬 Contact Us
                                            </Button>
                                            <Button 
                                                onClick={() => router.get(route('rooms.index'))}
                                                variant="outline" 
                                                className="flex-1"
                                            >
                                                🔍 View Other Rooms
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-6">
                                        <p className="text-gray-600 mb-4">This room is currently not available</p>
                                        <Button 
                                            onClick={() => router.get(route('rooms.index'))}
                                            variant="outline"
                                        >
                                            View Available Rooms
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Room Facilities */}
                <section className="py-12 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🛏️ Room Facilities</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {room.facilities.map((facility, index) => (
                                <Card key={index} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="text-3xl mb-3">✨</div>
                                    <h3 className="font-semibold">{facility}</h3>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Similar Rooms */}
                {similarRooms.length > 0 && (
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                🏡 Similar Rooms
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {similarRooms.map((similarRoom) => (
                                    <Card key={similarRoom.id} className="shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                                            <span className="text-6xl">🏠</span>
                                        </div>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-xl">{similarRoom.name}</CardTitle>
                                                <Badge variant="outline">{similarRoom.type}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 mb-4 line-clamp-2">{similarRoom.description}</p>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-2xl font-bold text-blue-600">
                                                    {formatPrice(similarRoom.price_monthly)}/month
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    👥 {similarRoom.capacity} person{similarRoom.capacity > 1 ? 's' : ''}
                                                </span>
                                            </div>
                                            <Button 
                                                onClick={() => router.get(route('rooms.show', similarRoom.id))}
                                                className="w-full"
                                                variant="outline"
                                            >
                                                View Details
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            💫 Ready to Make This Your Home?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Join our community of Antieqkers and experience modern living at its finest!
                        </p>
                        {room.is_available && (
                            <Button 
                                onClick={() => router.get(route('booking.create'), { room_id: room.id })}
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                🎯 Book {room.name} Now
                            </Button>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}