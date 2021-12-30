import HomePage from '@/components/Homepage'
import { HomepageProps } from '@/components/Homepage/types'
import { getPlanets } from '@/lib/services/planet.service'

const Home = (props: HomepageProps) => {
  return <HomePage {...props} />
}

export default Home

export async function getServerSideProps() {
  const { planets, nextPageUrl } = await getPlanets()

  return {
    props: {
      planets,
      nextPageUrl,
    },
  }
}
