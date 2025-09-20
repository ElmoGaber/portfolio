"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaLaptopCode, FaBook, FaCertificate, FaAward } from "react-icons/fa"
import { useLanguage } from "../providers/language-provider"

export default function Education() {
  const { t } = useLanguage()

  const educationData = [
    {
      institution: "Delta University for Science and Technology",
      degree: "Bachelor of Computers & Artificial Intelligence Department of AI",
      period: "07/2022 – Current",
      location: "Gamesa, Egypt",
      icon: <FaGraduationCap className="text-primary text-3xl" />,
    },
    {
      institution: "Information Technology Industry Development Agency- ITIDA&E-Youth",
      degree: "ITIDA GIGs Generative AI Round 6 Course",
      period: "06/2025 – 09/2025",
      location: "Cairo, Egypt",
      icon: <FaLaptopCode className="text-primary text-3xl" />,
    },
    {
      institution: "Digital Egypt Pioneers Initiative - DEPI",
      degree: "Microsoft Machine Learning Course",
      period: "08/2024 – 05/2025",
      location: "Cairo, Egypt",
      icon: <FaLaptopCode className="text-primary text-3xl" />,
    },
    {
      institution: "Information Technology Industry Development Agency- ITIDA",
      degree: "AI for Software Developers Course",
      period: "11/2023 – 08/2024",
      location: "Cairo, Egypt",
      icon: <FaLaptopCode className="text-primary text-3xl" />,
    },
  ]

  const coursesData = [
    {
      provider: "Coursera (2024)",
      courses: [
        "Introduction to Generative AI & Machine Learning With Big Data",
        "Relational Database Design & Introduction to Databases",
        "AI engineering with IBM (NLP-Computer Vision-Keras– ML– DL)",
        "DL.AI tensorflow developer (ML&DL, NLP, Time Series)",
        "Linux commands and shell scripts",
      ],
    },
    {
      provider: "Udacity (2023)",
      courses: [
        "CERTIFIED DATA SCIENTIST PROFESSIONAL - CDSP practical skills in AI, Deep Learning, Machine Learning, and Data Science",
      ],
    },
    {
      provider: "Udemy (2023)",
      courses: ["Deep Learning A-Z: Hands On Artificial Neural Networks"],
    },
    {
      provider: "DataCamp (2022)",
      courses: [
        "Front-End Development - Liner Classifiers in Python -Intermediate SQL- Machine Learning Tree Based Model",
      ],
    },
    {
      provider: "M3aarf (2022)",
      courses: ["R programming language - Computer Vision"],
    },
    {
      provider: "Mahara-tech (2021)",
      courses: ["Python programming language - database fundamentals"],
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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("educationTitle")}</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">{t("educationSubtitle")}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline for formal education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl font-semibold mb-8 text-foreground text-center flex items-center justify-center gap-2">
              <FaGraduationCap className="text-primary" />
              {t("formalEducation")}
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />

              {/* Timeline items */}
              <div className="space-y-16">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />

                    {/* Content */}
                    <motion.div
                      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Date */}
                      <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <motion.div
                          className="bg-card p-6 rounded-lg shadow-md inline-block"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.2)" }}
                        >
                          <h4 className="text-xl font-semibold text-foreground">{edu.period}</h4>
                          <p className="text-primary">{edu.location}</p>
                        </motion.div>
                      </div>

                      {/* Details */}
                      <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        <motion.div
                          className="bg-card p-6 rounded-lg shadow-md inline-block"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.2)" }}
                        >
                          <div className="flex justify-center mb-4">{edu.icon}</div>
                          <h4 className="text-xl font-semibold text-foreground">{edu.institution}</h4>
                          <p className="text-primary mt-2">{edu.degree}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Courses grid */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground text-center flex items-center justify-center gap-2">
              <FaCertificate className="text-primary" />
              {t("additionalCourses")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData.map((provider, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-card p-6 rounded-lg shadow-md"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <motion.div initial={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.5 }}>
                      <FaBook className="text-primary text-3xl" />
                    </motion.div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground text-center">{provider.provider}</h4>
                  <ul className="space-y-2">
                    {provider.courses.map((course, courseIndex) => (
                      <motion.li
                        key={courseIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: courseIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                        />
                        <span className="text-foreground/80">{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center gap-1 text-primary text-sm">
                      <FaAward /> {t("certified")}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
