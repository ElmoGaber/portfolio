"use client"

import { motion } from "framer-motion"
import { FaChartBar, FaPaintBrush, FaBrain, FaLaptopCode } from "react-icons/fa"
import { useLanguage } from "../providers/language-provider"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("aiMlTitle"),
      description: t("aiMlDesc"),
      icon: <FaBrain className="text-4xl text-primary" />,
      features: [
        "Predictive Modeling & Classification",
        "Computer Vision Applications",
        "Natural Language Processing",
        "Recommendation Systems",
        "Sentiment Analysis",
        "Model Deployment & Maintenance",
      ],
      color: "from-primary to-blue-700",
    },
    {
      title: t("dataAnalysisTitle"),
      description: t("dataAnalysisDesc"),
      icon: <FaChartBar className="text-4xl text-primary" />,
      features: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Interactive Dashboards",
        "Custom Reports & Visualizations",
        "Data Cleaning & Preprocessing",
        "ETL Pipeline Development",
      ],
      color: "from-secondary to-red-700",
    },
    {
      title: t("webMobileTitle"),
      description: t("webMobileDesc"),
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      features: [
        "React & Next.js Applications",
        "Flutter Mobile Apps",
        "Interactive Data Visualizations",
        "Responsive UI/UX Design",
        "API Development & Integration",
        "Firebase & Cloud Integration",
      ],
      color: "from-primary to-blue-700",
    },
    {
      title: t("uiUxTitle"),
      description: t("uiUxDesc"),
      icon: <FaPaintBrush className="text-4xl text-primary" />,
      features: [
        "User Interface Design",
        "User Experience Optimization",
        "Brand Identity Development",
        "Digital Marketing Materials",
        "Print Design",
        "Prototyping & Wireframing",
      ],
      color: "from-secondary to-red-700",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("servicesTitle")}</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">{t("servicesSubtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border"
              whileHover={{
                y: -10,
                boxShadow:
                  index % 2 === 0
                    ? "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                    : "0 10px 25px -5px rgba(255, 0, 85, 0.3)",
              }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-white/90">{service.description}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">What I provide:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <motion.span
                        className={`inline-block w-2 h-2 ${
                          index % 2 === 0 ? "bg-primary" : "bg-secondary"
                        } rounded-full mt-2 mr-2 flex-shrink-0`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                      />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary/90 transition duration-300 shadow-lg shadow-secondary/20 neon-button"
          >
            {t("discussProject")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
