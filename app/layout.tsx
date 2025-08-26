import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BZQ Studio',
  description: 'Desarrollo sitios web modernos, rápidos y optimizados que impulsan tu negocio. Especialista en React, Next.js y aplicaciones web.',
  keywords: ['desarrollador web', 'sitios web', 'aplicaciones web', 'React', 'Next.js', 'desarrollo frontend'],
  authors: [{ name: 'DevWeb Pro' }],
  creator: 'DevWeb Pro',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '',
    title: 'BZQ Studio',
    description: 'Desarrollo sitios web modernos, rápidos y optimizados que impulsan tu negocio.',
    siteName: 'BZQ Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BZQ Studio',
    description: 'Desarrollo sitios web modernos, rápidos y optimizados que impulsan tu negocio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
