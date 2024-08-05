import { Metadata } from 'next'
import Image from 'next/image'

import { Motion } from '@/components/motion-wrapper'
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

      <CardAddress />
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

const address = [
  {
    name: 'Rio de Janeiro',
    local: ['Rua Ali Perto, 25', 'Rio de Janeiro - RJ'],
    contact: ['rio@bikcraft.com', '21 9999-9999'],
    src: '/lojas/rj.jpg',
  },
  {
    name: 'São Paulo',
    local: ['Rua Ali Perto, 25', 'São Paulo - SP'],
    contact: ['sp@bikcraft.com', '21 9999-9999'],
    src: '/lojas/sp.jpg',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.2 },
  show: { opacity: 1, scale: 1 },
}

function CardAddress() {
  return (
    <article className="bg-foreground py-16 text-background lg:py-32">
      <div className="container px-6 sm:px-8">
        <Motion
          type="div"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 sm:gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {address.map((info) => (
            <Motion
              type="div"
              variants={item}
              key={info.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-shape"
              aria-labelledby={`address-title-${info.name}`}
            >
              <div className="sm:h-96">
                <Image
                  width={1120}
                  height={520}
                  src={info.src}
                  alt={`Mapa marcando o endereço em ${info.local[0]} , ${info.local[1]}`}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-8 p-4 lg:p-8">
                <div className="flex items-center gap-2">
                  <span className="mr-2 inline-block h-2 w-3 bg-yellow-500" />
                  <h2 className="text-xl lg:text-3xl">{info.name}</h2>
                </div>
                <div className="grid gap-2 xs:grid-cols-2">
                  <div className="border-l border-border pl-4 sm:ml-6">
                    {info.local.map((item, i) => {
                      return <p key={i}>{item}</p>
                    })}
                  </div>
                  <div className="border-l border-border pl-4 sm:ml-6">
                    {info.contact.map((item, i) => {
                      return <p key={i}>{item}</p>
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    width={20}
                    height={20}
                    src={'/icones/horario.svg'}
                    alt=""
                    aria-hidden="true"
                  />
                  <p className="text-base font-semibold">08-18h de seg à dom</p>
                </div>
              </div>
            </Motion>
          ))}
        </Motion>
      </div>
    </article>
  )
}
