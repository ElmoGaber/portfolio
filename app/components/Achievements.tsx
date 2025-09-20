"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaGraduationCap } from "react-icons/fa"
import { useLanguage } from "../providers/language-provider"

export default function Achievements() {
  const { t } = useLanguage()

  const achievements = [
    {
      title: "AI Pioneers Community Volunteer",
      description: "Volunteer in AI Pioneers Community in ML Section at Delta University for Science and Technology.",
      icon: <FaAward className="text-yellow-500 text-3xl" />,
      year: "Spring 2025",
      category: "Service",
    },
    {
      title: "PKS Community Volunteer",
      description: "Volunteer in PKS Community in Graphic Designer Section.",
      icon: <FaStar className="text-yellow-500 text-3xl" />,
      year: "Spring 2025",
      category: "Service",
    },
    {
      title: "Outstanding Student",
      description: "Recognized at the level of my college in the scientific day of the college.",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      year: "2023",
      category: "Academic",
    },
    {
      title: "Competition Winner",
      description: "Secured fifth place in presenting my project in the competition.",
      icon: <FaMedal className="text-yellow-500 text-3xl" />,
      year: "2024",
      category: "Academic",
    },
    {
      title: "Leadership Excellence",
      description: "Led chapter of 4 members to work towards goals that improve and promote community service.",
      icon: <FaStar className="text-yellow-500 text-3xl" />,
      year: "2024",
      category: "Leadership",
    },
    {
      title: "ICPC Volunteer",
      description: "Volunteered in International Collegiate Programming Contest at Delta University.",
      icon: <FaAward className="text-yellow-500 text-3xl" />,
      year: "2025",
      category: "Service",
    },
    {
      title: "Certified Data Scientist Professional",
      description: "Earned CDSP certification with practical skills in AI, Deep Learning, and Data Science.",
      icon: <FaCertificate className="text-yellow-500 text-3xl" />,
      year: "2023",
      category: "Professional",
    },
    {
      title: "AI Model Optimization",
      description: "Increased prediction accuracy by 30% for AI models during Codsoft internship.",
      icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
      year: "2024",
      category: "Professional",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("achievementsTitle")}</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">{t("achievementsSubtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg p-6 shadow-md border border-border relative overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow:
                  index % 2 === 0
                    ? "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                    : "0 10px 25px -5px rgba(255, 0, 85, 0.3)",
              }}
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-primary/10 to-transparent w-1/2 h-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {achievement.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{achievement.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/50">Year: {achievement.year}</span>
                  <motion.div
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index % 2 === 0 ? (
                      <FaTrophy className="text-primary text-sm" />
                    ) : (
                      <FaMedal className="text-secondary text-sm" />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
