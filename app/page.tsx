import { Suspense } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { LoadingSpinner } from '@/components/loading-spinner'
import { PlansSection } from '@/components/plans-section'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="px-4 md:px-16 xl:px-0 max-w-screen-xl mx-auto">
        <HeroSection />
        <ServicesSection />
        <Suspense fallback={<LoadingSpinner />}> 
          <ProjectsSection />
        </Suspense>
        <PlansSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
