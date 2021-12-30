import { EnhancedPlanet } from '../models/planet'

export function hydratePlanet(
  x: Omit<EnhancedPlanet, 'id' | 'image'>,
  idx: number
) {
  const id = idx + 1

  return {
    ...x,
    id: id.toString(),
    image: `/assets/planet-${id % 2}.jpeg`,
  }
}
