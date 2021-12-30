export interface BasicPlanet {
  readonly id: string
  readonly name: string
  readonly image: string
}

export interface EnhancedPlanet extends BasicPlanet {
  readonly climate: string
  readonly gravity: string
  readonly orbital_period: number
  readonly population: number
  readonly rotation_period: number
  readonly surface_water: string
  readonly terrain: string
  readonly residents?: string[]
  readonly films?: string[]
}

export interface UnhydratedEnhancedPlanet
  extends Omit<EnhancedPlanet, 'id' | 'image'> {
  readonly climate: string
  readonly gravity: string
  readonly orbital_period: number
  readonly population: number
  readonly rotation_period: number
  readonly surface_water: string
  readonly terrain: string
  readonly residents?: string[]
  readonly films?: string[]
}
