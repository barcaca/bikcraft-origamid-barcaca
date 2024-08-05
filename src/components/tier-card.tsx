import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Tier } from '@/types/tier'

import { Motion, MotionLink } from './motion-wrapper'
import { buttonVariants } from './ui/button'

export const tiers: Tier[] = [
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
const variants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}
export function TierCard() {
  return (
    <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
      {tiers.map((tier, i) => (
        <Motion
          type="div"
          variants={variants}
          initial="hidden"
          whileInView="show"
          transition={{
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
            delay: 0.25 * i,
            delayChildren: 0.5,
          }}
          viewport={{ once: true, amount: 0 }}
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
          <Motion
            type="ul"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className={`mt-8 space-y-3 text-sm leading-6 sm:mt-10`}
          >
            {tier.features.map((feature) => (
              <Motion
                type="li"
                variants={item}
                key={feature}
                className="flex gap-x-3"
              >
                <CheckIcon
                  className={`${tier.featured ? 'text-primary' : 'text-primary/80'} h-6 w-5 flex-none`}
                  aria-hidden="true"
                />
                {feature}
              </Motion>
            ))}
          </Motion>
          <MotionLink
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href={{
              pathname: '/orcamento',
              query: { tipo: 'seguro', produto: tier.name },
            }}
            aria-describedby={tier.id}
            className={cn(
              buttonVariants({
                variant: tier.featured ? 'default' : 'secondary',
              }),
              'mt-5 px-8 py-6 text-lg font-semibold uppercase shadow-shape',
            )}
          >
            Inscreva-se
          </MotionLink>
        </Motion>
      ))}
    </div>
  )
}
