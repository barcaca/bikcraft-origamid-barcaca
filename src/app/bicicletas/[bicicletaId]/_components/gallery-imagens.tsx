'use client'

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Bike } from '@/types/bikes'

export function GalleryImagens({ images }: { images: Bike['images'] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function handleImageClick(index: number) {
    if (index === currentImageIndex) return
    setCurrentImageIndex(index)
  }

  function showNextImagem() {
    setCurrentImageIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImagem() {
    setCurrentImageIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  return (
    <div className="relative flex overflow-hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
      <Button
        onClick={showPrevImagem}
        variant={'ghost'}
        className="absolute left-0 z-10 block h-full hover:bg-accent/20 lg:hidden"
      >
        <ArrowLeftIcon />
      </Button>
      {images.map((image, i) => (
        <Image
          width={1120}
          height={880}
          key={i}
          src={image}
          alt={`Imagem Bicicleta ${i + 1}`}
          onClick={() => handleImageClick(i)}
          className={cn(
            i === currentImageIndex
              ? 'lg:col-span-2 lg:row-start-1'
              : 'hidden lg:block',
            'shrink-0 grow-0 cursor-pointer rounded-lg transition-all duration-700',
          )}
        />
      ))}
      <Button
        onClick={showNextImagem}
        variant={'ghost'}
        className="absolute right-0 block h-full hover:bg-accent/20 lg:hidden"
      >
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
