import { Building2Icon, MailsIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

import { Motion } from '@/components/motion-wrapper'
import { SocialLinks } from '@/components/social-links'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const emails = ['contato@bikcraft.com', 'vendas@bikcraft.com']

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
}

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: 'easeInOut',
}

const animateDownToUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
}
const transitionHeading = {
  duration: 0.8,
  ease: 'easeInOut',
}
const animateHeading = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionHeading,
  },
}
export function Address() {
  return (
    <address>
      <Motion
        type="h2"
        variants={animateHeading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-xl"
      >
        Loja Online
      </Motion>
      <Motion
        type="dl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="mt-10 space-y-8"
      >
        <Motion type="div" variants={item} className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Endereço</span>
            <Building2Icon
              size={24}
              className="text-primary"
              aria-hidden="true"
            />
          </dt>
          <dd className="text-sm text-muted-foreground">
            Rua Ali Perto, 35
            <br />
            Rio de Janeiro - RJ
            <br />
            Brasil - Terra - Vita Láctea
          </dd>
        </Motion>
        <Motion type="div" variants={item} className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Email</span>
            <MailsIcon size={24} className="text-primary" aria-hidden="true" />
          </dt>
          <dd className="flex flex-col gap-1">
            {emails.map((email, i) => {
              return (
                <Link
                  key={i}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'h-min p-0 text-muted-foreground',
                  )}
                  href={`mailto:${email}`}
                >
                  {email}
                </Link>
              )
            })}
          </dd>
        </Motion>
        <Motion type="div" variants={item} className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Telefone</span>
            <PhoneIcon size={24} className="text-primary" aria-hidden="true" />
          </dt>
          <dd>
            <Link
              className={cn(
                buttonVariants({ variant: 'link' }),
                'h-min p-0 text-muted-foreground',
              )}
              href="tel:+55 (21) 9999-9999"
            >
              +55 21 9999-9999
            </Link>
          </dd>
        </Motion>
      </Motion>
      <Motion
        type="div"
        variants={animateDownToUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="ml-4 mt-16 flex space-x-10"
      >
        <SocialLinks color />
      </Motion>
    </address>
  )
}
