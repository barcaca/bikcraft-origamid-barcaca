import data from '@/data/data.json'
import { Bike } from '@/types/bikes'

export async function generateMetadata({
  params,
}: {
  params: { bicicletaId: string }
}) {
  const title = data.bikes.find(
    (bike) => bike.slug === params.bicicletaId,
  )?.name

  return {
    title,
  }
}

function getBikes(bicicletaId: string): {
  bike: Bike | undefined
  otherBikes: Bike[]
} {
  const allBikes = data.bikes
  const bike = allBikes.find((bike) => bike.slug === bicicletaId)
  const otherBikes = allBikes.filter((bike) => bike.slug !== bicicletaId)
  return { bike, otherBikes }
}

export default function BicicletaIdPage({
  params,
}: {
  params: { bicicletaId: string }
}) {
  const { bike, otherBikes } = getBikes(params.bicicletaId)
  return <div>{params.bicicletaId}</div>
}
