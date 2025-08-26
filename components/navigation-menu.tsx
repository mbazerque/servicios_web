'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#planes', label: 'Planes' },
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
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menú mobile */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            <div className="py-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
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
