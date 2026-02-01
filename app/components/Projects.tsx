"use client"

import { useState } from "react"
import { FaGithub, FaFilter, FaStar, FaExternalLinkAlt } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import ImageGallery from "./image-gallery"
import { useLanguage } from "../providers/language-provider"

type ProjectCategory = "All" | "AI/ML" | "Web" | "Mobile" | "Data Science"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()

  const projects = [
    {
      title: "Judicial3D Sketch to Reality",
      description:
        "Transform Your Sketches into 3D Models. Our advanced AI technology converts your hand-drawn sketches into stunning 3D models in seconds. Experience the future of creative design today.",
      mainImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
          alt: "3D sketch transformation",
        },
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2942&auto=format&fit=crop",
          alt: "AI 3D modeling technology",
        },
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop",
          alt: "Creative AI design",
        },
      ],
      tags: ["3D Modeling", "Computer Vision", "Creative AI"],
      github: "https://github.com/ElmoGaber",
      demo: "https://codanweb.vercel.app/",
      category: "AI/ML",
      year: "2025",
      featured: true,
    },
    {
      title: "Topic Recognition Chatbot",
      description:
        "Advanced chatbot that recognizes and analyzes topics from user conversations using natural language processing and machine learning algorithms.",
      mainImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2940&auto=format&fit=crop",
          alt: "AI chatbot interface",
        },
        {
          url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
          alt: "Topic recognition AI",
        },
        {
          url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop",
          alt: "Natural language processing",
        },
      ],
      tags: ["NLP", "Chatbot", "Topic Analysis"],
      github: "https://github.com/ElmoGaber",
      demo: "https://topic-recognition-chatbot.vercel.app/",
      category: "AI/ML",
      year: "2025",
      featured: true,
    },
    {
      title: "Advanced Tooth X-Ray Disease Detection",
      description:
        "AI-based system for detecting dental issues from X-ray images using deep learning models like YOLOv5, YOLOv8, and Faster R-CNN for high accuracy.",
      mainImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2940&auto=format&fit=crop",
          alt: "Dental X-Ray AI analysis",
        },
        {
          url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2940&auto=format&fit=crop",
          alt: "Medical AI technology",
        },
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop",
          alt: "Deep learning model",
        },
      ],
      tags: ["Deep Learning", "Computer Vision", "Healthcare"],
      github: "https://github.com/ElmoGaber",
      demo: "https://tooth-x-ray.vercel.app/",
      category: "AI/ML",
      year: "2024",
      featured: true,
    },
    {
      title: "Skin Cancer Prediction",
      description:
        "Created a deep learning model for detecting skin cancer using CNNs, achieving a classification accuracy of 78% based on medical image datasets.",
      mainImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2898&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2898&auto=format&fit=crop",
          alt: "Medical imaging AI",
        },
        {
          url: "https://images.unsplash.com/photo-1576091160399-afdab827c52f?q=80&w=2938&auto=format&fit=crop",
          alt: "CNN architecture",
        },
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2934&auto=format&fit=crop",
          alt: "Deep learning analysis",
        },
      ],
      tags: ["Deep Learning", "Healthcare", "CNN"],
      github: "https://github.com/ElmoGaber",
      demo: "https://skin-cancer-pre.vercel.app/",
      category: "AI/ML",
      year: "2024",
      featured: false,
    },
    {
      title: "Mall Customer Segmentation",
      description:
        "Applied various clustering ML algorithms to segment mall customers and evaluated all models' performance and accuracy.",
      mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
          alt: "Data analytics dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e3b8e8?q=80&w=2940&auto=format&fit=crop",
          alt: "Customer segmentation charts",
        },
        {
          url: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2940&auto=format&fit=crop",
          alt: "Machine learning clustering",
        },
      ],
      tags: ["Clustering", "Data Analysis", "Customer Segmentation"],
      github: "https://github.com/ElmoGaber",
      demo: "https://mall-customer.vercel.app/",
      category: "Data Science",
      year: "2024",
      featured: true,
    },
    {
      title: "eCommerce Purchase Analysis",
      description:
        "Segmented customers using clustering techniques based on purchasing behavior and demographics to develop targeted marketing campaigns.",
      mainImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
          alt: "E-commerce shopping analytics",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0a6d1ea3b8e8?q=80&w=2940&auto=format&fit=crop",
          alt: "Online shopping behavior data",
        },
        {
          url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2940&auto=format&fit=crop",
          alt: "E-commerce purchase pattern analysis",
        },
      ],
      tags: ["Data Analysis", "Marketing", "Clustering"],
      github: "https://github.com/ElmoGaber",
      demo: "https://customer-segment.vercel.app/",
      category: "Data Science",
      year: "2023",
      featured: false,
    },
    {
      title: "Real-Time Object Detection",
      description:
        "Used OpenCV to create a real-time object detection model, enabling practical applications in surveillance and automation.",
      mainImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2940&auto=format&fit=crop",
          alt: "Real-time object detection in action",
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
          alt: "Computer vision detection boxes",
        },
        {
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2940&auto=format&fit=crop",
          alt: "AI surveillance technology",
        },
      ],
      tags: ["Computer Vision", "OpenCV", "Object Detection"],
      github: "https://github.com/ElmoGaber",
      demo: "https://real-time-object.vercel.app/",
      category: "AI/ML",
      year: "2023",
      featured: false,
    },
    {
      title: "Chat with Your PDF",
      description:
        "Developed an AI chatbot that extracts and interacts with text from PDF documents using OpenAI's LLM, allowing efficient document analysis.",
      mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2880&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2880&auto=format&fit=crop",
          alt: "AI chatbot interface",
        },
        {
          url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop",
          alt: "PDF document processing",
        },
        {
          url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
          alt: "Natural language processing",
        },
      ],
      tags: ["NLP", "LLM", "Document Analysis"],
      github: "https://github.com/ElmoGaber",
      demo: "https://chatwithpdfweb.vercel.app/",
      category: "AI/ML",
      year: "2023",
      featured: false,
    },
    {
      title: "Telecom Churn Predictions",
      description:
        "Applied various classification ML algorithms to predict telecom customer churn and evaluated all models' accuracy.",
      mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2789&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2789&auto=format&fit=crop",
          alt: "Predictive analytics dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
          alt: "Machine learning models",
        },
        {
          url: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2940&auto=format&fit=crop",
          alt: "Classification algorithms",
        },
      ],
      tags: ["Classification", "Predictive Modeling", "Telecom"],
      github: "https://github.com/ElmoGaber",
      demo: "https://telecom-churn-predictions.vercel.app/",
      category: "Data Science",
      year: "2023",
      featured: false,
    },
    {
      title: "Houses Price Predictions",
      description:
        "Selected the most efficient model for predicting house prices with high performance and accuracy, evaluating multiple regression models.",
      mainImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2946&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2946&auto=format&fit=crop",
          alt: "Real estate market analysis",
        },
        {
          url: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2942&auto=format&fit=crop",
          alt: "House price prediction models",
        },
        {
          url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2942&auto=format&fit=crop",
          alt: "Real estate AI analytics",
        },
      ],
      tags: ["Regression", "Predictive Modeling", "Real Estate"],
      github: "https://github.com/ElmoGaber",
      demo: "https://house-price-pre.vercel.app/",
      category: "Data Science",
      year: "2022",
      featured: false,
    },
    {
      title: "Gym Reservation Bot",
      description:
        "Developed an automatic bot using Python and Google Cloud Console with Selenium, running on a Linux virtual machine for daily gym reservations.",
      mainImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop",
        },
      ],
      tags: ["Automation", "Python", "Cloud"],
      github: "https://github.com/ElmoGaber",
      demo: "https://gym-reservation-bot.vercel.app/",
      category: "Web",
      year: "2021",
      featured: false,
    },
    {
      title: "Ticket Price Calculator App",
      description:
        "Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC with a custom UI.",
      mainImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2934&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2934&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2938&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2940&auto=format&fit=crop",
        },
      ],
      tags: ["Android", "Java", "Mobile App"],
      github: "https://github.com/ElmoGaber",
      demo: "https://ticket-price-calculator.vercel.app/",
      category: "Mobile",
      year: "2020",
      featured: false,
    },
    {
      title: "Transaction Management GUI",
      description:
        "Designed a banking transaction system using Java and JavaFX to simulate common functions like creating accounts and deposits.",
      mainImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2940&auto=format&fit=crop",
        },
      ],
      tags: ["Java", "JavaFX", "Banking"],
      github: "https://github.com/ElmoGaber",
      demo: "https://java-fx-banking-system.vercel.app/",
      category: "Web",
      year: "2020",
      featured: false,
    },
    {
      title: "Speech Recognition & Text-to-Speech",
      description:
        "Built AI systems for speech recognition and text-to-speech conversion, enhancing accessibility and automation.",
      mainImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1647195490764-93dae2a9614c?q=80&w=2940&auto=format&fit=crop",
        },
        {
          url: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2940&auto=format&fit=crop",
        },
      ],
      tags: ["Speech Recognition", "NLP", "Accessibility"],
      github: "https://github.com/ElmoGaber",
      demo: "https://speech-recogni.vercel.app/",
      category: "AI/ML",
      year: "2020",
      featured: false,
    },
    {
      title: "3D Face Reconstruction Using Generative AI",
      description:
        "Transforms 2D facial sketches and images into realistic 3D face models using generative AI and depth prediction by combining GANs and MiDaS-DPT architectures.",
      mainImage: "https://images.unsplash.com/photo-1611532736900-6ba6b5ef0ad0?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1611532736900-6ba6b5ef0ad0?q=80&w=1200&auto=format&fit=crop",
          alt: "3D face reconstruction",
        },
        {
          url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
          alt: "Face modeling AI",
        },
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
          alt: "3D generation technology",
        },
      ],
      tags: ["3D Reconstruction", "Generative AI", "Computer Vision"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "AI/ML",
      year: "2025",
      featured: true,
    },
    {
      title: "Medical RAG ChatBot",
      description:
        "Built an intelligent medical AI agent using LlamaIndex, Groq's LLaMA 3.3 7B, and HuggingFace Embeddings. The agent can answer questions about medical records and provide intelligent insights.",
      mainImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop",
          alt: "Medical AI chatbot",
        },
        {
          url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop",
          alt: "Healthcare AI system",
        },
        {
          url: "https://images.unsplash.com/photo-1631217314830-e63d3b92ad63?q=80&w=2940&auto=format&fit=crop",
          alt: "Medical data processing",
        },
      ],
      tags: ["RAG", "LLM", "Healthcare AI"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "AI/ML",
      year: "2025",
      featured: false,
    },
    {
      title: "CMATE – Virtual Try On System",
      description:
        "Built as a full-stack ready prototype with Python and image processing, enabling virtual try-on experiences with containerized deployment for e-commerce applications.",
      mainImage: "https://images.unsplash.com/photo-1552052173-512f86db6a49?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1552052173-512f86db6a49?q=80&w=1200&auto=format&fit=crop",
          alt: "Virtual try-on technology",
        },
        {
          url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
          alt: "Fashion e-commerce solution",
        },
        {
          url: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1200&auto=format&fit=crop",
          alt: "Image processing for fashion",
        },
      ],
      tags: ["Computer Vision", "Full-Stack", "E-commerce"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Web",
      year: "2024",
      featured: false,
    },
    {
      title: "Voice Text to Image Generative AI",
      description:
        "AI-powered multimodal system that generates images from voice or text input using deep learning and generative adversarial networks (GANs) for creative content generation.",
      mainImage: "https://images.unsplash.com/photo-1678957940223-4e26af6ce04a?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1678957940223-4e26af6ce04a?q=80&w=1200&auto=format&fit=crop",
          alt: "Text to image generation",
        },
        {
          url: "https://images.unsplash.com/photo-1655720406911-33d3dd18cbaf?q=80&w=1200&auto=format&fit=crop",
          alt: "AI image synthesis",
        },
        {
          url: "https://images.unsplash.com/photo-1655720828018-edd3b8e46cf5?q=80&w=1200&auto=format&fit=crop",
          alt: "Generative AI models",
        },
      ],
      tags: ["GANs", "Multimodal AI", "Image Generation"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "AI/ML",
      year: "2024",
      featured: false,
    },
    {
      title: "Employee and Countries Data API",
      description:
        "Built a web service for collecting and loading data from multiple sources, processing employee and country information and exporting as JSON files.",
      mainImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
          alt: "Data API",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e3b8e8?q=80&w=2940&auto=format&fit=crop",
          alt: "Data processing",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
          alt: "Web service architecture",
        },
      ],
      tags: ["Web Service", "Data Processing", "API"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Web",
      year: "2024",
      featured: false,
    },
    {
      title: "Recommendation System",
      description:
        "Built a book recommendation system using K-Nearest Neighbors (KNN) algorithm, providing personalized book suggestions based on user preferences and reading history.",
      mainImage: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?q=80&w=1200&auto=format&fit=crop",
          alt: "Book recommendation system",
        },
        {
          url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop",
          alt: "KNN algorithm visualization",
        },
        {
          url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
          alt: "Personalization engine",
        },
      ],
      tags: ["KNN", "Machine Learning", "Recommendation"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Data Science",
      year: "2023",
      featured: false,
    },
    {
      title: "Weather and Books Data Scraping",
      description:
        "Automated web scraping project that collects weather data and book information from multiple websites, then stores the data in CSV files and databases for analysis.",
      mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e3b8e8?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e3b8e8?q=80&w=1200&auto=format&fit=crop",
          alt: "Web scraping project",
        },
        {
          url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop",
          alt: "Data collection",
        },
        {
          url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
          alt: "Database storage",
        },
      ],
      tags: ["Web Scraping", "Data Collection", "Python"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Data Science",
      year: "2023",
      featured: false,
    },
    {
      title: "TMDB Movies Analysis",
      description:
        "Comprehensive exploratory data analysis (EDA) project on TMDB movie dataset with data visualization, preprocessing, and insights into movie trends and patterns.",
      mainImage: "https://images.unsplash.com/photo-1489599849228-13a2e0e0b923?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1489599849228-13a2e0e0b923?q=80&w=1200&auto=format&fit=crop",
          alt: "Movie analysis dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e3b8e8?q=80&w=1200&auto=format&fit=crop",
          alt: "Data visualization",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          alt: "EDA process",
        },
      ],
      tags: ["EDA", "Data Visualization", "Movies"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Data Science",
      year: "2022",
      featured: false,
    },
    {
      title: "Loan Data Preprocessing",
      description:
        "Applied comprehensive data preprocessing techniques including feature selection, data cleansing, and feature engineering on loan dataset for machine learning models.",
      mainImage: "https://images.unsplash.com/photo-1554224311-beee415c15cb?q=80&w=1200&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1554224311-beee415c15cb?q=80&w=1200&auto=format&fit=crop",
          alt: "Data preprocessing",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          alt: "Feature engineering",
        },
        {
          url: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
          alt: "Data cleaning process",
        },
      ],
      tags: ["Data Preprocessing", "Feature Engineering", "Finance"],
      github: "https://github.com/ElmoGaber",
      demo: "",
      category: "Data Science",
      year: "2023",
      featured: false,
    },
  ]

  const categories: ProjectCategory[] = ["All", "AI/ML", "Web", "Mobile", "Data Science"]
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="section-spacing section-hover bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center content-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground element-spacing">{t("projectsTitle")}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto word-spacing">{t("projectsSubtitle")}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 element-spacing"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                {category === "All" && <FaFilter />}
                {category}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                variants={item}
                className="card-hover bg-card rounded-2xl overflow-hidden border border-border relative group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold z-20 flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <FaStar size={12} />
                    Featured
                  </motion.div>
                )}

                {/* Image Gallery */}
                <div className="relative">
                  <ImageGallery mainImage={project.mainImage} mainAlt={project.title} images={project.images} />

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      {project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="https://github.com/ElmoGaber" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t("viewMoreGithub")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
