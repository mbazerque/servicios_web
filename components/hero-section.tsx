"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-21 md:py-20 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              <span className="text-black">Sitios web </span>
              <span className="text-black">
                que impulsan tu{" "}
                <br></br><span className="text-[#0066ff]">
                  <Typewriter
                    words={["negocio", "marca", "presencia", "empresa", "tienda"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Creamos sitios web modernos, rápidos y optimizados para que cada visita se convierta en un cliente.
              Desde landing pages hasta aplicaciones web complejas.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#contacto">
                Charlemos!
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#proyectos">Ver proyectos</a>
            </Button>
          </div>
        </div>

        {/* Imagen */}
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
  );
}
