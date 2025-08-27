import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BZ Tech',
  description: 'Desarrollamos sitios web modernos, rápidos y optimizados...',
  keywords: ['desarrollador web', 'sitios web', 'aplicaciones web', 'React', 'Next.js'],
  authors: [{ name: 'DevWeb Pro' }],
  creator: 'DevWeb Pro',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '',
    title: 'BZ Tech',
    description: 'Desarrollamos sitios web modernos, rápidos y optimizados que impulsan tu negocio.',
    siteName: 'BZ Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BZ Tech',
    description: 'Desarrollamos sitios web modernos, rápidos y optimizados que impulsan tu negocio.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/BZQ.png',       // ícono principal
    shortcut: '/BZQ.png',   // para navegadores antiguos
    apple: '/BZQ.png', // para iOS
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Add padding-top so page content doesn't sit under the fixed header */}
      <body className={`${inter.className} pt-32 md:pt-2`}>{children}</body>
    </html>
  )
}
