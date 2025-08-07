import { Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavigationMenu } from '@/components/navigation-menu'

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Martin Bazerque</span>
        </div>
        <NavigationMenu />
        <Button className="bg-blue-600 hover:bg-blue-700">
          Cotiza tu proyecto
        </Button>
      </nav>
    </header>
  )
}
