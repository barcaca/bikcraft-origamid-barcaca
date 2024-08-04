'use client'

import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { TConfirmOrderSchemaData } from '@/actions/orders/confirm/schema'

import { FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { RadioGroup } from './ui/radio-group'

interface CustomFormRadioProps {
  name: keyof TConfirmOrderSchemaData
  children: ReactNode
  defaultValue?: string
}

export function CustomFormRadio({
  name,
  children,
  defaultValue,
}: CustomFormRadioProps) {
  const { control } = useFormContext<TConfirmOrderSchemaData>()
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={String(field.value)}
              className="flex flex-col space-y-1"
            >
              {children}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
