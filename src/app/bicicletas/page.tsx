import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Title } from '@/components/title'
import { buttonVariants } from '@/components/ui/button'
import data from '@/data/data.json'
import { cn, entries } from '@/lib/utils'
import { Bike, BikeFeatureKey } from '@/types/bikes'

export const metadata: Metadata = {
  title: 'Bicicletas',
}

export default function BicicletasPage() {
  return (
    <>
      <main>
        <Title
          title="nossas bicicletas"
          subTitle="Escolha a melhor para você"
        />
      </main>
      <ProductFeatures />
    </>
  )
}

export const featureIcons: Record<BikeFeatureKey, string> = {
  motor: '/icones/eletrica.svg',
  speed: '/icones/velocidade.svg',
  tracker: '/icones/rastreador.svg',
  material: '/icones/carbono.svg',
}

function ProductFeatures() {
  const bikes: Bike[] = data.bikes
  return (
    <article className="bg-foreground text-background">
      <div className="py-24 sm:py-32">
        {bikes.map((bike) => (
          <section
            key={bike.name}
            className="grid py-12 even:bg-gradient-to-b even:from-foreground even:from-30% even:to-background even:to-30% even:text-foreground lg:grid-cols-2 lg:items-center lg:gap-x-8 lg:py-24 lg:even:bg-gradient-to-r"
            aria-labelledby={`bike-title-${bike.slug}`}
          >
            <div className={'lg:container'}>
              <div className="relative overflow-hidden shadow-shape lg:rounded-lg">
                <Image
                  width={1120}
                  height={680}
                  src={`/bicicletas/${bike.slug}.jpg`}
                  alt={`Bicicleta Elétrica ${bike.name}`}
                  className="object-cover object-center"
                />
                <span className="absolute right-0 top-4 rounded-l-md bg-background py-2 pl-2 pr-4 text-foreground">
                  R$ {bike.price}
                </span>
              </div>
            </div>
            <div className={'mt-3 px-6 sm:mt-6 lg:mt-0 lg:pr-8'}>
              <span className="inline-block h-2 w-3 bg-yellow-500" />
              <h2
                id={`bike-title-${bike.slug}`}
                className="mt-1 text-xl sm:text-3xl"
              >
                {bike.name}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                {bike.description}
              </p>
              <div className="justify-between sm:flex">
                <ul className="mt-4 sm:mt-8">
                  {entries(bike.features).map(([feature, value]) => (
                    <li
                      key={feature}
                      className="mt-2 flex items-center gap-2 text-lg text-muted-foreground sm:mt-4"
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
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/bicicletas/${bike.slug}`}
                  className={cn(
                    buttonVariants(),
                    'group mt-5 gap-2 self-end px-8 py-6 text-lg font-semibold uppercase shadow-shape',
                  )}
                  aria-label={`Mais sobre ${bike.name}`}
                >
                  Mais Sobre
                  <ArrowRight className="transition-all group-hover:translate-x-3" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
