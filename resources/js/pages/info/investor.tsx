import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';



export default function Investor(): React.JSX.Element {
    return (
        <>
            <Head title="For Investors - ANTIEQ WISMA KOST" />
            
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
                                <Link href={route('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Projects
                                </Link>
                                <Link href={route('management')} className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Management
                                </Link>
                                <Button onClick={() => window.open('mailto:investor@antieqkost.com')} className="bg-blue-600 hover:bg-blue-700">
                                    📧 Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="py-20 px-4 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            💼 Investment Opportunities
                        </h1>
                        <p className="text-xl opacity-90 mb-8">
                            Join us in revolutionizing the kost industry with modern, aesthetic, and profitable living spaces
                        </p>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                            <div className="text-4xl mb-2">📈</div>
                            <div className="text-2xl font-bold">25% ROI</div>
                            <div className="text-sm opacity-90">Average Annual Return</div>
                        </div>
                    </div>
                </section>

                {/* Investment Highlights */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🎯 Why Invest with ANTIEQ?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">📊</div>
                                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                                <p className="text-gray-600">
                                    Consistent 90%+ occupancy rates and strong financial performance across all our properties
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🏙️</div>
                                <h3 className="text-xl font-semibold mb-4">Prime Locations</h3>
                                <p className="text-gray-600">
                                    Strategic locations in Jakarta's key areas with high demand for quality accommodation
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-semibold mb-4">Modern Concept</h3>
                                <p className="text-gray-600">
                                    Instagram-worthy aesthetic design that attracts millennials and Gen-Z market
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🤝</div>
                                <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
                                <p className="text-gray-600">
                                    Strong community building leads to higher tenant retention and satisfaction
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">📱</div>
                                <h3 className="text-xl font-semibold mb-4">Tech Integration</h3>
                                <p className="text-gray-600">
                                    Digital management system and smart facilities reduce operational costs
                                </p>
                            </Card>
                            <Card className="text-center p-8 shadow-lg">
                                <div className="text-5xl mb-4">🔧</div>
                                <h3 className="text-xl font-semibold mb-4">Full Management</h3>
                                <p className="text-gray-600">
                                    Comprehensive property management services from operations to maintenance
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Financial Overview */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">💰 Investment Returns</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <Card className="p-8 shadow-lg border-2 border-green-200">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-green-700">📈 Revenue Projections</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Monthly Revenue per Room:</span>
                                            <span className="font-bold">Rp 2.5M - 4.5M</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Average Occupancy Rate:</span>
                                            <span className="font-bold">92%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Annual Revenue (50 rooms):</span>
                                            <span className="font-bold">Rp 13.8B</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-3">
                                            <span className="text-lg font-semibold">Net Annual Profit:</span>
                                            <span className="text-lg font-bold text-green-600">Rp 4.14B</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card className="p-8 shadow-lg border-2 border-blue-200">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-blue-700">🎯 Investment Packages</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="border rounded-lg p-4 bg-blue-50">
                                            <h4 className="font-semibold text-lg mb-2">Bronze Package</h4>
                                            <div className="text-2xl font-bold text-blue-600 mb-2">Rp 2B - 5B</div>
                                            <p className="text-sm">15% annual return + profit sharing</p>
                                        </div>
                                        <div className="border rounded-lg p-4 bg-purple-50">
                                            <h4 className="font-semibold text-lg mb-2">Silver Package</h4>
                                            <div className="text-2xl font-bold text-purple-600 mb-2">Rp 5B - 10B</div>
                                            <p className="text-sm">20% annual return + profit sharing</p>
                                        </div>
                                        <div className="border rounded-lg p-4 bg-yellow-50">
                                            <h4 className="font-semibold text-lg mb-2">Gold Package</h4>
                                            <div className="text-2xl font-bold text-yellow-600 mb-2">Rp 10B+</div>
                                            <p className="text-sm">25% annual return + equity participation</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Analysis */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">📊 Market Analysis</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-6 shadow-lg">
                                <div className="text-4xl mb-4 text-center">📈</div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Growing Demand</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• 15% annual growth in kost market</li>
                                    <li>• Jakarta population: 10.5M+</li>
                                    <li>• Young professionals: 3.2M</li>
                                    <li>• Students: 1.8M</li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="text-4xl mb-4 text-center">🎯</div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Target Market</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Ages 18-35 years</li>
                                    <li>• Monthly income: 5M-15M</li>
                                    <li>• Tech-savvy millennials</li>
                                    <li>• Social media active</li>
                                </ul>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="text-4xl mb-4 text-center">💪</div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Competitive Edge</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Aesthetic design advantage</li>
                                    <li>• Strong community building</li>
                                    <li>• Premium service quality</li>
                                    <li>• Digital management system</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Investment Process */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">🚀 Investment Process</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <Card className="text-center p-6 shadow-lg">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">1</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Initial Contact</h3>
                                <p className="text-gray-600 text-sm">Schedule a meeting to discuss investment opportunities</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-purple-600">2</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Due Diligence</h3>
                                <p className="text-gray-600 text-sm">Review financial reports, market analysis, and projections</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-green-600">3</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Agreement</h3>
                                <p className="text-gray-600 text-sm">Finalize investment terms and sign partnership agreement</p>
                            </Card>
                            <Card className="text-center p-6 shadow-lg">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-yellow-600">4</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Project Launch</h3>
                                <p className="text-gray-600 text-sm">Begin project development and start generating returns</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Testimonials from Investors */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">💬 What Our Investors Say</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        A
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold">Andi Suharto</h4>
                                        <p className="text-sm text-gray-500">Property Investor</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "ANTIEQ has exceeded our expectations. The modern concept and strong management team 
                                    deliver consistent returns. I'm planning to invest in their next project."
                                </p>
                            </Card>
                            <Card className="p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        L
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold">Lisa Tanaka</h4>
                                        <p className="text-sm text-gray-500">Investment Fund Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "The combination of aesthetic design and strong financials makes ANTIEQ a standout 
                                    investment opportunity in the hospitality sector."
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            🤝 Ready to Invest with Us?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join our investment partnership and be part of the future of modern living spaces
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => window.open('mailto:investor@antieqkost.com')}
                                size="lg" 
                                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                📧 Contact Our Investment Team
                            </Button>
                            <Button 
                                onClick={() => window.open('tel:+628123456789')}
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
                            >
                                📞 Schedule a Call
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}