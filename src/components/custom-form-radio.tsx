'use client'

import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { RadioGroup } from './ui/radio-group'

interface CustomFormRadioProps {
  name: string
  children: ReactNode
}

export function CustomFormRadio({ name, children }: CustomFormRadioProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
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
