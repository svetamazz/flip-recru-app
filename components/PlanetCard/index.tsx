import Image from 'next/image'
import { BasicPlanet } from '@/lib/models/planet'

interface IProps {
  planet: BasicPlanet
  hideTitle?: boolean
}

const PlanetCard = ({ planet, hideTitle = false }: IProps) => {
  return (
    <div
      className="rounded overflow-hidden transform hover:scale-105 
      transition-transform duration-200"
    >
      <Image
        src={planet.image}
        layout="responsive"
        width="300px"
        height="300px"
        alt="planet image"
      ></Image>
      {!hideTitle && (
        <p className="text-base sm:text-lg font-medium bg-gray-200 bg-opacity-50 p-3 mt-2">
          {planet.name}
        </p>
      )}
    </div>
  )
}

export default PlanetCard
