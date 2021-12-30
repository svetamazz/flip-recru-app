import { hydratePlanet } from '../utils'
import {
  BasicPlanet,
  EnhancedPlanet,
  UnhydratedEnhancedPlanet,
} from '../models/planet'

const planetsURL = process.env.BASE_URL + 'planets/'

const initialPlanetsResponse = {
  planets: [],
  nextPageUrl: null,
}

export const getPlanets = async (
  nextPageUrl?: string,
  startIdx = 0
): Promise<{ planets: BasicPlanet[]; nextPageUrl: string | null }> => {
  try {
    const res = initialPlanetsResponse

    const data = await fetch(nextPageUrl ?? planetsURL).then((res) =>
      res.json()
    )

    if (data?.results) {
      res.planets = data.results
        .map((planet: UnhydratedEnhancedPlanet, idx: number) =>
          hydratePlanet(planet, idx + startIdx)
        )
        .map(({ id, image, name }: EnhancedPlanet) => ({ id, image, name }))

      res.nextPageUrl = data.next
    }

    return res
  } catch (e) {
    console.error(e)
    return initialPlanetsResponse
  }
}

export const getPlanet = async (
  planetId?: string
): Promise<EnhancedPlanet | null> => {
  try {
    if (!planetId) return null

    const data = await fetch(planetsURL + planetId).then((res) => res.json())

    if (!data || data.detail === 'Not found') return null

    return hydratePlanet(data, parseInt(planetId) - 1)
  } catch (e) {
    console.error(e)
    return null
  }
}

export default {
  getPlanets,
  getPlanet,
}
