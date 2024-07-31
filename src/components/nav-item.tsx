'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Bicicletas', href: '/bicicletas' },
  { name: 'Seguros', href: '/seguros' },
  { name: 'Contato', href: '/contato' },
]
export function NavItem() {
  const pathname = usePathname()

  return navigation.map((nav) => {
    return (
      <li key={nav.name}>
        <Link
          href={nav.href}
          className={`${pathname === nav.href ? 'text-primary after:w-full' : 'text-muted-foreground hover:text-foreground'} relative py-4 text-lg leading-7 after:absolute after:bottom-1 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
        >
          {nav.name}
        </Link>
      </li>
    )
  })
}
