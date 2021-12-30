export interface BasicPlanet {
  id: string
  name: string
  image: string
}

export interface EnhancedPlanet extends BasicPlanet {
  climate: string
  gravity: string
  orbital_period: number
  population: number
  rotation_period: number
  surface_water: string
  terrain: string
  residents: string[]
  films: string[]
}
