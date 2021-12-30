import type { NextPage } from 'next'
import Link from 'next/link'
import PlanetCard from '../components/PlanetCard'
import { BasicPlanet } from '../lib/models/planet'
import { getAllPlanets } from '../lib/services/planet.service'

interface IProps {
  planets: BasicPlanet[]
}

const HomePage: NextPage<IProps> = ({ planets }) => {
  return (
    <div className="__app-container ">
      <h1
        className="text-center mb-8 font-black tracking-tight 
        text-3xl xl:text-5xl 2xl:text-6xl"
      >
        Planets
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 sm:gap-x-5 lg:gap-x-10 gap-y-6 lg:gap-y-10"
      >
        {planets.map((x) => (
          <Link href={`/planet/${x.id}`} key={x.name + x.id} passHref>
            <a role="link" aria-label={`${x.name} Planet`}>
              <PlanetCard planet={x} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage

export async function getStaticProps() {
  const planets: BasicPlanet[] = await getAllPlanets()

  return {
    props: {
      planets,
    },
  }
}
