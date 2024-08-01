import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface CustomFormFieldProps {
  name: string
  label: string
  placeholder?: string
  isTextArea?: boolean
  type?: string
}

export function CustomFormField({
  name,
  label,
  placeholder,
  isTextArea,
  type = 'text',
}: CustomFormFieldProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-background">{label}</FormLabel>
          <FormControl>
            {isTextArea ? (
              <Textarea placeholder={placeholder} {...field} rows={10} />
            ) : (
              <Input
                type={type}
                className="bg-foreground"
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
