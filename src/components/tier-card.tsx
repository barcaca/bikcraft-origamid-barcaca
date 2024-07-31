import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { buttonVariants } from './ui/button'

const tiers = [
  {
    name: 'Prata',
    id: 'tier-prata',
    price: '199',
    features: [
      'Duas trocas por ano',
      'Assistência técnica',
      'Suporte 08h às 18h',
      'Cobertura estadual',
    ],
    featured: false,
  },
  {
    name: 'Ouro',
    id: 'tier-ouro',
    price: '299',
    features: [
      'Cinco trocas por ano',
      'Assistência especial',
      'Suporte 24h',
      'Cobertura nacional',
      'Desconto em parceiros',
      'Acesso ao Clube Bikcraft',
    ],
    featured: true,
  },
]
export function TierCard() {
  return (
    <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={'w-full max-w-xl rounded-md bg-background p-8 sm:p-10'}
        >
          <div className="flex items-center justify-between">
            <h3
              className={`${tier.featured ? 'text-primary' : 'text-muted-foreground'} text-xl font-semibold uppercase md:text-3xl`}
            >
              {tier.name}
            </h3>
            <p className="flex flex-col gap-x-2 text-end text-xl font-bold tracking-tight md:text-3xl">
              R$ {tier.price}
              <span className="text-base text-muted-foreground">/mensal</span>
            </p>
          </div>
          <ul
            role="list"
            className={`mt-8 space-y-3 text-sm leading-6 sm:mt-10`}
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className={`${tier.featured ? 'text-primary' : 'text-primary/80'} h-6 w-5 flex-none`}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={'/'}
            aria-describedby={tier.id}
            className={cn(
              buttonVariants({
                variant: tier.featured ? 'default' : 'secondary',
              }),
              'mt-5 px-8 py-6 text-lg font-semibold uppercase',
            )}
          >
            Inscreva-se
          </Link>
        </div>
      ))}
    </div>
  )
}
