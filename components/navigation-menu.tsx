'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#contacto', label: 'Contacto' },
]

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Nav escritorio */}
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
      </div>

      {/* Nav mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <div className="container mx-auto px-4 py-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
