import { Code } from 'lucide-react'

const footerSections = [
  {
    title: "Servicios",
    links: [
      "Sitios Web Corporativos",
      "Aplicaciones Web", 
      "E-commerce",
      "Optimización SEO"
    ]
  },
  {
    title: "Tecnologías",
    links: [
      "Next.js",
      "Java",
      "Tailwind CSS", 
      "Java"
    ]
  },
  {
    title: "Contacto",
    links: [
      "hola@devwebpro.com",
      "+1 (555) 123-4567",
      "Ciudad de México"
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-gray-400">
      <p>&copy; 2025 Martin Bazerque.</p>
        
      </div>
    </footer>
  )
}
