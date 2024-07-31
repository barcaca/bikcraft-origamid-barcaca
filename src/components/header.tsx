import Image from 'next/image'
import Link from 'next/link'

import { NavItem } from './nav-item'

export function Header() {
  return (
    <header className="bg-background">
      <nav className="container flex flex-col items-center justify-between gap-5 p-6 md:flex-row lg:px-8">
        <Link href={'/'}>
          <Image
            width={136}
            height={32}
            src={'/bikcraft.svg'}
            alt="logo escrito bikcraft"
          />
        </Link>
        <ul className="flex gap-x-10">
          <NavItem />
        </ul>
      </nav>
    </header>
  )
}
