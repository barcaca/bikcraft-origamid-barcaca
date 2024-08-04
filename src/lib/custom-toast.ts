import { toast } from 'sonner'

export type State = {
  status: 'success' | 'error' | 'info' | 'warning'
  message?: string | null
}

/**
 * Função para exibir mensagens de toast personalizadas com base no status da confirmação do pedido.
 *
 * @param data - Um objeto contendo o status e uma mensagem opcional.
 * @param data.status - O status da confirmação do pedido (código HTTP numérico).
 * @param data.message - Uma mensagem opcional a ser exibida no toast. Se não fornecida, será usada uma mensagem padrão.
 *
 * @returns {void}
 *
 * @example
 * ```typescript
 * customToast({ status: 200, message: 'Pedido confirmado com sucesso!' });
 * ```
 */
export function customToast(data: State) {
  setTimeout(() => {
    switch (data.status) {
      case 'success':
        toast.success(data.message || 'Pedido confirmado com sucesso!')
        break
      case 'error':
        toast.error(
          data.message || 'Falha na confirmação do pedido. Tente novamente.',
        )
        break
      case 'info':
        toast.info(data.message || 'Status da confirmação do pedido pendente.')
        break
      case 'warning':
        toast.warning(
          data.message ||
            'Houve um problema com a confirmação do pedido. Verifique os detalhes.',
        )
        break
      default:
        toast.error(data.message || 'Ocorreu um erro desconhecido.')
        break
    }
  }, 100)
}
