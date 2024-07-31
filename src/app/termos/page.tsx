import { Metadata } from 'next'

import { Title } from '@/components/title'

export const metadata: Metadata = {
  title: 'Termos e Condições',
}

const termos = [
  {
    title: 'Política de Estorno',
    items: [
      'O cliente tem o direito de reembolsar o valor do pedido de até 7 dias úteis após a confirmação da entrega.',
      'O cliente não tem o direito de reembolsar o valor do pedido caso o produto seja entregue com defeito.',
      'O cliente não tem o direito de reembolsar o valor do pedido caso o produto seja entregue sem o pedido original.',
      'O cliente não tem o direito de reembolsar o valor do pedido caso o produto seja entregue com algum material substituto.',
      'O cliente não tem o direito de reembolsar o valor do pedido caso o produto seja entregue com alguma perda.',
    ],
  },
  {
    title: 'Conta do Usuário',
    items: [
      'A conta do usuário é criada com a assinatura do site.',
      'A conta do usuário é de responsabilidade exclusiva do cliente.',
      'Os dados pessoais do cliente são confidenciais.',
      'O cliente tem o direito de cancelar a conta em até 7 dias úteis.',
    ],
  },
  {
    title: 'Seguro Bikcraft',
    items: [
      'O seguro Bikcraft é gratuito para clientes com o plano Básico.',
      'O seguro Bikcraft é aplicável a pedidos de até 15 dias.',
      'O seguro Bikcraft não é aplicável a pedidos de troca.',
      'O seguro Bikcraft não é aplicável a pedidos de reembolso.',
      'O seguro Bikcraft não é aplicável a pedidos de reposição.',
      'O seguro Bikcraft é válido até o dia do pagamento.',
    ],
  },
]
export default function TermoPage() {
  return (
    <main className="bg-foreground text-background">
      <Title title="termos e condições" subTitle="termos de uso" />
      <div className="container px-6 py-16 sm:py-32 lg:px-8">
        {termos.map((term, index) => (
          <section key={index} className="mb-8">
            <h3 className="mb-8 text-2xl font-bold">
              {index + 1} . {term.title}
            </h3>
            <ul className="space-y-3 pl-6">
              {term.items.map((item, i) => (
                <li key={i} className="text-lg text-muted-foreground">
                  {index + 1}. {i + 1}. {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
