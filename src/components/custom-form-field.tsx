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
  mask?: 'cpf' | 'cep'
}

export function CustomFormField({
  name,
  label,
  placeholder,
  isTextArea,
  type = 'text',
  mask,
}: CustomFormFieldProps) {
  const { control, setValue } = useFormContext()
  // Função para formatar CPF
  const formatCPF = (value: string) => {
    // Remove tudo que não é dígito
    const cleaned = value.replace(/\D/g, '').slice(0, 11)
    // Adiciona a formatação
    return cleaned
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }

  // Função para formatar CEP
  const formatCEP = (value: string) => {
    // Remove tudo que não é dígito
    const cleaned = value.replace(/\D/g, '').slice(0, 8)
    // Adiciona a formatação
    return cleaned.replace(/(\d{5})(\d)/, '$1-$2')
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const newValue =
      mask === 'cep'
        ? formatCEP(value)
        : mask === 'cpf'
          ? formatCPF(value)
          : value

    setValue(name, newValue)
  }
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel className="text-background">{label}</FormLabel>
          <FormControl onChange={handleChange}>
            {isTextArea ? (
              <Textarea placeholder={placeholder} {...field} rows={10} />
            ) : (
              <Input
                type={type}
                className="bg-foreground"
                placeholder={placeholder}
                data-mask={mask}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage className="absolute -top-1 right-0" />
        </FormItem>
      )}
    />
  )
}
