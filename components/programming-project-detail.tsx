"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Terminal, Code, Zap, Cpu } from "lucide-react"
import { useState } from "react"
import TextPressure from "@/app/blocks/TextAnimations/TextPressure/TextPressure"

interface ProgrammingProjectDetailProps {
    project: {
        id: string
        title: string
        type: string
        description: string
        fullDescription: string
        tech: string[]
        github: string
        live: string
        status: string
        year: string
        duration: string
        team: string
        role: string
        challenges: string[]
        features: string[]
        architecture: string
        security: string[]
        performance: string
        skills: {
            coding: number
            design: number
            complexity: number
            innovation: number
        }
        images: {
            url: string
            caption: string
            type: "screenshot" | "mockup" | "diagram" | "cover"
        }[]
    }
    onBack: () => void
}

export default function ProgrammingProjectDetail({ project, onBack }: ProgrammingProjectDetailProps) {
    const [activeTab, setActiveTab] = useState("overview")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showLightbox, setShowLightbox] = useState(false)

    // Find cover image or use first image
    const coverImage = project.images.find((img) => img.type === "cover") || project.images[0]

    // Handle image navigation
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    return (
        <motion.div
            className="min-h-screen bg-emerald-700 text-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Halftone Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                        backgroundSize: "10px 10px",
                    }}
                />

                <motion.div
                    className="absolute bottom-40 left-20 w-24 h-24 bg-black border-4 border-yellow-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <div className="absolute inset-2 bg-yellow-400 flex items-center justify-center">
                        <Code size={20} className="text-black" />
                    </div>
                </motion.div>

                {/* Floating Code Symbols */}
                {["{", "}", "<", ">", "/", "*", "+", "="].map((symbol, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400/20 text-4xl font-mono font-bold"
                        style={{
                            left: `${10 + i * 10}%`,
                            top: `${20 + i * 8}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 8, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            {/* Header */}
            <header className="relative z-10 bg-black text-yellow-400 py-4 border-b-4 border-yellow-400">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    <motion.button
                        onClick={onBack}
                        className="flex items-center space-x-3 text-yellow-400 hover:text-white transition-colors font-bold"
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm uppercase tracking-wider">Back to Projects</span>
                    </motion.button>

                    <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400 text-black px-3 py-1 font-bold transform -rotate-2">VOL.{project.id}</div>
                        <div className="text-sm font-mono">PROJECT FILE</div>
                        <motion.div
                            className="w-8 h-8 bg-emerald-700 rounded-full border-2 border-yellow-400 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Cpu className="text-yellow-400" size={16} />
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Warning Stripe */}
            <div
                className="h-6 bg-yellow-400"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            #eab308,
            #eab308 20px,
            #000 20px,
            #000 40px
          )`,
                }}
            />

            {/* Hero Section */}
            <section className="relative z-10">
                <div className="relative h-[50vh] overflow-hidden bg-black">
                    {/* Main Image */}
                    <img
                        src={coverImage?.url || "/placeholder.svg?height=800&width=1200"}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

                    {/* Brutalist Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="bg-yellow-400 text-black p-6 border-4 border-black inline-block transform -rotate-2 w-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <TextPressure
                                    className="text-7xl md:text-7xl font-black leading-none"
                                    text={project.title}
                                    flex={true}
                                    alpha={false}
                                    stroke={false}
                                    width={true}
                                    weight={false}
                                    italic={true}
                                    minFontSize={50}
                                />
                                <div className="bg-black text-yellow-400 px-4 py-2 inline-block mt-4 font-bold transform rotate-1">
                                    {project.type}
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute top-0 right-8 bg-emerald-700 text-white px-4 py-2 font-bold text-xl border-4 border-black transform rotate-12"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                #{project.id}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="relative z-10 py-12">
                {/* Project Info Grid */}
                <section className="px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-4 gap-6"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            {/* Status */}
                            <motion.div
                                className="bg-black border-4 border-yellow-400 p-4 transform -rotate-1"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-black text-lg mb-3 text-yellow-400 flex items-center">
                                    <Terminal size={16} className="mr-2" />
                                    STATUS
                                </h3>
                                <div className="space-y-2">
                                    <div
                                        className={`px-3 py-2 font-bold text-sm border-2 border-black transform rotate-1 ${project.status === "LIVE" ? "bg-green-400 text-black" : "bg-yellow-400 text-black"
                                            }`}
                                    >
                                        {project.status}
                                    </div>
                                    <div className="text-sm text-emerald-500">
                                        <Calendar size={14} className="inline mr-2" />
                                        {project.year}
                                    </div>
                                    <div className="text-sm text-emerald-500">Duration: {project.duration}</div>
                                </div>
                            </motion.div>

                            {/* Team */}
                            <motion.div
                                className="bg-black border-4 border-yellow-400 p-4 transform rotate-1"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-black text-lg mb-3 text-yellow-400 flex items-center">
                                    <Users size={16} className="mr-2" />
                                    TEAM
                                </h3>
                                <div className="space-y-2">
                                    <div className="text-sm text-emerald-500">{project.team}</div>
                                    <div className="text-xs text-emerald-400 bg-emerald-900 p-2 border border-emerald-600">
                                        Role: {project.role}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Links */}
                            <motion.div
                                className="bg-black border-4 border-yellow-400 p-4 transform -rotate-1"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-black text-lg mb-3 text-yellow-400 flex items-center">
                                    <Code size={16} className="mr-2" />
                                    LINKS
                                </h3>
                                <div className="space-y-2">
                                    <motion.a
                                        href={project.github}
                                        className="flex items-center space-x-2 text-sm text-emerald-500 hover:text-yellow-400 transition-colors bg-emerald-900 p-2 border border-emerald-600"
                                        whileHover={{ x: 2, scale: 1.02 }}
                                    >
                                        <Github size={14} />
                                        <span>SOURCE</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        className="flex items-center space-x-2 text-sm text-emerald-500 hover:text-yellow-400 transition-colors bg-emerald-900 p-2 border border-emerald-600"
                                        whileHover={{ x: 2, scale: 1.02 }}
                                    >
                                        <ExternalLink size={14} />
                                        <span>DEMO</span>
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Performance */}
                            <motion.div
                                className="bg-black border-4 border-yellow-400 p-4 transform rotate-1"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-black text-lg mb-3 text-yellow-400 flex items-center">
                                    <Zap size={16} className="mr-2" />
                                    POWER
                                </h3>
                                <div className="space-y-2">
                                    <div className="text-xs text-emerald-400 bg-emerald-900 p-2 border border-emerald-600">
                                        High Performance
                                    </div>
                                    <div className="text-xs text-emerald-400 bg-emerald-900 p-2 border border-emerald-600">
                                        Scalable Architecture
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Navigation Tabs */}
                <section className="px-8 mb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-2">
                            {["overview", "gallery", "technical", "features"].map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 font-bold text-sm uppercase border-4 border-black ${activeTab === tab ? "bg-yellow-400 text-black" : "bg-black text-yellow-400 hover:bg-emerald-800"
                                        }`}
                                    style={{
                                        transform: activeTab === tab ? "rotate(-2deg)" : "rotate(0deg)",
                                    }}
                                    whileHover={{ scale: 1.05, rotate: activeTab === tab ? -2 : 2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {tab}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tab Content */}
                <section className="px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {activeTab === "overview" && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Description */}
                                    <motion.div
                                        className="bg-black border-4 border-yellow-400 p-8 transform -rotate-1"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black mb-6 text-yellow-400 flex items-center">
                                            <Terminal size={24} className="mr-3" />
                                            PROJECT OVERVIEW
                                        </h3>
                                        <p className="text-lg leading-relaxed mb-6 text-emerald-500">{project.fullDescription}</p>

                                        {/* Challenges Box */}
                                        <div className="bg-yellow-400 text-black p-4 border-4 border-black transform rotate-1">
                                            <h4 className="font-black mb-2 flex items-center">
                                                <Zap size={16} className="mr-2" />
                                                KEY CHALLENGES
                                            </h4>
                                            <ul className="space-y-1 text-sm">
                                                {project.challenges.map((challenge, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <span className="text-emerald-700 font-bold">▸</span>
                                                        <span>{challenge}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Comic Speech Bubble */}
                                        <div className="relative mt-8 bg-white border-4 border-black p-4 transform rotate-1">
                                            <div className="absolute -top-8 left-8 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-white" />
                                            <p className="font-bold text-black">
                                                "This project pushed the boundaries of modern web development!"
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Tech Stack & Performance */}
                                    <div className="space-y-8">
                                        <motion.div
                                            className="bg-yellow-400 border-4 border-black p-6 transform rotate-1"
                                            whileHover={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h4 className="text-2xl font-black mb-4 text-black flex items-center">
                                                <Code size={20} className="mr-2" />
                                                TECH STACK
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className="px-3 py-1 bg-black text-yellow-400 font-bold border-2 border-emerald-700 transform hover:rotate-2"
                                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="bg-emerald-800 border-4 border-yellow-400 p-6 transform -rotate-1"
                                            whileHover={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h4 className="text-2xl font-black mb-4 text-yellow-400 flex items-center">
                                                <Zap size={20} className="mr-2" />
                                                PERFORMANCE
                                            </h4>
                                            <p className="text-white leading-relaxed">{project.performance}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "gallery" && (
                                <div className="space-y-8">
                                    {/* Main Image Display */}
                                    <motion.div
                                        className="bg-black border-4 border-yellow-400 p-4 transform -rotate-1"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative">
                                            <img
                                                src={project.images[currentImageIndex]?.url || "/placeholder.svg?height=600&width=800"}
                                                alt={project.images[currentImageIndex]?.caption || project.title}
                                                className="w-full h-96 object-cover border-2 border-yellow-400 cursor-pointer"
                                                onClick={() => setShowLightbox(true)}
                                            />

                                            {/* Navigation Arrows */}
                                            <motion.button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 border-2 border-black font-bold hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                ←
                                            </motion.button>
                                            <motion.button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 border-2 border-black font-bold hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                →
                                            </motion.button>

                                            {/* Image Counter */}
                                            <div className="absolute bottom-4 right-4 bg-black text-yellow-400 px-3 py-1 border-2 border-yellow-400 font-bold">
                                                {currentImageIndex + 1} / {project.images.length}
                                            </div>

                                            {/* Type Badge */}
                                            <div className="absolute top-4 left-4 bg-emerald-700 text-white px-3 py-1 border-2 border-black font-bold transform -rotate-2">
                                                {project.images[currentImageIndex]?.type.toUpperCase()}
                                            </div>
                                        </div>

                                        {/* Image Caption */}
                                        <div className="mt-4 bg-white border-4 border-black p-4 transform rotate-1">
                                            <p className="font-bold text-black">{project.images[currentImageIndex]?.caption}</p>
                                        </div>
                                    </motion.div>

                                    {/* Thumbnail Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {project.images.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                className={`cursor-pointer border-4 ${index === currentImageIndex ? "border-yellow-400" : "border-black"
                                                    } transform hover:scale-105 transition-transform`}
                                                onClick={() => setCurrentImageIndex(index)}
                                                whileHover={{ rotate: 2 }}
                                            >
                                                <img
                                                    src={image.url || "/placeholder.svg"}
                                                    alt={image.caption}
                                                    className="w-full h-24 object-cover"
                                                />
                                                <div className="bg-black text-yellow-400 p-2 text-xs font-bold text-center">
                                                    {image.type.toUpperCase()}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "technical" && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Architecture */}
                                    <motion.div
                                        className="bg-black border-4 border-yellow-400 p-8 transform -rotate-1"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black mb-6 text-yellow-400 flex items-center">
                                            <Cpu size={24} className="mr-3" />
                                            ARCHITECTURE
                                        </h3>
                                        <p className="text-lg leading-relaxed text-emerald-500">{project.architecture}</p>
                                    </motion.div>

                                    {/* Performance */}
                                    <motion.div
                                        className="bg-yellow-400 border-4 border-black p-8 transform rotate-1"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black mb-6 text-black flex items-center">
                                            <Zap size={24} className="mr-3" />
                                            PERFORMANCE
                                        </h3>
                                        <p className="text-lg leading-relaxed text-black">{project.performance}</p>
                                    </motion.div>

                                    {/* Security */}
                                    <motion.div
                                        className="bg-emerald-800 border-4 border-yellow-400 p-8 transform rotate-1 lg:col-span-2"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black mb-6 text-yellow-400 flex items-center">
                                            <Terminal size={24} className="mr-3" />
                                            SECURITY MEASURES
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.security.map((measure, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start space-x-2 bg-black p-3 border-2 border-yellow-400"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <span className="text-yellow-400 font-bold">🔒</span>
                                                    <span className="text-white text-sm">{measure}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            )}

                            {activeTab === "features" && (
                                <div className="space-y-8">
                                    <motion.div
                                        className="bg-black border-4 border-yellow-400 p-8 transform -rotate-1"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black mb-6 text-yellow-400 flex items-center">
                                            <Code size={24} className="mr-3" />
                                            KEY FEATURES
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {project.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-yellow-400 text-black p-4 border-4 border-black transform hover:rotate-1 transition-transform"
                                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                                >
                                                    <div className="flex items-start space-x-3">
                                                        <span className="text-emerald-700 font-bold text-xl">✓</span>
                                                        <span className="font-bold">{feature}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="px-8 mt-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <motion.a
                                href={project.github}
                                className="bg-black text-yellow-400 px-8 py-4 border-4 border-yellow-400 flex items-center justify-center space-x-3 font-bold text-lg transform hover:rotate-1"
                                whileHover={{ scale: 1.05, y: -2, rotate: 1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Github size={24} />
                                <span>VIEW SOURCE CODE</span>
                            </motion.a>

                            <motion.a
                                href={project.live}
                                className="bg-yellow-400 text-black px-8 py-4 border-4 border-black flex items-center justify-center space-x-3 font-bold text-lg transform hover:-rotate-1"
                                whileHover={{ scale: 1.05, y: -2, rotate: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <ExternalLink size={24} />
                                <span>LIVE DEMO</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Lightbox Modal */}
            {showLightbox && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowLightbox(false)}
                >
                    <motion.div
                        className="relative max-w-6xl max-h-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={project.images[currentImageIndex]?.url || "/placeholder.svg"}
                            alt={project.images[currentImageIndex]?.caption}
                            className="max-w-full max-h-full object-contain border-4 border-yellow-400"
                        />
                        <motion.button
                            onClick={() => setShowLightbox(false)}
                            className="absolute top-4 right-4 bg-yellow-400 text-black p-2 border-2 border-black font-bold hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}

            {/* Bottom Decoration */}
            <div className="relative z-10 bg-black border-t-4 border-yellow-400 overflow-hidden py-4">
                <motion.div
                    className="whitespace-nowrap"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <span className="text-yellow-400 font-black text-lg tracking-wider">
                        ⚡ BRUTALIST CODE ⚡ STREETWEAR TECH ⚡ DIGITAL REBELLION ⚡ BRUTALIST CODE ⚡ STREETWEAR TECH ⚡ DIGITAL
                        REBELLION ⚡
                    </span>
                </motion.div>
            </div>
        </motion.div>
    )
}
