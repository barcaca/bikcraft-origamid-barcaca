'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { sendContactAction } from '@/actions/contatct/send'
import {
  ContactSchema,
  TContactSchemaData,
} from '@/actions/contatct/send/schema'
import { CustomFormField } from '@/components/custom-form-field'
import { Motion } from '@/components/motion-wrapper'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { customToast } from '@/lib/custom-toast'

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

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: 'easeInOut',
}

const animateDownToUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
}

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export function FormContact() {
  const [isPending, startTransition] = useTransition()
  const form = useForm<TContactSchemaData>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  })

  async function onSendMessage(formData: TContactSchemaData) {
    startTransition(() => {
      sendContactAction(formData)
        .then((data) => {
          customToast(data)
        })
        .then(() => {
          form.reset(defaultValues)
        })
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSendMessage)}
        className="relative col-span-2 rounded-b-md bg-foreground px-6 py-16 lg:rounded-r-md lg:px-8"
      >
        <Image
          width={52}
          height={52}
          src={'/dec/bottom-right.svg'}
          alt=""
          className="absolute bottom-8 right-10 hidden md:block"
          aria-hidden="true"
        />
        <div className="lg:px-16">
          <Motion
            type="div"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            <Motion type="div" variants={item}>
              <CustomFormField
                name="name"
                placeholder="Seu Nome"
                label="Nome"
              />
            </Motion>
            <Motion type="div" variants={item}>
              <CustomFormField
                name="phone"
                placeholder="(21) 99999-9999"
                label="Telefone"
                mask="tel"
              />
            </Motion>
            <Motion type="div" variants={item} className="sm:col-span-2">
              <CustomFormField
                type="email"
                name="email"
                placeholder="contato@email.com"
                label="Email"
              />
            </Motion>
            <Motion type="div" variants={item} className="sm:col-span-2">
              <CustomFormField
                name="message"
                placeholder="O que você precisa?"
                label="Messagem"
                isTextArea
              />
            </Motion>
          </Motion>
          <Motion
            type="div"
            variants={animateDownToUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="mt-8 flex justify-start"
          >
            <Button
              type="submit"
              disabled={isPending}
              className="mt-5 px-8 py-6 text-lg font-semibold uppercase shadow-shape"
            >
              Enviar Mensagem
            </Button>
          </Motion>
        </div>
      </form>
    </Form>
  )
}
