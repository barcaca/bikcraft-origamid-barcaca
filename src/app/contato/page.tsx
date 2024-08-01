import { Metadata } from 'next'
import Image from 'next/image'

import { Title } from '@/components/title'

import { Address } from './_components/address'
import { FormContact } from './_components/form-contact'

export const metadata: Metadata = {
  title: 'Contato',
}
export default function ContatoPage() {
  return (
    <>
      <main>
        <Title title="nosso contato" subTitle="respostas em até 24h" />
      </main>
      <ContatctSection />
    </>
  )
}
function ContatctSection() {
  return (
    <section className="bg-gradient-to-b from-secondary from-50% to-foreground to-50% py-16 sm:py-24">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 rounded-md shadow-shape lg:grid-cols-3">
          <div className="relative rounded-t-md bg-background px-6 py-16 lg:rounded-l-md lg:px-8">
            <Image
              width={52}
              height={52}
              src={'/dec/bottom-left.svg'}
              alt=""
              className="absolute bottom-8 left-10 hidden md:block"
              aria-hidden="true"
            />
            <Address />
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  )
}
