import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-21 md:py-20 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              Estudiante de Ingenieria en Sistemas
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Llevá    
              <span className="text-blue-600"> tu negocio</span> al siguiente nivel.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Desarrollo sitios web modernos, rápidos y optimizados que impulsan tu negocio. 
              Desde landing pages hasta aplicaciones web complejas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ver Mis Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Hablemos
            </Button>
          </div>
         
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <Image 
              src="/nofoto.jpg" 
              alt="Workspace de desarrollo web moderno con múltiples pantallas mostrando código y diseños"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  )
}
