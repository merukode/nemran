"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal, Code, Cpu } from "lucide-react"

export default function ProgrammingLoader() {
    const [currentStep, setCurrentStep] = useState(0)
    const [dots, setDots] = useState("")

    const loadingSteps = [
        "Loading modules...",
        "Connecting to server...",
        "Authenticating user...",
        "Loading portfolio data...",
        "Almost ready...",
    ]

    useEffect(() => {
        // Animate through loading steps
        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < loadingSteps.length - 1) {
                    return prev + 1
                }
                return prev
            })
        }, 220)

        // Animate dots
        const dotsInterval = setInterval(() => {
            setDots((prev) => {
                if (prev.length >= 3) return ""
                return prev + "."
            })
        }, 180)

        return () => {
            clearInterval(stepInterval)
            clearInterval(dotsInterval)
        }
    }, [])

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-emerald-700 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-8"
                style={{
                    backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                    backgroundSize: "25px 25px",
                }}
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Code Symbols */}
                {["{", "}", "<", ">", "/", "*", "+", "="].map((symbol, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400/15 text-5xl font-mono font-bold"
                        style={{
                            left: `${8 + i * 12}%`,
                            top: `${15 + i * 9}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 8, 0],
                            opacity: [0.1, 0.25, 0.1],
                        }}
                        transition={{
                            duration: 2.5 + i * 0.3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.15,
                            ease: "easeInOut",
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            {/* Main Loading Container */}
            <div className="relative z-10 text-center max-w-md mx-auto px-4">
                {/* Terminal Window */}
                <motion.div
                    className="bg-black border-4 border-yellow-400 w-full mx-auto mb-12 shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Terminal Header */}
                    <div className="bg-yellow-400 p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Terminal size={20} className="text-black" />
                            <span className="text-black font-bold text-sm tracking-wide">SYSTEM LOGIN</span>
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm" />
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm">
                        {/* Loading Steps */}
                        <div className="space-y-3 mb-6">
                            {loadingSteps.slice(0, currentStep + 1).map((step, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex items-center space-x-3 ${index === currentStep ? "text-yellow-400" : "text-emerald-400"
                                        }`}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <span className="text-emerald-400 font-bold">{">"}</span>
                                    <span className="flex-1">{step}</span>
                                    {index === currentStep && <span className="text-yellow-400 w-4">{dots}</span>}
                                    {index < currentStep && <span className="text-green-400 text-lg">✓</span>}
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 h-2.5 rounded-full mb-6 overflow-hidden">
                            <motion.div
                                className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-full rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>

                        {/* System Info */}
                        <div className="text-emerald-400 text-xs space-y-1.5 text-left">
                            <div className="flex justify-between">
                                <span>USER:</span>
                                <span className="text-yellow-400">RAMA</span>
                            </div>
                            <div className="flex justify-between">
                                <span>STATUS:</span>
                                <span className="text-yellow-400">AUTHENTICATING</span>
                            </div>
                            <div className="flex justify-between">
                                <span>LOCATION:</span>
                                <span className="text-yellow-400">INDONESIA</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Loading Text */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-7xl font-black text-yellow-400 tracking-wider leading-none">LOGGING IN</h1>

                    <motion.div
                        className="text-xl font-bold text-white tracking-wide"
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        PLEASE WAIT{dots}
                    </motion.div>
                </motion.div>

                {/* Animated Icons */}
                <div className="absolute -top-24 -left-24">
                    <motion.div
                        className="w-18 h-18 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center shadow-lg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        <Cpu className="text-black" size={28} />
                    </motion.div>
                </div>

                <div className="absolute -top-24 -right-24">
                    <motion.div
                        className="w-18 h-18 bg-black border-4 border-yellow-400 flex items-center justify-center shadow-lg"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 8, 0],
                        }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <Code className="text-yellow-400" size={28} />
                    </motion.div>
                </div>

                {/* Loading Spinner */}
                <motion.div
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full shadow-lg" />
                </motion.div>
            </div>

            {/* Glitch Effect */}
            <motion.div
                className="absolute inset-0 bg-yellow-400 mix-blend-multiply"
                animate={{
                    opacity: [0, 0.08, 0],
                    scaleX: [1, 1.01, 1],
                }}
                transition={{
                    duration: 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                }}
            />

            {/* Matrix-style falling characters */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-emerald-400/20 font-mono text-sm font-bold"
                        style={{
                            left: `${i * 6.5}%`,
                            top: "-5%",
                        }}
                        animate={{
                            y: ["0vh", "105vh"],
                        }}
                        transition={{
                            duration: 2.5 + Math.random() * 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                            ease: "linear",
                        }}
                    >
                        {String.fromCharCode(33 + Math.random() * 94)}
                    </motion.div>
                ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none" />
        </motion.div>
    )
}
