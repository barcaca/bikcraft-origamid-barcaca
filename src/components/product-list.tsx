import Image from 'next/image'
import Link from 'next/link'

import { Bike } from '@/types/bikes'

import { Motion } from './motion-wrapper'

const transitionHeading = {
  duration: 0.8,
  ease: 'easeInOut',
}

const animateHeading = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionHeading,
  },
}

const variants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

export function ProductList({ bikes }: { bikes: Bike[] }) {
  const bikeLength = bikes.length
  return (
    <article className="bg-foreground py-16 text-background sm:py-32">
      <div className="lg:px-8">
        <header className="container mb-10 px-4 sm:px-6 lg:px-8">
          <Motion
            type="h2"
            variants={animateHeading}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0 }}
            className="text-4xl font-bold sm:text-6xl"
          >
            escolha a sua<span className="text-primary">.</span>
          </Motion>
        </header>
        <ul
          role="list"
          className={`${bikeLength <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} container flex gap-8 overflow-x-auto pb-6 lg:grid`}
        >
          {bikes.map((bike, i) => (
            <Motion
              type="li"
              variants={variants}
              initial="hidden"
              whileInView="show"
              transition={{
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
                delay: 0.25 * i,
              }}
              viewport={{ once: true, amount: 0 }}
              key={bike.id}
              className="inline-flex w-auto min-w-72 flex-col"
            >
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                  <Image
                    width={1120}
                    height={880}
                    src={bikeLength <= 2 ? bike.images[0] : bike.image}
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
            </Motion>
          ))}
        </ul>
      </div>
    </article>
  )
}
