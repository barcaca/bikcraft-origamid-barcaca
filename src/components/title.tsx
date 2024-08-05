import Image from 'next/image'

import { Motion } from './motion-wrapper'

interface TitleProps {
  subTitle?: string
  title: string
}

const transitionHeading = {
  duration: 0.8,
  ease: 'easeInOut',
}
const animateHeading = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionHeading,
  },
}
const animateSub = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionHeading,
  },
}

export function Title({ title, subTitle }: TitleProps) {
  return (
    <header className="bg-secondary py-14 text-secondary-foreground">
      <div className="container relative">
        <Image
          width={52}
          height={52}
          src={'/dec/top-right.svg'}
          alt=""
          className="absolute bottom-1/2 right-8 hidden translate-y-1/2 md:block"
          aria-hidden="true"
        />
        {subTitle && (
          <Motion
            type="span"
            variants={animateSub}
            initial={'hidden'}
            animate={'show'}
            className="mb-5 uppercase text-muted-foreground"
          >
            {subTitle}
          </Motion>
        )}
        <Motion
          type="h2"
          variants={animateHeading}
          initial={'hidden'}
          animate={'show'}
          className="mb-4 text-4xl font-semibold md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl"
        >
          {title}
          <span className="text-yellow-500">.</span>
        </Motion>
      </div>
    </header>
  )
}
