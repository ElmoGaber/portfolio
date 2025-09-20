"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "../providers/theme-provider"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalSize: number
      angle: number
      angleSpeed: number
      pulseSpeed: number
      pulseDirection: number
      colorType: "red" | "blue"

      constructor(x: number, y: number, size: number, color: string, colorType: "red" | "blue") {
        this.x = x
        this.y = y
        this.size = size
        this.originalSize = size
        this.speedX = (Math.random() - 0.5) * 0.7
        this.speedY = (Math.random() - 0.5) * 0.7
        this.color = color
        this.angle = Math.random() * Math.PI * 2
        this.angleSpeed = Math.random() * 0.02 - 0.01
        this.pulseSpeed = Math.random() * 0.1
        this.pulseDirection = 1
        this.colorType = colorType
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.angle += this.angleSpeed

        // Pulse size
        if (this.size > this.originalSize * 1.5) this.pulseDirection = -1
        if (this.size < this.originalSize * 0.5) this.pulseDirection = 1
        this.size += this.pulseSpeed * this.pulseDirection

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Create gradient for particle
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Create particles
    const particleCount = 70
    const particles: Particle[] = []

    // Blue and red color scheme (no yellow)
    const redColors =
      theme === "dark"
        ? ["rgba(255, 0, 85, 0.7)", "rgba(255, 0, 85, 0.6)", "rgba(255, 0, 85, 0.5)"]
        : ["rgba(255, 0, 85, 0.5)", "rgba(255, 0, 85, 0.4)", "rgba(255, 0, 85, 0.3)"]

    const blueColors =
      theme === "dark"
        ? ["rgba(59, 130, 246, 0.7)", "rgba(37, 99, 235, 0.6)", "rgba(29, 78, 216, 0.5)"]
        : ["rgba(30, 64, 175, 0.5)", "rgba(29, 78, 216, 0.4)", "rgba(37, 99, 235, 0.3)"]

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height

      // Alternate between red and blue particles
      const isRed = i % 2 === 0
      const colorArray = isRed ? redColors : blueColors
      const color = colorArray[Math.floor(Math.random() * colorArray.length)]
      const colorType = isRed ? "red" : "blue"

      particles.push(new Particle(x, y, size, color, colorType))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / 150) * 0.15

            // Determine connection color based on particle types
            let connectionColor
            if (particles[i].colorType === "red" && particles[j].colorType === "red") {
              connectionColor = theme === "dark" ? `rgba(255, 0, 85, ${opacity})` : `rgba(255, 0, 85, ${opacity})`
            } else if (particles[i].colorType === "blue" && particles[j].colorType === "blue") {
              connectionColor = theme === "dark" ? `rgba(59, 130, 246, ${opacity})` : `rgba(30, 64, 175, ${opacity})`
            } else {
              // Mix colors for connections between different particle types
              connectionColor = theme === "dark" ? `rgba(157, 65, 165, ${opacity})` : `rgba(142, 32, 130, ${opacity})`
            }

            ctx.strokeStyle = connectionColor
            ctx.lineWidth = 0.5

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
