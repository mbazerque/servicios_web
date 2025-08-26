import { Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavigationMenu } from '@/components/navigation-menu'

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">BZQ Studio</span>
        </div>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu />
          <Button className="bg-blue-600 hover:bg-blue-700">
            Pedí tu presupuesto
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-1">
          <Button className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-2">
            Pedí tu presupuesto
          </Button>
          <NavigationMenu />
        </div>
      </nav>
    </header>
  )
}
