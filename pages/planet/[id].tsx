import type { GetStaticPropsContext, NextPage } from 'next'
import { BasicPlanet, EnhancedPlanet } from '../../lib/models/planet'
import { getAllPlanets, getPlanet } from '../../lib/services/planet.service'
import PlanetBreadcrumbs from '../../components/PlanetBreadcrumbs'
import Meta from '../../components/Layout/components/Meta'
import PlanetCard from '../../components/PlanetCard'
import PlanetDetails from '../../components/PlanetDetails'

interface IProps {
  planet: EnhancedPlanet
}

const PlanetPage: NextPage<IProps> = ({ planet }) => {
  return (
    <>
      <Meta
        ogType="article"
        title={planet.name + ' - Star Wars Planets 🚀'}
        image={process.env.NEXT_PUBLIC_WEBSITE_URL + planet.image.substring(1)}
      />
      <div className="__app-container">
        <PlanetBreadcrumbs planetName={planet.name} />

        <div
          className="flex flex-wrap sm:flex-nowrap mt-8 sm:mt-10 lg:mt-14 justify-center 
          sm:justify-start text-center sm:text-left"
        >
          <div className="max-w-[320px] w-full">
            <PlanetCard hideTitle={true} planet={planet} />
          </div>
          <PlanetDetails planet={planet}></PlanetDetails>
        </div>
      </div>
    </>
  )
}

export default PlanetPage

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
