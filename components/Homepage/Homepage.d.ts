import { BasicPlanet } from '@/lib/models/planet'

export default interface HomepageProps {
  planets: BasicPlanet[]
  nextPageUrl: string | null
}
