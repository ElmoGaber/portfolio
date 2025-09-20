"use client"

import type React from "react"

import { useState } from "react"
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaExclamationTriangle } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../providers/language-provider"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary text-2xl" />,
      label: t("email"),
      value: "momen2004tarek@gmail.com",
      link: "mailto:momen2004tarek@gmail.com",
    },
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      label: t("phone"),
      value: "+201019822648",
      link: "tel:+201019822648",
    },
    {
      icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
      label: t("location"),
      value: "Egypt, Damietta, New Damietta",
      link: "https://maps.google.com/?q=Damietta,Egypt",
    },
  ]

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">{t("contactTitle")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("contactSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">{t("contactInfo")}</h3>
            <p className="text-muted-foreground mb-8">{t("contactDescription")}</p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      index % 2 === 0
                        ? "0 10px 25px -5px rgba(255, 0, 85, 0.2)"
                        : "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <motion.div
                    className={`flex-shrink-0 ${index % 2 === 0 ? "bg-secondary/10" : "bg-primary/10"} p-3 rounded-full`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-card-foreground font-medium">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="https://linktr.ee/Momen_Gaber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary/90 transition duration-300 shadow-lg shadow-secondary/20 neon-button"
              >
                {t("visitLinktree")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">{t("sendMessage")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">
                  {t("name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 bg-card text-card-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <AnimatePresence>
                    {focusedField === "name" && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1">
                  {t("email")}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 bg-card text-card-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <AnimatePresence>
                    {focusedField === "email" && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">
                  {t("message")}
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card text-card-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                  <AnimatePresence>
                    {focusedField === "message" && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-secondary/90 transition duration-300 flex items-center justify-center disabled:opacity-70 shadow-lg shadow-secondary/20 neon-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    {t("sendMessageBtn")}
                    <FaPaperPlane className="ml-2" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 p-3 rounded-md flex items-center gap-2 ${
                      submitStatus.success ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {submitStatus.success ? <FaCheck /> : <FaExclamationTriangle />}
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
