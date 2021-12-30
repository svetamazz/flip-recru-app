import { EnhancedPlanet } from '../models/planet'

export function hydratePlanet(
  x: Omit<EnhancedPlanet, 'id' | 'image'>,
  idx: number
) {
  return {
    ...x,
    id: (idx + 1).toString(),
    image: `/assets/planet-${(idx + 1) % 2 ? '1' : '2'}.jpeg`,
  }
}
