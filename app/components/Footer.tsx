"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp, FaRocket } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useLanguage } from "../providers/language-provider"
import Logo from "./Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { href: "/", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "/cv", label: t("cv") },
  ]

  const socialLinks = [
    {
      href: "https://github.com/ELMOtarek1",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      color: "hover:text-primary",
    },
    {
      href: "https://www.linkedin.com/in/momen-tarek2004",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      color: "hover:text-secondary",
    },
    {
      href: "https://twitter.com/momen_tarek",
      icon: <FaTwitter size={24} />,
      label: "Twitter",
      color: "hover:text-primary",
    },
    {
      href: "mailto:momen2004tarek@gmail.com",
      icon: <FaEnvelope size={24} />,
      label: "Email",
      color: "hover:text-secondary",
    },
  ]

  return (
    <footer className="section-hover bg-background text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <Logo size="md" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">MomenTech</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("aiDeveloper")} passionate about creating innovative solutions that make a difference.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium tooltip"
              data-tooltip="Let's work together"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="text-sm" />
              Start a Project
            </motion.a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">{t("quickLinks")}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">{t("connect")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 bg-card rounded-xl ${social.color} transition-all duration-300 hover:scale-105 tooltip`}
                  data-tooltip={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            &copy; {currentYear} Momen Tarek. {t("madeWith")}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="text-secondary"
            >
              <FaHeart />
            </motion.span>
            and lots of coffee. {t("allRightsReserved")}
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 tooltip"
            data-tooltip={t("scrollToTop")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
