import { BasicPlanet } from '@/lib/models/planet'
import { getPlanets } from '@/lib/services/planet.service'
import { useCallback, useState } from 'react'
import { HomepageProps } from './types'

export default function useHomePage({
  planets: initialPlanets,
  nextPageUrl,
}: HomepageProps) {
  const [planets, setPlanets] = useState<BasicPlanet[]>(initialPlanets)
  const [next, setNext] = useState<string | null>(nextPageUrl)

  const fetchData = useCallback(async () => {
    if (next) {
      const data = await getPlanets(next, planets.length)

      if (data.planets) {
        setPlanets((prevValues) => [...prevValues, ...data.planets])
      }

      setNext(data.nextPageUrl)
    }
  }, [planets, next])

  return { planets, fetchData, hasMore: !!next }
}
