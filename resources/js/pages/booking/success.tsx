import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Room {
    id: number;
    name: string;
    type: string;
    price_monthly: number;
    price_daily?: number;
}

interface Booking {
    id: number;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: string;
    check_out_date?: string;
    booking_type: string;
    total_amount: number;
    status: string;
    special_requests?: string;
}

interface Props {
    booking: Booking;
    room: Room;
    [key: string]: unknown;
}

export default function BookingSuccess({ booking, room }: Props) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="Booking Confirmed - ANTIEQ WISMA KOST" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
                                <Button onClick={() => router.get(route('booking.create'))} className="bg-blue-600 hover:bg-blue-700">
                                    📅 Book Another Room
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Success Header */}
                <section className="py-20 px-4 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-8xl mb-6">🎉</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Booking Request Submitted!
                        </h1>
                        <p className="text-xl opacity-90 mb-8">
                            Thank you {booking.guest_name}! Your booking request has been received successfully.
                        </p>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                            <div className="text-sm opacity-90 mb-2">Booking Reference</div>
                            <div className="text-2xl font-bold">#{booking.id.toString().padStart(6, '0')}</div>
                        </div>
                    </div>
                </section>

                {/* Booking Details */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <Card className="shadow-2xl border-0">
                            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 rounded-t-xl">
                                <CardTitle className="text-3xl text-center text-gray-800">
                                    📋 Booking Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Guest Information */}
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            👤 Guest Information
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Name:</span>
                                                <span className="font-semibold">{booking.guest_name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Email:</span>
                                                <span className="font-semibold">{booking.guest_email}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Phone:</span>
                                                <span className="font-semibold">{booking.guest_phone}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Status:</span>
                                                <Badge className="bg-yellow-100 text-yellow-800 capitalize">
                                                    {booking.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Room Information */}
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            🏠 Room Information
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Room:</span>
                                                <span className="font-semibold">{room.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Type:</span>
                                                <span className="font-semibold">{room.type}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Booking Type:</span>
                                                <span className="font-semibold capitalize">{booking.booking_type}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Check-in:</span>
                                                <span className="font-semibold">{formatDate(booking.check_in_date)}</span>
                                            </div>
                                            {booking.check_out_date && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Check-out:</span>
                                                    <span className="font-semibold">{formatDate(booking.check_out_date)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Special Requests */}
                                {booking.special_requests && (
                                    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                                        <h4 className="font-semibold text-lg mb-3">💬 Special Requests</h4>
                                        <p className="text-gray-700">{booking.special_requests}</p>
                                    </div>
                                )}

                                {/* Total Amount */}
                                <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-semibold text-gray-800">Total Amount:</span>
                                        <span className="text-3xl font-bold text-blue-600">
                                            {formatPrice(booking.total_amount)}
                                            <span className="text-lg font-normal text-gray-500">
                                                /{booking.booking_type === 'monthly' ? 'month' : 'total'}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">📝 What's Next?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">📞</div>
                                <h3 className="text-xl font-semibold mb-4">We'll Contact You</h3>
                                <p className="text-gray-600">
                                    Our team will contact you within 24 hours to confirm your booking and discuss payment details.
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">💳</div>
                                <h3 className="text-xl font-semibold mb-4">Payment Process</h3>
                                <p className="text-gray-600">
                                    We'll guide you through our secure payment process and provide all necessary details.
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🔑</div>
                                <h3 className="text-xl font-semibold mb-4">Move In</h3>
                                <p className="text-gray-600">
                                    After payment confirmation, we'll arrange your check-in and welcome you to the Antieqkers community!
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Important Notes */}
                <section className="py-12 px-4 bg-yellow-50 border-y border-yellow-200">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Important Notes</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-semibold text-lg mb-3 text-yellow-800">📧 Check Your Email</h4>
                                <p className="text-gray-700">
                                    A confirmation email has been sent to <strong>{booking.guest_email}</strong>. 
                                    Please check your inbox and spam folder.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-semibold text-lg mb-3 text-yellow-800">📱 Keep Your Phone Available</h4>
                                <p className="text-gray-700">
                                    Our team will call you at <strong>{booking.guest_phone}</strong> to confirm 
                                    your booking details.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-8">🚀 What Would You Like to Do Next?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => router.get(route('home'))}
                                size="lg" 
                                variant="outline"
                                className="text-lg px-8 py-4"
                            >
                                🏠 Back to Home
                            </Button>
                            <Button 
                                onClick={() => router.get(route('rooms.index'))}
                                size="lg" 
                                variant="outline"
                                className="text-lg px-8 py-4"
                            >
                                🔍 View Other Rooms
                            </Button>
                            <Button 
                                onClick={() => router.get(route('booking.create'))}
                                size="lg" 
                                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                            >
                                📅 Book Another Room
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-12 px-4 bg-gray-800 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h3 className="text-2xl font-bold mb-6">📞 Need Help?</h3>
                        <p className="text-lg mb-6">
                            If you have any questions about your booking, feel free to contact us:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📧</span>
                                <span>booking@antieqkost.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📱</span>
                                <span>+62 812 3456 7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">💬</span>
                                <span>WhatsApp Available 24/7</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}