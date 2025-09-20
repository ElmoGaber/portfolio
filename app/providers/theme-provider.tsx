"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"
type FontSize = "small" | "medium" | "large"

interface ThemeContextType {
  theme: Theme
  fontSize: FontSize
  toggleTheme: () => void
  setFontSize: (size: FontSize) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [fontSize, setFontSize] = useState<FontSize>("medium")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedFontSize = localStorage.getItem("fontSize") as FontSize

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      document.documentElement.classList.toggle("dark", true)
    }

    if (savedFontSize) {
      setFontSize(savedFontSize)
      document.documentElement.classList.remove("text-small", "text-medium", "text-large")
      document.documentElement.classList.add(`text-${savedFontSize}`)
    } else {
      document.documentElement.classList.add("text-medium")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  const changeFontSize = (size: FontSize) => {
    setFontSize(size)
    document.documentElement.classList.remove("text-small", "text-medium", "text-large")
    document.documentElement.classList.add(`text-${size}`)
    localStorage.setItem("fontSize", size)
  }

  return (
    <ThemeContext.Provider value={{ theme, fontSize, toggleTheme, setFontSize: changeFontSize }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
