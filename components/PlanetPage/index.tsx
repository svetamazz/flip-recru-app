import Meta from '../Layout/components/Meta'
import PlanetCard from '../shared/PlanetCard'
import PlanetBreadcrumbs from './components/PlanetBreadcrumbs'
import PlanetDetails from './components/PlanetDetails'
import { PlanetPageProps } from './types'

const PlanetPage = ({ planet }: PlanetPageProps) => {
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
