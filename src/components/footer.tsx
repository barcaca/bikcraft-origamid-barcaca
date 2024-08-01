import Image from 'next/image'
import Link from 'next/link'

import { SocialLinks } from './social-links'

const navigation = [
  { name: 'Bicicletas', href: '/bicicletas' },
  { name: 'Seguros', href: '/seguros' },
  { name: 'Contato', href: '/contato' },
  { name: 'Termos e Condições', href: '/termos' },
]

const contato = [
  { text: '+55 21 9999-9999' },
  { text: 'contato@bikcraft.com' },
  { text: 'Rua Ali Perto, 42 - Botafogo Rio de Janeiro - RJ' },
]

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-6 py-16 sm:py-20 lg:px-8">
        <div className="mb-4 flex place-content-center">
          <Image
            width={136}
            height={32}
            src={'/bikcraft.svg'}
            alt="logo escrito bikcraft"
          />
        </div>
        <nav className="mb-6">
          <ul className="columns-2 sm:flex sm:justify-center sm:space-x-10">
            {navigation.map((nav) => {
              return (
                <li key={nav.name}>
                  <Link
                    href={nav.href}
                    className="text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {nav.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <h2 className="mb-3 text-center uppercase">Contato</h2>
        <div className="mb-6 flex flex-wrap justify-center gap-x-10 text-center">
          {contato.map((item, i) => {
            return <span key={i}>{item.text}</span>
          })}
        </div>
        <div className="flex justify-center space-x-10">
          <SocialLinks color />
        </div>
        <p className="mt-6 text-center leading-5 text-muted-foreground">
          Bikcraft &copy; Alguns direitos reservados.
        </p>
      </div>
    </footer>
  )
}
