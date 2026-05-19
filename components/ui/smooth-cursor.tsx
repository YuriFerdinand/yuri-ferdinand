"use client"

import { useState, useEffect, useRef } from "react"

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 })

  const dotPosition = useRef({ x: 0, y: 0 })
  const borderDotPosition = useRef({ x: 0, y: 0 })

  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } })
  const [isHovering, setIsHovering] = useState(false)

  const DOT_SMOOTHNESS = 0.2
  const BORDER_DOT_SMOOTHNESS = 0.1
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll("a, button, img, input, textarea, select")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor
      }

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS)
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS)

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS)
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS)

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      })

      requestAnimationFrame(animate)
    }

    // Start animation loop
    const animationId = requestAnimationFrame(animate)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })

      cancelAnimationFrame(animationId)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute rounded-full bg-[#e8e6e0]"
        style={{
          width: "6px",
          height: "6px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />

      <div
        className="relative rounded-lg border border border-white/0"
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#e8e6e0] rounded-tr-sm" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#e8e6e0] rounded-bl-sm" />
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#e8e6e0] rounded-tl-sm" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#e8e6e0] rounded-br-sm" />

      </div>
    </div>
  )
}
