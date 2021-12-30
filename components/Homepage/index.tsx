import Link from 'next/link'
import Meta from '../Layout/components/Meta'
import PlanetCard from '../shared/PlanetCard'
import HomepageProps from './Homepage'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import { BasicPlanet } from '@/lib/models/planet'
import { getPlanets } from '@/lib/services/planet.service'

const HomePage = ({ planets: initialPlanets, nextPageUrl }: HomepageProps) => {
  const [planets, setPlanets] = useState<BasicPlanet[]>(initialPlanets)
  const [next, setNext] = useState<string | null>(nextPageUrl)

  const fetchData = async () => {
    if (next) {
      const data = await getPlanets(next, planets.length)

      if (data.planets) {
        setPlanets((prevValues) => [...prevValues, ...data.planets])
      }

      setNext(data.nextPageUrl)
    }
  }

  return (
    <>
      <Meta />
      <div className="__app-container ">
        <h1
          className="text-center mb-8 font-black tracking-tight 
        text-3xl xl:text-5xl 2xl:text-6xl"
        >
          Planets
        </h1>
        <InfiniteScroll
          dataLength={planets.length}
          next={fetchData}
          hasMore={!!next}
          loader={<h4>Loading...</h4>}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 sm:gap-x-5 lg:gap-x-10 gap-y-6 lg:gap-y-10"
          >
            {planets.map((x) => (
              <Link href={`/planet/${x.id}`} key={x.id} passHref>
                <a role="link" aria-label={`${x.name} Planet`}>
                  <PlanetCard planet={x} />
                </a>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default HomePage
