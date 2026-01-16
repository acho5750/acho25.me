import HeroSection from '@/components/HeroSection'
import CourseworkSection from '@/components/CourseworkSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CourseworkSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}