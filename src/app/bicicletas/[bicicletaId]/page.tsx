import { PackageIcon, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Motion, MotionImagem } from '@/components/motion-wrapper'
import { ProductList } from '@/components/product-list'
import { Title } from '@/components/title'
import { buttonVariants } from '@/components/ui/button'
import data from '@/data/data.json'
import { cn, entries } from '@/lib/utils'
import { Bike, BikeFeatureKey } from '@/types/bikes'

import { GalleryImagens } from './_components/gallery-imagens'

export async function generateMetadata({
  params,
}: {
  params: { bicicletaId: string }
}) {
  const title = data.bikes.find(
    (bike) => bike.slug === params.bicicletaId,
  )?.name

  return {
    title,
  }
}

function getBikes(bicicletaId: string): {
  bike: Bike | undefined
  otherBikes: Bike[]
} {
  const allBikes = data.bikes
  const bike = allBikes.find((bike) => bike.slug === bicicletaId)
  const otherBikes = allBikes.filter((bike) => bike.slug !== bicicletaId)
  return { bike, otherBikes }
}

export default function BicicletaIdPage({
  params,
}: {
  params: { bicicletaId: string }
}) {
  const { bike, otherBikes } = getBikes(params.bicicletaId)
  if (!bike) {
    notFound()
  }
  return (
    <>
      <main>
        <Title title={bike.name} subTitle={`R$ ${bike.price}`} />
      </main>
      <ProductOverviews bike={bike} />
      <ProductList bikes={otherBikes} />
      <FeaturedArticle />
    </>
  )
}

const featuresDescription: Record<BikeFeatureKey, string> = {
  motor: 'Permite você viajar distâncias inimaginaveis com a sua bike.',
  speed: 'A mais rápida bicicleta elétrica disponível hoje no mercado.',
  tracker: 'Rastreador e sistema anti-furto para garantir o seu sossego.',
  material: 'Maior proteção possível para a sua Bikcraft com fibra de carbono.',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: 'easeInOut',
}
const animateRightToLeft = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition,
  },
}
const animateLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition,
  },
}
const animateDownToUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
}

const animateUptoDown = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
}

const animateScale = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      bounce: 0.4,
      duration: 0.5,
    },
  },
}

const featureIcons: Record<BikeFeatureKey, string> = {
  motor: '/icones/eletrica.svg',
  speed: '/icones/velocidade.svg',
  tracker: '/icones/rastreador.svg',
  material: '/icones/carbono.svg',
}

function ProductOverviews({ bike }: { bike: Bike }) {
  return (
    <article className="relative bg-secondary">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-40 left-10 hidden md:block"
        aria-hidden="true"
      />
      <div className="container px-6 lg:px-8">
        <div className="grid gap-8 pb-16 sm:pb-32 lg:grid-cols-2">
          <Motion
            type="div"
            variants={container}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0 }}
          >
            <h2 className="sr-only">Images</h2>
            <GalleryImagens images={bike.images} />
          </Motion>
          <div>
            <Motion
              type="p"
              variants={animateUptoDown}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
              className="text-lg text-muted-foreground sm:text-2xl"
            >
              {bike.description}
            </Motion>
            <Motion
              type="div"
              variants={animateRightToLeft}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
              className="mt-4 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <Link
                href={{
                  pathname: '/orcamento',
                  query: { tipo: 'bikcraft', produto: bike.slug },
                }}
                className={cn(
                  buttonVariants(),
                  'group gap-2 px-8 py-6 text-lg font-semibold uppercase shadow-shape',
                )}
              >
                Comprar Agora
              </Link>
              <div className="flex gap-1 sm:flex-col">
                <span className="inline-flex gap-0.5 rounded-sm bg-background px-1 py-0.5 text-xs text-muted-foreground">
                  <TruckIcon size={16} />
                  Entrega em 5 dias
                </span>
                <span className="inline-flex gap-0.5 rounded-sm bg-background px-1 py-0.5 text-xs text-muted-foreground">
                  <PackageIcon size={16} />
                  18 em estoque
                </span>
              </div>
            </Motion>
            <Motion
              type="section"
              variants={animateDownToUp}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
              className="mt-4 pt-8 sm:mt-8"
            >
              <h2 className="text-sm uppercase">Informações</h2>
              <div className="mt-4 sm:mt-8">
                <ul
                  role="list"
                  className="grid gap-4 rounded-md bg-background p-6 sm:grid-cols-2 lg:gap-8"
                >
                  {entries(bike.features).map(([feature, value]) => (
                    <li
                      key={feature}
                      className="grid gap-1 text-lg text-foreground"
                    >
                      <Image
                        src={featureIcons[feature]}
                        alt=""
                        width={24}
                        height={24}
                        className="inline-block"
                        aria-hidden="true"
                      />
                      {value}
                      <span className="text-xs text-muted-foreground">
                        {featuresDescription[feature]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion>
            <Motion
              type="section"
              variants={animateDownToUp}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
              className="mt-4 pt-8 sm:mt-8"
            >
              <h2 className="text-sm uppercase">Ficha Técnica</h2>
              <div className="mt-4 sm:mt-8">
                <ul
                  role="list"
                  className="grid gap-4 rounded-md bg-background p-6"
                >
                  {entries(bike.specs).map(([spec, value]) => (
                    <li
                      key={spec}
                      className="flex justify-between border-b text-lg text-foreground"
                    >
                      <span className="capitalize">{spec}</span>
                      <span className="text-sm text-muted-foreground">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </article>
  )
}

function FeaturedArticle() {
  return (
    <section className="lg:bg-seguro bg-seguro-2 relative">
      <Image
        width={52}
        height={52}
        src={'/dec/top-right.svg'}
        alt=""
        className="absolute right-10 top-28 hidden lg:block"
        aria-hidden="true"
      />
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-right.svg'}
        alt=""
        className="absolute bottom-28 right-10 hidden lg:block"
        aria-hidden="true"
      />
      <div className="container px-6 transition-all duration-700 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <MotionImagem
              variants={animateScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
              src="/fotos/seguros.jpg"
              alt="Pessoa sentada numa bicicleta"
              width={1200}
              height={1920}
              className="h-[300px] w-full min-w-full rounded-md object-cover object-top lg:h-full"
            />
          </div>
          <Motion
            type="div"
            variants={animateLeftToRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="order-1 py-12 md:py-16 lg:order-2 lg:py-32"
          >
            <h2 className="mt-2 text-4xl font-bold sm:text-6xl">
              Pedale mais tranquilo com o nosso
              <span className="text-primary"> seguro.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite
              diversos benefícios.
            </p>
            <Link
              href={'/seguros'}
              className={cn(
                buttonVariants(),
                'group mt-8 gap-2 px-8 py-6 text-lg font-semibold uppercase shadow-shape',
              )}
            >
              Conheça mais
            </Link>
          </Motion>
        </div>
      </div>
    </section>
  )
}
