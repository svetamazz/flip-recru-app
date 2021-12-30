import type { GetStaticPropsContext } from 'next'
import { getPlanet } from '@/lib/services/planet.service'
import PlanetPage from '@/components/PlanetPage'
import { PlanetPageProps } from '@/components/PlanetPage/PlanetPage'

const Planet = (props: PlanetPageProps) => {
  return <PlanetPage {...props} />
}

export default Planet

export async function getServerSideProps(context: GetStaticPropsContext) {
  const planetId = context.params?.id?.toString()
  const planet = await getPlanet(planetId)

  if (!planet) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      planet,
    },
  }
}
