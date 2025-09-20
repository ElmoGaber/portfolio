"use client"

import { useLanguage } from "../providers/language-provider"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-20 right-4 z-50 bg-card text-card-foreground p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors border border-border"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        {language === "en" ? (
          <>
            <span>🇸🇦</span>
            <span>العربية</span>
          </>
        ) : (
          <>
            <span>🇺🇸</span>
            <span>English</span>
          </>
        )}
      </div>
    </motion.button>
  )
}
