"use client"

import type React from "react"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, Zap, Star, ThumbsUp, Terminal, Code, Cpu } from "lucide-react"
import ProjectDetail from "@/components/project-detail"
export default function ProgrammerPortfolio() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [selectedProject, setSelectedProject] = useState<string | null>(null)
    const [terminalLines, setTerminalLines] = useState<string[]>([])
    const [terminalInput, setTerminalInput] = useState("")
    const [terminalCursor, setTerminalCursor] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)
    const projectsSectionRef = useRef<HTMLDivElement>(null)
    const projectsContainerRef = useRef<HTMLDivElement>(null)
    const [isTerminalReady, setIsTerminalReady] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Horizontal scroll for projects section
    const { scrollYProgress: projectsScrollProgress } = useScroll({
        target: projectsSectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

    // Render skill rating
    const renderSkillRating = (level: number) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <ThumbsUp key={i} size={16} className={`${i < level ? "text-yellow-400" : "text-gray-600 opacity-30"}`} />
                ))}
            </div>
        )
    }

    // Handle project click
    const handleProjectClick = (projectId: string) => {
        setSelectedProject(projectId)
    }

    // Handle back from detail
    const handleBackFromDetail = () => {
        setSelectedProject(null)
    }

    const projects = [
        {
            id: "01",
            title: "NEXUS CORE",
            type: "FULL-STACK",
            description:
                "Enterprise-grade real-time collaboration platform revolutionizing remote teamwork with cutting-edge WebSocket technology.",
            fullDescription:
                "NEXUS CORE is a comprehensive real-time collaboration platform designed for distributed teams across the globe. This enterprise-grade solution features live document editing with conflict resolution, HD video conferencing with screen sharing, advanced project management tools, and seamless file sharing with version control. Built with modern web technologies to ensure scalability, security, and performance at enterprise scale.",
            tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript"],
            github: "https://github.com/RAMAdev/nexus-core",
            live: "https://nexus-core.demo.com",
            status: "LIVE",
            year: "2024",
            duration: "8 months",
            team: "6 developers",
            role: "Lead Full-Stack Developer & Technical Architect",
            challenges: [
                "Real-time synchronization across 10,000+ concurrent users",
                "Implementing operational transformation for conflict-free document editing",
                "Optimizing WebSocket connections for global scalability",
                "Building robust authentication with enterprise SSO integration",
                "Ensuring 99.9% uptime with zero-downtime deployments",
            ],
            features: [
                "Real-time collaborative document editing with operational transformation",
                "HD video conferencing with screen sharing and recording",
                "Advanced project management with Kanban boards and Gantt charts",
                "File sharing with version control and collaborative annotations",
                "Team chat with threaded conversations and emoji reactions",
                "Mobile-responsive design with offline synchronization",
                "Enterprise SSO integration (SAML, OAuth, LDAP)",
                "Advanced analytics and reporting dashboard",
            ],
            architecture:
                "Microservices architecture deployed on AWS with separate services for authentication, real-time communication, file storage, and user management. Uses Redis Cluster for session management and horizontal scaling, PostgreSQL with read replicas for data persistence, and CloudFront CDN for global content delivery.",
            security: [
                "JWT-based authentication with refresh token rotation",
                "End-to-end encryption for sensitive data transmission",
                "Rate limiting and DDoS protection with AWS WAF",
                "Comprehensive input validation and SQL injection prevention",
                "CORS and CSP security headers with strict policies",
                "Regular security audits and penetration testing",
            ],
            performance:
                "Handles 10,000+ concurrent users with 99.9% uptime. Average response time under 150ms globally. Supports real-time collaboration for documents up to 10MB with sub-second synchronization.",
            skills: {
                coding: 5,
                design: 4,
                complexity: 5,
                innovation: 5,
            },
            images: [
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Nexus+Core+Dashboard",
                    caption: "Main dashboard interface showing real-time collaboration metrics and active projects",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Document+Editor+Interface",
                    caption: "Collaborative document editor with multiple users editing simultaneously",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Video+Conference+Room",
                    caption: "HD video conferencing interface with screen sharing and participant management",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=System+Architecture+Diagram",
                    caption: "Comprehensive system architecture showing microservices and data flow",
                    type: "diagram" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Mobile+App+Interface",
                    caption: "Responsive mobile interface with offline synchronization capabilities",
                    type: "mockup" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Nexus+Core+Hero",
                    caption: "Nexus Core - Enterprise Collaboration Platform",
                    type: "cover" as const,
                },
            ],
        },
        {
            id: "02",
            title: "CIPHER NET",
            type: "SECURITY",
            description:
                "Military-grade encrypted messaging platform with zero-knowledge architecture and quantum-resistant cryptography.",
            fullDescription:
                "CIPHER NET is a next-generation secure messaging platform that prioritizes user privacy through military-grade end-to-end encryption and zero-knowledge architecture. Built for journalists, activists, and security-conscious individuals, it ensures that no messages or user data are ever stored on servers in readable format. Features quantum-resistant cryptography and perfect forward secrecy.",
            tech: ["Next.js", "WebCrypto API", "IndexedDB", "WebRTC", "Rust", "WASM", "Signal Protocol", "Tor"],
            github: "https://github.com/RAMAdev/cipher-net",
            live: "https://cipher-net.onion",
            status: "BETA",
            year: "2024",
            duration: "12 months",
            team: "4 security experts",
            role: "Security Lead & Cryptography Architect",
            challenges: [
                "Implementing quantum-resistant encryption algorithms",
                "Designing secure key exchange without server knowledge",
                "Ensuring message integrity with perfect forward secrecy",
                "Cross-platform compatibility with consistent security",
                "Protecting against timing and side-channel attacks",
            ],
            features: [
                "Military-grade end-to-end encryption (AES-256 + ChaCha20)",
                "Self-destructing messages with configurable timers",
                "Anonymous user registration with no personal data",
                "Secure file sharing with encrypted metadata",
                "Voice and video calls with SRTP encryption",
                "Multi-device synchronization with zero-knowledge sync",
                "Tor network integration for ultimate anonymity",
                "Quantum-resistant key exchange protocols",
            ],
            architecture:
                "Client-side encryption with keys never leaving user devices. Rust-based cryptographic core compiled to WebAssembly for performance. WebRTC for peer-to-peer communication. Tor hidden service for anonymous access. Zero-knowledge server architecture with encrypted metadata.",
            security: [
                "AES-256-GCM and ChaCha20-Poly1305 encryption",
                "Perfect forward secrecy with Double Ratchet algorithm",
                "Zero-knowledge server architecture with encrypted metadata",
                "Quantum-resistant key exchange (CRYSTALS-Kyber)",
                "Regular security audits by independent firms",
                "Open-source cryptographic implementation",
            ],
            performance:
                "Sub-50ms message delivery with military-grade encryption. Supports groups up to 1000 members. Quantum-resistant algorithms add <10ms latency.",
            skills: {
                coding: 5,
                design: 3,
                complexity: 5,
                innovation: 5,
            },
            images: [
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Cipher+Net+Interface",
                    caption: "Secure messaging interface with encryption status indicators",
                    type: "cover" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Encryption+Architecture",
                    caption: "End-to-end encryption flow with quantum-resistant algorithms",
                    type: "diagram" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Chat+Security+Features",
                    caption: "Chat interface showing self-destructing messages and encryption details",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Key+Exchange+Process",
                    caption: "Secure key exchange and verification process visualization",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Mobile+Security+App",
                    caption: "Mobile application with biometric authentication and secure storage",
                    type: "mockup" as const,
                },
            ],
        },
        {
            id: "03",
            title: "VAULT SYSTEM",
            type: "FINTECH",
            description:
                "Privacy-first personal finance management with local-only data storage and advanced AI-powered insights.",
            fullDescription:
                "VAULT SYSTEM is a revolutionary personal finance management platform that keeps all user data completely local while providing powerful analytics and budgeting tools. Built with privacy-by-design principles, no financial data ever leaves the user's device. Features AI-powered spending insights, investment tracking, and comprehensive financial planning tools.",
            tech: ["React", "Rust", "SQLite", "Tauri", "WebAssembly", "TensorFlow.js", "Chart.js", "Plaid API"],
            github: "https://github.com/RAMAdev/vault-system",
            live: "https://vault-system.app",
            status: "LIVE",
            year: "2023",
            duration: "6 months",
            team: "3 developers",
            role: "Lead Developer & Product Architect",
            challenges: [
                "Local data synchronization across multiple devices",
                "Complex financial calculations with high precision",
                "Real-time data visualization performance optimization",
                "Cross-platform desktop app development with native performance",
                "Implementing AI insights without cloud processing",
            ],
            features: [
                "Comprehensive expense tracking with automatic categorization",
                "Advanced budget planning with predictive analytics",
                "Investment portfolio tracking with real-time market data",
                "Financial goal setting with milestone tracking",
                "Encrypted data export and backup capabilities",
                "Offline-first functionality with local AI processing",
                "Bank account integration with read-only access",
                "Tax preparation assistance with document generation",
            ],
            architecture:
                "Desktop application built with Tauri framework, combining Rust backend for performance with React frontend for user experience. SQLite with WAL mode for local data storage. TensorFlow.js for client-side AI processing. Encrypted cloud backup optional with user-controlled keys.",
            security: [
                "Local-only data storage with no cloud dependencies",
                "AES-256 encryption for backup files",
                "Zero third-party data sharing or analytics",
                "Secure local authentication with biometric support",
                "Regular security updates with automatic verification",
                "Open-source cryptographic libraries",
            ],
            performance:
                "Handles 1,000,000+ transactions with instant search and filtering. Real-time chart updates at 60fps. AI insights processing under 2 seconds locally.",
            skills: {
                coding: 5,
                design: 4,
                complexity: 4,
                innovation: 4,
            },
            images: [
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Vault+Dashboard",
                    caption: "Comprehensive financial dashboard with spending analytics and budget overview",
                    type: "cover" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Budget+Planning+Interface",
                    caption: "Advanced budget planning interface with predictive analytics",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Investment+Portfolio",
                    caption: "Investment portfolio tracking with real-time market data and performance metrics",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Privacy+Architecture",
                    caption: "Local-first data architecture ensuring complete privacy",
                    type: "diagram" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Mobile+Companion",
                    caption: "Mobile companion app for expense tracking on the go",
                    type: "mockup" as const,
                },
            ],
        },
        {
            id: "04",
            title: "GHOST SHARE",
            type: "DEV TOOL",
            description:
                "Anonymous code sharing platform with automatic expiration, syntax highlighting, and developer collaboration tools.",
            fullDescription:
                "GHOST SHARE is an innovative developer tool for sharing code snippets anonymously with automatic expiration. Perfect for code reviews, debugging sessions, and temporary collaboration without leaving digital traces. Features advanced syntax highlighting, collaborative editing, and integration with popular development tools.",
            tech: ["Svelte", "Go", "Redis", "Docker", "WebAssembly", "Monaco Editor", "WebSocket", "Kubernetes"],
            github: "https://github.com/RAMAdev/ghost-share",
            live: "https://ghost-share.dev",
            status: "LIVE",
            year: "2023",
            duration: "4 months",
            team: "Solo project",
            role: "Full-Stack Developer & DevOps Engineer",
            challenges: [
                "Implementing automatic content expiration at scale",
                "Anonymous user management without tracking",
                "Advanced syntax highlighting for 100+ programming languages",
                "Preventing abuse and spam in anonymous environment",
                "Real-time collaborative editing without user accounts",
            ],
            features: [
                "Anonymous code sharing with zero registration",
                "Flexible expiration (1 hour to 30 days)",
                "Advanced syntax highlighting for 100+ languages",
                "Real-time collaborative editing with live cursors",
                "Password protection and access control",
                "View count tracking and analytics",
                "Mobile-friendly responsive interface",
                "API integration for development tools",
            ],
            architecture:
                "Lightweight Go backend with Redis for temporary storage and real-time features. Svelte frontend for fast, reactive UI. Docker containers orchestrated with Kubernetes for auto-scaling. Monaco Editor for advanced code editing experience.",
            security: [
                "No user registration or personal data collection",
                "Automatic content deletion with secure wiping",
                "Rate limiting per IP with progressive delays",
                "Content sanitization and XSS prevention",
                "No permanent logs or tracking",
                "HTTPS-only with strict security headers",
            ],
            performance:
                "Serves 10M+ code snippets monthly with 99.9% uptime. Sub-100ms response times globally. Auto-scales to handle traffic spikes.",
            skills: {
                coding: 4,
                design: 3,
                complexity: 3,
                innovation: 5,
            },
            images: [
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Ghost+Share+Editor",
                    caption: "Advanced code editor with syntax highlighting and collaborative features",
                    type: "cover" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Collaboration+Features",
                    caption: "Real-time collaborative editing with live cursors and user presence",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Sharing+Configuration",
                    caption: "Flexible sharing options with expiration settings and access controls",
                    type: "screenshot" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=System+Architecture",
                    caption: "Scalable system architecture with auto-expiring content lifecycle",
                    type: "diagram" as const,
                },
                {
                    url: "/placeholder.svg?height=800&width=1200&text=Mobile+Interface",
                    caption: "Mobile-optimized interface for code sharing on the go",
                    type: "mockup" as const,
                },
            ],
        },
    ]

    // Find selected project data
    const selectedProjectData = projects.find((project) => project.id === selectedProject)

    // If project is selected, show detail view
    if (selectedProject && selectedProjectData) {
        return <ProjectDetail project={selectedProjectData} onBack={handleBackFromDetail} />
    }

    const handleTerminalSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (terminalInput.trim() === "") return

        const newLines = [...terminalLines, `> ${terminalInput}`]

        if (terminalInput === "help") {
            newLines.push("Available commands: help, clear, about")
        } else if (terminalInput === "clear") {
            setTerminalLines([])
            setTerminalInput("")
            return
        } else if (terminalInput === "about") {
            newLines.push(
                "I am a full-stack developer with a passion for building innovative and user-friendly applications.",
            )
        } else {
            newLines.push(`Command not found: ${terminalInput}`)
        }

        setTerminalLines(newLines)
        setTerminalInput("")

        // Scroll to bottom of terminal
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
            setTerminalCursor((prev) => !prev)
        }, 500)

        setTerminalLines(["Welcome to the interactive terminal!", "Type 'help' to get started."])
        setIsTerminalReady(true)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <motion.div
            ref={containerRef}
            className="min-h-screen bg-emerald-700 text-black overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

                {/* Streetwear Elements */}
                {/* Floating Sneaker */}
                <motion.div
                    className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black"
                    style={{ y: y1, rotate: rotation }}
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="text-black font-bold text-xs">👟</div>
                </motion.div>

                {/* Graffiti Tag */}
                <motion.div
                    className="absolute top-1/3 left-10 text-yellow-400 font-black text-2xl transform -rotate-12"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7],
                        rotate: [-12, -8, -12],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                    FRESH
                </motion.div>

                {/* Moving Skateboard */}
                <motion.div
                    className="absolute bottom-32 left-32 w-24 h-8 bg-black border-2 border-yellow-400"
                    style={{ y: y2 }}
                    animate={{
                        x: [0, 100, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="absolute -bottom-2 left-2 w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <div className="absolute -bottom-2 right-2 w-3 h-3 bg-emerald-500 rounded-full"></div>
                </motion.div>

                {/* Floating Cap */}
                <motion.div
                    className="absolute top-1/2 right-1/4 w-12 h-8 bg-emerald-700 border-2 border-black"
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400"></div>
                </motion.div>

                {/* Chain Links */}
                <motion.div
                    className="absolute bottom-1/4 right-10 flex space-x-1"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 border-2 border-yellow-400 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Spray Can */}
                <motion.div
                    className="absolute top-2/3 left-1/4 w-6 h-16 bg-black border-2 border-yellow-400"
                    animate={{
                        x: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-yellow-400"></div>
                    <motion.div
                        className="absolute -top-2 -right-2 w-2 h-2 bg-emerald-500 rounded-full"
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                        }}
                    />
                </motion.div>

                {/* Boombox */}
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-20 h-12 bg-black border-2 border-yellow-400"
                    animate={{
                        scale: [1, 1.05, 1],
                        y: [0, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute top-1 left-1 w-4 h-4 bg-emerald-700 border border-yellow-400"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-emerald-700 border border-yellow-400"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400"></div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400"
                        animate={{
                            scale: [1, 2, 1],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    />
                </motion.div>

                {/* Floating Tags */}
                <motion.div
                    className="absolute top-1/4 right-1/3 text-emerald-500 font-bold text-lg transform rotate-12"
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    DOPE
                </motion.div>

                <motion.div
                    className="absolute bottom-1/2 left-1/3 text-yellow-400 font-bold text-xl transform -rotate-6"
                    animate={{
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    SICK
                </motion.div>
            </div>

            {/* Header */}
            <header className="relative z-10 bg-black text-yellow-400 py-4 border-b-4 border-yellow-400">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className="w-10 h-10 bg-emerald-700 rounded-full border-2 border-yellow-400 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Cpu className="text-yellow-400" size={20} />
                        </motion.div>
                        <div className="text-xl font-bold tracking-wider">DEV-ZINE</div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-sm font-mono">VOL.024</div>
                        <div className="bg-yellow-400 text-black px-2 py-1 font-bold">
                            {currentTime.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 py-20 px-8 border-b-8 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Title */}
                        <div>
                            <motion.div
                                className="bg-black p-8 transform -rotate-2"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.h1 className="text-8xl font-black text-yellow-400 leading-none tracking-tighter">
                                    RAMA
                                </motion.h1>
                            </motion.div>

                            {/* Speech Bubble */}
                            <motion.div
                                className="relative mt-12 bg-white border-4 border-black p-6 transform rotate-1"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <div className="absolute -top-10 -left-6 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-white transform -rotate-30" />
                                <p className="text-xl font-bold">
                                    "I build digital experiences that push boundaries and break conventions!"
                                </p>
                                <div className="mt-4 flex items-center">
                                    <Zap className="text-yellow-400 mr-2" />
                                    <span className="text-sm font-bold">FULL-STACK DEVELOPER</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Character */}
                        <motion.div
                            className="relative"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="bg-emerald-800 border-4 border-black p-8">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=400&width=400&text=DEVELOPER"
                                        alt="Developer Character"
                                        className="w-full h-auto border-4 border-black"
                                    />

                                    {/* Spiral Eyes Overlay */}
                                    <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white rounded-full border-4 border-black">
                                        <motion.div
                                            className="w-full h-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        >
                                            <div className="w-full h-full border-4 border-black rounded-full border-t-yellow-400 border-r-yellow-400" />
                                        </motion.div>
                                    </div>

                                    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full border-4 border-black">
                                        <motion.div
                                            className="w-full h-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        >
                                            <div className="w-full h-full border-4 border-black rounded-full border-t-yellow-400 border-r-yellow-400" />
                                        </motion.div>
                                    </div>

                                    {/* Comic Elements */}
                                    <motion.div className="absolute -top-6 -right-6 bg-yellow-400 text-black p-2 transform rotate-12 border-2 border-black">
                                        <span className="font-bold text-lg">TA-DA!</span>
                                    </motion.div>
                                </div>

                                {/* Stats */}
                                <div className="mt-8 space-y-4">
                                    <div className="bg-black p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-yellow-400 font-bold">CODING SKILLS:</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <ThumbsUp key={i} size={16} className={`${i < 5 ? "text-yellow-400" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-emerald-500 text-sm mt-1">
                                            (Fluent in 10+ programming languages and frameworks)
                                        </div>
                                    </div>

                                    <div className="bg-black p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-yellow-400 font-bold">PROBLEM SOLVING:</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <ThumbsUp key={i} size={16} className={`${i < 4 ? "text-yellow-400" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-emerald-500 text-sm mt-1">(Tackles complex challenges with ease)</div>
                                    </div>

                                    <div className="bg-black p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-yellow-400 font-bold">CREATIVITY:</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <ThumbsUp key={i} size={16} className={`${i < 5 ? "text-yellow-400" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-emerald-500 text-sm mt-1">(Thinks outside the conventional box)</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Running Text Animation - Middle of Site */}
            <motion.div
                className="relative z-10 w-full overflow-hidden my-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="bg-yellow-400 border-4 border-black transform -rotate-2 py-6 overflow-hidden"
                    style={{
                        width: "120%",
                        marginLeft: "-10%",
                    }}
                >
                    <motion.div
                        className="whitespace-nowrap"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            duration: 30,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        <span className="text-black font-black text-2xl md:text-4xl tracking-wider">
                            ★ NO PIXELS WERE HARMED IN THE MAKING OF THIS SITE ★ BRUTALISM MEETS STREETWEAR ★ CODE WITH ATTITUDE ★
                            FRESH DESIGNS ONLY ★ KEEP IT REAL ★ NO PIXELS WERE HARMED IN THE MAKING OF THIS SITE ★ BRUTALISM MEETS
                            STREETWEAR ★ CODE WITH ATTITUDE ★ FRESH DESIGNS ONLY ★ KEEP IT REAL ★ NO PIXELS WERE HARMED IN THE MAKING
                            OF THIS SITE ★ BRUTALISM MEETS STREETWEAR ★ CODE WITH ATTITUDE ★ FRESH DESIGNS ONLY ★ KEEP IT REAL ★
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Terminal About Me Section */}
            <section className="relative z-10 py-20 px-8 bg-black border-b-8 border-yellow-400">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-yellow-400 text-black p-6 border-4 border-black transform -rotate-1 inline-block">
                            <h2 className="text-5xl font-black">ABOUT ME</h2>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-black border-4 border-yellow-400"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Terminal Header */}
                        <div className="bg-emerald-700 p-3 flex items-center justify-between border-b-4 border-yellow-400">
                            <div className="flex items-center space-x-2">
                                <Terminal size={18} className="text-yellow-400" />
                                <span className="text-yellow-400 font-bold">terminal@RAMA:~</span>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div ref={terminalRef} className="bg-gray-900 p-4 font-mono text-sm h-80 overflow-y-auto">
                            {terminalLines.map((line, index) => (
                                <div key={index} className={line.startsWith(">") ? "text-yellow-400 mb-1" : "text-emerald-500 mb-1"}>
                                    {line}
                                </div>
                            ))}
                            <form onSubmit={handleTerminalSubmit} className="flex items-center mt-2">
                                <span className="text-yellow-400 mr-2">{">"}</span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    className="bg-transparent text-white focus:outline-none flex-1"
                                    autoFocus
                                />
                                <span className={`w-3 h-5 bg-white ${terminalCursor ? "opacity-100" : "opacity-0"}`}></span>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-6 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-yellow-400 font-bold">Type 'help' to see available commands</p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsSectionRef} className="relative z-10 py-20 px-8 bg-black border-t-8 border-yellow-400">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-yellow-400 text-black p-6 border-4 border-white transform -rotate-1 inline-block mb-8">
                            <h2 className="text-5xl font-black">FEATURED PROJECTS</h2>
                        </div>
                        <p className="text-yellow-400 font-bold text-xl">Check out some of my latest work and side projects!</p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="bg-emerald-800 border-4 border-yellow-400 cursor-pointer overflow-hidden"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                viewport={{ once: true }}
                                onClick={() => handleProjectClick(project.id)}
                            >
                                {/* Project Header */}
                                <div className="bg-yellow-400 text-black p-4 flex justify-between items-center border-b-4 border-black">
                                    <div className="flex items-center">
                                        <div className="bg-black text-yellow-400 px-3 py-1 font-black text-lg font-mono border-2 border-emerald-700 transform -rotate-2">
                                            {project.id}
                                        </div>
                                        <h3 className="text-2xl font-black ml-4">{project.title}</h3>
                                    </div>
                                    <div className="bg-emerald-700 text-white px-3 py-1 font-bold transform rotate-2 border-2 border-white">
                                        {project.type}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-6">
                                    {/* Image */}
                                    <div className="relative bg-black p-3 border-2 border-yellow-400 transform -rotate-1">
                                        <img
                                            src={
                                                project.images.find((img) => img.type === "cover")?.url ||
                                                project.images[0]?.url ||
                                                "/placeholder.svg?height=300&width=500&text=Placeholder" ||
                                                "/placeholder.svg"
                                            }
                                            alt={project.title}
                                            className="w-full h-48 object-cover border-2 border-yellow-400"
                                        />
                                        <motion.div className="absolute top-6 right-6 bg-yellow-400 text-black p-2 transform rotate-12 border-2 border-black">
                                            <span className="font-bold text-sm">HOT!</span>
                                        </motion.div>
                                    </div>

                                    {/* Description */}
                                    <div className="relative bg-white border-4 border-black p-4 transform rotate-1">
                                        <div className="absolute -top-6 left-8 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-white" />
                                        <p className="font-bold text-sm leading-relaxed">{project.description}</p>
                                    </div>

                                    {/* Stats */}
                                    <div className="bg-black p-4 border-2 border-yellow-400 transform -rotate-1">
                                        <h4 className="text-yellow-400 font-bold text-lg mb-4 border-b-2 border-yellow-400 pb-2">
                                            PROJECT STATS
                                        </h4>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-emerald-500 font-bold mb-1 text-sm">CODING:</div>
                                                {renderSkillRating(project.skills.coding)}
                                            </div>

                                            <div>
                                                <div className="text-emerald-500 font-bold mb-1 text-sm">DESIGN:</div>
                                                {renderSkillRating(project.skills.design)}
                                            </div>

                                            <div>
                                                <div className="text-emerald-500 font-bold mb-1 text-sm">COMPLEXITY:</div>
                                                {renderSkillRating(project.skills.complexity)}
                                            </div>

                                            <div>
                                                <div className="text-emerald-500 font-bold mb-1 text-sm">INNOVATION:</div>
                                                {renderSkillRating(project.skills.innovation)}
                                            </div>
                                        </div>

                                        <div className="mt-4 flex justify-between">
                                            <div className="bg-emerald-700 text-white px-2 py-1 text-xs font-bold border border-white">
                                                {project.year}
                                            </div>
                                            <div
                                                className={`px-2 py-1 text-xs font-bold border ${project.status === "LIVE"
                                                        ? "bg-green-500 text-black border-black"
                                                        : "bg-yellow-400 text-black border-black"
                                                    }`}
                                            >
                                                {project.status}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="bg-yellow-400 p-4 border-2 border-black transform rotate-1">
                                        <h4 className="text-black font-bold text-lg mb-3">TECH STACK</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-black text-yellow-400 text-xs font-bold border-2 border-emerald-700"
                                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="px-2 py-1 bg-emerald-700 text-white text-xs font-bold">
                                                    +{project.tech.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.a
                                            href={project.github}
                                            className="flex-1 bg-black text-yellow-400 p-3 border-4 border-yellow-400 flex items-center justify-center space-x-2 font-bold text-sm"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={16} />
                                            <span>CODE</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            className="flex-1 bg-yellow-400 text-black p-3 border-4 border-black flex items-center justify-center space-x-2 font-bold text-sm"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={16} />
                                            <span>DEMO</span>
                                        </motion.a>
                                    </div>

                                    {/* Click to View Full Project */}
                                    <div className="text-center bg-emerald-700 text-yellow-400 p-3 font-bold text-sm border-t-4 border-yellow-400 -mx-6 -mb-6">
                                        CLICK TO VIEW FULL PROJECT DETAILS!
                                    </div>
                                </div>

                                {/* Comic-style Decorations */}
                                <AnimatePresence>
                                    {project.id === "01" && (
                                        <motion.div
                                            className="absolute top-4 right-4 bg-yellow-400 text-black p-2 transform rotate-12 border-4 border-black z-10"
                                            initial={{ scale: 0, rotate: 0 }}
                                            animate={{ scale: 1, rotate: 12 }}
                                            exit={{ scale: 0, rotate: 0 }}
                                        >
                                            <span className="font-black text-sm">NEW!</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative z-10 py-20 px-8 bg-black border-t-8 border-yellow-400">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Left Column */}
                        <div>
                            <div className="bg-emerald-700 border-4 border-yellow-400 p-8 transform -rotate-2">
                                <h2 className="text-4xl font-black text-yellow-400 mb-6">GET IN TOUCH!</h2>
                                <p className="text-white font-bold mb-8">
                                    Ready to bring your digital ideas to life? I'm available for freelance projects and collaborations!
                                </p>

                                <div className="space-y-4">
                                    <motion.a
                                        href="mailto:RAMA@example.com"
                                        className="bg-yellow-400 text-black p-4 border-4 border-black flex items-center justify-between font-bold"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <span>EMAIL ME</span>
                                        <ExternalLink size={20} />
                                    </motion.a>

                                    <motion.a
                                        href="#"
                                        className="bg-white text-black p-4 border-4 border-black flex items-center justify-between font-bold"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <span>DOWNLOAD RESUME</span>
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <div className="bg-yellow-400 border-4 border-black p-8 transform rotate-2">
                                <h3 className="text-3xl font-black text-black mb-6">SKILLS & POWERS</h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-bold text-lg">FRONTEND DEVELOPMENT</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className={`${i < 5 ? "text-black" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-black h-4 w-full">
                                            <div className="bg-emerald-700 h-full" style={{ width: "95%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-bold text-lg">BACKEND SYSTEMS</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className={`${i < 4 ? "text-black" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-black h-4 w-full">
                                            <div className="bg-emerald-700 h-full" style={{ width: "85%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-bold text-lg">UI/UX DESIGN</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className={`${i < 4 ? "text-black" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-black h-4 w-full">
                                            <div className="bg-emerald-700 h-full" style={{ width: "80%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-bold text-lg">DEVOPS & DEPLOYMENT</div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className={`${i < 3 ? "text-black" : "text-gray-600"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-black h-4 w-full">
                                            <div className="bg-emerald-700 h-full" style={{ width: "70%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comic Element */}
                            <motion.div className="absolute -bottom-10 -right-10 bg-white text-black p-4 transform rotate-12 border-4 border-black">
                                <span className="font-black text-2xl">HIRE ME!</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Running Text */}
            <div className="relative z-10 bg-black border-t-4 border-yellow-400 overflow-hidden">
                <motion.div
                    className="whitespace-nowrap py-2"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <span className="text-yellow-400 font-black text-lg tracking-wider">
                        ⚡ CODED WITH PASSION ⚡ DESIGNED WITH ATTITUDE ⚡ BUILT FOR THE STREETS ⚡ CODED WITH PASSION ⚡ DESIGNED
                        WITH ATTITUDE ⚡ BUILT FOR THE STREETS ⚡ CODED WITH PASSION ⚡ DESIGNED WITH ATTITUDE ⚡ BUILT FOR THE
                        STREETS ⚡ CODED WITH PASSION ⚡ DESIGNED WITH ATTITUDE ⚡ BUILT FOR THE STREETS ⚡
                    </span>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 bg-yellow-400 text-black py-6 border-t-4 border-black">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Code size={20} className="text-black" />
                            <span className="font-bold">DEV-ZINE</span>
                            <span className="text-sm">© 2024</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <motion.a href="#" className="bg-black text-white px-3 py-1 font-bold" whileHover={{ scale: 1.1 }}>
                                GITHUB
                            </motion.a>
                            <motion.a href="#" className="bg-black text-white px-3 py-1 font-bold" whileHover={{ scale: 1.1 }}>
                                TWITTER
                            </motion.a>
                            <motion.a href="#" className="bg-black text-white px-3 py-1 font-bold" whileHover={{ scale: 1.1 }}>
                                LINKEDIN
                            </motion.a>
                        </div>
                    </div>
                </div>
            </footer>
        </motion.div>
    )
}
