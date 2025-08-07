import { Mail, Phone, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { ContactForm } from '@/components/contact-form'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "bazerquemartin@gmail.com"
  },
  {
    icon: Phone, 
    title: "Teléfono",
    value: "+54 291-6462233"
  },
  {
    icon: MapPin,
    title: "Ubicación", 
    value: "Bahia Blanca, Argentina"
  }
]

export function ContactSection() {
  return (
    <section id="contacto" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hablemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  )
}
