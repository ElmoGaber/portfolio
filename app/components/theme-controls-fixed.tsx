"use client"

import { motion } from "framer-motion"
import { FaSun, FaMoon, FaFont } from "react-icons/fa"
import { useTheme } from "../providers/theme-provider"

export default function ThemeControlsFixed() {
  const { theme, fontSize, toggleTheme, setFontSize } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-8 left-8 z-40 flex flex-col gap-3"
    >
      <motion.button
        onClick={toggleTheme}
        className="bg-card text-foreground p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors border border-border"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
      </motion.button>

      <motion.div
        className="flex flex-col items-center gap-2 bg-card rounded-full p-2 shadow-lg border border-border"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <button
          onClick={() => setFontSize("small")}
          className={`p-2 rounded-full transition-colors ${fontSize === "small" ? "bg-primary text-white" : "hover:bg-secondary/10"}`}
          aria-label="Small font size"
        >
          <FaFont size={12} />
        </button>
        <button
          onClick={() => setFontSize("medium")}
          className={`p-2 rounded-full transition-colors ${fontSize === "medium" ? "bg-primary text-white" : "hover:bg-secondary/10"}`}
          aria-label="Medium font size"
        >
          <FaFont size={16} />
        </button>
        <button
          onClick={() => setFontSize("large")}
          className={`p-2 rounded-full transition-colors ${fontSize === "large" ? "bg-primary text-white" : "hover:bg-secondary/10"}`}
          aria-label="Large font size"
        >
          <FaFont size={20} />
        </button>
      </motion.div>
    </motion.div>
  )
}
