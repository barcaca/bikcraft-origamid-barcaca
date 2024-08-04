import { z } from 'zod'

const FormSchema = z.object({
  firstName: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  lastName: z
    .string({ required_error: 'Sobrenome é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  cpf: z
    .string({ required_error: 'CPF é obrigatório' })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Email inválido'),
  cep: z
    .string({ required_error: 'CEP é obrigatório' })
    .regex(/^\d{5}-\d{3}$/, 'CEP inválido'), // Considerando que o CEP deve ter exatamente 8 caracteres
  number: z
    .string({ required_error: 'Número é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  logradouro: z
    .string({ required_error: 'Logradouro é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  bairro: z
    .string({ required_error: 'Bairro é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  city: z
    .string({ required_error: 'Cidade é obrigatória' })
    .min(1, 'Mínimo 1 caractere'),
  estado: z
    .string({ required_error: 'Estado é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  mobile: z.boolean({
    required_error: 'Necessário aceitar os termos e condições',
  }),
  produto: z
    .string({ required_error: 'Selecione um produto' })
    .min(1, 'Mínimo 1 caractere'),
})

export const ConfirmOrderSchema = FormSchema

export type TConfirmOrderSchemaData = z.infer<typeof ConfirmOrderSchema>
