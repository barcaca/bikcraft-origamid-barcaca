'use client'
import { motion, MotionProps } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag
  children: React.ReactNode
  className?: string | undefined | null
}

export const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = type ? (motion as any)[type] : motion.div
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export const MotionLink = motion(Link)
export const MotionImagem = motion(Image)
