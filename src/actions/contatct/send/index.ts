'use server'
import { State } from '@/lib/custom-toast'

import { ContactSchema, TContactSchemaData } from './schema'

export async function sendContactAction(
  formData: TContactSchemaData,
): Promise<State> {
  const validationFileds = ContactSchema.safeParse(formData)
  if (!validationFileds.success) {
    return { message: 'Formulário inválido.', status: 'warning' }
  }

  try {
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(validationFileds.data),
    // })

    const response = { ok: true }
    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem.')
    }

    return {
      status: 'success',
      message: 'Mensagem enviada com sucesso!',
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
    }
  }
}
