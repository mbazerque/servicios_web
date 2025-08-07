import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  "5+ años de experiencia",
  "50+ proyectos completados", 
  "Soporte 24/7",
  "Garantía de calidad"
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image 
              src="/nofoto.jpg"
              alt="Desarrollador web profesional trabajando en su oficina"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Sobre Mí</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum similique quam consectetur doloremque, magnam optio debitis asperiores laboriosam cumque ipsa, sint excepturi, quisquam eos unde quis vel mollitia est!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem fugit quos, eos quo officia veritatis quam est natus praesentium quia, unde aspernatur excepturi earum qui corporis accusamus magnam vitae.
            </p>
            
            </div>
          </div>
        </div>
    </section>
  )
}
