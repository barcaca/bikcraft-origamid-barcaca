import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import data from '@/data/data.json'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductList />
      <FeatureSection />
      <LogosSection />
      <TestimonialSection />
      <PricingSection />
    </>
  )
}

function HeroSection() {
  return (
    <main className="relative bg-gradient-to-b from-background from-85% to-foreground to-15% bg-no-repeat">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-40 left-10 hidden md:block"
        aria-hidden="true"
      />
      <div className="container grid gap-x-10 px-6 py-8 transition-all duration-700 md:grid-cols-2 lg:px-8">
        <div className="mx-auto max-w-2xl self-end pb-10 sm:pb-16 md:pb-56 lg:mx-0">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Bicicletas feitas sob medida<span className="text-primary">.</span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
          </p>
          <Link
            href="/bicicletas"
            className={cn(
              buttonVariants(),
              'mt-5 px-8 py-6 text-lg font-semibold uppercase',
            )}
            aria-label="Selecione a sua bicicleta"
          >
            Selecione a sua
          </Link>
        </div>
        <div className="">
          <Image
            width={1280}
            height={1600}
            src={'/fotos/introducao.jpg'}
            alt="Bicicleta elétrica preta"
            className="h-[18.75rem] w-[40rem] min-w-full max-w-full rounded-md object-cover md:h-[50rem]"
          />
        </div>
      </div>
    </main>
  )
}

function ProductList() {
  const bikes = data.bikes
  return (
    <article className="bg-foreground py-16 text-background sm:py-32">
      <div className="py-16 sm:py-24 lg:px-8">
        <header className="container mb-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold sm:text-6xl">
            escolha a sua<span className="text-primary">.</span>
          </h2>
        </header>
        <ul
          role="list"
          className="container flex gap-8 overflow-x-auto pb-6 lg:grid lg:grid-cols-3"
        >
          {bikes.map((bike) => (
            <li key={bike.id} className="inline-flex w-auto min-w-72 flex-col">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                  <Image
                    width={1120}
                    height={880}
                    src={bike.image}
                    alt={`Imagem da bicicleta ${bike.name}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="mt-1 text-xl sm:text-3xl">
                    <span className="mr-2 inline-block h-2 w-3 bg-yellow-500 transition-all group-hover:w-8" />
                    <Link href={`/bicicletas/${bike.slug}`}>
                      <span className="absolute inset-0" />
                      {bike.name}
                    </Link>
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    R$ {bike.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

const features = [
  {
    name: 'Motor Elétrico',
    icon: '/icones/eletrica.svg',
    description:
      'Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.',
  },
  {
    name: 'Rastreador',
    icon: '/icones/rastreador.svg',
    description:
      'Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.',
  },
]
function FeatureSection() {
  return (
    <section className="lg:bg-tecnologia relative">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-28 left-10 hidden lg:block"
        aria-hidden="true"
      />
      <div className="container px-6 transition-all duration-700 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 lg:grid-cols-2">
          <div className="py-12 md:py-16 lg:py-32">
            <h2 className="text-xl font-semibold uppercase leading-7 text-muted-foreground sm:text-2xl">
              Tecnologia Avançada
            </h2>
            <p className="mt-2 text-4xl font-bold sm:text-6xl">
              você escolhe as suas cores e componentes
              <span className="text-primary">.</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <dl className="mt-10 grid gap-2 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline text-2xl font-semibold">
                    <Image width={24} height={24} src={feature.icon} alt="" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/fotos/tecnologia.jpg"
              alt="Product screenshot"
              width={1200}
              height={1920}
              className="h-[300px] w-full min-w-full rounded-md object-cover lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const logos = [
  {
    alt: 'Caravan',
    src: '/parceiros/caravan.svg',
  },
  {
    alt: 'Ranek',
    src: '/parceiros/ranek.svg',
  },
  {
    alt: 'Handel',
    src: '/parceiros/handel.svg',
  },
  {
    alt: 'Dogs',
    src: '/parceiros/dogs.svg',
  },
  {
    alt: 'Lescone',
    src: '/parceiros/lescone.svg',
  },
  {
    alt: 'Flexblog',
    src: '/parceiros/flexblog.svg',
  },
  {
    alt: 'Wildbeast',
    src: '/parceiros/wildbeast.svg',
  },
  {
    alt: 'Surfbot',
    src: '/parceiros/surfbot.svg',
  },
]

function LogosSection() {
  return (
    <section className="bg-foreground py-24 sm:py-32">
      <div className="container px-6 lg:px-8">
        <header className="pb-12 md:pb-16 lg:pb-32">
          <h2 className="mt-2 text-4xl font-bold text-background sm:text-6xl">
            nossos parceiros
            <span className="text-primary">.</span>
          </h2>
        </header>
        <div className="grid grid-cols-2 overflow-hidden md:grid-cols-4">
          {logos.map((logo) => {
            return (
              <div
                key={logo.alt}
                className="border-muted-foreground p-5 md:border-l-2 md:first:border-l-0 md:[&:nth-child(5)]:border-l-0 [&:nth-child(n+3)]:border-t-2 md:[&:nth-child(n+3)]:border-t-0 md:[&:nth-child(n+5)]:border-t-2"
              >
                <Image
                  className="max-h-14 w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-primary" aria-label="depoimento">
      <div className="grid md:grid-cols-2">
        <div>
          <Image
            width={1560}
            height={1360}
            className="h-[300px] w-full min-w-full object-cover md:h-full md:max-h-[680px]"
            src="/fotos/depoimento.jpg"
            alt="pessoa pedalando uma bicicleta bikcraft"
          />
        </div>
        <div className="relative flex w-full justify-center p-10 sm:items-end sm:justify-start sm:p-20">
          <Image
            width={52}
            height={52}
            src={'/dec/bottom-right-p.svg'}
            alt=""
            className="absolute bottom-6 right-10 hidden md:block"
            aria-hidden="true"
          />
          <figure className="pt-6 text-center sm:pt-12 sm:text-start">
            <blockquote className="text-xl font-bold leading-8 text-background sm:text-3xl sm:leading-9">
              <p className="relative max-w-[32ch] before:absolute before:-left-7 before:-top-3 before:text-7xl before:content-['“'] after:absolute after:-bottom-12 after:text-7xl after:content-['”']">
                Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
                fez foi intensificar o meu amor por esta atividade. Recomendo à
                todos que amo.
              </p>
            </blockquote>
            <figcaption className="mt-8 text-2xl">
              <div className="font-semibold text-background">Ana Júlia</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export const tiers = [
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
        <header className="pb-12 md:pb-16 lg:pb-32">
          <h2 className="mt-2 text-4xl font-bold sm:text-6xl">
            seguros<span className="text-primary">.</span>
          </h2>
        </header>
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
          {tiers.map((tier) => (
            <div
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
                  <span className="text-base text-muted-foreground">
                    /mensal
                  </span>
                </p>
              </div>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 sm:mt-10`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`${tier.featured ? 'text-primary' : 'text-primary/80'} h-6 w-5 flex-none`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={'/'}
                aria-describedby={tier.id}
                className={cn(
                  buttonVariants({
                    variant: tier.featured ? 'default' : 'secondary',
                  }),
                  'mt-5 px-8 py-6 text-lg font-semibold uppercase',
                )}
              >
                Inscreva-se
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
