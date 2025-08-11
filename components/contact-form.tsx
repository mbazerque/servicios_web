'use client'

import { useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from '@/app/actions/contact'

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setMessage(result.message)
      
      if (result.success) {
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      }
    })
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <Input 
            id="name"
            name="name" 
            placeholder="Tu nombre y apellido" 
            required 
            disabled={isPending}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input 
            id="email"
            name="email"
            type="email" 
            placeholder="tu@email.com" 
            required 
            disabled={isPending}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Asunto
        </label>
        <Input 
          id="subject"
          name="subject"
          placeholder="¿Como puedo ayudarte?" 
          required 
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje
        </label>
        <Textarea 
          id="message"
          name="message"
          placeholder="Contame sobre tu proyecto..."
          className="min-h-[120px]"
          required 
          disabled={isPending}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700" 
        disabled={isPending}
      >
        {isPending ? 'Enviando...' : 'Empezá tu proyecto ahora'}
      </Button>
      {message && (
        <div className={`mt-4 p-3 rounded-md text-sm ${
          message.includes('éxito') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {message}
        </div>
      )}
    </form>
  )
}
