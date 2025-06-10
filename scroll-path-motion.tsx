"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress to path progress (0 to 1)
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Create transforms for the animated element position
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 200, 0, -200, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 1200])

  // Rotation based on scroll for extra visual effect
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720])

  // SVG path for the swirling motion (spiral going down)
  const spiralPath =
    "M 200 50 Q 350 150 200 250 Q 50 350 200 450 Q 350 550 200 650 Q 50 750 200 850 Q 350 950 200 1050 Q 50 1150 200 1250"

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-gradient-to-b from-blue-50 to-purple-100">
      {/* Fixed container for the animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 1300" preserveAspectRatio="xMidYMid meet">
          {/* Visible path */}
          <motion.path
            d={spiralPath}
            stroke="#e2e8f0"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Progress indicator on path */}
          <motion.path
            d={spiralPath}
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: pathProgress,
            }}
            initial={{ pathLength: 0 }}
          />
        </svg>

        {/* Animated element following the path */}
        <motion.div
          className="absolute w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
          style={{
            x,
            y,
            rotate,
            left: "50%",
            top: "10%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-pulse" />
        </motion.div>

        {/* Additional floating elements for visual interest */}
        <motion.div
          className="absolute w-4 h-4 bg-pink-400 rounded-full opacity-60"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [100, -100]),
            y: useTransform(scrollYProgress, [0, 1], [200, 800]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
          }}
        />

        <motion.div
          className="absolute w-6 h-6 bg-yellow-400 rounded-full opacity-50"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-50, 150]),
            y: useTransform(scrollYProgress, [0, 1], [300, 900]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 540]),
          }}
        />

        {/* Progress indicator */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-sm font-medium text-gray-700 mb-2">Scroll Progress</div>
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              style={{
                scaleX: scrollYProgress,
              }}
              initial={{ scaleX: 0 }}
            />
          </div>
        </div>
      </div>

      {/* Content sections to enable scrolling */}
      <div className="relative z-10 space-y-32 px-8">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Scroll-Controlled Path Animation</h1>
            <p className="text-lg text-gray-600">
              Watch the element follow the swirling path as you scroll down. The animation is synchronized with your
              scroll position.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Smooth Motion</h2>
            <p className="text-lg text-gray-600">
              The element rotates and follows a spiral path downward, creating a mesmerizing scroll experience.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">End of Journey</h2>
            <p className="text-lg text-gray-600">
              The animation completes as you reach the bottom. Scroll back up to see it in reverse!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
