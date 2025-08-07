'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    // Validar datos
    const validatedData = contactSchema.parse(data)

    // Enviar email con Resend
    await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>', // Cambiar si tienes dominio verificado
      to: process.env.MY_EMAIL!, // Tu email
      subject: `${validatedData.subject} - ${validatedData.name}`,
      replyTo: validatedData.email,
      html: `
        <h2>Nuevo mensaje desde tu web</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.message}</p>
      `
    })

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Te contactaré pronto.'
    }
  } catch (error) {
    console.error('Error en submitContactForm:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message
      }
    }

    return {
      success: false,
      message: 'Error al enviar el mensaje. Inténtalo de nuevo.'
    }
  }
}
