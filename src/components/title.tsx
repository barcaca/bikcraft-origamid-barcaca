import Image from 'next/image'

interface TitleProps {
  subTitle?: string
  title: string
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
          <span className="mb-5 uppercase text-muted-foreground">
            {subTitle}
          </span>
        )}
        <h2 className="mb-4 text-4xl font-semibold md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl">
          {title}
          <span className="text-yellow-500">.</span>
        </h2>
      </div>
    </header>
  )
}
