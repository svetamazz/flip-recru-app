import Image from 'next/image'
import { BasicPlanet } from '@/lib/models/planet'

interface PlanetCardProps {
  planet: BasicPlanet
  hideTitle?: boolean
}

const PlanetCard = ({ planet, hideTitle = false }: PlanetCardProps) => {
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
        alt={planet.name}
      ></Image>
      {!hideTitle && (
        <p
          className="text-base text-black sm:text-lg font-semibold bg-white
          bg-opacity-80 p-3 mt-2"
        >
          {planet.name}
        </p>
      )}
    </div>
  )
}

export default PlanetCard
