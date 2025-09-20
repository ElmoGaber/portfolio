import Header from "../components/Header"
import Footer from "../components/Footer"
import ThemeControls from "../components/theme-controls"
import CVContent from "../components/cv-content"
import AnimatedBackground from "../components/animated-background"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="pt-20 relative z-10">
        <CVContent />
      </main>
      <Footer />
      <ThemeControls />
    </div>
  )
}
