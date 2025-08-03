import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Room {
    id: number;
    name: string;
    type: string;
    description: string;
    price_monthly: number;
    price_daily?: number;
    capacity: number;
    facilities: string[];
    is_available: boolean;
}

interface Props {
    availableRooms: Room[];
    [key: string]: unknown;
}

export default function BookingCreate({ availableRooms }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        room_id: '',
        guest_name: '',
        guest_email: '',
        guest_phone: '',
        guest_id_number: '',
        check_in_date: '',
        check_out_date: '',
        booking_type: 'monthly',
        special_requests: '',
    });

    const selectedRoom = availableRooms.find(room => room.id.toString() === data.room_id);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const calculateTotal = () => {
        if (!selectedRoom) return 0;
        return data.booking_type === 'monthly' 
            ? selectedRoom.price_monthly 
            : selectedRoom.price_daily || 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('booking.store'));
    };

    return (
        <>
            <Head title="Book Your Room - ANTIEQ WISMA KOST" />
            
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
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            📅 Book Your Room
                        </h1>
                        <p className="text-xl opacity-90">
                            Reserve your perfect living space and join the Antieqkers community!
                        </p>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Room Selection */}
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-2xl">🏠 Select Room</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <Label htmlFor="room_id" className="text-base font-medium">Room *</Label>
                                            <Select value={data.room_id} onValueChange={(value) => setData('room_id', value)}>
                                                <SelectTrigger className="mt-2">
                                                    <SelectValue placeholder="Choose your room" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {availableRooms.map((room) => (
                                                        <SelectItem key={room.id} value={room.id.toString()}>
                                                            <div className="flex justify-between items-center w-full">
                                                                <span>{room.name} ({room.type})</span>
                                                                <span className="ml-4 font-semibold text-blue-600">
                                                                    {formatPrice(room.price_monthly)}/mo
                                                                </span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.room_id && <p className="text-red-500 text-sm mt-1">{errors.room_id}</p>}
                                        </div>

                                        {/* Room Preview */}
                                        {selectedRoom && (
                                            <Card className="bg-blue-50 border-blue-200">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-lg mb-2">{selectedRoom.name}</h4>
                                                    <p className="text-gray-600 text-sm mb-3">{selectedRoom.description}</p>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span>👥 {selectedRoom.capacity} person{selectedRoom.capacity > 1 ? 's' : ''}</span>
                                                        <span className="font-semibold text-blue-600">
                                                            {formatPrice(selectedRoom.price_monthly)}/month
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Booking Type */}
                                        <div>
                                            <Label className="text-base font-medium">Booking Type *</Label>
                                            <RadioGroup 
                                                value={data.booking_type} 
                                                onValueChange={(value: string) => setData('booking_type', value)}
                                                className="mt-2"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="monthly" id="monthly" />
                                                    <Label htmlFor="monthly">Monthly Rent</Label>
                                                </div>
                                                {selectedRoom?.price_daily && (
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="daily" id="daily" />
                                                        <Label htmlFor="daily">Daily Rent</Label>
                                                    </div>
                                                )}
                                            </RadioGroup>
                                            {errors.booking_type && <p className="text-red-500 text-sm mt-1">{errors.booking_type}</p>}
                                        </div>

                                        {/* Dates */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="check_in_date" className="text-base font-medium">Check-in Date *</Label>
                                                <Input
                                                    id="check_in_date"
                                                    type="date"
                                                    value={data.check_in_date}
                                                    onChange={(e) => setData('check_in_date', e.target.value)}
                                                    className="mt-2"
                                                    min={new Date().toISOString().split('T')[0]}
                                                />
                                                {errors.check_in_date && <p className="text-red-500 text-sm mt-1">{errors.check_in_date}</p>}
                                            </div>
                                            {data.booking_type === 'daily' && (
                                                <div>
                                                    <Label htmlFor="check_out_date" className="text-base font-medium">Check-out Date</Label>
                                                    <Input
                                                        id="check_out_date"
                                                        type="date"
                                                        value={data.check_out_date}
                                                        onChange={(e) => setData('check_out_date', e.target.value)}
                                                        className="mt-2"
                                                        min={data.check_in_date}
                                                    />
                                                    {errors.check_out_date && <p className="text-red-500 text-sm mt-1">{errors.check_out_date}</p>}
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Guest Information */}
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-2xl">👤 Guest Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <Label htmlFor="guest_name" className="text-base font-medium">Full Name *</Label>
                                            <Input
                                                id="guest_name"
                                                type="text"
                                                value={data.guest_name}
                                                onChange={(e) => setData('guest_name', e.target.value)}
                                                className="mt-2"
                                                placeholder="Enter your full name"
                                            />
                                            {errors.guest_name && <p className="text-red-500 text-sm mt-1">{errors.guest_name}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="guest_email" className="text-base font-medium">Email Address *</Label>
                                            <Input
                                                id="guest_email"
                                                type="email"
                                                value={data.guest_email}
                                                onChange={(e) => setData('guest_email', e.target.value)}
                                                className="mt-2"
                                                placeholder="your.email@example.com"
                                            />
                                            {errors.guest_email && <p className="text-red-500 text-sm mt-1">{errors.guest_email}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="guest_phone" className="text-base font-medium">Phone Number *</Label>
                                            <Input
                                                id="guest_phone"
                                                type="tel"
                                                value={data.guest_phone}
                                                onChange={(e) => setData('guest_phone', e.target.value)}
                                                className="mt-2"
                                                placeholder="+62 812 3456 7890"
                                            />
                                            {errors.guest_phone && <p className="text-red-500 text-sm mt-1">{errors.guest_phone}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="guest_id_number" className="text-base font-medium">ID Number (KTP/Passport)</Label>
                                            <Input
                                                id="guest_id_number"
                                                type="text"
                                                value={data.guest_id_number}
                                                onChange={(e) => setData('guest_id_number', e.target.value)}
                                                className="mt-2"
                                                placeholder="3201234567890123"
                                            />
                                            {errors.guest_id_number && <p className="text-red-500 text-sm mt-1">{errors.guest_id_number}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="special_requests" className="text-base font-medium">Special Requests</Label>
                                            <Textarea
                                                id="special_requests"
                                                value={data.special_requests}
                                                onChange={(e) => setData('special_requests', e.target.value)}
                                                className="mt-2"
                                                placeholder="Any special requests or requirements?"
                                                rows={3}
                                            />
                                            {errors.special_requests && <p className="text-red-500 text-sm mt-1">{errors.special_requests}</p>}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Booking Summary */}
                            {selectedRoom && (
                                <Card className="shadow-lg border-2 border-blue-200">
                                    <CardHeader className="bg-blue-50">
                                        <CardTitle className="text-2xl text-blue-800">💰 Booking Summary</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Room:</span>
                                                <span className="font-semibold">{selectedRoom.name}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Type:</span>
                                                <span className="font-semibold">{selectedRoom.type}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Booking Type:</span>
                                                <span className="font-semibold capitalize">{data.booking_type}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Check-in Date:</span>
                                                <span className="font-semibold">{data.check_in_date || 'Not selected'}</span>
                                            </div>
                                            {data.booking_type === 'daily' && data.check_out_date && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Check-out Date:</span>
                                                    <span className="font-semibold">{data.check_out_date}</span>
                                                </div>
                                            )}
                                            <div className="border-t pt-4 flex justify-between items-center">
                                                <span className="text-xl font-semibold">Total Amount:</span>
                                                <span className="text-2xl font-bold text-blue-600">
                                                    {formatPrice(calculateTotal())}
                                                    <span className="text-sm font-normal text-gray-500">
                                                        /{data.booking_type === 'monthly' ? 'month' : 'total'}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4"
                                    disabled={processing || !selectedRoom}
                                >
                                    {processing ? '⏳ Processing...' : '🎯 Submit Booking Request'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-12">ℹ️ Booking Information</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center p-6">
                                <div className="text-4xl mb-4">⏰</div>
                                <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                                <p className="text-gray-600 text-sm">We'll respond to your booking request within 24 hours</p>
                            </Card>
                            <Card className="text-center p-6">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="font-semibold text-lg mb-2">Secure Process</h3>
                                <p className="text-gray-600 text-sm">Your personal information is protected and secure</p>
                            </Card>
                            <Card className="text-center p-6">
                                <div className="text-4xl mb-4">💬</div>
                                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                                <p className="text-gray-600 text-sm">Contact us anytime for assistance with your booking</p>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}