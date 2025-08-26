import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400">
        {/* Texto centrado */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; 2025 Developed by BZQ Studio.
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
    </footer>
  );
}
