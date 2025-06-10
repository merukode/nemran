"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function PhotographyLoader() {
    const [shutterOpen, setShutterOpen] = useState(false)

    useEffect(() => {
        // Camera shutter animation sequence
        const timer = setTimeout(() => {
            setShutterOpen(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {/* Camera Shutter Animation Container */}
            <div className="relative flex flex-col items-center">
                {/* Camera Body */}
                <motion.div
                    className="w-36 h-28 bg-gray-800 rounded-xl border-4 border-gray-600 relative shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Camera Lens */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-black rounded-full border-4 border-gray-500 shadow-inner">
                        {/* Shutter Blades */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            {/* Shutter Blade 1 */}
                            <motion.div
                                className="absolute inset-0 bg-gray-700"
                                style={{
                                    clipPath: "polygon(50% 50%, 0% 0%, 100% 0%)",
                                }}
                                animate={{
                                    rotate: shutterOpen ? -90 : 0,
                                    scale: shutterOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.15, delay: 0.1, ease: "easeInOut" }}
                            />

                            {/* Shutter Blade 2 */}
                            <motion.div
                                className="absolute inset-0 bg-gray-700"
                                style={{
                                    clipPath: "polygon(50% 50%, 100% 0%, 100% 100%)",
                                }}
                                animate={{
                                    rotate: shutterOpen ? 90 : 0,
                                    scale: shutterOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.15, delay: 0.12, ease: "easeInOut" }}
                            />

                            {/* Shutter Blade 3 */}
                            <motion.div
                                className="absolute inset-0 bg-gray-700"
                                style={{
                                    clipPath: "polygon(50% 50%, 100% 100%, 0% 100%)",
                                }}
                                animate={{
                                    rotate: shutterOpen ? 90 : 0,
                                    scale: shutterOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.15, delay: 0.14, ease: "easeInOut" }}
                            />

                            {/* Shutter Blade 4 */}
                            <motion.div
                                className="absolute inset-0 bg-gray-700"
                                style={{
                                    clipPath: "polygon(50% 50%, 0% 100%, 0% 0%)",
                                }}
                                animate={{
                                    rotate: shutterOpen ? -90 : 0,
                                    scale: shutterOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.15, delay: 0.16, ease: "easeInOut" }}
                            />

                            {/* Center opening when shutter opens */}
                            <motion.div
                                className="absolute inset-2 bg-white rounded-full shadow-lg"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: shutterOpen ? 1 : 0,
                                    opacity: shutterOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    {/* Camera Details */}
                    <div className="absolute top-3 left-3 w-3 h-3 bg-red-500 rounded-full opacity-90 shadow-sm" />
                    <div className="absolute top-3 right-3 w-5 h-2 bg-gray-600 rounded-sm" />
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-gray-600 rounded-full" />

                    {/* Brand text */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs font-mono">
                        FOTONYARAMA
                    </div>
                </motion.div>

                {/* Flash Effect */}
                <motion.div
                    className="absolute inset-0 bg-white rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: shutterOpen ? [0, 0.8, 0] : 0 }}
                    transition={{ duration: 0.1, delay: 0.25 }}
                />

                {/* Camera Click Sound Effect Visualization */}
                <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: shutterOpen ? [0, 1, 0] : 0,
                        scale: shutterOpen ? [0, 1.3, 0] : 0,
                    }}
                    transition={{ duration: 0.25, delay: 0.25 }}
                >
                    <div className="text-white font-bold text-xl tracking-wider">*CLICK*</div>
                </motion.div>

                {/* Loading Text - Properly positioned below camera */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                    <div className="text-white text-xl font-light tracking-[0.3em] mb-4">LOADING PORTFOLIO</div>
                    <motion.div
                        className="w-64 h-0.5 bg-white/30 mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="h-full bg-white origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Aperture rings animation */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/15 rounded-full"
                        initial={{ width: 0, height: 0, opacity: 0 }}
                        animate={{
                            width: shutterOpen ? [0, 150 + i * 80, 300 + i * 150] : 0,
                            height: shutterOpen ? [0, 150 + i * 80, 300 + i * 150] : 0,
                            opacity: shutterOpen ? [0, 0.4, 0] : 0,
                        }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
        </motion.div>
    )
}
