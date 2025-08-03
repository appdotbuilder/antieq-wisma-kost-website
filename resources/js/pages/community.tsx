import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';



export default function Community(): React.JSX.Element {
    return (
        <>
            <Head title="Antieqkers Community - ANTIEQ WISMA KOST" />
            
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
                                <Link href={route('location')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Location
                                </Link>
                                <Button onClick={() => router.get(route('booking.create'))} className="bg-blue-600 hover:bg-blue-700">
                                    📅 Join Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="py-20 px-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            🤝 Antieqkers Community
                        </h1>
                        <p className="text-xl opacity-90 mb-8">
                            More than just a place to stay - we're a vibrant community of like-minded individuals 
                            creating memories and friendships that last a lifetime!
                        </p>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                            <div className="text-4xl mb-2">👥</div>
                            <div className="text-2xl font-bold">500+ Antieqkers</div>
                            <div className="text-sm opacity-90">Active Community Members</div>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Special */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">✨ What Makes Antieqkers Special?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-4">🎯</div>
                                <h3 className="text-xl font-semibold mb-4">Shared Goals</h3>
                                <p className="text-gray-600">
                                    Whether you're a student, young professional, or entrepreneur, we support each other's 
                                    dreams and ambitions.
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-4">🌍</div>
                                <h3 className="text-xl font-semibold mb-4">Diverse Backgrounds</h3>
                                <p className="text-gray-600">
                                    Our community brings together people from different cities, cultures, and professions, 
                                    creating a rich tapestry of experiences.
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-4">🤗</div>
                                <h3 className="text-xl font-semibold mb-4">Inclusive Environment</h3>
                                <p className="text-gray-600">
                                    Everyone is welcome here! We celebrate diversity and create a safe, supportive 
                                    environment for all residents.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Community Activities */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🎉 Community Activities</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">📅 Regular Events</h3>
                                <div className="space-y-4">
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🍕</div>
                                            <div>
                                                <h4 className="font-semibold">Monthly Community Dinner</h4>
                                                <p className="text-sm text-gray-600">Every first Friday of the month</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🎮</div>
                                            <div>
                                                <h4 className="font-semibold">Game Night</h4>
                                                <p className="text-sm text-gray-600">Every Saturday evening</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🧘</div>
                                            <div>
                                                <h4 className="font-semibold">Wellness Wednesday</h4>
                                                <p className="text-sm text-gray-600">Yoga and meditation sessions</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">📚</div>
                                            <div>
                                                <h4 className="font-semibold">Study Groups</h4>
                                                <p className="text-sm text-gray-600">Collaborative learning sessions</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">🎊 Special Events</h3>
                                <div className="space-y-4">
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🎂</div>
                                            <div>
                                                <h4 className="font-semibold">Birthday Celebrations</h4>
                                                <p className="text-sm text-gray-600">We celebrate every Antieqker's special day</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🏆</div>
                                            <div>
                                                <h4 className="font-semibold">Achievement Awards</h4>
                                                <p className="text-sm text-gray-600">Recognizing member accomplishments</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🎭</div>
                                            <div>
                                                <h4 className="font-semibold">Cultural Festivals</h4>
                                                <p className="text-sm text-gray-600">Celebrating different cultures and traditions</p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-4 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🌱</div>
                                            <div>
                                                <h4 className="font-semibold">Community Service</h4>
                                                <p className="text-sm text-gray-600">Giving back to the local community</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Spaces */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🏢 Community Spaces</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">☕</div>
                                <h3 className="font-semibold text-lg mb-2">Co-working Lounge</h3>
                                <p className="text-gray-600 text-sm">Perfect for work, study, or casual meetings</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🍳</div>
                                <h3 className="font-semibold text-lg mb-2">Community Kitchen</h3>
                                <p className="text-gray-600 text-sm">Cook together and share meals with friends</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="font-semibold text-lg mb-2">Library Corner</h3>
                                <p className="text-gray-600 text-sm">Quiet study space with books and resources</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="text-4xl mb-4">🎬</div>
                                <h3 className="font-semibold text-lg mb-2">Entertainment Room</h3>
                                <p className="text-gray-600 text-sm">Movies, games, and group activities</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Community Benefits */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">💎 Community Benefits</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🤝</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
                                        <p className="text-gray-600">
                                            Build professional connections and friendships with residents from various industries.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">💡</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Skill Sharing</h3>
                                        <p className="text-gray-600">
                                            Learn from each other through workshops, tutorials, and informal knowledge exchange.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🎯</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
                                        <p className="text-gray-600">
                                            Motivational environment that encourages personal and professional development.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🛡️</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Support System</h3>
                                        <p className="text-gray-600">
                                            Always have someone to turn to for advice, help, or just a friendly conversation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🎉</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Fun & Entertainment</h3>
                                        <p className="text-gray-600">
                                            Never a dull moment with regular events, activities, and spontaneous hangouts.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🌍</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Cultural Exchange</h3>
                                        <p className="text-gray-600">
                                            Experience different cultures, foods, and traditions from our diverse community.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">💬 What Antieqkers Say</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        S
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold">Sarah</h4>
                                        <p className="text-sm text-gray-500">UI Student</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic">
                                    "I found my best friends here! The community events are amazing and everyone is so welcoming. 
                                    It really feels like a second family."
                                </p>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        M
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold">Michael</h4>
                                        <p className="text-sm text-gray-500">Software Developer</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic">
                                    "The networking opportunities here are incredible. I've made valuable professional connections 
                                    and even found my current job through a fellow Antieqker!"
                                </p>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        A
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold">Andi</h4>
                                        <p className="text-sm text-gray-500">Entrepreneur</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic">
                                    "Living here has been transformative. The supportive environment helped me launch my startup, 
                                    and I've gained lifelong friends and mentors."
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-12">📋 Community Guidelines</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
                                    🤝 Respect & Kindness
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        Treat everyone with respect and kindness
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        Embrace diversity and different perspectives
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        Help create an inclusive environment
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        Be understanding and patient with others
                                    </li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                                    🎯 Active Participation
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Join community activities and events
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Share your skills and knowledge
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Contribute to group discussions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        Help organize and suggest activities
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Join the Community */}
                <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            🚀 Ready to Become an Antieqker?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join our amazing community and start building friendships, memories, and opportunities that will last a lifetime!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => router.get(route('booking.create'))}
                                size="lg" 
                                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                🏠 Book Your Room
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
                            >
                                💬 Contact Us
                            </Button>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="mb-4">Connect with us on social media:</p>
                            <div className="flex justify-center gap-6">
                                <Badge className="bg-white bg-opacity-20 text-white px-4 py-2">📱 @antieqkost</Badge>
                                <Badge className="bg-white bg-opacity-20 text-white px-4 py-2">📘 Antieqkers Community</Badge>
                                <Badge className="bg-white bg-opacity-20 text-white px-4 py-2">💬 WhatsApp Group</Badge>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}