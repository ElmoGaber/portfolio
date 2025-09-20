"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaBriefcase,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChevronDown,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { useLanguage } from "../providers/language-provider"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const { t } = useLanguage()

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const experiences = [
    {
      id: 1,
      title: "Python Engineer Freelancer",
      company: "Upwork Freelance",
      location: "Damaietta, Egypt",
      date: "2024 - Present",
      description: [
        "Proficient in Python frameworks (Django, Flask) and libraries (Pandas, NumPy) with a strong background in web development.",
        "Expertise in database management, RESTful APIs, and cloud services, with excellent problem-solving skills.",
        "Developing custom machine learning models and AI solutions across NLP, computer vision, and data analysis, addressing varied client needs efficiently.",
      ],
      icon: <FaCode />,
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      title: "Mobile App Intern",
      company: "Custom Tech",
      location: "Damaietta, Egypt",
      date: "2024",
      description: [
        "Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.",
        "Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.",
      ],
      icon: <FaMobileAlt />,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      id: 3,
      title: "Artificial Intelligence Intern",
      company: "Codsoft Company",
      location: "Cairo, Egypt",
      date: "2023 - 2024",
      description: [
        "Developed Chatbots, Face Recognition, and Image Captioning models.",
        "Worked on Machine Learning pipelines for automation.",
        "Increased prediction accuracy by 30%.",
      ],
      icon: <FaCode />,
      color: "from-purple-600 to-purple-800",
    },
    {
      id: 4,
      title: "Flutter & Mobile Intern",
      company: "AMIT Academy",
      location: "Cairo, Egypt",
      date: "2023",
      description: [
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
      ],
      icon: <FaMobileAlt />,
      color: "from-teal-600 to-teal-800",
    },
    {
      id: 5,
      title: "Data Analytics Consulting Intern",
      company: "Forage Company",
      location: "Damaietta, Egypt",
      date: "2023",
      description: [
        "Performed Exploratory Data Analysis (EDA) and predictive modeling.",
        "Built dashboards using Power BI & Tableau in: Exploratory Data Analysis, Data Modeling, Model Building and Interpretation, Machine Learning Production, Quality Assurance.",
      ],
      icon: <FaBriefcase />,
      color: "from-cyan-600 to-cyan-800",
    },
    {
      id: 6,
      title: "AI Developer Intern",
      company: "Instant Software Company",
      location: "Cairo, Egypt",
      date: "2022",
      description: [
        "Built AI-powered applications for real-world automation.",
        "Integrated ML models into web applications for analytics & automation.",
      ],
      icon: <FaCode />,
      color: "from-violet-600 to-violet-800",
    },
    {
      id: 7,
      title: "AI Developer Intern",
      company: "Route Software Development Academy",
      location: "Cairo, Egypt",
      date: "2022",
      description: [
        "Developed a Convolutional Neural Network (CNN) model for real-time facial emotion detection, enabling applications in sentiment analysis and user experience enhancement.",
        "Built AI-powered applications for real-world automation.",
      ],
      icon: <FaCode />,
      color: "from-blue-700 to-purple-700",
    },
    {
      id: 8,
      title: "Front End Developer Intern",
      company: "BlackStone eIT",
      location: "Mansoura, Egypt",
      date: "2021 - 2022",
      description: [
        "Proficiency in HTML, CSS, and JavaScript.",
        "Familiarity with Frameworks and Libraries. Exposure to popular front-end technologies such as React, Angular.",
        "The ability to create responsive layouts, implement design principles.",
      ],
      icon: <FaCode />,
      color: "from-slate-600 to-slate-800",
    },
    {
      id: 9,
      title: "Junior Graphic Designer",
      company: "Egy Designer Company",
      location: "Damaietta, Egypt",
      date: "2019 - 2021",
      description: [
        "Strong foundation in design principles with proficiency in Adobe Creative Suite, Figma, and Canva.",
        "Experienced in typography, layout, and color theory, creating visual content for both digital and print.",
        "Eager to work in dynamic teams.",
      ],
      icon: <FaPaintBrush />,
      color: "from-emerald-600 to-emerald-800",
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("experienceTitle")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("experienceSubtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="bg-card rounded-lg overflow-hidden shadow-md border border-border"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
            >
              <motion.div
                className={`bg-gradient-to-r ${exp.color} p-4 cursor-pointer`}
                onClick={() => toggleExpand(exp.id)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-full text-primary">{exp.icon}</div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">{exp.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/80 text-sm mt-1">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-xs" /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" /> {exp.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="text-white"
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-card">
                      <ul className="space-y-3">
                        {exp.description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-card-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/cv"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-accent transition duration-300 shadow-lg shadow-primary/20"
          >
            {t("viewFullResume")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
