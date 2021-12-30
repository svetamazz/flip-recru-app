import { hydratePlanet } from '../helpers/planet.helpers'
import { BasicPlanet, EnhancedPlanet } from '../models/planet'

const apiURL = 'https://swapi.dev/api/planets/'

export const getAllPlanets = async (): Promise<BasicPlanet[]> => {
  try {
    const planets: EnhancedPlanet[] = []

    let tmp = null
    let nextPage = apiURL

    while (nextPage) {
      tmp = await fetch(nextPage).then((res) => res.json())

      if (tmp?.results) {
        planets.push(...tmp.results)
      }

      nextPage = tmp?.next
    }

    return planets
      .map(hydratePlanet)
      .map(({ id, image, name }) => ({ id, image, name }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export const getPlanet = async (
  planetId?: string
): Promise<EnhancedPlanet | null> => {
  try {
    if (!planetId) return null

    const data = await fetch(apiURL + planetId).then((res) => res.json())

    if (!data) return null

    return hydratePlanet(data, parseInt(planetId))
  } catch (e) {
    console.error(e)
    return null
  }
}

export default {
  getAllPlanets,
  getPlanet,
}
