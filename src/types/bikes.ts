export type BikeFeatureKey = 'motor' | 'speed' | 'tracker' | 'material'

export interface BikeFeatures {
  motor: string
  speed: string
  tracker: string
  material: string
}

export interface BikeSpecs {
  peso: string
  altura: string
  largura: string
  profundidade: string
  marchas: string
  roda: string
}

export interface Bike {
  id: number
  slug: string
  name: string
  price: number
  description: string
  image: string
  images: string[]
  features: BikeFeatures
  specs: BikeSpecs
}
export interface BikeData {
  bikes: Bike[]
}
