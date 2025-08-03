import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    rooms: Room[];
    roomTypes: string[];
    [key: string]: unknown;
}

export default function RoomsIndex({ rooms, roomTypes }: Props) {
    const [selectedType, setSelectedType] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('price_asc');

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const filteredAndSortedRooms = React.useMemo(() => {
        let filtered = selectedType === 'all' 
            ? rooms 
            : rooms.filter(room => room.type === selectedType);

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price_asc':
                    return a.price_monthly - b.price_monthly;
                case 'price_desc':
                    return b.price_monthly - a.price_monthly;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'capacity':
                    return b.capacity - a.capacity;
                default:
                    return 0;
            }
        });
    }, [rooms, selectedType, sortBy]);

    return (
        <>
            <Head title="Rooms - ANTIEQ WISMA KOST" />
            
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
                                <Link href={route('facilities.index')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Facilities
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
                            🏠 Our Rooms
                        </h1>
                        <p className="text-xl opacity-90">
                            Discover your perfect living space with modern amenities and aesthetic design
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="py-8 px-4 bg-white border-b">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-700">Filter by type:</span>
                                <Select value={selectedType} onValueChange={setSelectedType}>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="All room types" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Types</SelectItem>
                                        {roomTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-700">Sort by:</span>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price_asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price_desc">Price: High to Low</SelectItem>
                                        <SelectItem value="name">Name</SelectItem>
                                        <SelectItem value="capacity">Capacity</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            Showing {filteredAndSortedRooms.length} of {rooms.length} rooms
                        </div>
                    </div>
                </section>

                {/* Rooms Grid */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-7xl">
                        {filteredAndSortedRooms.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🏠</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No rooms found</h3>
                                <p className="text-gray-500 mb-8">Try adjusting your filters or check back later</p>
                                <Button onClick={() => setSelectedType('all')} variant="outline">
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {filteredAndSortedRooms.map((room) => (
                                    <Card key={room.id} className="shadow-lg hover:shadow-xl transition-shadow group">
                                        <div className="relative">
                                            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                                                <span className="text-6xl">🏠</span>
                                            </div>
                                            {!room.is_available && (
                                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
                                                    <Badge className="bg-red-500 text-white">Not Available</Badge>
                                                </div>
                                            )}
                                            <Badge className="absolute top-2 right-2 bg-white text-gray-700">
                                                {room.type}
                                            </Badge>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                                                {room.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                                            
                                            <div className="space-y-3 mb-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-2xl font-bold text-blue-600">
                                                        {formatPrice(room.price_monthly)}
                                                    </span>
                                                    <span className="text-sm text-gray-500">/month</span>
                                                </div>
                                                
                                                {room.price_daily && (
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-lg font-semibold text-gray-700">
                                                            {formatPrice(room.price_daily)}
                                                        </span>
                                                        <span className="text-sm text-gray-500">/day</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                                                <span>👥 {room.capacity} person{room.capacity > 1 ? 's' : ''}</span>
                                                {room.size && <span>📐 {room.size}m²</span>}
                                                {room.floor && <span>🏢 Floor {room.floor}</span>}
                                            </div>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {room.facilities.slice(0, 3).map((facility, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {facility}
                                                    </Badge>
                                                ))}
                                                {room.facilities.length > 3 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{room.facilities.length - 3} more
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex gap-2">
                                                <Button 
                                                    onClick={() => router.get(route('rooms.show', room.id))}
                                                    className="flex-1"
                                                    variant="outline"
                                                >
                                                    View Details
                                                </Button>
                                                {room.is_available && (
                                                    <Button 
                                                        onClick={() => router.get(route('booking.create'), { room_id: room.id })}
                                                        className="bg-blue-600 hover:bg-blue-700"
                                                    >
                                                        📅
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🎯 Found Your Perfect Room?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Book now and secure your spot in our amazing community of Antieqkers!
                        </p>
                        <Button 
                            onClick={() => router.get(route('booking.create'))}
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                        >
                            📅 Book Your Room Now
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}