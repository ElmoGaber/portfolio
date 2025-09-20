"use client"

import { motion } from "framer-motion"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} relative cursor-pointer`}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
          <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="logoShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(59, 130, 246, 0.3)" />
          </filter>
        </defs>

        {/* Outer ring with rotation animation */}
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeDasharray="20 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          filter="url(#logoGlow)"
        />

        {/* Inner circle background */}
        <circle cx="60" cy="60" r="45" fill="url(#logoGradient)" filter="url(#logoShadow)" />

        {/* Letter M with enhanced design */}
        <motion.path
          d="M35 40 L35 80 L42 80 L42 55 L52 75 L58 75 L68 55 L68 80 L75 80 L75 40 L65 40 L55 65 L45 40 Z"
          fill="white"
          strokeWidth="2"
          stroke="white"
          filter="url(#logoGlow)"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Tech elements with animations */}
        <motion.g
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <circle cx="85" cy="35" r="4" />
          <circle cx="95" cy="45" r="3" />
          <line x1="85" y1="35" x2="95" y2="45" />
          <rect x="80" y="80" width="8" height="8" rx="2" />
          <line x1="84" y1="80" x2="84" y2="72" />
        </motion.g>

        {/* AI neural network pattern */}
        <motion.g
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        >
          <path d="M25 35 Q30 30 35 35 Q40 40 35 45 Q30 40 25 35" />
          <circle cx="30" cy="35" r="2" fill="white" />
          <circle cx="35" cy="40" r="2" fill="white" />
          <line x1="30" y1="35" x2="35" y2="40" />
        </motion.g>

        {/* Data flow lines */}
        <motion.g
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <path d="M20 60 Q40 50 60 60 Q80 70 100 60" />
          <path d="M20 70 Q40 80 60 70 Q80 60 100 70" />
        </motion.g>
      </svg>
    </motion.div>
  )
}
