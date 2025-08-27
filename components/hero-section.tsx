import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-21 md:py-20 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              LLEVÁ
              <span className="text-[#0066ff]"> TU NEGOCIO</span> AL SIGUIENTE NIVEL.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">   
              Creamos sitios web modernos, rápidos y optimizados para que cada visita se convierta en un cliente.
              Desde landing pages hasta aplicaciones web complejas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#contacto">
                Solicítá tu presupuesto gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#proyectos">Ver proyectos</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image 
            src="/BZQ.png" 
            alt="BZQ Studio"
            width={800}
            height={600}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/..."
          />
        </div>
      </div>
    </section>
  )
}
