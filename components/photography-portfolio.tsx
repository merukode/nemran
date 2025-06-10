"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Camera, MapPin, Calendar } from "lucide-react"
import { useRef, useState } from "react"
import PhotoDetail from "./photo-detail"

export default function PhotographyPortfolio() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

    // Sample photos data with IDs
    const photos = [
        {
            id: "1",
            src: "/placeholder.svg?height=600&width=400",
            title: "Urban Solitude",
            location: "Indonesia",
            date: "March 2024",
            description: "A quiet moment captured in the bustling streets of Shibuya",
            story:
                "Walking through Indonesia streets at 3 AM, I discovered this perfect moment of stillness. The city never sleeps, but sometimes it whispers.",
            camera: "Canon EOS R5",
            settings: "85mm f/1.4 • 1/125s • ISO 800",
        },
        {
            id: "2",
            src: "/placeholder.svg?height=400&width=600",
            title: "Golden Hour",
            location: "Santorini, Greece",
            date: "June 2024",
            description: "The perfect light dancing on ancient architecture",
            story:
                "Sometimes the best photographs happen when you least expect them. This golden hour moment was pure magic.",
            camera: "Sony A7R IV",
            settings: "24-70mm f/2.8 • 1/250s • ISO 100",
        },
        {
            id: "3",
            src: "/placeholder.svg?height=500&width=350",
            title: "Street Stories",
            location: "New York, USA",
            date: "September 2024",
            description: "Life unfolding in the urban landscape",
            story: "Every street corner in New York has a story to tell. This frame captured one of those fleeting moments.",
            camera: "Leica Q2",
            settings: "28mm f/1.7 • 1/60s • ISO 1600",
        },
        {
            id: "4",
            src: "/placeholder.svg?height=700&width=500",
            title: "Minimalist Beauty",
            location: "Iceland",
            date: "November 2023",
            description: "Finding beauty in simplicity and vast landscapes",
            story: "Iceland taught me that sometimes the most powerful images are the simplest ones.",
            camera: "Canon EOS R6",
            settings: "16-35mm f/2.8 • 1/500s • ISO 200",
        },
        {
            id: "5",
            src: "/placeholder.svg?height=400&width=400",
            title: "Portrait Study",
            location: "Paris, France",
            date: "April 2023",
            description: "Capturing the essence of human emotion",
            story: "This portrait session in the streets of Montmartre revealed the subject's true character.",
            camera: "Fujifilm X-T5",
            settings: "35mm f/1.4 • 1/125s • ISO 400",
        },
        {
            id: "6",
            src: "/placeholder.svg?height=550&width=400",
            title: "Architectural Lines",
            location: "Dubai, UAE",
            date: "January 2023",
            description: "Modern architecture meeting timeless composition",
            story: "The interplay of light and shadow on these modern structures created this geometric masterpiece.",
            camera: "Nikon Z9",
            settings: "50mm f/1.8 • 1/200s • ISO 800",
        },
    ]

    // Handle photo click
    const handlePhotoClick = (photoId: string) => {
        setSelectedPhoto(photoId)
    }

    // Handle back from detail
    const handleBackFromDetail = () => {
        setSelectedPhoto(null)
    }

    // Find selected photo data
    const selectedPhotoData = photos.find((photo) => photo.id === selectedPhoto)

    // If photo is selected, show detail view
    if (selectedPhoto && selectedPhotoData) {
        return (
            <PhotoDetail
                photo={{
                    id: selectedPhotoData.id,
                    title: selectedPhotoData.title,
                    location: selectedPhotoData.location,
                    date: selectedPhotoData.date,
                    description: selectedPhotoData.description,
                    story: selectedPhotoData.story,
                    camera: selectedPhotoData.camera,
                    settings: selectedPhotoData.settings,
                    image: selectedPhotoData.src,
                }}
                onBack={handleBackFromDetail}
            />
        )
    }

    return (
        <motion.div
            ref={containerRef}
            className="min-h-screen bg-white text-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Subtle Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-2 h-2 bg-gray-300 rounded-full"
                    style={{ y: y1 }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                    className="absolute bottom-40 left-20 w-1 h-1 bg-gray-400 rounded-full"
                    style={{ y: y2 }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center space-y-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Main Title */}
                        <div className="space-y-6">
                            <motion.h1
                                className="text-8xl md:text-9xl font-black leading-none tracking-tighter text-black"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                FOTONYARAMA
                            </motion.h1>

                            <motion.div
                                className="space-y-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <h2 className="text-2xl font-light tracking-widest text-gray-600 uppercase">Photographer</h2>
                                <div className="w-20 h-px bg-black mx-auto" />
                            </motion.div>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl font-light text-gray-700 max-w-2xl mx-auto leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            Capturing moments that matter, one frame at a time.
                            <br />
                            Based in Indonesia
                        </motion.p>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute top-32 left-32 text-gray-400 font-light text-lg"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            since 2019
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 right-32 text-gray-400 font-light text-lg"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                        >
                            available
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Image */}
                        <div className="relative">
                            <motion.div
                                className="relative overflow-hidden bg-white"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/placeholder.svg?height=600&width=500"
                                    alt="Alex - Photographer"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4">
                                    <div className="flex items-center space-x-3">
                                        <Camera size={20} className="text-gray-600" />
                                        <span className="font-mono text-sm text-gray-600">ALEX PHOTO</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <motion.div
                                className="space-y-6"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-4xl font-black tracking-tight">About</h3>
                                <div className="w-16 h-1 bg-black" />
                                <p className="text-lg leading-relaxed text-gray-700">
                                    I'm a photographer based in Tokyo, specializing in street photography, portraits, and architectural
                                    studies. My work focuses on capturing authentic moments and the beauty found in everyday life.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    With over 5 years of experience, I've had the privilege of working with clients across the globe,
                                    documenting stories that matter and creating images that resonate.
                                </p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-3 gap-8"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">500+</div>
                                    <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">25+</div>
                                    <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Countries</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">5+</div>
                                    <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Years</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6">Selected Works</h2>
                        <div className="w-20 h-1 bg-black mx-auto mb-6" />
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A curated selection of my recent photography work, spanning different genres and locations.
                        </p>
                    </motion.div>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                className="group cursor-pointer"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                onClick={() => handlePhotoClick(photo.id)}
                            >
                                <div className="relative overflow-hidden bg-white">
                                    <img
                                        src={photo.src || "/placeholder.svg"}
                                        alt={photo.title}
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="font-black text-xl mb-2">{photo.title}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={14} />
                                                <span>{photo.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Calendar size={14} />
                                                <span>{photo.date}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 mt-2">{photo.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View More */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-12 py-4 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Work
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-8 bg-black text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black">Let's Work Together</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Available for commissions, collaborations, and creative projects worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.a
                                href="mailto:alex@example.com"
                                className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Portfolio
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
