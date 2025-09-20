"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaUserTie,
  FaUserGraduate,
  FaUser,
} from "react-icons/fa"
import { useLanguage } from "../providers/language-provider"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Tarek Hassan",
      role: "Professor at Delta University",
      type: "academic",
      text: "Momen is an exceptional student with remarkable analytical skills. His work in AI and machine learning demonstrates both technical proficiency and creative problem-solving. His outstanding performance earned him recognition at our scientific day.",
      stars: 5,
    },
    {
      name: "Nour El-Din",
      role: "Project Manager at Codsoft",
      type: "female",
      text: "During his internship, Momen developed impressive AI models that increased our prediction accuracy by 30%. His dedication to learning and ability to apply complex concepts to real-world problems make him a valuable asset to any team.",
      stars: 5,
    },
    {
      name: "Mohamed Ali",
      role: "Lead Developer at Custom Tech",
      type: "male",
      text: "Momen quickly adapted to our mobile development workflow and made significant contributions to our Flutter projects. His ability to work with Firebase and implement complex features was impressive for an intern.",
      stars: 4,
    },
    {
      name: "Layla Mahmoud",
      role: "Data Science Lead at Forage",
      type: "female",
      text: "Momen's data visualization skills are exceptional. He created insightful dashboards that transformed our raw data into actionable business intelligence. His proficiency with Power BI and Tableau helped our clients make better decisions.",
      stars: 5,
    },
    {
      name: "Omar Khaled",
      role: "UI/UX Director at Egy Designer",
      type: "male",
      text: "As a junior designer, Momen showed remarkable talent in typography, layout, and color theory. His designs were not only visually appealing but also user-focused. His proficiency with design tools like Adobe Creative Suite and Figma was impressive.",
      stars: 4,
    },
  ]

  const getProfileIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <FaUserGraduate className="text-4xl md:text-5xl text-primary" />
      case "female":
        return <FaUser className="text-4xl md:text-5xl text-pink-500" />
      case "male":
        return <FaUserTie className="text-4xl md:text-5xl text-blue-500" />
      default:
        return <FaUser className="text-4xl md:text-5xl text-primary" />
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/5 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("testimonialsTitle")}</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">{t("testimonialsSubtitle")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevTestimonial}
              className="bg-card p-2 md:p-4 rounded-full shadow-md border border-border text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextTestimonial}
              className="bg-card p-2 md:p-4 rounded-full shadow-md border border-border text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-card shadow-lg border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-4 border-primary mb-6 flex items-center justify-center shadow-lg"
                  >
                    {getProfileIcon(testimonials[currentIndex].type)}
                  </motion.div>

                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonials[currentIndex].stars ? "text-yellow-500" : "text-gray-300"}
                        size={20}
                      />
                    ))}
                  </div>

                  <div className="text-center relative">
                    <FaQuoteLeft className="absolute -top-4 -left-2 text-primary/20 text-xl md:text-2xl" />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-foreground/80 text-lg mb-6 italic"
                    >
                      {testimonials[currentIndex].text}
                    </motion.p>
                    <FaQuoteRight className="absolute -bottom-4 -right-2 text-primary/20 text-xl md:text-2xl" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-center"
                  >
                    <h4 className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
