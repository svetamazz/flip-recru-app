import { EnhancedPlanet, UnhydratedEnhancedPlanet } from '../models/planet'

export function hydratePlanet(
  x: UnhydratedEnhancedPlanet,
  idx: number
): EnhancedPlanet {
  const id = idx + 1

  return {
    ...x,
    id: id.toString(),
    image: `/assets/planet-${id % 2}.jpeg`,
  }
}
