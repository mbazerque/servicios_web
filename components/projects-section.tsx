import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const projects = [
  {
    title: "Dame un Mate",
    description: "E-commerce completo con carrito de compras y mercado pago integrado",
    image: "/modern-ecommerce-website.png",
    technologies: ["Next.JS", "PostgreSQL", "Checkout PRO"]
  },
  {
    title: "Taza x Taza", 
    description: "Web para recorrer todas las cafeterias de Bahia Blanca, con sus respectivas opiniones",
    image: "/restaurant-website.png",
    technologies: ["Next.JS", "Checkout PRO", "PHP"]
  },
  {
    title: "BZ Indumentaria",
    description: "Sistema de gestion de stock y ventas para tienda de indumentaria",
    image: "/corporate-business-website.png", 
    technologies: ["Java", "Springboot", "PostgreSQL"]
  }
]

export function   ProjectsSection() {

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos que he desarrollado para mis clientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={"/nofoto.jpg"}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
