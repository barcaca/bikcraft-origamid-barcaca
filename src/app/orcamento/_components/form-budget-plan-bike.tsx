import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

import { featureIcons } from '@/app/bicicletas/page'
import { CustomFormRadio } from '@/components/custom-form-radio'
import { tiers } from '@/components/tier-card'
import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { entries } from '@/lib/utils'
import { Bike } from '@/types/bikes'

import { SearchParams } from '../page'

interface FormBudgetPlanBikeProps extends SearchParams {
  bikes: Bike[]
}

export function FormBudgetPlanBike({
  bikes,
  tipo,
  produto,
}: FormBudgetPlanBikeProps) {
  return (
    <div className="relative rounded-t-md bg-background px-6 py-16 lg:rounded-l-md lg:px-8">
      <Image
        width={52}
        height={52}
        src={'/dec/bottom-left.svg'}
        alt=""
        className="absolute bottom-8 left-10 hidden md:block"
        aria-hidden="true"
      />
      <div>
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="mr-2 inline-block h-3 w-2 bg-yellow-500" />
            <h3 className="uppercase">bikcraft ou seguro?</h3>
          </div>
          <Tabs defaultValue={tipo || 'bikcraft'}>
            <TabsList className="mb-10 w-full gap-5 bg-transparent px-5">
              <TabsTrigger value="bikcraft" className="w-full p-4">
                Bikcraft
              </TabsTrigger>
              <TabsTrigger value="seguro" className="w-full p-4">
                Seguro
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bikcraft">
              <div className="mb-5 flex items-center gap-2">
                <span className="mr-2 inline-block h-3 w-2 bg-yellow-500" />
                <h3 className="uppercase">Escolha a sua:</h3>
              </div>
              <CustomFormRadio name="produto" defaultValue={produto}>
                {bikes.map((bike) => {
                  return (
                    <FormItem
                      key={bike.id}
                      className="relative grid grid-cols-[min-content_1fr] items-center gap-2 space-y-0 rounded-md bg-secondary p-4 transition-all duration-500 ease-in-out has-[:checked]:bg-foreground has-[:checked]:text-background"
                    >
                      <FormControl>
                        <RadioGroupItem value={bike.slug} className="peer" />
                      </FormControl>
                      <FormLabel className="!m-0 text-base font-semibold">
                        {bike.name}
                      </FormLabel>
                      <span className="absolute right-4 top-4 hidden font-semibold peer-aria-checked:block">
                        R$ {bike.price}
                      </span>
                      <div className="col-span-2 hidden gap-y-2 px-2 peer-aria-checked:grid xs:grid-cols-2">
                        <ul className="grid h-full gap-2 text-xs">
                          {entries(bike.features).map(([feature, value]) => {
                            return (
                              <li
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <Image
                                  src={featureIcons[feature]}
                                  alt=""
                                  width={16}
                                  height={16}
                                  aria-hidden="true"
                                />
                                <span>{value}</span>
                              </li>
                            )
                          })}
                        </ul>
                        <div>
                          <Image
                            width={300}
                            height={150}
                            src={`/bicicletas/${bike.slug}.jpg`}
                            alt=""
                            className="h-[150px] w-full rounded-md object-cover md:h-full"
                          />
                        </div>
                      </div>
                    </FormItem>
                  )
                })}
              </CustomFormRadio>
            </TabsContent>
            <TabsContent value="seguro">
              <div className="mb-5 flex items-center gap-2">
                <span className="mr-2 inline-block h-3 w-2 bg-yellow-500" />
                <h3 className="uppercase">Escolha seu plano:</h3>
              </div>
              <CustomFormRadio name="produto" defaultValue={produto}>
                {tiers.map((tier) => {
                  return (
                    <FormItem
                      key={tier.id}
                      className="relative grid grid-cols-[min-content_1fr] items-center gap-2 space-y-0 rounded-md bg-secondary p-4 transition-all duration-500 ease-in-out has-[:checked]:bg-foreground has-[:checked]:text-background"
                    >
                      <FormControl>
                        <RadioGroupItem value={tier.name} className="peer" />
                      </FormControl>
                      <FormLabel className="!m-0 text-base font-semibold">
                        {tier.name}
                      </FormLabel>
                      <span className="absolute right-4 top-4 hidden font-semibold peer-aria-checked:block">
                        R$ {tier.price}
                      </span>
                      <div className="col-span-2 hidden gap-y-2 px-2 peer-aria-checked:grid xs:grid-cols-2">
                        <ul className="grid h-full gap-2 text-xs">
                          {tier.features.map((feature) => {
                            return (
                              <li
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <CheckIcon
                                  className={`${tier.featured ? 'text-primary' : 'text-primary/80'} h-6 w-5 flex-none`}
                                  aria-hidden="true"
                                />
                                {feature}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </FormItem>
                  )
                })}
              </CustomFormRadio>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
