import { Metadata } from 'next'
import Image from 'next/image'

import { TierCard } from '@/components/tier-card'
import { Title } from '@/components/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Seguros',
}

export default function SeguroPage() {
  return (
    <>
      <main className="bg-secondary">
        <Title title="você seguro" subTitle="escolha o seguro" />
      </main>
      <PricingSection />
      <FeaturedSection />
      <FaqSections />
    </>
  )
}

function PricingSection() {
  return (
    <section className="relative bg-secondary py-24 sm:py-32">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-16 left-10 hidden md:block"
        aria-hidden="true"
      />
      <div className="container px-6 lg:px-8">
        <TierCard />
      </div>
    </section>
  )
}

const features = [
  {
    name: 'Reparo Elétrico',
    description:
      'Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.',
    icon: '/icones/eletrica.svg',
  },
  {
    name: 'Reparo de Mecanico',
    description:
      'Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.',
    icon: '/icones/carbono.svg',
  },
  {
    name: 'Sustentável',
    description:
      'Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.',
    icon: '/icones/sustentavel.svg',
  },
  {
    name: 'Recuperação',
    description:
      'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.',
    icon: '/icones/rastreador.svg',
  },
  {
    name: 'Segurança',
    description:
      'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.',
    icon: '/icones/seguro.svg',
  },
  {
    name: 'Rapidez',
    description:
      'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.',
    icon: '/icones/velocidade.svg',
  },
]

function FeaturedSection() {
  return (
    <section className="relative bg-background py-24 text-foreground sm:py-32">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-10 left-10 hidden lg:block"
        aria-hidden="true"
      />
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-right.svg'}
        alt=""
        className="absolute bottom-10 right-10 hidden lg:block"
        aria-hidden="true"
      />
      <div className="container px-6 lg:px-8">
        <header>
          <h2 className="mt-2 text-4xl font-bold sm:text-6xl">
            nossas vantagens<span className="text-primary">.</span>
          </h2>
        </header>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="inline text-2xl font-semibold">
                  <Image width={24} height={24} src={feature.icon} alt="" />
                  {feature.name}
                </dt>{' '}
                <dd className="text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: 'Como funciona?',
    answer:
      'Nossa plataforma funciona de maneira simples e eficiente. Você pode explorar nossas opções de bicicletas, escolher a que melhor se adapta às suas necessidades e realizar a compra online ou em uma de nossas filiais. Para mais informações, entre em contato pelo email ou visite nossas filiais.',
  },
  {
    question: 'Como posso reparar?',
    answer:
      'Oferecemos serviços de reparo em nossas filiais. Você pode trazer sua bicicleta para uma avaliação e nossos técnicos especializados cuidarão do reparo necessário. Para mais detalhes, entre em contato pelo email ou visite uma de nossas filiais.',
  },
  {
    question: 'Como posso pagar?',
    answer:
      'Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, débito e pagamentos online. Você pode realizar o pagamento diretamente em nosso site ou em uma de nossas filiais. Para mais informações, entre em contato pelo email.',
  },
  {
    question: 'Como posso devolver?',
    answer:
      'Se precisar devolver sua bicicleta, você pode fazê-lo em uma de nossas filiais. Nossa equipe estará pronta para ajudá-lo com o processo de devolução. Para mais detalhes, entre em contato pelo email.',
  },
  {
    question: 'Qual Bikcraft devo escolher para o meu tamanho?',
    answer:
      'Nossos especialistas podem ajudá-lo a escolher a Bikcraft ideal para o seu tamanho e necessidades. Visite uma de nossas filiais para uma consulta personalizada ou entre em contato pelo email para receber orientação.',
  },
  {
    question: 'Como posso ficar sabendo das novidades?',
    answer:
      'Para ficar por dentro das últimas novidades e lançamentos, você pode se inscrever em nossa newsletter ou seguir nossas redes sociais. Também oferecemos atualizações regulares em nosso site. Para mais informações, entre em contato pelo email.',
  },
  {
    question: 'Como posso fazer uma reserva?',
    answer:
      'Você pode fazer uma reserva diretamente em nosso site ou em uma de nossas filiais. Nossa equipe estará pronta para ajudá-lo com o processo de reserva. Para mais detalhes, entre em contato pelo email.',
  },
]

function FaqSections() {
  return (
    <article className="bg-foreground py-24 text-background sm:py-32">
      <div className="container px-6 sm:px-8">
        <header>
          <h2 className="mt-2 text-4xl font-bold sm:text-6xl">
            perguntas frequentes
            <span className="text-yellow-500">.</span>
          </h2>
        </header>
        <Accordion type="multiple" className="mt-20">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-md border-none pl-10 pr-5 odd:bg-muted/5"
            >
              <AccordionTrigger className="relative text-left font-semibold before:absolute before:-left-4 before:block before:h-2 before:w-3 before:bg-yellow-500 md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  )
}
