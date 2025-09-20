import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThemeControls from "./components/theme-controls"
import LanguageSwitcher from "./components/language-switcher"
import AnimatedBackground from "./components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ThemeControls />
      <LanguageSwitcher />
    </div>
  )
}
