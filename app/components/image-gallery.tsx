"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryImage {
  url: string
  alt: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  mainImage: string
  mainAlt: string
}

export default function ImageGallery({ images, mainImage, mainAlt }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const openGallery = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeGallery = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div
        className="relative h-48 w-full cursor-pointer overflow-hidden rounded-t-lg"
        onClick={openGallery}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={mainAlt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <FaExpand className="text-white text-2xl" />
        </motion.div>

        <div className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
          +{images.length} images
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeGallery}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 text-white z-10 bg-primary/50 p-2 rounded-full hover:bg-primary"
              onClick={closeGallery}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={24} />
            </motion.button>

            <div className="relative w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[currentIndex].url || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/50 p-3 rounded-full hover:bg-primary text-white"
                onClick={prevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/50 p-3 rounded-full hover:bg-primary text-white"
                onClick={nextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-6" : "bg-white/50"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(index)
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
