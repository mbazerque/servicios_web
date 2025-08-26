"use client"

import { CheckCircle, Star, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    icon: Star,
    title: "Landing Page",
    description: "Ideal para pequeños negocios que necesitan presencia online.",
    features: ["Sitio web de 3 secciones", "Diseño responsive", "Hosting incluido"],
  },
  {
    icon: Crown,
    title: "Sistema a medida",
    description: "Para empresas que buscan funcionalidades avanzadas.",
    features: [
      "Sitio web de hasta 6 secciones",
      "Optimización SEO",
      "Integración con base de datos",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    icon: CheckCircle,
    title: "Ecommerce",
    description: "La mejor opción para vender productos en línea.",
    features: [
      "Tienda online completa",
      "Pasarela de pago integrada",
      "Gestión de productos y stock",
      "Reportes de ventas",
    ],
  },
]

export function PlansSection() {
  return (
    <section id="planes" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes de Desarrollo Web
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a las necesidades de tu negocio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow duration-300 flex flex-col ${
                  plan.highlighted ? "border-2 border-blue-600 shadow-xl scale-105" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <IconComponent
                    className={`h-12 w-12 mx-auto mb-4 ${
                      plan.highlighted ? "text-blue-600" : "text-gray-600"
                    }`}
                  />
                  <CardTitle
                    className={`text-2xl ${
                      plan.highlighted ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {plan.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Más info
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
