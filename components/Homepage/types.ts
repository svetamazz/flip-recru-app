import { BasicPlanet } from '@/lib/models/planet'

export interface HomepageProps {
  planets: BasicPlanet[]
  nextPageUrl: string | null
}
