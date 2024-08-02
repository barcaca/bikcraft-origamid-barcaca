import Image from 'next/image'
import Link from 'next/link'
import { useFormContext } from 'react-hook-form'

import { CustomFormField } from '@/components/custom-form-field'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const estadosBrasil = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
]

export function FormBudgetAddress() {
  const { control } = useFormContext()
  return (
    <div className="relative col-span-2 rounded-b-md bg-foreground px-6 py-16 lg:rounded-r-md lg:px-8">
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
          <div className="flex items-center gap-2 sm:col-span-2">
            <span className="mr-2 inline-block h-3 w-2 bg-yellow-500" />
            <h3 className="uppercase text-background">Dados Pessoais</h3>
          </div>
          <CustomFormField name="first-name" label="Nome" />
          <CustomFormField name="last-name" label="Sobrenome" />
          <div className="sm:col-span-2">
            <CustomFormField
              name="cpf"
              placeholder="000.000.000-00"
              label="CPF"
            />
          </div>
          <div className="sm:col-span-2">
            <CustomFormField type="email" name="email" label="Email" />
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <span className="mr-2 inline-block h-3 w-2 bg-yellow-500" />
            <h3 className="uppercase text-background">Entrega</h3>
          </div>
          <CustomFormField name="cep" label="CEP" />
          <CustomFormField name="number" label="Número" />
          <CustomFormField name="logradouro" label="Logradouro" />
          <CustomFormField name="bairro" label="Bairro" />
          <CustomFormField name="city" label="Cidade" />
          <FormField
            control={control}
            name="estado"
            render={({ field }) => (
              <FormItem className="mb-2 sm:mb-0">
                <FormLabel>Estados</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha o Estado" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {estadosBrasil.map((estado) => {
                      return (
                        <SelectItem key={estado.sigla} value={estado.sigla}>
                          {estado.nome}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="mb-2 flex items-center gap-2 sm:col-span-2 sm:mb-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="size-6"
                  />
                </FormControl>
                <FormLabel className="!m-0 text-lg text-background">
                  Li e aceito os{' '}
                  <Link href={'/termos'} className="underline">
                    termos e condições
                  </Link>
                  .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 flex justify-start">
          <Button className="mt-5 px-8 py-6 text-lg font-semibold uppercase shadow-shape">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  )
}
