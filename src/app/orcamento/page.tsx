import { Metadata } from 'next'

import { Title } from '@/components/title'
import data from '@/data/data.json'
import { Bike } from '@/types/bikes'

import { FormBudget } from './_components/form-budget'
import { FormBudgetPlanBike } from './_components/form-budget-plan-bike'

export const metadata: Metadata = {
  title: 'Orcamento',
}
export default function OrcamentoPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tipo =
    typeof searchParams.tipo === 'string' ? searchParams.tipo : undefined
  const produto =
    typeof searchParams.produto === 'string' ? searchParams.produto : undefined
  return (
    <>
      <main>
        <Title title="solicite um orçamento" subTitle="COTAÇÕES NO SEU EMAIL" />
      </main>
      <BudgetSection tipo={tipo} produto={produto} />
    </>
  )
}

export interface SearchParams {
  tipo?: string
  produto?: string
}

function BudgetSection({ tipo, produto }: SearchParams) {
  const bikes: Bike[] = data.bikes
  return (
    <section className="bg-gradient-to-b from-secondary from-50% to-foreground to-50% py-16 sm:py-24">
      <div className="container px-6 lg:px-8">
        <FormBudget produto={produto}>
          <FormBudgetPlanBike bikes={bikes} tipo={tipo} produto={produto} />
        </FormBudget>
      </div>
    </section>
  )
}
