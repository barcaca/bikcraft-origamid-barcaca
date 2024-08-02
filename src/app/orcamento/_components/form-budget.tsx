'use client'

import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

import { FormBudgetAddress } from './form-budget-address'

interface FormBudgetProps {
  children: ReactNode
}

export function FormBudget({ children }: FormBudgetProps) {
  const form = useForm()
  return (
    <Form {...form}>
      <form
        action="#"
        method="POST"
        className="grid grid-cols-1 rounded-md shadow-shape lg:grid-cols-3"
      >
        {children}
        <FormBudgetAddress />
      </form>
    </Form>
  )
}
