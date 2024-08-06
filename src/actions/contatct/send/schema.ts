import { z } from 'zod'
const FormSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  phone: z
    .string({ required_error: 'Telefone é obrigatório' })
    .min(1, 'Mínimo 1 caractere'),
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Email inválido'),
  message: z
    .string({ required_error: 'Mensagem é obrigatória' })
    .min(1, 'Mínimo 1 caractere'),
})

export const ContactSchema = FormSchema

export type TContactSchemaData = z.infer<typeof ContactSchema>
