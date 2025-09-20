"use client"

import { FaRobot, FaVrCardboard, FaCode, FaPaintBrush } from "react-icons/fa"
import { motion } from "framer-motion"
import { useLanguage } from "../providers/language-provider"
import { useState } from "react"

export default function Skills() {
  const { t } = useLanguage()
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    {
      category: t("aiMachineLearning"),
      icon: <FaRobot className="text-5xl text-primary" />,
      items: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Generative AI",
        "Machine Learning",
        "Neural Networks",
      ],
      color: "from-primary to-primary/60",
    },
    {
      category: t("immersiveTech"),
      icon: <FaVrCardboard className="text-5xl text-secondary" />,
      items: [
        "Virtual Reality",
        "Augmented Reality",
        "3D Modeling",
        "Motion Capture",
        "Unity Development",
        "Unreal Engine",
      ],
      color: "from-secondary to-secondary/60",
    },
    {
      category: t("softwareDev"),
      icon: <FaCode className="text-5xl text-primary" />,
      items: ["Python", "JavaScript", "C++", "Java", "React & Next.js", "Flutter", "Node.js", "Database Management"],
      color: "from-primary to-primary/60",
    },
    {
      category: t("creativeDesign"),
      icon: <FaPaintBrush className="text-5xl text-secondary" />,
      items: [
        "UI/UX Design",
        "3D Animation",
        "Character Design",
        "Visual Effects",
        "Adobe Creative Suite",
        "Figma & Canva",
      ],
      color: "from-secondary to-secondary/60",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="section-spacing section-hover bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center content-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground element-spacing">{t("skillsTitle")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto word-spacing">
            Expertise across multiple domains with a focus on cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-hover bg-card rounded-2xl p-8 border border-border relative overflow-hidden group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -10 }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon with animation */}
              <motion.div
                className="text-center mb-8 relative z-10"
                animate={
                  hoveredSkill === index
                    ? {
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
                <h3 className="text-xl font-bold mt-5 text-foreground">{skill.category}</h3>
              </motion.div>

              {/* Skills list */}
              <div className="space-y-4 relative z-10">
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: itemIndex * 0.2,
                      }}
                    />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skill level indicator */}
              <motion.div
                className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                Expert
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
