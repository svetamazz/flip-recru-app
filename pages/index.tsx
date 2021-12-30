import HomePage from '@/components/Homepage'
import HomepageProps from '@/components/Homepage/Homepage'
import { BasicPlanet } from '@/lib/models/planet'
import { getAllPlanets } from '@/lib/services/planet.service'

const Home = (props: HomepageProps) => {
  return <HomePage {...props} />
}

export default Home

export async function getStaticProps() {
  const planets: BasicPlanet[] = await getAllPlanets()

  return {
    props: {
      planets,
    },
  }
}
