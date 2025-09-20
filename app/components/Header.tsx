"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaProjectDiagram,
  FaBriefcase,
  FaTrophy,
  FaComments,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../providers/language-provider"
import Logo from "./Logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: t("home"), icon: <FaHome /> },
    { href: "#about", label: t("about"), icon: <FaUser /> },
    { href: "#skills", label: t("skills"), icon: <FaCog /> },
    { href: "#services", label: t("services"), icon: <FaProjectDiagram /> },
    { href: "#projects", label: t("projects"), icon: <FaProjectDiagram /> },
    { href: "#experience", label: t("experience"), icon: <FaBriefcase /> },
    { href: "#achievements", label: t("achievements"), icon: <FaTrophy /> },
    { href: "#testimonials", label: t("testimonials"), icon: <FaComments /> },
    { href: "#contact", label: t("contact"), icon: <FaEnvelope /> },
    { href: "/cv", label: t("cv"), icon: <FaFileAlt /> },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Logo size="sm" />
                <span className="text-2xl font-bold text-foreground">MomenTech</span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 flex-wrap">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-foreground hover:text-primary transition-all duration-300 relative group text-sm"
                >
                  <span className="text-xs">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="headerHover"
                  />
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://linktr.ee/Momen_Gaber"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary ml-2 py-1 px-4 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("linktree")}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-white transition-all duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="grid grid-cols-2 gap-3">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                        onClick={toggleMenu}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <a
                    href="https://linktr.ee/Momen_Gaber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center"
                  >
                    {t("linktree")}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
