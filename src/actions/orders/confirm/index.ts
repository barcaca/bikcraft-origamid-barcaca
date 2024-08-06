'use server'

import { State } from '@/lib/custom-toast'

import { ConfirmOrderSchema, TConfirmOrderSchemaData } from './schema'

/**
 * Função assíncrona para processar a confirmação do pedido.
 *
 * @param formData - Os dados do formulário para a confirmação do pedido.
 * @returns Um objeto com o status e uma mensagem opcional.
 */
export async function confirmOrderAction(
  formData: TConfirmOrderSchemaData,
): Promise<State> {
  const validationFileds = ConfirmOrderSchema.safeParse(formData)
  if (!validationFileds.success) {
    return { message: 'Formulário inválido.', status: 'warning' }
  }

  try {
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // const response = await fetch('/api/confirm-order', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(validationFileds.data),
    // })

    // const result = await response.json()
    const response = { ok: true }

    if (!response.ok) {
      // Se a resposta não for bem-sucedida, lance um erro
      throw new Error('Erro desconhecido.')
    }
    // Retorna o estado com base no sucesso ou falha

    return {
      status: 'success',
      message: 'Pedido confirmado com sucesso!',
    }
  } catch (error) {
    // Retorna um erro genérico em caso de exceção
    return {
      status: 'error',
      message:
        'Ocorreu um erro ao confirmar o pedido. Tente novamente mais tarde.',
    }
  }
}
