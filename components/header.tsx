'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navigationItems = [
  { href: '/', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#planes', label: 'Planes' },
  
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
  <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-20">
      <div className="mx-4 md:mx-16 xl:mx-auto max-w-screen-xl h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/BZQ.png"
            alt="BZQ Studio Logo"
            className="h-16 w-auto object-contain"
            style={{ maxWidth: '220px' }}
          />
        </div>

        {/* Desktop */}
  <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <a href="#contacto">Contacto</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-2">
            <a href="#contacto">Contacto</a>
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex flex-col py-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
