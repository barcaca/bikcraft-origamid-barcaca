import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-foreground px-6 py-24 text-background sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Lamentamos, mas não conseguimos encontrar a página que procura.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className={cn(
              buttonVariants(),
              'mt-5 px-8 py-6 text-lg font-semibold uppercase shadow-shape',
            )}
          >
            Volte para home
          </Link>
        </div>
      </div>
    </main>
  )
}
