import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface GalleryItem {
    id: number;
    title: string;
    description?: string;
    image_path: string;
    category: string;
}

interface Props {
    gallery: Record<string, GalleryItem[]>;
    categories: string[];
    [key: string]: unknown;
}

export default function GalleryIndex({ gallery, categories }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const categoryEmojis: Record<string, string> = {
        rooms: '🛏️',
        common_areas: '🏢',
        exterior: '🌆',
        facilities: '⚡',
        events: '🎉',
        lifestyle: '✨',
        general: '📷',
    };

    const categoryTitles: Record<string, string> = {
        rooms: 'Room Photos',
        common_areas: 'Common Areas',
        exterior: 'Building Exterior',
        facilities: 'Facilities',
        events: 'Events & Activities',
        lifestyle: 'Lifestyle',
        general: 'General',
    };

    const allImages = Object.values(gallery).flat();
    const filteredImages = selectedCategory === 'all' 
        ? allImages 
        : gallery[selectedCategory] || [];

    return (
        <>
            <Head title="Photo Gallery - ANTIEQ WISMA KOST" />
            
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
                            📸 Photo Gallery
                        </h1>
                        <p className="text-xl opacity-90">
                            Explore our beautiful, Instagrammable spaces and see why Antieqkers love living here
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="py-8 px-4 bg-white border-b">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button
                                onClick={() => setSelectedCategory('all')}
                                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                                className="flex items-center gap-2"
                            >
                                🌟 All Photos
                            </Button>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    variant={selectedCategory === category ? 'default' : 'outline'}
                                    className="flex items-center gap-2"
                                >
                                    {categoryEmojis[category] || '📷'} 
                                    {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                                </Button>
                            ))}
                        </div>
                        <div className="mt-4 text-center text-sm text-gray-600">
                            Showing {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''}
                            {selectedCategory !== 'all' && ` in ${categoryTitles[selectedCategory] || selectedCategory}`}
                        </div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-7xl">
                        {filteredImages.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📷</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No photos available</h3>
                                <p className="text-gray-500 mb-8">
                                    {selectedCategory === 'all' 
                                        ? 'Gallery photos are coming soon!' 
                                        : `No photos in ${categoryTitles[selectedCategory] || selectedCategory} category yet`
                                    }
                                </p>
                                <Button onClick={() => setSelectedCategory('all')} variant="outline">
                                    View All Photos
                                </Button>
                            </div>
                        ) : (
                            <>
                                {/* Image Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {filteredImages.map((item) => (
                                        <div 
                                            key={item.id} 
                                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                            onClick={() => setSelectedImage(item)}
                                        >
                                            {/* Placeholder Image */}
                                            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                                                <span className="text-6xl">📷</span>
                                            </div>
                                            
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                                    {item.description && (
                                                        <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                                                    )}
                                                    <div className="mt-2">
                                                        <Badge className="bg-white bg-opacity-20 text-white">
                                                            {categoryTitles[item.category] || item.category}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Zoom Icon */}
                                            <div className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-lg">🔍</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Load More (Future Enhancement) */}
                                {filteredImages.length >= 12 && (
                                    <div className="text-center mt-12">
                                        <Button variant="outline" size="lg">
                                            Load More Photos 📸
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* Image Modal */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl max-h-full">
                            {/* Close Button */}
                            <button 
                                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕ Close
                            </button>
                            
                            {/* Image */}
                            <div 
                                className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg flex items-center justify-center"
                                style={{ width: '80vw', height: '60vh', maxWidth: '800px', maxHeight: '600px' }}
                            >
                                <span className="text-8xl">📷</span>
                            </div>
                            
                            {/* Image Info */}
                            <div className="bg-white p-6 rounded-b-lg">
                                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                {selectedImage.description && (
                                    <p className="text-gray-600 mb-3">{selectedImage.description}</p>
                                )}
                                <Badge className="bg-blue-100 text-blue-800">
                                    {categoryTitles[selectedImage.category] || selectedImage.category}
                                </Badge>
                            </div>
                        </div>
                    </div>
                )}

                {/* Instagram-style Features */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">📱 Instagrammable Spots</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-semibold mb-4">Aesthetic Interiors</h3>
                                <p className="text-gray-600">
                                    Every corner is designed with Instagram in mind. From modern furniture to perfect lighting, 
                                    your photos will always look amazing!
                                </p>
                            </div>
                            <div className="text-center p-8">
                                <div className="text-5xl mb-4">🌈</div>
                                <h3 className="text-xl font-semibold mb-4">Colorful Spaces</h3>
                                <p className="text-gray-600">
                                    Vibrant colors and artistic designs create the perfect backdrop for your social media content. 
                                    Every room tells a story!
                                </p>
                            </div>
                            <div className="text-center p-8">
                                <div className="text-5xl mb-4">💡</div>
                                <h3 className="text-xl font-semibold mb-4">Perfect Lighting</h3>
                                <p className="text-gray-600">
                                    Natural light flows through large windows, and our LED lighting systems are optimized 
                                    for photography and selfies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Share Your Photos */}
                <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            📸 Share Your Antieq Moments!
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Tag us @antieqkost and use #AntieqkersLife to be featured in our gallery!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                size="lg" 
                                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                📱 Follow @antieqkost
                            </Button>
                            <Button 
                                onClick={() => router.get(route('community'))}
                                size="lg" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white hover:text-pink-600 text-lg px-8 py-4"
                            >
                                🤝 Join Community
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🏠 Want to Live in These Beautiful Spaces?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Book your room today and start creating amazing memories in our Instagrammable kost!
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
            </div>
        </>
    );
}