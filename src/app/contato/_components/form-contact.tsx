'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { CustomFormField } from '@/components/custom-form-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export function FormContact() {
  const form = useForm()
  return (
    <Form {...form}>
      <form
        action="#"
        method="POST"
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <CustomFormField name="name" placeholder="Seu Nome" label="Nome" />
            <CustomFormField
              name="phone"
              placeholder="(21) 9999-9999"
              label="Telefone"
              type="tel"
            />
            <div className="sm:col-span-2">
              <CustomFormField
                type="email"
                name="email"
                placeholder="contato@email.com"
                label="Email"
              />
            </div>
            <div className="sm:col-span-2">
              <CustomFormField
                name="message"
                placeholder="O que você precisa?"
                label="Messagem"
                isTextArea
              />
            </div>
          </div>
          <div className="mt-8 flex justify-start">
            <Button className="mt-5 px-8 py-6 text-lg font-semibold uppercase shadow-shape">
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
