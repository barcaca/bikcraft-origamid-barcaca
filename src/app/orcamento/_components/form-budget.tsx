'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { confirmOrderAction } from '@/actions/orders/confirm'
import {
  ConfirmOrderSchema,
  TConfirmOrderSchemaData,
} from '@/actions/orders/confirm/schema'
import { Form } from '@/components/ui/form'
import { customToast } from '@/lib/custom-toast'

import { FormBudgetAddress } from './form-budget-address'

interface FormBudgetProps {
  children: ReactNode
  produto?: string
}

export function FormBudget({ children, produto }: FormBudgetProps) {
  const [isPending, startTransition] = useTransition()

  const defaultValues = {
    produto,
  }
  const form = useForm<TConfirmOrderSchemaData>({
    resolver: zodResolver(ConfirmOrderSchema),
    defaultValues,
  })

  async function onConfirmOrders(formData: TConfirmOrderSchemaData) {
    startTransition(() => {
      confirmOrderAction(formData).then((data) => {
        customToast(data)
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onConfirmOrders)}
        className="grid grid-cols-1 rounded-md shadow-shape lg:grid-cols-3"
      >
        {children}
        <FormBudgetAddress onPending={isPending} />
      </form>
    </Form>
  )
}
