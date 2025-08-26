import { Suspense } from 'react'
import { ArrowRight, Code, Globe, Smartphone, Zap, CheckCircle, Star, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { LoadingSpinner } from '@/components/loading-spinner'
import { submitContactForm } from '@/app/actions/contact'
import { PlansSection } from '@/components/plans-section'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main>
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
