"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import PhotographyPortfolio from "../components/photography-portfolio"
import ProgrammerPortfolio from "../components/programmer-portfolio"
import ThemeToggle from "../components/theme-toggle"
import PhotographyLoader from "@/components/photography-loading"
import ProgrammingLoader from "@/components/programming-loading"
export default function Portfolio() {
  // Photography is the default page
  const [isPhotographer, setIsPhotographer] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const [pendingTheme, setPendingTheme] = useState<boolean | null>(null)

  // Use ref to track the latest timeout to prevent race conditions
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Scroll to top smoothly when theme changes
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
      scrollToTop()
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  const handleThemeChange = (newTheme: boolean) => {
    // If already loading and user clicks again, queue the new theme
    if (isLoading) {
      setPendingTheme(newTheme)
      return
    }

    // If same theme, do nothing
    if (newTheme === isPhotographer && !isLoading) {
      return
    }

    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
    }

    // Scroll to top immediately when starting transition
    scrollToTop()

    // Start the transition
    setShowContent(false)
    setPendingTheme(null)

    // Small delay to let content fade out and scroll complete
    timeoutRef.current = setTimeout(() => {
      setIsLoading(true)
      setIsPhotographer(newTheme)

      // Set loading duration based on theme
      const loadingDuration = newTheme ? 1400 : 1600 // Slightly reduced for smoother feel

      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false)
        setShowContent(true)

        // Check if there's a pending theme change
        setTimeout(() => {
          if (pendingTheme !== null && pendingTheme !== newTheme) {
            handleThemeChange(pendingTheme)
          }
        }, 100)
      }, loadingDuration)
    }, 200) // Slightly longer delay for smoother scroll
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle isPhotographer={isPhotographer} setIsPhotographer={handleThemeChange} isLoading={isLoading} />

      {/* Loading Screens */}
      <AnimatePresence mode="wait">
        {isLoading && isPhotographer && <PhotographyLoader key="photo-loader" />}
        {isLoading && !isPhotographer && <ProgrammingLoader key="prog-loader" />}
      </AnimatePresence>

      {/* Portfolio Content */}
      <AnimatePresence mode="wait">
        {showContent && !isLoading && (
          <>{isPhotographer ? <PhotographyPortfolio key="photography" /> : <ProgrammerPortfolio key="programming" />}</>
        )}
      </AnimatePresence>

      {/* Overlay to prevent interaction during loading */}
      {isLoading && <div className="fixed inset-0 z-40 bg-transparent pointer-events-none" />}
    </div>
  )
}
