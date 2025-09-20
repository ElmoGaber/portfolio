"use client"

import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLinktree } from "react-icons/si"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "../providers/language-provider"
import { AnimatePresence } from "framer-motion"

export default function Hero() {
  const [scrollIndicator, setScrollIndicator] = useState(true)
  const { t, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicator(window.scrollY < 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const textChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  }

  const titleText = t("heroTitle")
  const titleChars = titleText.split("")

  return (
    <section
      id="about"
      className="section-spacing section-hover min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements - Simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-16 max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative group"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gsiOcuDucaw7IQ8QbfVRGIN0Lpos9R.png"
                alt="Profile photo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center max-w-4xl content-spacing">
            {/* Animated Title */}
            {language === "ar" ? (
              // For Arabic, animate as whole text with better mobile responsiveness
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 text-foreground px-4"
                dir="rtl"
              >
                {t("heroTitle")}
              </motion.h1>
            ) : (
              // For English, improve character wrapping for mobile
              <motion.h1
                variants={textContainer}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 flex flex-wrap justify-center"
              >
                {titleText.split(" ").map((word, wordIndex) => (
                  <motion.span key={`word-${wordIndex}`} className="mx-2 my-1 inline-flex">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`char-${wordIndex}-${charIndex}`}
                        variants={textChild}
                        className="inline-block text-foreground hover:scale-110 transition-transform cursor-default"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative element-spacing px-4 sm:px-6"
            >
              <div className="bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-border shadow-xl">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed word-spacing">
                  {t("heroDescription")}
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap justify-center gap-8 element-spacing"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("viewProjects")}
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("contactMe")}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center space-x-8"
            >
              {[
                {
                  href: "https://github.com/ELMOtarek1",
                  icon: <FaGithub size={28} />,
                  color: "hover:text-primary",
                },
                {
                  href: "https://www.linkedin.com/in/momen-tarek2004",
                  icon: <FaLinkedin size={28} />,
                  color: "hover:text-secondary",
                },
                {
                  href: "https://linktr.ee/Momen_Gaber",
                  icon: <SiLinktree size={28} />,
                  color: "hover:text-primary",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-foreground ${social.color} transition-all duration-300 p-3 rounded-full hover:bg-card`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {scrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 15, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              opacity: { duration: 0.3 },
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer"
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Scroll</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5L12 19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
