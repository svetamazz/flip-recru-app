import type { GetStaticPropsContext } from 'next'
import { BasicPlanet } from '@/lib/models/planet'
import { getAllPlanets, getPlanet } from '@/lib/services/planet.service'
import PlanetPage from '@/components/PlanetPage'
import { PlanetPageProps } from '@/components/PlanetPage/PlanetPage'

const Planet = (props: PlanetPageProps) => {
  return <PlanetPage {...props} />
}

export default Planet

export async function getStaticProps(context: GetStaticPropsContext) {
  const planetId = context.params?.id?.toString()
  const planet = await getPlanet(planetId)

  return {
    props: {
      planet,
    },
  }
}

export async function getStaticPaths() {
  const planets: BasicPlanet[] = await getAllPlanets()

  return {
    paths: planets.map((x) => ({ params: { id: x.id } })),
    fallback: false,
  }
}
