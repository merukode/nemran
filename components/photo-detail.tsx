"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Camera, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

interface PhotoDetailProps {
    photo: {
        id: string
        title: string
        location: string
        date: string
        description: string
        story: string
        camera: string
        settings: string
        image: string
    }
    onBack: () => void
}

export default function PhotoDetail({ photo, onBack }: PhotoDetailProps) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <motion.div
            className="min-h-screen bg-white text-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <motion.button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors"
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft size={20} />
                        <span className="font-mono text-sm uppercase tracking-wider">Back to Gallery</span>
                    </motion.button>

                    <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <span className="font-mono text-sm text-gray-600">ALEX PHOTO</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-16">
                {/* Title Section */}
                <section className="px-8 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="space-y-4"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter uppercase">{photo.title}</h1>
                            <div className="flex items-center space-x-8">
                                <span className="text-2xl font-light tracking-widest text-gray-600">{photo.location}</span>
                                <div className="w-20 h-px bg-black" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Photo Section */}
                <section className="px-8 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="relative"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            {/* Main Photo */}
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={photo.image || "/placeholder.svg"}
                                    alt={photo.title}
                                    className={`w-full h-[70vh] object-cover transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"
                                        }`}
                                    onLoad={() => setImageLoaded(true)}
                                />

                                {/* Loading placeholder */}
                                {!imageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Floating Text Elements */}
                            <motion.div
                                className="absolute top-20 left-20 text-black/60 font-light text-lg"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                captured
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 right-20 text-black/60 font-light text-lg"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                in time
                            </motion.div>

                            <motion.div
                                className="absolute bottom-20 left-1/3 text-black/60 font-light text-lg"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            >
                                forever
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="px-8 mb-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column - Story */}
                        <motion.div
                            className="space-y-8"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black uppercase tracking-tight">The Story</h2>
                                <div className="w-16 h-1 bg-black" />
                                <p className="text-xl leading-relaxed text-gray-700">{photo.story}</p>
                                <p className="text-lg leading-relaxed text-gray-600">{photo.description}</p>
                            </div>
                        </motion.div>

                        {/* Right Column - Details */}
                        <motion.div
                            className="space-y-8"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gray-50 p-8 space-y-6">
                                <h3 className="text-2xl font-black uppercase tracking-tight">Details</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <MapPin size={20} className="text-gray-600" />
                                        <div>
                                            <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Location</span>
                                            <div className="font-medium">{photo.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Calendar size={20} className="text-gray-600" />
                                        <div>
                                            <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Date</span>
                                            <div className="font-medium">{photo.date}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Camera size={20} className="text-gray-600" />
                                        <div>
                                            <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Camera</span>
                                            <div className="font-medium">{photo.camera}</div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Settings</span>
                                        <div className="font-mono text-sm text-gray-700 mt-1">{photo.settings}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Large Typography Section */}
                <section className="px-8 mb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            className="space-y-8"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            {/* Large Japanese-inspired text */}
                            <div className="text-8xl md:text-9xl font-black text-gray-200 leading-none tracking-tighter">MOMENT</div>

                            <div className="relative">
                                <p className="text-2xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    Every photograph is a moment
                                    <br />
                                    frozen in time, waiting to tell
                                    <br />
                                    its story to those who listen.
                                </p>

                                {/* Page number */}
                                <div className="absolute bottom-0 right-0 text-6xl font-black text-gray-300">01</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Navigation */}
                <section className="px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="flex items-center justify-between py-8 border-t border-gray-200"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                                whileHover={{ x: -5 }}
                            >
                                <ArrowLeft size={20} />
                                <span className="font-mono text-sm uppercase tracking-wider">Previous</span>
                            </motion.button>

                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((dot, index) => (
                                    <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-black" : "bg-gray-300"}`} />
                                ))}
                            </div>

                            <motion.button
                                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <span className="font-mono text-sm uppercase tracking-wider">Next</span>
                                <ArrowLeft size={20} className="rotate-180" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}
