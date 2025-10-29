import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="px-4 md:px-16 xl:px-0 max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; 2025 Developed by BZ Tech.
          </p>

          {/* Iconos */}
          <div className="flex space-x-4 md:space-x-6 text-xl">
            <a href="https://www.linkedin.com/in/mbazerque/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="https://wa.me/2916462233" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle />
            </a>
            <a href="mailto:bazerquemartin@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
