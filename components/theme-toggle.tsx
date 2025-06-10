"use client"

import { motion } from "framer-motion"
import { Camera, Code } from "lucide-react"

interface ThemeToggleProps {
    isPhotographer: boolean
    setIsPhotographer: (value: boolean) => void
    isLoading?: boolean
}

export default function ThemeToggle({ isPhotographer, setIsPhotographer, isLoading = false }: ThemeToggleProps) {
    return (
        <motion.div
            className="fixed top-6 right-6 z-50"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative bg-black/30 backdrop-blur-xl rounded-full p-1.5 border border-white/20 shadow-2xl">
                <div className="flex items-center space-x-1">
                    <motion.button
                        onClick={() => !isLoading && setIsPhotographer(true)}
                        className={`p-2.5 rounded-full transition-all duration-300 relative z-10 ${isPhotographer ? "text-black" : "text-white/70 hover:text-white/90"
                            } ${isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                        whileHover={!isLoading ? { scale: 1.05 } : {}}
                        whileTap={!isLoading ? { scale: 0.95 } : {}}
                        disabled={isLoading}
                    >
                        <Camera size={16} />
                    </motion.button>

                    <motion.button
                        onClick={() => !isLoading && setIsPhotographer(false)}
                        className={`p-2.5 rounded-full transition-all duration-300 relative z-10 ${!isPhotographer ? "text-black" : "text-white/70 hover:text-white/90"
                            } ${isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                        whileHover={!isLoading ? { scale: 1.05 } : {}}
                        whileTap={!isLoading ? { scale: 0.95 } : {}}
                        disabled={isLoading}
                    >
                        <Code size={16} />
                    </motion.button>
                </div>

                {/* Enhanced Sliding Indicator */}
                <motion.div
                    className={`absolute top-1.5 w-9 h-9 rounded-full shadow-xl backdrop-blur-sm ${isPhotographer ? "bg-white/95" : "bg-green-400/95"
                        }`}
                    animate={{
                        x: isPhotographer ? 6 : 42,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 40,
                        duration: 0.3,
                    }}
                />

                {/* Glow Effect */}
                <motion.div
                    className={`absolute top-1.5 w-9 h-9 rounded-full blur-sm ${isPhotographer ? "bg-white/40" : "bg-green-400/40"
                        }`}
                    animate={{
                        x: isPhotographer ? 6 : 42,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 40,
                        duration: 0.3,
                    }}
                />

                {/* Loading indicator */}
                {isLoading && (
                    <motion.div
                        className="absolute -inset-0.5 border-2 border-white/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                )}
            </div>

            {/* Labels */}
            <motion.div
                className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-mono text-white/70 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {isLoading ? "LOADING..." : isPhotographer ? "PHOTO" : "CODE"}
            </motion.div>
        </motion.div>
    )
}
