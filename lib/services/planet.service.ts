import { hydratePlanet } from '../utils'
import {
  BasicPlanet,
  EnhancedPlanet,
  UnhydratedEnhancedPlanet,
} from '../models/planet'

const planetsURL = process.env.BASE_URL + 'planets/'

export const getPlanets = async (
  nextPageUrl?: string,
  startIdx = 0
): Promise<{ planets: BasicPlanet[]; nextPageUrl: string | null }> => {
  try {
    const data = await fetch(nextPageUrl ?? planetsURL).then((res) =>
      res.json()
    )

    if (data?.results) {
      return {
        planets: data.results.map(
          (planet: UnhydratedEnhancedPlanet, idx: number) => {
            const { id, image, name } = hydratePlanet(planet, idx + startIdx)

            return { id, image, name }
          }
        ),
        nextPageUrl: data.next,
      }
    }

    return {
      planets: [],
      nextPageUrl: null,
    }
  } catch (e) {
    console.error(e)
    return {
      planets: [],
      nextPageUrl: null,
    }
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
