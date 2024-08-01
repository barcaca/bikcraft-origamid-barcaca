import { Building2Icon, MailsIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

import { SocialLinks } from '@/components/social-links'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const emails = ['contato@bikcraft.com', 'vendas@bikcraft.com']

export function Address() {
  return (
    <address>
      <h2 className="text-xl">Loja Online</h2>
      <dl className="mt-10 space-y-8">
        <div className="flex gap-x-4">
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
        </div>
        <div className="flex gap-x-4">
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
        </div>
        <div className="flex gap-x-4">
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
        </div>
      </dl>
      <div className="ml-4 mt-16 flex space-x-10">
        <SocialLinks color />
      </div>
    </address>
  )
}
