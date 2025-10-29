import { Globe, Smartphone, Zap, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Sitios Web Corporativos",
    description: "Sitios web profesionales que reflejan la identidad de tu empresa",
    features: ["Diseño responsive", "SEO optimizado", "Carga rápida"]
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    description: "Aplicaciones web interactivas y funcionales para tu negocio",
    features: ["React & Next.js", "Base de datos", "Autenticación"]
  },
  {
    icon: Zap,
    title: "Optimización Web",
    description: "Mejoro el rendimiento y velocidad de sitios web existentes",
    features: ["Análisis de rendimiento", "Optimización SEO", "Mejoras de velocidad"]
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cada marca es única, y tu web también debería serlo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            
            Ofrecemos soluciones completas de desarrollo web adaptadas a las necesidades de tu marca
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
